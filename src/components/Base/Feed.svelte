<script>
    import Loader from '../Base/Loader.svelte';
    import Dropzone from '../DragDrop/Dropzone.svelte';
    import TotalLayer from '../DragDrop/TotalLayer.svelte';
    
    import {userLayer} from "../../store";

    import firebase from "firebase/app";
    import { FirebaseApp, User, Collection } from "sveltefire";

    import { _ } from 'svelte-intl';
    import { createEventDispatcher } from 'svelte'
    
    const dispatch = createEventDispatcher();

    const   pageSize = 5,
            orderField = 'timestamp',
            timestamp = firebase.firestore.FieldValue.serverTimestamp(),
            totalRef = firebase.firestore().collection('global').doc('total');
    
    let query = (ref) => ref.orderBy(orderField, 'desc').limit(pageSize),
        total = {},
        postCounter = 0,
        currentBatch = [],
        allPosts = [];

    $: total = total;

    // totals document reference
    async function getTotal() {
        const snapshot = await totalRef.get();
        total = snapshot.data();
    };

    function loadedPostCount(data) {
        if(currentBatch && currentBatch.length && data.length) {
            if(currentBatch[0].id !== data[0].id) {
                currentBatch = data;
                postCounter += data.length;
                // console.log('new data!', data)
            }
        }else {
            if(data.length) {
                currentBatch = data;
                postCounter += data.length;
                // console.log('initial data!', data)
            }
        }
    }

    function nextPage (e, last) {
        e.preventDefault();
        query = (ref) => ref.orderBy(orderField, 'desc').startAfter(last[orderField]).limit(pageSize);
    }

    const debugData = [
        {
            ref: {id: 1},
            name: 'Kili Vanilli',
            message: 'Super tolli Sach.',
            layerPrice: 20,
            transactionURL: 'https://lalalala.com',
            transactionStatus: 'confirmed',
            items: [
                {price: 1, icon: './assets/images/items/toiletPaper.svg', alt: 'Toiletpaper'},
                {price: 2, icon: './assets/images/items/faceMask.svg', alt: 'Mask'},
                {price: 3, icon: './assets/images/items/tunaCan.svg', alt: 'Tuna'},
                {price: 5, icon: './assets/images/items/pasta.svg', alt: 'Pasta'}
            ]
        },
        {
            ref: {id: 2},
            name: 'Kili Vanilli',
            message: 'Super tolli Sach.',
            layerPrice: 18,
            transactionURL: 'https://lalalala.com',
            transactionStatus: 'confirmed',
            items: [
                {price: 10, icon: './assets/images/items/sanatizer.svg', alt: 'Sanatizer'},
                {price: 10, icon: './assets/images/items/soap.svg', alt: 'Soap'},
                {price: 15, icon: './assets/images/items/oil.svg', alt: 'Oil'},
                {price: 20, icon: './assets/images/items/20Stutz.svg', alt: '20CHF'},
            ]
        }
    ]

</script>
  <section class="feed">
    <!-- // DEBUGGING -->
    <!-- {#if debugData.length}
        {#each debugData as post, i}
            <Dropzone {...post} route={'feed'}/>
        {/each}
    {/if} -->
    {#if allPosts.length}
        {#each allPosts as post, i}
            <Dropzone {...post} route={'feed'}/>
            {#if i === 2}
                <TotalLayer {...total} />
            {/if}
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
                on:data={(data) => {
                    getTotal();
                    dispatch('dataReady');
                    loadedPostCount(data.detail.data ? data.detail.data : 0);
                    if(data.detail.data) {
                        // make sure you'll never append a post twice
                        if(allPosts.some((el) => {return el.timestamp.seconds === data.detail.data[0].timestamp.seconds})) {
                            return;
                        }else {
                            allPosts = [...allPosts, ...data.detail.data];
                        }
                    }
                }}>
                <!-- <p>
                length of this data batch: {posts.length}<br>
                postCounter: {postCounter}<br>
                total layers in database: {total.layers}
                </p>-->
                {#if posts.length && postCounter < total.layers}
                    <div class="buttons more no-gutter">
                        <button class="btn btn--secondary" on:click={(e) => nextPage(e, last)}>{$_('fe_more')}</button>
                    </div>
                {:else}
                    <div class="buttons more no-gutter visibility-hidden">
                        <button class="btn btn--secondary" on:click={(e) => nextPage(e, last)}>{$_('fe_more')}</button>
                    </div>
                {/if}
                <div class="messages" slot="fallback">
                    {$_('fe_error')}
                </div>
            </Collection>
        </User>
    </FirebaseApp>
</section>