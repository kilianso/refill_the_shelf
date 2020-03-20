<script>
    import Link from '../components/Link.svelte';
    import {translations, _ } from 'svelte-intl';

    let shelf_height = 400,
        shelf_price = 320000;
    
    translations.update({
        de: {
            fe_cta: 'Jetzt auffüllen',
            fe_msg_title: 'Regal-Fakten',
            fe_msg: `Unser Regal ist aktuell ${shelf_height} Meter hoch und kostet ${shelf_price} CHF.`
        },
        en: {
            fe_cta: 'Start refilling',
            fe_msg_title: 'Height of shelf',
            fe_msg: `Our shelf is currently ${shelf_height} meters height and costs ${shelf_price} CHF.`
        },
    })
</script>

<div class="buttons">
    <Link linkClass={'btn btn--primary'} page={{path: '/create', name: $_('fe_cta')}}/>
</div>

<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>

<strong>{$_('fe_msg_title')}</strong>
<p>{$_('fe_msg')}</p>

<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>