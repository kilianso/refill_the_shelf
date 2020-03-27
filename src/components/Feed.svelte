<script>
    import Loader from '../components/Loader.svelte';

	import { onMount } from "svelte";
    import { _ } from 'svelte-intl';

	import { FirebaseApp, User, Doc, Collection, collectionStore } from "sveltefire";
	import firebase from "firebase/app";
	import "firebase/firestore";
	import "firebase/auth";
	import "firebase/performance";
    import "firebase/analytics";

	let firebaseConfig = {
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

    const   db = firebase.firestore(),
            pageSize = 10,
            orderField = 'createdAt',
            timestamp = firebase.firestore.FieldValue.serverTimestamp(),
            incrementLayers = firebase.firestore.FieldValue.increment(1),
            incrementDonations = firebase.firestore.FieldValue.increment(10),
            totalRef = db.collection('global').doc('total');
    
    let query = (ref) => ref.orderBy(orderField, 'desc').limit(pageSize),
        total,
        postCounter = pageSize;

    // global document reference
    async function getTotal() {
        const snapshot = await totalRef.get();
        total = snapshot.data();        
    };

    function prevPage (first) {
        window.scrollTo(0, 0);
        postCounter -= pageSize;
        query = (ref) => ref.orderBy(orderField, 'desc').endBefore(first[orderField]).limitToLast(pageSize);
    }
    function nextPage (last) {
        window.scrollTo(0, 0);
        postCounter += pageSize;
        query = (ref) => ref.orderBy(orderField, 'desc').startAfter(last[orderField]).limit(pageSize);
    }

    onMount(()=> {
        getTotal();
    })
    
    // TODO - store loaded stuff

    // let allPosts = [];

    // function storeLoadedStuff(event) {        
    //     if(event.detail.data) {
    //         const dataBatch = event.detail.data;
    //         dataBatch.forEach((entry) => {
    //             allPosts = [...allPosts, entry]
    //         });
    //     }
    // }
    // Could put this listener the <Collection /> component since it's dispatching an event with the new data
    // on:data={(data) => storeLoadedStuff(data)}

</script>
  <!-- 1. 🔥 Firebase App -->
  <section class="feed">    
  <FirebaseApp {firebase}>   
    <Collection path={'posts'} 
        {query}
        let:data={posts}
        let:ref={postRef}
        let:last={last}
        let:first={first}
        log>
        <!-- Pagination -->        
          {#each posts as post}
            <p>
              ID: <em>{post.ref.id}</em>
            </p>
            <p>
              {post.text}
              <button on:click={() => {
                    post.ref.delete();
                    totalRef.delete();
                  }}>Delete</button>
            </p>
          {/each}

          <button
            on:click={() => {
                postRef.add({
                    text: 'Juhuuuuuu',
                    createdAt: timestamp
                });
                totalRef.update({layers: incrementLayers, donations: incrementDonations}).then((response)=> {
                    getTotal();
                });
              }}>
            Add post
          </button>
        {#if posts.length && posts.length < total.layers}
          {#if postCounter > posts.length && posts.length}
              <button on:click={() => prevPage(first)}>{$_('fe_prev')}</button>
          {/if}
          {#if total.layers > postCounter && posts.length}
              <button on:click={() => nextPage(last)}>{$_('fe_next')}</button>
          {/if}
        {/if}
          <div slot="loading">
            <p class="messages">
                {$_('fe_loading')}
            </p>
            <Loader />
          </div>
          <div slot="fallback">
            {$_('fe_error')}
          </div>
    </Collection>
  </FirebaseApp>
</section>