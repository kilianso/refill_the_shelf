<script>
    import Feed from '../components/Base/Feed.svelte';
    import Link from '../components/Base/Link.svelte';
    import Loader from '../components/Base/Loader.svelte';
    import Celebration from '../components/Donation/Celebration.svelte';

    import {translations, _ } from 'svelte-intl';
    
    translations.update({
        de: {
            co_title: 'Alles klar, tausend Dank!',
            co_cta: 'Bitte teile diese Spendenaktion mit Freunden.',
            fe_loading: 'Regal wird geladen...',
            fe_error: 'Irgendwas ist schiefgelaufen. 😔 Lade die Seite neu.',
            fe_more: 'Mehr laden'
        },
        en: {
            co_title: 'Alrighty, thank you!',
            co_cta: 'Please share this fundraiser with friends.',
            fe_loading: 'Loading shelf...',
            fe_error: 'Something went wrong. 😔 Try reloading.',
            fe_more: 'Load more'
        },
        fr: {
            co_title: 'Très bien, merci mille fois!',
            co_cta: 'Partage stp cette collecte de dons avec tes amis.',
            fe_loading: 'chargement...',
            fe_error: 'Quelque chose a mal tourné 😔 Recharge la page.',
            fe_more: 'Charger plus'
        },
    })
    let loading = true;

    // ditch localstorage
    // localStorage.clear();

</script>
<section class="stage no-layer sharing">
        <Celebration />
        <h2 class="tagline">{$_('co_title')}</h2>
        <p class="messages">{$_('co_cta')}</p>
        <div class="social">
            <a href="https://twitter.com/intent/tweet?text={$_('brand')} — {$_('tagline')}&amp;url=https://refilltheshelf.ch&amp;&amp;hashtags=refilltheshelf">
                <img class="social__icon" src="./assets/images/social/twitter.svg" alt="twitter">
            </a>
            <a href="http://www.facebook.com/sharer.php?u=https://refilltheshelf.ch&p[title]=Refill+the+Shelf">
                <img class="social__icon" src="./assets/images/social/facebook.svg" alt="facebook">
            </a>
            <a href="https://wa.me/?text={$_('brand')} — {$_('tagline')} – https://refilltheshelf.ch">
                <img class="social__icon" src="./assets/images/social/whatsapp.svg" alt="whatsapp">
            </a>
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