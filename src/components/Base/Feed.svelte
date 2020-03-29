<script>
    import Loader from '../Base/Loader.svelte';
    import Dropzone from '../DragDrop/Dropzone.svelte';

    import firebase from "firebase/app";
    import { FirebaseApp, User, Collection } from "sveltefire";

    import { _ } from 'svelte-intl';
    import { createEventDispatcher } from 'svelte'
    
    const dispatch = createEventDispatcher();

    const   pageSize = 3,
            orderField = 'timestamp',
            timestamp = firebase.firestore.FieldValue.serverTimestamp(),
            incrementLayers = firebase.firestore.FieldValue.increment(1),
            incrementDonations = firebase.firestore.FieldValue.increment(10),
            totalRef = firebase.firestore().collection('global').doc('total');
    
    let query = (ref) => ref.orderBy(orderField, 'desc').limit(pageSize),
        total = 0,
        postCounter = pageSize,
        allPosts = [];

    // totals document reference
    async function getTotal() {
        const snapshot = await totalRef.get();
        total = snapshot.data();
    };

    function nextPage (e, last) {
        e.preventDefault();
        postCounter += pageSize;
        query = (ref) => ref.orderBy(orderField, 'desc').startAfter(last[orderField]).limit(pageSize);
    }

</script>
  <section class="feed">
    {#if allPosts.length}
        {#each allPosts as post, i}
            <Dropzone {...post} route={'feed'}/>
        {/each}
    {/if}
    <FirebaseApp {firebase} perf analytics>
        <User persist={sessionStorage} let:user let:auth>
            <Collection path={'posts'} 
                {query}
                let:data={posts}
                let:ref={postRef}
                let:last={last}
                let:first={first}
                log on:data={(data) => {
                    getTotal();
                    dispatch('dataReady');
                    if(data.detail.data) {
                        // make sure you'll never append a post twice
                        if(allPosts.some((el) => {return el.timestamp.seconds === data.detail.data[0].timestamp.seconds})) {
                            return;
                        }else {
                            allPosts = [...allPosts, ...data.detail.data];
                        }
                    }
                }}>
                {#if posts.length && posts.length < total.layers}
                    {#if total.layers > postCounter && posts.length}
                        <div class="buttons">
                            <button class="btn btn--secondary" on:click={(e) => nextPage(e, last)}>{$_('fe_more')}</button>
                        </div>
                    {/if}
                {/if}
                <div slot="fallback">
                    {$_('fe_error')}
                </div>
                <div slot="loading">
                    <p class="messages">
                        {$_('fe_loading')}
                    </p>
                    <Loader />
                </div>
            </Collection>
        </User>
    </FirebaseApp>
</section>