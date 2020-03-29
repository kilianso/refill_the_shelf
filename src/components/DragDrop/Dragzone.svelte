<script>
    import Item from './Item.svelte';
    const items = [
        {price: 1, icon: './assets/images/items/toiletPaper.svg', alt: 'Toiletpaper'},
        {price: 2, icon: './assets/images/items/faceMask.svg', alt: 'Mask'},
        {price: 3, icon: './assets/images/items/tunaCan.svg', alt: 'Tuna'},
        {price: 5, icon: './assets/images/items/pasta.svg', alt: 'Pasta'},
        {price: 10, icon: './assets/images/items/sanatizer.svg', alt: 'Sanatizer'},
        {price: 10, icon: './assets/images/items/soap.svg', alt: 'Soap'},
        {price: 15, icon: './assets/images/items/oil.svg', alt: 'Oil'},
        {price: 20, icon: './assets/images/items/20Stutz.svg', alt: '20CHF'},
    ];
</script>
<style lang="scss" global>
    @import './Dragzone.scss';
</style>

<div class="grid dragzone">
    {#each items as item }
        <Item {...item} />
    {/each}
</div>