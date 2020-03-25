<script>
    import Link from '../Link.svelte';
    import {translations, _ } from 'svelte-intl';

    translations.update({
        de: {
            do_cta2: 'Zurück'
        },
        en: {
            do_cta2: 'Back'
        },
    })

    function raiseNow() {
        console.log('RaiseNow is here.')
    }
    function toggleDisclaimer() {
        const   pages = document.querySelectorAll('.bre2-page'),
                disclaimerPage = document.querySelector('.bre2-page-disclaimer'),
                back = disclaimerPage.querySelector('[data-show="form"]');        
        pages.forEach((el, i) => {
            el.classList.add('bre2-hidden');
            if(el == disclaimerPage) {
                el.classList.remove('bre2-hidden');
                el.classList.add('bre2-shown');
                back.addEventListener('click', ()=> {
                    el.classList.remove('bre2-shown');
                    el.classList.add('bre2-hidden');
                })
            }
        });
    }
</script>

<style lang="scss" global>
    @import './DonationWidget.scss';
</style>

<svelte:head>
	<script src="https://widget.raisenow.com/widgets/bre2/caritas-ch/js/dds-init-widget-de.js" on:load={raiseNow}></script>
</svelte:head>

<div id="bre2-sms">
    <div id="bre2-sms-inner">
        <div class="dds-widget-container"></div>
        <div class="buttons">
            <Link linkClass={'btn btn--tertiary'} page={{path: '/message', name: $_('do_cta2')}}/>
        </div>
    </div>
</div>

<button on:click={toggleDisclaimer}>Disclaimer</button>