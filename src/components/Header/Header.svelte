<script>
    import LangSelector from './LangSelector.svelte';
    import Link from '../Link.svelte';
    import { _, translations } from 'svelte-intl';

    translations.update({
        de: {
            brand: 'Refill Shelf',
            layer: 'Ebene'
        },
        en: {
            brand: 'Refill Shelf',
            layer: 'layer'
        },
    })

</script>

<style lang="scss" src="./Header.scss"></style>

<div class="main-header">
    <div class="lang">
        <LangSelector />
    </div>
    <div class="logo">
        <h1>
            <Link page={{path: '/', name: $_('brand')}}/>
        </h1>
    </div>
    <div class="about">
        <Link page={{path: '/about', name: '?'}}/>
    </div>
</div>