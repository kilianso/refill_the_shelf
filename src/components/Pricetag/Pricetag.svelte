<script>
    import {userLayer, storeLayerPrice} from '../../store';

    export let route = false;
    export let name;
    export let message;
    export let layerPrice;

</script>

<style lang="scss" src='./Pricetag.scss'></style>

<div class="pricetag">
    <label class="pricetag__label">
        <input type="checkbox" name="pricetag__toggle" hidden>
        <div class="pricetag__content">
            <div class="pricetag__text" tabindex={route === 'feed' ? 0 : null}>
                <strong>{route === 'feed' ? name : $userLayer.name}</strong>
                <span>{route === 'feed' ? message : $userLayer.message}</span>
            </div>
            <div class="pricetag__price">{route === 'feed' ? layerPrice : $storeLayerPrice} CHF</div>
        </div>
    </label>
</div>