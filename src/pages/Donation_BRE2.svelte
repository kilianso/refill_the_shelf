<script>
    import Link from '../components/Base/Link.svelte';
    import Loader from '../components/Base/Loader.svelte';
    import Dropzone from '../components/DragDrop/Dropzone.svelte';
    import DonationWidget from '../components/Donation/DonationWidget.svelte';
    import firebase from "firebase/app";

    import {onMount} from 'svelte';
    import {locale, translations, _ } from 'svelte-intl';
    import {userLayer, storeLayerPrice, curRoute } from '../store';

    let phone = $_('do_phone'),
    toggleDisclaimer,
    checkPhone,
    retry,
    waitForConfirmation,
    visibleDonationStep = 0;

    translations.update({
        de: {
            do_title: 'Schritt 3/4 — Spende dein Regal',
            do_msg: `Aufgrund des Coronavirus brauchen viele Menschen in der Schweiz dringend deine Hilfe. <strong>Spende jetzt dein Regal (${$storeLayerPrice} CHF)</strong> per SMS an`,
            do_charity: 'Caritas Schweiz',
            do_disclaimer: 'Datenschutz',
            do_cta: 'Jetzt spenden',
            do_cta2: 'Zurück',
            do_phone: 'Deine Handynummer',
            do_waiting_title: 'Schritt 4/4 — SMS bestätigen',
            do_waiting_msg: `<strong>Antworte nun mit JA auf die SMS</strong> um deine Spende zu bestätigen.`,
            do_waiting_cta: 'Abschliessen',
            do_validation: `<strong>Einen Augenblick.</strong> In wenigen Sekunden sollten wir die Bestätigung erhalten.`,
            do_validation_pending: `<strong>Die Bestätigung ist noch ausstehend.</strong> Wir überprüfen den Status deiner Spende alle 5 Sekunden.`,
            do_validation_error: `Oh nein, etwas ist schiefgelaufen! 😔 Womöglich blockiert dein Handyanbieter die SMS-Spende. <a href="https://caritas.ch/corona" target="_blank">Trotzdem spenden</a>`,
            do_retry: 'Erneut versuchen'
        },
        en: {
            do_title: 'Step 3/4 Donate your shelf',
            do_msg: `Because of the corona virus, many people in Switzerland urgently need your help. <strong>Donate now your shelf (${$storeLayerPrice} CHF)</strong> by SMS to`,
            do_charity: 'Caritas Switzerland',
            do_disclaimer: 'Data protection',
            do_cta: 'Donate now',
            do_cta2: 'Back',
            do_phone: 'Your mobile number',
            do_waiting_title: 'Step 4/4 — Confirm SMS',
            do_waiting_msg: `<strong>Reply with YES to the SMS</strong> to confirm your donation.`,
            do_waiting_cta: 'Complete donation',
            do_validation: `<strong>One moment.</strong> In a few seconds we should receive the confirmation of your donation.`,
            do_validation_pending: `<strong>The confirmation is still pending.</strong> We check the status of your donation every 5 seconds.`,
            do_validation_error: `Oh no, something's wrong! 😔 It is possible that your mobile phone operator blocks SMS donations. <a href="https://caritas.ch/corona" target="_blank">Donate anyway.</a>`,
            do_retry: 'Retry'
        },
        fr: {
            do_title: 'Étape 3/4 - Fais don de ton étagère',
            do_msg: `En raison du coronavirus, de nombreuses personnes en Suisse ont besoin de ton aide de toute urgence. Fais don maintenant de ton étagère (${$storeLayerPrice} CHF) par SMS à`,
            do_charity: 'Caritas Suisse',
            do_disclaimer: 'Protection des données',
            do_cta: 'Faire un don',
            do_cta2: 'Retour',
            do_phone: 'Ton numéro mobile',
            do_waiting_title: 'Étape 4/4 - Confirmer le SMS',
            do_waiting_msg: `<strong>Réponds maintenant par OUI au SMS</strong> de confirmation de ton don.`,
            do_waiting_cta: 'Finaliser',
            do_validation: `<strong>Juste un moment.</strong> Dans quelques secondes, nous devrions recevoir une confirmation de ton don. `,
            do_validation_pending: `<strong>La confirmation est toujours en cours.</strong> Nous vérifions l'état de ton don toutes les 5 secondes.`,
            do_validation_error: `Oh non, quelque chose ne va pas ! 😔 Il est possible que votre opérateur de téléphonie mobile bloque les dons par SMS. <a href="https://caritas.ch/corona" target="_blank">Faites un don quand même.</a>`,
            do_retry: 'Réessayer'
        },
    });

    function raiseNow() {
        
        const raisenow = document.querySelector('.dds-widget-container');
        
        const observer = new MutationObserver((mutations) => {
            const   phoneInput = raisenow.querySelector('.bre2-page-form .bre2-input-mobile'),
                    donateBtn = raisenow.querySelector('.bre2-page-form .bre2-btn'),
                    amount = raisenow.querySelector('#caritas-ch-default-form').querySelector('input[name="amount"]');
            //update placeholder
            //console.log('mutations found!');
            phoneInput.placeholder = $_('do_phone');
            // update preset value
            amount.value = $storeLayerPrice + '00';
            //update donate button text and add eventListener for visibility change
            donateBtn.innerText = $_('do_cta');
            // show text as soon as raisenow is ready
            
            stepChanger(1);

            // init attribute observer once widget is fully loaded to listen to class changes made by the raisenow js
            donateBtn.addEventListener('click', () => {
                // wait for input validation
                checkPhone();
            });
            phoneInput.addEventListener('blur', () => {
                // this is needed to prevent an ugly glitch in instagram browser where the page is cutoff as soon as the user closes the keyboard
                window.scrollBy(0, -1);
            });
        });
        observer.observe(raisenow, {attributes: false, subtree: false, childList: true});

        checkPhone = function () {
            const   phoneError = raisenow.querySelector('.bre2-row.bre2-input-container'),
                    notificationError = raisenow.querySelector('.bre2-notification');

            setTimeout(() => {
                // i know this is ugly and unsafe... but somehow, i was not able to listen to changes here with mutationobserver 🤷‍♂️
                if(phoneError.classList.contains('error')) {
                    console.log(false, 'has error');
                    return;
                }
                
                if (window.getComputedStyle(notificationError).display === "block") {
                    console.log(false, 'notification visible');
                    return;
                }
                // change to SMS confirm step
                stepChanger(2);
                // listen to head changes made by the widget
                grabConfirmation();
            }, 100)
        }

        toggleDisclaimer = function () {
            const   pages = raisenow.querySelectorAll('.bre2-page'),
                    disclaimerPage = raisenow.querySelector('.bre2-page-disclaimer'),
                    disclaimerBack = disclaimerPage.querySelector('[data-show="form"]');
            pages.forEach(function(el, i) {
                el.classList.add('bre2-hidden');
                if(el == disclaimerPage) {
                    el.classList.remove('bre2-hidden');
                    el.classList.add('bre2-shown');
                    stepChanger(0);
                    disclaimerBack.addEventListener('click', function () {
                        el.classList.remove('bre2-shown');
                        el.classList.add('bre2-hidden');
                        stepChanger(1);
                    })
                }
            });
        }

        retry = function () {
            const retryBtn = raisenow.querySelector('.bre2-linklist [data-action="clear-interval"]');
            // need to click the button in the widget to reset things. third party shizzle...
            retryBtn.click();
        }

    }
    function checkConfirmation() {
        const head = document.head;
        // url for testing
        // const url = 'https://widget.raisenow.com/widgets/bre2/_default/pollstatus.php?callback=jQuery111007879204804892952_1585243027008&transaction-id=c175158lqw3029&widget-uuid=caritas-ch&_=1585243027010';
        const url = $userLayer.transactionURL;
        let script = document.createElement("script");

        script.setAttribute("src", url+'&callback=customCallback');
        head.appendChild(script);
        head.removeChild(script);
    }
    // binding this to the window so customCallback will find it
    window.customCallback = function(data) {
        let response = JSON.parse(data);

        // wait few seconds so user can see do_validation message, then check data from transactionURL
        setTimeout(() => {
            //console.log(response.status);
            if(response.status == 'confirmed') {
                userLayer.update((entries) => {
                    entries.transactionStatus = 'confirmed';
                    return entries;
                })
                saveToFirebase();
            }
            if(response.status == 'pending') {
                stepChanger(4);
                checkConfirmation();
            }
            if(response.status == 'declined') {
                stepChanger(5);
            }
        }, 7000);
    }

    function grabConfirmation() {
        // raisenow is injecting a script into the head with all the needed info.
        // seems like the easiest way to save that URL to check the transaction even
        // if the window will be closed or the transaction is somehow interupted,
        const head = document.head;
        const widgetCalls = new MutationObserver(function(mutations) {
            mutations.forEach((mut, i) => {
                if(mut.addedNodes) {
                    mut.addedNodes.forEach((el, i) => {
                        if(el.tagName === "SCRIPT") {
                            userLayer.update((entries) => {
                                entries.transactionURL = el.src;
                                entries.transactionStatus = 'pending';
                                return entries;
                            })
                        }
                    })
                }
            });
            widgetCalls.disconnect();
        })
        widgetCalls.observe(head, { subtree: false, childList: true});
    }

    function stepChanger(step) {
        //window.scrollTo(0, 0);
        visibleDonationStep = step;
    }


    // SAVE TO FIREBASE
    const   timestamp = firebase.firestore.FieldValue.serverTimestamp(),
            incrementLayers = firebase.firestore.FieldValue.increment(1),
            incrementDonations = firebase.firestore.FieldValue.increment($userLayer.layerPrice),
            totalRef = firebase.firestore().collection('global').doc('total'),
            postRef = firebase.firestore().collection('posts').doc();

    function saveToFirebase() {
        const batch = firebase.firestore().batch();
        batch.update(totalRef, {layers: incrementLayers, donations: incrementDonations})
        batch.set(postRef, {timestamp: timestamp, ...$userLayer});
        batch.commit().then(() => {
            console.log('saved');
            curRoute.set('/confirmation');
        });
    }
    
</script>
<div class="modal__wrapper">
    <section class="stage">
        <Dropzone />
    </section>
    <!-- <button on:click={saveToFirebase}>DEBUG - Save to Firebase</button> -->
    <section class="modal">
        {#if visibleDonationStep == 0 || visibleDonationStep == 1}
            <h2 class="title" tabindex="0">{$_('do_title')}</h2>
        {/if}
        {#if visibleDonationStep !== 0 && visibleDonationStep !== 1}
            <h2 class="title" tabindex="0">{$_('do_waiting_title')}</h2>
        {/if}
        {#if visibleDonationStep == 1}
            <p class="messages" tabindex="0">
                {@html $_('do_msg')}
                <a href="https://caritas.ch/{$locale}" target="_blank"> {$_('do_charity')}.</a>
            </p>
        {/if}
        {#if visibleDonationStep == 2}
            <p class="messages" tabindex="0">
                {@html $_('do_waiting_msg')}
            </p>
        {/if}
        <DonationWidget on:raiseNow={raiseNow} visibility={visibleDonationStep}/>
        {#if visibleDonationStep == 1}
            <div class="buttons">
                <Link linkClass={'btn btn--tertiary'} page={{path: '/message', name: $_('do_cta2')}}/>
            </div>
            <p class="messages" tabindex="0">
                <a role="button" class="disclaimer" on:click={toggleDisclaimer} tabindex="0"><small>{$_('do_disclaimer')}</small></a>
            </p>
        {/if}
        {#if visibleDonationStep == 2}
            <div class="buttons">
                {#if $userLayer.transactionURL}
                    <a role="button" class="btn btn--primary" on:click={(e) => {e.preventDefault(); checkConfirmation(); stepChanger(3);}} tabindex="0">{$_('do_waiting_cta')}</a>
                {:else}
                    <a role="button" class="btn btn--primary is-disabled" tabindex="0">{$_('do_waiting_cta')}</a>
                {/if}
            </div>
        {/if}
        {#if visibleDonationStep == 3}
            <p class="messages" tabindex="0">{@html $_('do_validation')}</p>
            <Loader />
        {/if}
        {#if visibleDonationStep == 4}
            <p class="messages" tabindex="0">{@html $_('do_validation_pending')}</p>
            <Loader />
        {/if}
        {#if visibleDonationStep == 5}
            <p class="messages" tabindex="0">{@html $_('do_validation_error')}</p>
            <!-- <div class="buttons">   
                <a role="button" class="btn btn--primary" on:click={() => {retry(); stepChanger(1);}} tabindex="0">{$_('do_retry')}</a>
            </div> -->
        {/if}
    </section>
</div>