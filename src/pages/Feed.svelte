<script>
    import Link from '../components/Base/Link.svelte';
    import Loader from '../components/Base/Loader.svelte';
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
            fe_loading: 'Regal wird geladen...',
            fe_error: 'Irgendwas ist schiefgelaufen. 😔 Lade die Seite neu.',
            fe_more: 'Mehr laden'
        },
        en: {
            fe_cta: 'Start refilling',
            fe_loading: 'Loading shelf...',
            fe_error: 'Something went wrong. 😔 Try reloading.',
            fe_more: 'Load more'
        },
        fr: {
            fe_cta: 'Participer',
            fe_loading: 'Chargement...',
            fe_error: 'Quelque chose a mal tourné 😔 Recharge la page.',
            fe_more: 'Charger plus'
        },
    });

</script>
<section class="stage no-layer">
    <h2 class="tagline" tabindex="0">{$_('tagline')}</h2>
    <div class="buttons no-gutter">
        <Link linkClass={'btn btn--primary'} page={{path: '/creation', name: $_('fe_cta')}}/>
    </div>
</section>
{#if loading}
    <div class="loading">
        <p class="messages">
            {$_('fe_loading')}
        </p>
        <Loader />
    </div>
{/if}
<Feed on:dataReady={() => loading = false}/>