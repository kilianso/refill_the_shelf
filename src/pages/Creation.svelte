<script>
    import Link from '../components/Base/Link.svelte';
    import Dragzone from '../components/DragDrop/Dragzone.svelte';
    import Dropzone from '../components/DragDrop/Dropzone.svelte';
    
    import Sortable from 'sortablejs/modular/sortable.core.esm.js';
    import { translations, _ } from 'svelte-intl';
    import { onMount } from 'svelte';
    import { userLayer, storeLayerPrice } from '../store';

    translations.update({
        de: {
            cr_title: 'Schritt 1/4 — Zieh Artikel ins Regal',
            // cr_tabs: 'Hygiene, Essen, Spezial',
            cr_cta: 'Nächster Schritt',
            cr_cta2: 'Zurück',
            cr_more: 'Mehr Produkte',
        },
        en: {
            cr_title: 'Step 1/4 — Drag items to the shelf',
            // cr_tabs: 'Hygiene, Food, Specials',
            cr_cta: 'Next step',
            cr_cta2: 'Back',
            cr_more: 'More products',
        },
    });
    
    let audioUp = 'assets/audio/up.mp3',
        audioDown = 'assets/audio/down.mp3',
        dragzone,
        dropzones;
    
    // $_('cr_tabs').split(',');

    onMount(() => {
        
        dropzones = document.querySelectorAll('.droppable');
        dragzone = document.querySelectorAll('.dragzone');

        dropzones.forEach((el, i) => {
            const sortable = new Sortable(el, {
                group: {
                    name: 'dropzone',
                    put: function (to) {
                        return to.el.children.length < 1;
                    }
                },
                delay: 0,
                animation: 250,
                filter: '.js-remove',
                supportPointer: false,  // safari has drag glitches without this
                onFilter: function(evt){                    
                    let item = evt.item,
                        ctrl = evt.target;

                    if (Sortable.utils.is(ctrl, ".js-remove")) {  // Click on remove button
                        evt.from.removeChild(evt.item);
                        evt.from.classList.remove('taken'); // remove taken class
                    }
                    // remove item from layer in store                       
                    userLayer.update((entries) => {
                        entries.items[evt.to.dataset.position] = {price: 0, icon: '', alt: ''};
                        return entries
                    });
                },
                onStart: function (evt, originalEvent) {
                    document.body.classList.add('lock');
                    evt.from.classList.remove('taken');            
                },
                onEnd: function (evt, originalEvent) {
                    document.body.classList.remove('lock');
                    if (evt.to.classList.contains('droppable')) {
                        evt.to.classList.add('taken');
                    }
                },
                onSort: function(evt) {
                    userLayer.update((entries) => {
                        if(evt.from.dataset.position) {
                            entries.items[evt.from.dataset.position] = {price: 0, icon: '', alt: ''};
                        }
                        entries.items[evt.to.dataset.position] = {...evt.item.dataset};  
                        return entries
                    });                    
                }
            });
        });
    
        dragzone.forEach((el, i) => {
            const sortable = new Sortable(el, {
                group: {
                    name: 'dragzone',
                    put: false,
                    pull: 'clone'
                },
                delay: 0,
                animation: 250,
                supportPointer: false, // safari has drag glitches without this
                onStart: function (evt, originalEvent) {
                    document.body.classList.add('lock');
                },
                onEnd: function (evt, originalEvent) {
                    document.body.classList.remove('lock');
                    if (evt.to.classList.contains('droppable')) {
                        evt.to.classList.add('taken');
                    }
                }
            });
        });
    });

</script>
<section class="stage">
    <Dropzone route={'creation'}/>
</section>
<section class="modal">
    <h2 class="title" tabindex="0">{$_('cr_title')}</h2>
    <Dragzone />
    <div class="buttons">
        {#if $storeLayerPrice}
            <Link linkClass={'btn btn--primary'} page={{path: '/message', name: $_('cr_cta')}}/>
        {:else}
            <Link linkClass={'btn btn--primary is-disabled'} page={{path: '/creation', name: $_('cr_cta')}}/>
        {/if}
        <Link linkClass={'btn btn--tertiary'} page={{path: '/', name: $_('cr_cta2')}}/>
    </div>
</section>