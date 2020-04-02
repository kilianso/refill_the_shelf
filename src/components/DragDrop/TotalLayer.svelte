<script>
    import { translations, _ } from 'svelte-intl';

    export let layers = 0;
    export let donations = 0;

    translations.update({
        de: {
            fe_ff_title: 'Fakten & Zahlen',
            fe_ff_msg1: 'Aktuell ist unser Regal',
            fe_ff_msg2: 'Meter hoch und es wurden',
            fe_ff_msg3: 'CHF gespendet.'
        },
        en: {
            fe_ff_title: 'Facts & figures',
            fe_ff_msg1: 'At this point, our shelf is',
            fe_ff_msg2: 'meters high and',
            fe_ff_msg3: 'CHF have been donated.'
        },
        fr: {
            fe_ff_title: 'Faits et chiffres',
            fe_ff_msg1: 'A ce stade, notre étagère fait',
            fe_ff_msg2: 'mètres de haut et',
            fe_ff_msg3: 'CHF ont été récoltés.'
        },
    });

</script>

<style>
.layer__total {
    position: relative;
}

.layer__total .message {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 60%;
    text-align: center;
    margin: 0 auto;
    right: 0;
    transform: translateY(-50%);
    font-size: 14px;
}
@media (min-width: 48em) {
    .layer__total .message {
        font-size: 1rem;
    }
}
</style>

<div class="layer layer__total">
    <img class="layer__graphic" src="./assets/images/three_bars.svg" alt="empty shelf">
    <p class="message">
        <strong>{$_('fe_ff_title')}</strong><br>
        {$_('fe_ff_msg1')} {layers / 2} {$_('fe_ff_msg2')} {donations} {$_('fe_ff_msg3')}
    </p>
</div>