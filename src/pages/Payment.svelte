<script>
    import Link from '../components/Base/Link.svelte';
    import Dropzone from '../components/DragDrop/Dropzone.svelte';
    import DonationWidget from '../components/Donation/DonationWidget.svelte';

    import {onMount} from 'svelte';
    import {locale, translations, _ } from 'svelte-intl';
    import {userLayer, storeLayerPrice, curRoute } from '../store';

    translations.update({
        de: {
            pa_title: 'Schritt 4/4 — Spende abschliessen',
        },
        en: {
            pa_title: 'Step 4/4 Donate your shelf',
        },
        fr: {
            pa_title: 'Étape 3/4 - Fais don de ton étagère',
        },
    });
    
</script>
<div class="modal__wrapper">
    <section class="stage">
        <Dropzone />
    </section>
    <!-- <button on:click={saveToFirebase}>DEBUG - Save to Firebase</button> -->
    <section class="modal">
        <h2 class="title" tabindex="0">{$_('pa_title')}</h2>
        <DonationWidget />
    </section>
</div>