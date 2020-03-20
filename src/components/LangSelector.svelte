<script>
    import { locale, locales, translations, getBrowserLocale } from 'svelte-intl';

    translations.update({
        de: {
            brand: 'Füll das Regal',
            layer: 'Ebene'
        },
        en: {
            brand: 'Refill the Shelf',
            layer: 'layer'
        },
    })
    
    locale.set(getBrowserLocale('en')) // try to use window.navigator.language, fallback to EN
    const setLocale = e => locale.set(e.target.value)

</script>

<select value={$locale} on:change={setLocale}>
  {#each $locales as l}
    <option value={l}> {l} </option>
  {/each}
</select>