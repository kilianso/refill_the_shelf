<script>
    import Link from '../components/Base/Link.svelte';
    import Feed from '../components/Base/Feed.svelte';

    import {translations, _ } from 'svelte-intl';
    
    translations.update({
        de: {
            co_title: 'Toll gemacht!',
            co_cta: 'Jetzt teile es mit Freunden',
        },
        en: {
            co_title: 'Nice one!',
            co_cta: 'Now share this with friends',
        },
    })
    let loading = true;

</script>

{#if !loading}
    <div class="sharing">
        <p><strong>{$_('co_title')}</strong></p>
        <p>{$_('co_cta')}</p>
        <p class="social">Social Icons</p>
    </div>
{/if}

<Feed on:dataReady={() => {loading = false, console.log('show firework')}}/>

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