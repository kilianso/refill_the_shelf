<script>
    import Link from '../components/Link.svelte';
    import {translations, _ } from 'svelte-intl';

    let shelf_height = 400,
        shelf_price = 320000;
    
    translations.update({
        de: {
            fe_title: 'Lasst uns gemeinsam die Regale wiederauffüllen, für all jene in Not.',
            fe_cta: 'Jetzt mitmachen',
            fe_ff_title: 'Fakten & Zahlen',
            fe_ff_msg: `An dieser Stelle ist unser Regal ${shelf_height} Meter hoch und es wurden ${shelf_price} CHF gespendet.`
        },
        en: {
            fe_title: 'Let\'s refill the shelves togheter, for those in need!',
            fe_cta: 'Start refilling',
            fe_ff_title: 'Facts & figures',
            fe_ff_msg: `At this point, our shelf is ${shelf_height} meters height and ${shelf_price} CHF have been donated.`
        },
    })
</script>

<p class="title">{$_('fe_title')}</p>
<div class="buttons">
    <Link linkClass={'btn btn--primary'} page={{path: '/creation', name: $_('fe_cta')}}/>
</div>

<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>
<div class="messages">
    <strong>{$_('fe_ff_title')}</strong>
    <p>{$_('fe_ff_msg')}</p>
</div>

<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>