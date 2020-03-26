<script>
    import Item from './Item.svelte';
    const items = [
        {price: 1, icon: './assets/images/toilet.svg', alt: 'Toiletpaper'},
        {price: 2, icon: './assets/images/cans.svg', alt: 'Soap'},
        {price: 5, icon: './assets/images/can.svg', alt: 'Pasta'},
        {price: 10, icon: './assets/images/toilet.svg', alt: 'Ravioli'},
        {price: 15, icon: './assets/images/cans.svg', alt: 'Sanatizer'},
        {price: 20, icon: './assets/images/toilet.svg', alt: '50CHF'},
        {price: 25, icon: './assets/images/can.svg', alt: '100CHF'},
        {price: 25, icon: './assets/images/cans.svg', alt: '200CHF'}
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