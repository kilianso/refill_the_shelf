<script>
    import Link from '../components/Link.svelte';
    import Dragzone from '../components/DragDrop/Dragzone.svelte';
    import Dropzone from '../components/DragDrop/Dropzone.svelte';
    import { translations, _ } from 'svelte-intl';
    
    translations.update({
        de: {
            cr_drop: 'Zieh Artikel hier hin',
            // cr_tabs: 'Hygiene, Essen, Spezial',
            cr_cta: 'Preisschild hinzufügen',
            cr_items: 'Artikel Icons'
        },
        en: {
            cr_drop: 'Drag items here',
            // cr_tabs: 'Hygiene, Food, Specials',
            cr_cta: 'Add a pricetag',
            cr_items: 'article icons'
        },
    })

    let audioUp = 'assets/audio/up.mp3',
        audioDown = 'assets/audio/down.mp3';
    
    //$: tabArray = $_('cr_tabs').split(',');

</script>

<div class="layer dropzone">{$_('cr_drop')}</div>
<Dropzone />
<!-- <ul>
    {#each tabArray as tab }
        <li>
            {tab}
        </li>
    {/each}
</ul> -->
<div class="layer">{$_('cr_items')}</div>
<Dragzone />
<div class="buttons">
    <Link linkClass={'btn btn--primary'} page={{path: '/save', name: $_('cr_cta')}}/>
</div>
<br>
<br>
<hr>
<div>
    <p>Drag & Drop sounds</p>
    <audio src="{audioUp}" type ="audio/mp3" preload="auto" controls></audio>
    <audio src="{audioDown}" type ="audio/mp3" preload="auto" controls></audio>
</div>