<script>
    import Link from '../../components/Link.svelte';
    import { createEventDispatcher } from 'svelte';
    import {locale} from 'svelte-intl';

    const dispatch = createEventDispatcher();
    
    const raiseNow = () => {
        dispatch("raiseNow");
    }

</script>

<style lang="scss" global>
    @import './DonationWidget.scss';
</style>

<svelte:head>
	<script src="https://widget.raisenow.com/widgets/bre2/caritas-ch/js/dds-init-widget-{$locale}.js" on:load={raiseNow}></script>
</svelte:head>

<div id="bre2-sms">
    <div id="bre2-sms-inner">
        <div class="dds-widget-container">
            <div class="preloader">Loading...</div>
        </div>
    </div>
</div>