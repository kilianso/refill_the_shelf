<script>
    import Link from '../components/Base/Link.svelte';
    import Feed from '../components/Base/Feed.svelte';
    
    import Dropzone from '../components/DragDrop/Dropzone.svelte';

    import {translations, _ } from 'svelte-intl';

    // TODO
    let shelf_height = 400,
        shelf_price = 320000,
        loading = true;
    
    translations.update({
        de: {
            fe_cta: 'Jetzt mitmachen',
            fe_ff_title: 'Fakten & Zahlen',
            fe_ff_msg: `An dieser Stelle ist unser Regal ${shelf_height} Meter hoch und es wurden ${shelf_price} CHF gespendet.`,
            fe_loading: 'Regal wird geladen...',
            fe_error: 'Irgendwas ist schiefgelaufen. 😔 Lade die Seite neu.',
            fe_more: 'Mehr laden'
        },
        en: {
            fe_cta: 'Start refilling',
            fe_ff_title: 'Facts & figures',
            fe_ff_msg: `At this point, our shelf is ${shelf_height} meters height and ${shelf_price} CHF have been donated.`,
            fe_loading: 'Loading shelf...',
            fe_error: 'Something went wrong. 😔 Try reloading.',
            fe_more: 'Load more'
        },
    });

</script>
<section class="stage">
    <h2 class="tagline" tabindex="0">{$_('tagline')}</h2>
    <div class="buttons">
        <Link linkClass={'btn btn--primary'} page={{path: '/creation', name: $_('fe_cta')}}/>
    </div>
</section>
<Feed on:dataReady={() => loading = false}/>

<!-- {#if loading}
    <div class="loading">
        <p class="messages">
            {$_('fe_loading')}
        </p>
        <Loader />
    </div>
{/if} -->

<!-- <div class="layer">{$_('layer')}</div>
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
<div class="layer">{$_('layer')}</div> -->