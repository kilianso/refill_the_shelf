<script>
    import Link from '../../components/Base/Link.svelte';
    import Loader from '../../components/Base/Loader.svelte';
    
    import firebase from "firebase/app";
    import {locale, translations, _ } from 'svelte-intl';
    import {userLayer, curRoute} from '../../store';

    translations.update({
        de: {
            pa_loading: 'Lade Zahlungsoptionen...',
            pa_pending_sms: `<strong>Antworte mit JA auf die SMS</strong> um zu bestätigen. Deine Spende wird jetzt überprüft...`,
            pa_validation: `<strong>Einen Augenblick.</strong> Deine Spende wird jetzt überprüft...`,
            pa_validation_error: 'Oh nein, etwas ist schiefgelaufen! 😔 Versuche es erneut oder ändere die Zahlungsmethode.',
            pa_retry: 'Erneut versuchen',
            pa_cta2: 'Zurück',
            pa_privacy: 'Datenschutz'
        },
        en: {
            pa_loading: 'Loading payment options...',
            pa_pending_sms: `<strong>Reply with YES to the SMS</strong> to confirm. Your donation will be reviewed now...`,
            pa_validation: `<strong>One moment.</strong> Your donation will be reviewed now...`,
            pa_validation_error: 'Oh no, something\'s wrong! 😔 Try again or change the payment method.',
            pa_retry: 'Retry',
            pa_cta2: 'Back',
            pa_privacy: 'Data protection'
        },
        fr: {
            pa_loading: 'Chargement des options de paiement...',
            pa_pending_sms: `<strong>Réponds maintenant par OUI au SMS</strong> pour confirmer. Ton don sera examiné maintenant...`,
            pa_validation: `<strong>Juste un moment.</strong> Ton don sera examiné maintenant...`,
            pa_validation_error: 'Oh non, quelque chose ne va pas! 😔 Essaies à nouveau ou modifiez le mode de paiement.',
            pa_retry: 'Réessayer',
            pa_cta2: 'Retour',
            pa_privacy: 'Protection des données'
        },
    });

    let loading = true,
        obj = {},
        visibleDonationStep = 0;
    
    const raiseNow = () => {
       
        window.rnw.tamaro.runWidget('.rnw-widget-container', {
            language: $locale,
            defaultPaymentMethod: 'sms',
            amounts: [$userLayer.layerPrice],
            overlayMode: 'inner',
            allowCustomAmount: false,
            paymentWidgetBlocks: [
            "payment_payment_methods"
            ],
            translations: {
                en: {
                    blocks: {
                        payment_submit: {
                            submit: 'Complete donation'
                        },
                        footer_info: {
                            link: 'Data protection'
                        }
                    }
                },
                de: {
                    blocks: {
                        payment_submit: {
                            submit: 'Abschliessen'
                        },
                        footer_info: {
                            link: 'Datenschutz'
                        }
                    }
                },
                fr: {
                    blocks: {
                        payment_submit: {
                            submit: 'Finaliser'
                        },
                        footer_info: {
                            link: 'Protection des données'
                        }
                    }
                }
            }
        }).then((v) => {
            obj = v;

            if(/[?&]rnw-view=/.test(location.search)) {
                // console.log('there is a transaction, do not show the widget');
                // so do nothing till the observer kicks in
            }else {
                loading = false;
                stepChanger(1);
            }
            //Listen to changes on the transactionInfo.
            const observer = new Observer(obj, "transactionInfo");
            observer.Observe(function(newValue){
                if(newValue){
                    if(newValue.epayment_status === 'pending'){   
                        console.log(newValue.epayment_status);
                        if(obj.paymentForm.data.payment_method === 'sms') {
                            // show sms waiting screen
                            stepChanger(3);
                        }else {
                            // show regular waiting screen
                            stepChanger(2);
                        }
                    }
                    else if(newValue.epayment_status === 'success') {
                        console.log(newValue.epayment_status);
                        let transactionFromLocalStorage = localStorage.getItem('transaction');
                        if(transactionFromLocalStorage !== newValue.epp_transaction_id) {
                            // save to firebase only if it's not already saved
                            localStorage.setItem('transaction', newValue.epp_transaction_id);
                            saveToFirebase();
                        }
                        else {
                            curRoute.set('/confirmation');
                            window.history.replaceState(null, null, '/confirmation');
                        }
                    }
                    else if(newValue.epayment_status === 'cancel') {
                        console.log(newValue.epayment_status);
                        stepChanger(4)
                    }
                }
                else {
                    window.location.replace(window.location.pathname)
                }
            })
        });

        const langSelect = document.querySelector('.langSelector');
        langSelect.addEventListener('change', (evt) => {
            obj.config.language = langSelect.value;
        });
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
            window.history.replaceState(null, null, '/confirmation');
        });
    }

    function stepChanger(step) {
        window.scrollTo(0, 0);
        visibleDonationStep = step;
    }

    function toggledataProtection() {
        const dataProtection = document.querySelector('.footer-info .main button');
        dataProtection.click();
    }

    function changePaymentMethod(el, method) {
        const allBtns = el.parentNode.querySelectorAll('button');
        allBtns.forEach((el, i) => {
            el.classList.remove('is-active');
        });
        el.classList.add('is-active')
        if (obj.hasOwnProperty('paymentForm')) {
            obj.paymentForm.data.payment_method = method;
        }
    }

    function Observer(o, property){
        const _this = this;
        const value = o[property];
        this.observers = [];
        
        this.Observe = function (notifyCallback){
            _this.observers.push(notifyCallback);
        }

        Object.defineProperty(o, property, {
            set: function(val){
                _this.value = val;
                for(var i = 0; i < _this.observers.length; i++) _this.observers[i](val);
            },
            get: function(){
                return _this.value;
            }
        });
    }
    
</script>

<style lang="scss" global>
    @import './DonationWidget.scss';
</style>

<svelte:head>
	<script src="https://tamaro.raisenow.com/caritas-refill/latest/widget.js" on:load={raiseNow}></script>
</svelte:head>
<!-- <button class="debugSave" on:click={saveToFirebase}>DEBUG - Save to Firebase</button> -->
{#if visibleDonationStep === 0}
    <p class="messages">{$_('pa_loading')}</p>
{:else}
    {#if visibleDonationStep === 1}
    <div class="tabs">
        <button class="tabs__btn is-active" on:click={(e) => {changePaymentMethod(e.target, 'sms')}}>SMS</button>
        <button class="tabs__btn" on:click={(e) => {changePaymentMethod(e.target, 'twi')}}>Twint</button>
        <button class="tabs__btn" on:click={(e) => {changePaymentMethod(e.target, 'pp')}}>PayPal</button>
    </div>
    {/if}
{/if}
<div class="rnw-widget-container {loading ? 'is-hidden' : ''}"></div>
{#if visibleDonationStep === 1}
    <div class="btn__group {loading ? 'is-hidden' : ''}">
        <div class="buttons btn__payment">
            <Link linkClass={'btn btn--tertiary'} page={{path: '/donation', name: $_('pa_cta2')}}/>
        </div>
        <p class="messages">
            <a on:click={toggledataProtection} role="button" class="btn__privacy">
                <small>{$_('pa_privacy')}</small>
            </a>
        </p>
    </div>
{/if}
{#if visibleDonationStep === 2}
    <p class="messages">{@html $_('pa_validation')}</p>
{/if}
{#if visibleDonationStep === 3}
    <p class="messages">{@html $_('pa_pending_sms')}</p>
{/if}
{#if visibleDonationStep === 0 || visibleDonationStep === 2 || visibleDonationStep === 3 }
    <Loader />
{/if}
{#if visibleDonationStep === 4}
    <p class="messages">{@html $_('pa_validation_error')}</p>
    <div class="buttons">
        <Link linkClass={'btn btn--primary'} page={{path: '/payment', name: $_('pa_retry')}}/>
    </div>
{/if}