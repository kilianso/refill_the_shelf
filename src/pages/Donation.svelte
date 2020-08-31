<script>
    import Link from '../components/Base/Link.svelte';
    import Dropzone from '../components/DragDrop/Dropzone.svelte';

    import {locale, translations, _ } from 'svelte-intl';
    import {userLayer, storeLayerPrice } from '../store';

    translations.update({
        de: {
            do_title: 'Schritt 3/4 — Spende dein Regal',
            do_msg: `Aufgrund des Coronavirus brauchen viele Menschen in der Schweiz dringend deine Hilfe. <strong>Spende jetzt dein Regal (${$storeLayerPrice} CHF)</strong> an`,
            do_charity: 'Caritas Schweiz',
            do_cta: 'Jetzt spenden',
            do_cta2: 'Zurück'      
        },
        en: {
            do_title: 'Step 3/4 Donate your shelf',
            do_msg: `Because of the corona virus, many people in Switzerland urgently need your help. <strong>Donate now your shelf (${$storeLayerPrice} CHF)</strong> to`,
            do_charity: 'Caritas Switzerland',
            do_cta: 'Donate now',
            do_cta2: 'Back'
        },
        fr: {
            do_title: 'Étape 3/4 - Fais don de ton étagère',
            do_msg: `En raison du coronavirus, de nombreuses personnes en Suisse ont besoin de ton aide de toute urgence. Fais don maintenant de ton étagère (${$storeLayerPrice} CHF) à`,
            do_charity: 'Caritas Suisse',
            do_cta: 'Faire un don',
            do_cta2: 'Retour'
        },
    });
    
    // keep things in the localstorage. Raisenow causes redirects. This is needed to keep and reset the store
    localStorage.setItem('userLayer', JSON.stringify($userLayer));
    
</script>
<div class="modal__wrapper">
    <section class="stage">
        <Dropzone />
    </section>
    <section class="modal">
        <h2 class="title" tabindex="0">{$_('do_title')}</h2>
        <p class="messages" tabindex="0">
            {@html $_('do_msg')}
            <a href="https://caritas.ch/{$locale}" target="_blank"> {$_('do_charity')}.</a>
        </p>
         <div class="buttons">
            <Link linkClass={'btn btn--primary'} page={{path: '/payment', name: $_('do_cta')}}/>
            <Link linkClass={'btn btn--tertiary'} page={{path: '/message', name: $_('do_cta2')}}/>
         </div>
    </section>
</div>