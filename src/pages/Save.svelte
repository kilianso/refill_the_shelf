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
            sa_title: 'Schreib etwas auf das Preischild',
            sa_name: 'Dein Name',
            sa_msg: 'Deine Nachricht',
            sa_msg_donate: 'Gib etwas an jene zurück, die ihre Reserven selbst nicht auffüllen können. Spende jetzt an ein Hilfswerk. Danke!',
            sa_cta: `Jetzt ${layer_price} CHF spenden`,
            sa_cta2: 'Zurück'
        },
        en: {
            sa_title: 'Write something on the pricetag',
            sa_name: 'Your name',
            sa_msg: 'Your message',
            sa_msg_donate: 'Give something back to the ones, who cannot refill. Select a charity and donate now. Thank you!',
            sa_cta: `Donate ${layer_price} CHF now`,
            sa_cta2: 'Zurück'
        },
    })
</script>

<div class="layer">{$_('layer')}</div>
<div class="pricetag">
    <div class="pricetag__text">
        <strong>{pricetag_name}</strong> {pricetag_text}
    </div>
    <div class="pricetag__price">{layer_price} CHF</div>
</div>
<br>
<br>
<br>
<div>
    <p>{$_('sa_title')}</p>
    <input class="input__name" type="text" placeholder="{$_('sa_name')}" bind:value={pricetag_name}>
    <input class="input__msg" type="text" placeholder="{$_('sa_msg')}" bind:value={pricetag_text}>
    <p>{$_('sa_msg_donate')}</p>
</div>

<div class="buttons">
    <Link linkClass={'btn btn--primary'} page={{path: '/confirm', name: $_('sa_cta')}}/>
    <Link linkClass={'btn btn--tertiary'} page={{path: '/create', name: $_('sa_cta2')}}/>
</div>