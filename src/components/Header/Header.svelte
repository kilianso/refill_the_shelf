<script>
    import LangSelector from './LangSelector.svelte';
    import Link from '../Base/Link.svelte';
    import { _ } from 'svelte-intl';
</script>

<style lang="scss" src="./Header.scss"></style>

<div class="main-header">
    <LangSelector />
    <div class="logo">
        <h1>
            <Link page={{path: '/', name: $_('brand')}}/>
        </h1>
    </div>
    <div class="about">
        <Link page={{path: '/about', name: '?'}}/>
    </div>
</div>