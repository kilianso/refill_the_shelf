<script>
    import Link from '../components/Link.svelte';
    import Loader from '../components/Loader.svelte';
    import Dropzone from '../components/DragDrop/Dropzone.svelte';
    import DonationWidget from '../components/DonationWidget/DonationWidget.svelte';

    import {onMount} from 'svelte';
    import {locale, translations, _ } from 'svelte-intl';
    import {userLayer, layerPrice, curRoute } from '../store';

    let phone = $_('do_phone'),
    toggleDisclaimer,
    checkPhone,
    retry,
    waitForConfirmation,
    visibleDonationStep = 0;

    translations.update({
        de: {
            do_title: 'Schritt 3/4 — Spende dein Regal',
            do_msg: `Aufgrund des Coronavirus brauchen viele Menschen in der Schweiz dringend deine Hilfe. <strong>Spende jetzt dein Regal (${$layerPrice} CHF)</strong> per SMS an`,
            do_charity: 'Caritas Schweiz',
            do_disclaimer: 'Datenschutz',
            do_cta: 'Jetzt spenden',
            do_cta2: 'Zurück',
            do_phone: 'Deine Handynummer',
            do_waiting_title: 'Schritt 4/4 — SMS bestätigen',
            do_waiting_msg: `<strong>Antworte nun mit "JA" auf die SMS</strong> um deine Spende zu bestätigen.`,
            do_waiting_cta: 'Abschliessen',
            do_validation: `Einen Augenblick. <strong>In wenigen Sekunden</strong> sollten wir die Bestätigung erhalten.`,
            do_validation_pending: `Die Bestätigung ist noch ausstehend. <strong>Wir überprüfen deine Spende nun nocheinmal.</strong>`,
            do_validation_error: `Oh nein! Deine Spende konnte nicht bestätigt werden. <strong>Bitte versuch es erneut.</strong>`,
            do_retry: 'Erneut versuchen'
        },
        en: {
            do_title: 'Step 3/4 Donate your shelf',
            do_msg: `Because of the corona virus, many people in Switzerland urgently need your help. <strong>Donate now your shelf (${$layerPrice} CHF)</strong> by SMS to`,
            do_charity: 'Caritas Switzerland',
            do_disclaimer: 'Data protection',
            do_cta: 'Donate now',
            do_cta2: 'Back',
            do_phone: 'Your mobile number',
            do_waiting_title: 'Step 4/4 — Confirm SMS',
            do_waiting_msg: `<strong>Reply with "YES"< to the SMS</strong> to confirm your donation.`,
            do_waiting_cta: 'Complete donation',
            do_validation: `One moment, <strong>in a few seconds</strong> we should receive the confirmation of your donation.`,
            do_validation_pending: `The confirmation is still pending. <strong>We\'ll recheck your donation now.</strong>`,
            do_validation_error: `Oh no! Your donation could not be confirmed. <strong>Please try again.</strong>`,
            do_retry: 'Retry'
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
            amount.value = $layerPrice + '00';
            //update donate button text and add eventListener for visibility change
            donateBtn.innerText = $_('do_cta');
            // show text as soon as raisenow is ready
            
            stepChanger(1);

            // init attribute observer once widget is fully loaded to listen to class changes made by the raisenow js
            donateBtn.addEventListener('click', () => {
                // wait for input validation
                checkPhone();
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
            console.log(response.status);
            if(response.status == 'pending') {
                stepChanger(4);
                checkConfirmation();
            }
            if(response.status == 'declined') {
                stepChanger(5);
            }
            if(response.status == 'confirmed') {
                userLayer.update((entries) => {
                    entries.transactionStatus = 'confirmed';
                    return entries;
                })
                curRoute.set('/confirmation');
            }
        }, 5000);
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
        visibleDonationStep = step;
    }
    
</script>
<Dropzone />
<hr>
{#if visibleDonationStep == 0 || visibleDonationStep == 1}
    <p class="title">{$_('do_title')}</p>
{/if}
{#if visibleDonationStep !== 0 && visibleDonationStep !== 1}
    <p class="title">{$_('do_waiting_title')}</p>
{/if}
{#if visibleDonationStep == 1}
    <p class="messages">
        {@html $_('do_msg')}
        <a href="https://caritas.ch/{$locale}" target="_blank"> {$_('do_charity')}.</a>
    </p>
{/if}
{#if visibleDonationStep == 2}
    <p class="messages">
        {@html $_('do_waiting_msg')}
    </p>
{/if}
<DonationWidget on:raiseNow={raiseNow} visibility={visibleDonationStep}/>
{#if visibleDonationStep == 1}
    <div class="buttons">
        <Link linkClass={'btn btn--tertiary'} page={{path: '/message', name: $_('do_cta2')}}/>
    </div>
    <p class="messages">
        <small class="disclaimer" on:click={toggleDisclaimer}>{$_('do_disclaimer')}</small>
    </p>
{/if}
{#if visibleDonationStep == 2}
    <div class="buttons">
        {#if $userLayer.transactionURL}
            <a role="button" class="btn btn--primary" on:click={() => {checkConfirmation(); stepChanger(3);}}>{$_('do_waiting_cta')}</a>
        {:else}
            <a role="button" class="btn btn--primary is-disabled">{$_('do_waiting_cta')}</a>
        {/if}
    </div>
{/if}
{#if visibleDonationStep == 3}
    <p class="messages">{@html $_('do_validation')}</p>
    <Loader />
{/if}
{#if visibleDonationStep == 4}
    <p class="messages">{@html $_('do_validation_pending')}</p>
    <Loader />
{/if}
{#if visibleDonationStep == 5}
    <p class="messages">{@html $_('do_validation_error')}</p>
    <div class="buttons">
        <a role="button" class="btn btn--primary" on:click={() => {retry(); stepChanger(1);}}>{$_('do_retry')}</a>
    </div>
{/if}