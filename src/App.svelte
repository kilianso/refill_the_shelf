<script>
	// BASIC COMPONENTS
	import Header from './components/Header/Header.svelte';
    import Link from './components/Base/Link.svelte';
	import Route from './components/Base/Route.svelte';

    import { onMount } from 'svelte';

	// FIREBASE
	import { FirebaseApp, User, Doc, Collection } from "sveltefire";
	import firebase from "firebase/app";
	import "firebase/firestore";
	import "firebase/auth";
	import "firebase/performance";
    import "firebase/analytics";

	const firebaseConfig = {
		apiKey: "AIzaSyBRj157K5lmuc-K4TUKaMtgNcZZBw4qncc",
		authDomain: "refill-the-shelf.firebaseapp.com",
		databaseURL: "https://refill-the-shelf.firebaseio.com",
		projectId: "refill-the-shelf",
		storageBucket: "refill-the-shelf.appspot.com",
		messagingSenderId: "541634737907",
		appId: "1:541634737907:web:75a14c957e75fe52dba986",
        measurementId: "G-NG35NZZEFD",
      };
    
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().signInAnonymously().catch(function(error) {
        // Handle Errors.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage)
	});

	// GLOABL TRANSLATIONS
	import {translations, _ } from 'svelte-intl';

	translations.update({
        de: {
            brand: 'Refill the Shelf',
			tagline: 'Füll das Regal auf und hilf damit Menschen, die durch die Coronakrise in Not sind.',
			layer: 'Regal-Ebene',
        },
        en: {
			brand: 'Refill the Shelf',
			tagline: 'Refill the shelf and help people who are in need due to the corona crisis.',
            layer: 'shelf-layer'
        },
	});

	// PRELOAD SHELF SVG TO PREVENT UGLY GLITCHES ON PRICETAG
	function preloadImage(){
		var img=new Image();
		img.src='./assets/images/layer.svg';
		img.onload = function() {
			document.body.classList.add('layer_graphic_loaded');
		}
    };

	onMount(() => {
		preloadImage();
	})

</script>

<style lang="scss" global>
	@import "./styles/global.scss";
</style>

<div class="wrapper">
	<Header />
	<main>
		<Route />
		<!-- <div class="debug" style="margin-top: 5rem;">
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
		</div> -->
	</main>
</div>