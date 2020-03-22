<script>
    import Link from '../components/Link.svelte';
    import Dragzone from '../components/DragDrop/Dragzone.svelte';
    import Dropzone from '../components/DragDrop/Dropzone.svelte';
    import Sortable from 'sortablejs/modular/sortable.core.esm.js';
    import { translations, _ } from 'svelte-intl';
    import { onMount } from 'svelte';
    
    translations.update({
        de: {
            cr_title: 'Schritt 1/3 — Zieh Artikel ins Regal',
            // cr_tabs: 'Hygiene, Essen, Spezial',
            cr_cta: 'Nächster Schritt',
        },
        en: {
            cr_title: 'Step 1/3 — Drag items on the shelf',
            // cr_tabs: 'Hygiene, Food, Specials',
            cr_cta: 'Next step',
        },
    })

    let audioUp = 'assets/audio/up.mp3',
        audioDown = 'assets/audio/down.mp3',
        dragzone,
        dropzones;
    //$: tabArray = $_('cr_tabs').split(',');

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
                    //pull: 'clone' // To clone: set pull to 'clone'
                },
                delay: 0,
                animation: 250,
                filter: '.js-remove',
                supportPointer: false, // safari needs this
                onFilter: function(evt){
                    let item = evt.item,
                        ctrl = evt.target;
                    if (Sortable.utils.is(ctrl, ".js-remove")) {  // Click on remove button
			            item.parentNode.removeChild(item); // remove sortable item
			            el.classList.remove('taken'); // remove taken class
		            }
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
                supportPointer: false, // safari needs this
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
<p class="title">{$_('cr_title')}</p>
<Dropzone />
<!-- <ul>
    {#each tabArray as tab }
        <li>
            {tab}
        </li>
    {/each}
</ul> -->
<br>
<br>
<hr>
<br>
<br>
<Dragzone />
<br>
<br>
<div class="buttons">
    <Link linkClass={'btn btn--primary'} page={{path: '/message', name: $_('cr_cta')}}/>
</div>
<br>
<br>
<hr>
<br>
<br>
<div>
    <p>Drag & Drop sounds</p>
    <audio src="{audioUp}" type ="audio/mp3" preload="auto" controls></audio>
    <audio src="{audioDown}" type ="audio/mp3" preload="auto" controls></audio>
</div>