<script>
	import Header from './components/Header/Header.svelte';
    import Link from './components/Link.svelte';
	import Route from './components/Route.svelte';

	import {translations, _ } from 'svelte-intl';

	translations.update({
        de: {
            brand: 'Refill the Shelf',
			tagline: 'Füll das Regal auf und helfe Menschen, die durch die Coronakrise in Not sind.',
			layer: 'Regal-Ebene',
        },
        en: {
			brand: 'Refill the Shelf',
			tagline: 'Refill the shelf and help people who are in need due to the corona crisis.',
            layer: 'shelf-layer'
        },
    })
</script>

<style lang="scss" global>
	@import "./styles/global.scss";
</style>

<header>
	<Header />
</header>

<svelte:head>
	<!-- Not sure if this will be indexed correctly by Google, Bing etc.
	since we are not using Sapper or SSR, this will be injected.
	-->
	<!-- https://stackoverflow.com/questions/57749479/svelte3-adding-sveltehead-without-sapper -->
	<meta name="description" content="{$_('tagline')}">
	<meta property="og:title" content="{$_('brand')}">
	<meta property="og:description" content="{$_('tagline')}">
	<meta property="og:image" content="https://refilltheshelf.ch/assets/images/refill_the_shelf.jpg">
	<meta property="og:url" content="https://refilltheshelf.ch">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:creator" content="@kilian_so">
	<meta name="twitter:title" content="{$_('brand')}">
	<meta name="twitter:description" content="{$_('tagline')}">
</svelte:head>

<main>
	<Route />
	<br>
	<br>
	<hr>
	<h3>Debug nav</h3>
	<nav class="navigation">
		<Link page={{path: '/', name: 'Feed'}} />
		<Link page={{path: '/creation', name: 'Creation'}} />
		<Link page={{path: '/message', name: 'Message'}} />
		<Link page={{path: '/donation', name: 'Donation'}} />
		<Link page={{path: '/confirmation', name: 'Confirmation'}} />
		<Link page={{path: '/about', name: 'About'}} />
	</nav>
	<br>
	<br>
</main>