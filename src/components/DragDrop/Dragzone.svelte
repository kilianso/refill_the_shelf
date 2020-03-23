<script>
    import Item from './Item.svelte';
    const items = [
        {price: 1, icon: './assets/images/toilet.svg', alt: 'Toiletpaper'},
        {price: 2, icon: './assets/images/cans.svg', alt: 'Soap'},
        {price: 5, icon: './assets/images/can.svg', alt: 'Pasta'},
        {price: 10, icon: './assets/images/toilet.svg', alt: 'Ravioli'},
        {price: 20, icon: './assets/images/cans.svg', alt: 'Sanatizer'},
        {price: 50, icon: './assets/images/toilet.svg', alt: '50CHF'},
        {price: 100, icon: './assets/images/can.svg', alt: '100CHF'},
        {price: 200, icon: './assets/images/cans.svg', alt: '200CHF'}
    ];
</script>
<style lang="scss" global>
    @import './Dragzone.scss';
</style>

<div class="grid dragzone">
    {#each items as item }
        <Item {...item} />
    {/each}
    <!-- <div class="draggable" data-price="1" data-id="1">
        <span class="draggable__content">icon</span>
        <span class="draggable__remove js-remove"></span>
    </div>
    <div class="draggable">
        <span class="draggable__content" data-price="2" data-id="2">icon</span>
        <span class="draggable__remove js-remove"></span>
    </div>
    <div class="draggable" data-price="5" data-id="3">
        <span class="draggable__content">icon</span>
        <span class="draggable__remove js-remove"></span>
    </div>
    <div class="draggable" data-price="10" data-id="4">
        <span class="draggable__content">icon</span>
        <span class="draggable__remove js-remove"></span>
    </div> -->
    <!-- <div class="draggable" data-price="30" data-id="5">
        <span class="draggable__content">icon</span>
        <span class="draggable__remove js-remove"></span>
    </div>
    <div class="draggable" data-price="20" data-id="6">
        <span class="draggable__content">icon</span>
        <span class="draggable__remove js-remove"></span>
    </div>
    <div class="draggable" data-price="100" data-id="7">
        <span class="draggable__content">icon</span>
        <span class="draggable__remove js-remove"></span>
    </div>
    <div class="draggable" data-price="50" data-id="8">
        <span class="draggable__content">icon</span>
        <span class="draggable__remove js-remove"></span>
    </div> -->
</div>