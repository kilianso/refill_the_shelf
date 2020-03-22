<script>
	import Header from './components/Header/Header.svelte';
    import Link from './components/Link.svelte';
	import Route from './components/Route.svelte';
</script>

<style lang="scss" global>
	@import "./styles/global.scss";
</style>

<header>
	<Header />
</header>
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