<script>
    import LangSelector from './LangSelector.svelte';
    import Link from '../Base/Link.svelte';
    import { _ } from 'svelte-intl';
</script>

<style lang="scss" src="./Header.scss"></style>

<header class="main-header">
    <LangSelector />
    <div class="logo">
        <h1>
            <Link page={{path: '/', name: $_('brand')}}/>
        </h1>
    </div>
    <div class="about">
        <Link page={{path: '/about', name: '?'}} linkClass="about__link" ariaLabel={'about'}/>
    </div>
</header>