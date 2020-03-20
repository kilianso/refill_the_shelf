<script>
    import Link from '../components/Link.svelte';
    import {translations, _ } from 'svelte-intl';
    
    translations.update({
        de: {
            do_title: 'Toll gemacht!',
            do_cta: 'Jetzt teile es mit Freunden',
            do_label: 'Spenden',
            do_msg: 'Gib etwas an jene zurück, die ihre Reserven selbst nicht auffüllen können. Spende jetzt an ein Hilfswerk. Danke!',
            do_charities: 'Caritas, Rotes Kreuz, Pro Senectute',
            do_cta2: 'Nein, Danke'
        },
        en: {
            do_title: 'Nice one!',
            do_cta: 'Now share this with friends',
            do_label: 'Donation',
            do_msg: 'Give something back to the ones, who cannot refill. Select a charity and donate now. Thank you!',
            do_charities: 'Caritas, Red Cross, Pro Senectute',
            do_cta2: 'No, thanks'
        },
    })

    $: charityArray = $_('do_charities').split(',');

</script>

<div class="sharing">
    <p><strong>{$_('do_title')}</strong></p>
    <p>{$_('do_cta')}</p>
    <p>Social Icons</p>
</div>

<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>

<strong>{$_('fe_msg_title')}</strong>
<p>{$_('fe_msg')}</p>

<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>
<div class="layer">{$_('layer')}</div>

<strong>{$_('do_label')}</strong>
<p>{$_('do_msg')}</p>
<ul>
    {#each charityArray as charity }
        <li>
            {charity}
        </li>
    {/each}
</ul>
<div class="buttons">
    <button class="btn btn--secondary">No, thanks</button>
</div>