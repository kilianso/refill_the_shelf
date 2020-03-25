<script>
    import Link from '../components/Link.svelte';
    import Dropzone from '../components/DragDrop/Dropzone.svelte';
    import DonationWidget from '../components/DonationWidget/DonationWidget.svelte';

    import {translations, _ } from 'svelte-intl';
    import {layerPrice} from '../store';

    let shelf_height = 400,
        shelf_price = 320000,
        charity = 'Caritas';
    
    translations.update({
        de: {
            do_title: 'Schritt 3/3 — Spende dein Regal',
            do_msg: `Spende jetzt dein Regal an ${charity} und gib etwas an all jene zurück, die ihre Reserven selbst nicht auffüllen können. Danke!`
        },
        en: {
            do_title: 'Schritt 3/3 Donate your shelf',
            do_msg: `Donate your shelf to ${charity} and give something back to the ones, who cannot refill. Thank you!`
        },
    })
</script>
<p class="title">{$_('do_title')}</p>
<Dropzone />
<hr>
<br>
<DonationWidget />
<!-- <p class="message">{$_('do_msg')}</p>-->