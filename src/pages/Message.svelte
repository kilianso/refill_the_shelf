<script>
    import Link from '../components/Link.svelte';
    import {translations, _ } from 'svelte-intl';

    let shelf_height = 400,
        shelf_price = 320000,
        pricetag_name = '',
        pricetag_text = '',
        layer_price = 15; // TODO
    
    translations.update({
        de: {
            me_title: 'Schritt 2/3 — Füge eine Nachricht hinzu',
            me_name: 'Dein Name',
            me_msg: 'Deine Nachricht',
            me_cta: 'Nächster Schritt',
            me_cta2: 'Zurück'
        },
        en: {
            me_title: 'Step 2/3 — Add a message',
            me_name: 'Your name',
            me_msg: 'Your message',
            me_cta: 'Next Step',
            me_cta2: 'Back'
        },
    })
</script>
<p class="title">{$_('me_title')}</p>
<div class="layer">{$_('layer')}</div>
<div class="pricetag">
    <div class="pricetag__text">
        <strong>{pricetag_name}</strong> {pricetag_text}
    </div>
    <div class="pricetag__price">{layer_price} CHF</div>
</div>
<hr>
<br>
<div>
    <input class="input__name" type="text" placeholder="{$_('me_name')}" bind:value={pricetag_name}>
    <input class="input__msg" type="text" placeholder="{$_('me_msg')}" bind:value={pricetag_text}>
</div>

<div class="buttons">
    <Link linkClass={'btn btn--primary'} page={{path: '/donation', name: $_('me_cta')}}/>
    <Link linkClass={'btn btn--tertiary'} page={{path: '/creation', name: $_('me_cta2')}}/>
</div>