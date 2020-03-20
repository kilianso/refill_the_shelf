<script>
    import LangSelector from './LangSelector.svelte';
    import Link from './Link.svelte';
    import { _ } from 'svelte-intl';
</script>

<style lang="scss" src="./Header.scss"></style>

<div class="main-header">
    <LangSelector />
    <h1>
        <Link page={{path: '/', name: $_('brand')}}/>
    </h1>
    <Link page={{path: '/about', name: '?'}}/>
</div>