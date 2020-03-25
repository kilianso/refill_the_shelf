<script>
    import Link from '../components/Link.svelte';
    import Dropzone from '../components/DragDrop/Dropzone.svelte';
    import DonationWidget from '../components/DonationWidget/DonationWidget.svelte';

    import {locale, translations, _ } from 'svelte-intl';
    import { layerPrice } from '../store';

    translations.update({
        de: {
            do_title: 'Schritt 3/4 — Spende dein Regal',
            do_msg: `Aufgrund des Coronavirus brauchen gerade viele Menschen in der Schweiz deine Hilfe. Spende dein Regal (${$layerPrice} CHF) per SMS an die Caritas Schweiz.`,
            do_disclaimer: 'Datenschutz',
            do_cta2: 'Zurück',
            do_phone: 'Deine Handynummer'
        },
        en: {
            do_title: 'Step 3/4 Donate your shelf',
            do_msg: `Because of the Coronavirus, many people in Switzerland need your help right now. Donate your shelf (${$layerPrice} CHF) by SMS to Caritas Switzerland.`,
            do_disclaimer: 'Data protection',
            do_cta2: 'Back',
            do_phone: 'Your mobile number'
        },
    });

    let phone = $_('do_phone'),
        toggleDisclaimer,
        visibleDonationStep;
    
    function raiseNow() {
        
        const raisenow = document.getElementById('bre2-sms');
        const observer = new MutationObserver((mutations) => {
            const   phoneInput = document.querySelector('.bre2-input-mobile'),
                    amount = document.getElementById('caritas-ch-default-form').querySelector('input[name="amount"]');
            
            phoneInput.placeholder = $_('do_phone');
            amount.value = $layerPrice + '00';
            visibleDonationStep = 1;
        });
        observer.observe(raisenow, {attributes: false, subtree: true, childList: true});
        toggleDisclaimer = function () {
            const   pages = raisenow.querySelectorAll('.bre2-page'),
                    disclaimerPage = raisenow.querySelector('.bre2-page-disclaimer'),
                    disclaimerBack = disclaimerPage.querySelector('[data-show="form"]');            
            pages.forEach(function(el, i) {
                el.classList.add('bre2-hidden');
                if(el == disclaimerPage) {
                    el.classList.remove('bre2-hidden');
                    el.classList.add('bre2-shown');
                    visibleDonationStep = 0;
                    disclaimerBack.addEventListener('click', function () {
                        el.classList.remove('bre2-shown');
                        el.classList.add('bre2-hidden');
                        visibleDonationStep = 1;
                    })
                }
            });
        }
    }
    
</script>
<Dropzone />
<hr>
<p class="title">{$_('do_title')}</p>
{#if visibleDonationStep == 1}
    <p class="messages">
        {$_('do_msg')}
        <span on:click={toggleDisclaimer}>{$_('do_disclaimer')}</span>
    </p>
{/if}
<DonationWidget on:raiseNow={raiseNow} />
{#if visibleDonationStep == 1}
    <div class="buttons">
        <Link linkClass={'btn btn--tertiary'} page={{path: '/message', name: $_('do_cta2')}}/>
    </div>
{/if}