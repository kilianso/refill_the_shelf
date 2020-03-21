<script>
    import Link from '../components/Link.svelte';
    import {translations, _ } from 'svelte-intl';
    
    translations.update({
        de: {
            co_title: 'Toll gemacht!',
            co_cta: 'Jetzt teile es mit Freunden',
        },
        en: {
            co_title: 'Nice one!',
            co_cta: 'Now share this with friends',
        },
    })

</script>

<div class="sharing">
    <p><strong>{$_('co_title')}</strong></p>
    <p>{$_('co_cta')}</p>
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