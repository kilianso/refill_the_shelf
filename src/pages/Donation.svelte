<script>
    import Link from '../components/Link.svelte';
    import Dropzone from '../components/DragDrop/Dropzone.svelte';
    import DonationWidget from '../components/DonationWidget/DonationWidget.svelte';

    import {locale, translations, _ } from 'svelte-intl';
    import {userLayer, layerPrice } from '../store';

    translations.update({
        de: {
            do_title: 'Schritt 3/4 — Spende dein Regal',
            do_msg: `Aufgrund des Coronavirus brauchen gerade viele Menschen in der Schweiz deine Hilfe. Spende dein Regal (${$layerPrice} CHF) per SMS an die`,
            do_charity: 'Caritas Schweiz',
            do_disclaimer: 'Datenschutz',
            do_cta: "Jetzt spenden",
            do_cta2: 'Zurück',
            do_phone: 'Deine Handynummer',
            do_waiting_title: 'Schritt 4/4 — SMS bestätigen',
            do_waiting_msg: 'Antworte nun mit "JA" auf die SMS um deine Spende zu bestätigen. ⚠️ Lass diese Seite offen, damit du anschliessend dein Regal speichern kannst.',
            do_waiting_cta: 'Abschliessen',
            do_waiting_validation: 'Einen Augenblick bitte. In weniger als 30 Sekunden sollten wir die Bestätigung deiner Spende erhalten.'
        },
        en: {
            do_title: 'Step 3/4 Donate your shelf',
            do_msg: `Because of the Coronavirus, many people in Switzerland need your help right now. Donate your shelf (${$layerPrice} CHF) by SMS to`,
            do_charity: 'Caritas Switzerland',
            do_disclaimer: 'Data protection',
            do_cta: "Donate now",
            do_cta2: 'Back',
            do_phone: 'Your mobile number',
            do_waiting_title: 'Step 4/4 — Confirm SMS',
            do_waiting_msg: 'Reply with "YES" to the SMS to confirm your donation. ⚠️ Keep this window open to complete your shelf afterwards.',
            do_waiting_cta: 'Finish donation',
            do_waiting_validation: 'One moment please. In less than 30 seconds we should receive the confirmation of your donation.'
        },
    });

    let phone = $_('do_phone'),
        toggleDisclaimer,
        visibleDonationStep;
    
    function raiseNow() {
        
        const raisenow = document.querySelector('.dds-widget-container');
        
        const observer = new MutationObserver((mutations) => {
            const   phoneInput = raisenow.querySelector('.bre2-page-form .bre2-input-mobile'),
                    donateBtn = raisenow.querySelector('.bre2-page-form .bre2-btn'),
                    amount = raisenow.querySelector('#caritas-ch-default-form').querySelector('input[name="amount"]');
            //update placeholder
            phoneInput.placeholder = $_('do_phone');
            // update preset value
            amount.value = $layerPrice + '00';
            //update donate button text
            donateBtn.innerText = $_('do_cta');
            // set visiblity of the first donation-step
            visibleDonationStep = 1;
        });
        observer.observe(raisenow, {attributes: false, subtree: false, childList: true});
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
{#if visibleDonationStep == 0 || visibleDonationStep == 1}
    <p class="title">{$_('do_title')}</p>
{/if}
{#if visibleDonationStep != 0 || visibleDonationStep != 1}
    <p class="title">{$_('do_waiting_title')}</p>
{/if}
{#if visibleDonationStep == 1}
    <p class="messages">
        {$_('do_msg')}
        <a href="https://caritas.ch/{$locale}" target="_blank"> {$_('do_charity')}.</a>
    </p>
{/if}
{#if visibleDonationStep == 2}
    <p class="messages">
        {$_('do_waiting_msg')}
        <a href="https://caritas.ch/{$locale}" target="_blank"> {$_('do_charity')}.</a>
    </p>
{/if}
<DonationWidget on:raiseNow={raiseNow} />
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
        <Link linkClass={'btn btn--primary'} page={{path: '/confirmation', name: $_('do_waiting_cta')}}/>
    </div>
{/if}
{#if visibleDonationStep == 3}
    <p class="messages">{$_('do_waiting_validation')}</p>
{/if}