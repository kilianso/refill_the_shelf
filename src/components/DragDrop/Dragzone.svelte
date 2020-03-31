<script>
    import Item from './Item.svelte';
    const items = [
        {price: 1, icon: './assets/images/items/toiletPaper.svg', alt: 'Toiletpaper'},
        {price: 2, icon: './assets/images/items/faceMask.svg', alt: 'Mask'},
        {price: 3, icon: './assets/images/items/tunaCan.svg', alt: 'Tuna'},
        {price: 5, icon: './assets/images/items/pasta.svg', alt: 'Pasta'},
        {price: 5, icon: './assets/images/items/sanatizer.svg', alt: 'Sanatizer'},
        {price: 7, icon: './assets/images/items/soap.svg', alt: 'Soap'},
        {price: 10, icon: './assets/images/items/oil.svg', alt: 'Oil'},
        {price: 20, icon: './assets/images/items/20Stutz.svg', alt: '20CHF'},
    ];
    
    const getShuffledArr = (arr => {
        const newArr = arr.slice();
        for (let i = newArr.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        }
        return newArr;
    })(items);
    
</script>
<style lang="scss" global>
    @import './Dragzone.scss';
</style>

<div class="grid dragzone">
    {#each getShuffledArr as item }
        <Item {...item} />
    {/each}
</div>