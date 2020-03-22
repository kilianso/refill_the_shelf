<script>
    import Link from '../components/Link.svelte';
    import {translations, _ } from 'svelte-intl';

    let shelf_height = 400,
        shelf_price = 320000,
        pricetag_name = 'Dis Mami',
        pricetag_text = 'Voll super!',
        charity = 'Caritas',
        layer_price = 15; // TODO
    
    translations.update({
        de: {
            do_title: 'Schritt 3/3 — Spende dein Regal',
            do_msg: `Spende jetzt dein Regal an ${charity} und gib etwas an all jene zurück, die ihre Reserven selbst nicht auffüllen können. Danke!`,
            do_cta: `Jetzt ${layer_price} CHF spenden`,
            do_cta2: 'Zurück'
        },
        en: {
            do_title: 'Schritt 2/3 Donate your shelf',
            do_msg: `Donate your shelf to ${charity} and give something back to the ones, who cannot refill. Thank you!`,
            do_cta: `Donate ${layer_price} CHF`,
            do_cta2: 'Back'
        },
    })
</script>
<p class="title">{$_('do_title')}</p>
<div class="layer">{$_('layer')}</div>
<div class="pricetag">
    <div class="pricetag__text">
        <strong>{pricetag_name}</strong> {pricetag_text}
    </div>
    <div class="pricetag__price">{layer_price} CHF</div>
</div>
<div>
    <p class="messages">{$_('do_msg')}</p>
</div>
<div class="buttons">
    <Link linkClass={'btn btn--primary'} page={{path: '/confirmation', name: $_('do_cta')}}/>
    <Link linkClass={'btn btn--tertiary'} page={{path: '/message', name: $_('do_cta2')}}/>
</div>