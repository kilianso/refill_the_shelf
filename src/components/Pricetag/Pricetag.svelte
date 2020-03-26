<script>
    import {userLayer, layerPrice} from '../../store';
</script>

<style lang="scss" src='./Price.scss'></style>

<div class="pricetag">
    <div class="pricetag__text">
        <strong>{$userLayer.name}</strong>
        <span>{$userLayer.message}</span>
    </div>
    <div class="pricetag__price">{$layerPrice} CHF</div>
</div>