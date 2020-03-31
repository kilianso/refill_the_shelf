<script>
    import Link from '../components/Base/Link.svelte';
    import Dropzone from '../components/DragDrop/Dropzone.svelte';

    import {onMount} from 'svelte';
    import {translations, _ } from 'svelte-intl';
    import { userLayer, storeLayerPrice } from '../store';

    let shelf_height = 400,
        shelf_price = 320000,
        maxName =  20,
        maxText = 140;

    $: countName = maxName - $userLayer.name.length;
    $: countText = maxText - $userLayer.message.length;
    
    translations.update({
        de: {
            me_title: 'Schritt 2/4 — Füge eine Nachricht hinzu',
            me_name: 'Dein Name',
            me_msg: 'Deine Nachricht',
            me_cta: 'Nächster Schritt',
            me_cta2: 'Zurück'
        },
        en: {
            me_title: 'Step 2/4 — Add a message',
            me_name: 'Your name',
            me_msg: 'Your message',
            me_cta: 'Next Step',
            me_cta2: 'Back'
        },
    })

    onMount(() => {
        // update layerPrice in userLayer object, 
        // so it's ready to pass to firebase in the end
        userLayer.update((entries) => {
            entries.layerPrice = $storeLayerPrice;
            return entries;
        });
    });

    function resetScrollPositiononBlur () {
        // this is needed to prevent an ugly glitch in instagram browser where the page is cutoff as soon as the user closes the keyboard
        window.scrollBy(0, -1);
    };

</script>
<div class="modal__wrapper">
    <section class="stage">
        <Dropzone />
    </section>
    <section class="modal">
        <h2 class="title" tabindex="0">{$_('me_title')}</h2>
        <div class="message__name">
            <input class="message__name" type="text"  on:blur={resetScrollPositiononBlur} maxlength={maxName} placeholder="{$_('me_name')}" bind:value={$userLayer.name}>
            <span class="message__name__counter">{countName}</span>
        </div>
        <div class="message__text">
            <input class="message__text" type="text" on:blur={resetScrollPositiononBlur} maxlength={maxText} placeholder="{$_('me_msg')}" bind:value={$userLayer.message}>
            <span class="message__text__counter">{countText}</span>
        </div>
        <div class="buttons">
            {#if $userLayer.name}
                <Link linkClass={'btn btn--primary'} page={{path: '/donation', name: $_('me_cta')}}/>
            {:else}
                <Link linkClass={'btn btn--primary is-disabled'} page={{path: '/message', name: $_('me_cta')}}/>
            {/if}
            <Link linkClass={'btn btn--tertiary'} page={{path: '/creation', name: $_('me_cta2')}}/>
        </div>
    </section>
</div>