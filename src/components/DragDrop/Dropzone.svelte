<script>
    import Item from './Item.svelte';
    import Pricetag from '../Pricetag/Pricetag.svelte';

    import { userLayer } from '../../store';

    export let creationRoute = false;

    let dropzones = [0,1,2,3],
        nonReactiveStoreCopy = $userLayer.items;
        // this is needed to refill the dropzone after route change as soon as the component is mounted.
        // but we don't want to listen to store changes once the user interacts with the draggables, 
        // since this would lead to conflicts with the logic in Creation.svelte
</script>
<style lang="scss" global>
    @import './Dropzone.scss';
</style>
<div class="grid dropzone {creationRoute ? 'is-creation': ''}">
    {#each dropzones as {dropzone}, i}
        <div class="droppable {nonReactiveStoreCopy[i].price && creationRoute ? 'taken' : ''}" data-position={i}>
            {#if nonReactiveStoreCopy[i].price}
                <Item price={nonReactiveStoreCopy[i].price} icon={nonReactiveStoreCopy[i].icon} alt={nonReactiveStoreCopy[i].alt} />
            {/if}
        </div>
    {/each}
</div>
<br>
<Pricetag />