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
		<Link page={{path: '/create', name: 'Create'}} />
		<Link page={{path: '/save', name: 'Save'}} />
		<Link page={{path: '/confirm', name: 'Confirm'}} />
		<Link page={{path: '/about', name: 'About'}} />
	</nav>
	<br>
	<br>
</main>