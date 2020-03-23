<script>
    export let price;
    export let icon;
    export let alt;
</script>
<style></style>
<div class="draggable" data-price={price} data-icon={icon} data-alt={alt}>
    <img class="draggable__media" src={icon} alt={alt}/>
    <span class="draggable__remove js-remove"></span>
</div>