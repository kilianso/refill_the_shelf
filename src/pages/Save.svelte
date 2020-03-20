<script>
    import Link from '../components/Link.svelte';
    import {translations, _ } from 'svelte-intl';

    let shelf_height = 400,
        shelf_price = 320000,
        pricetag_text = '',
        layer_price = '{layer_price}';
    
    translations.update({
        de: {
            sa_title: 'Preischild',
            sa_placeholder: 'Schreib auf das Preisschild',
            sa_msg: `Mit deiner Teilnahme wird unser Regal ${shelf_height} Meter hoch und kostet ${shelf_price} CHF.`,
            sa_cta: 'Abschliessen',
            sa_cta2: 'Zurück'
        },
        en: {
            sa_title: 'pricetag',
            sa_placeholder: 'Write something on the pricetag',
            sa_msg: `With your contribution, the shelf will be ${shelf_height} meters high and cost ${shelf_price} CHF.`,
            sa_cta: 'Finish',
            sa_cta2: 'Zurück'
        },
    })
</script>

<div class="layer">{$_('layer')}</div>
<div>{pricetag_text} {layer_price}</div>
<br>
<br>
<br>
<div>
    <label>{$_('sa_title')}</label>
    <input class="pricetag__text" type="text" placeholder="{$_('sa_placeholder')}" bind:value={pricetag_text}>
    <p>{$_('sa_msg')}</p>
</div>

<div class="buttons">
    <Link linkClass={'btn btn--primary'} page={{path: '/donate', name: $_('sa_cta')}}/>
    <Link linkClass={'btn btn--tertiary'} page={{path: '/create', name: $_('sa_cta2')}}/>
</div>