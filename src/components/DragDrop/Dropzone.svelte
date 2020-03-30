<script>
    import Item from './Item.svelte';
    import Pricetag from '../Pricetag/Pricetag.svelte';

    import { userLayer } from '../../store';

    // used on feed and confirmation route
    export let ref;
    export let items;
    export let name;
    export let message;
    export let layerPrice;

    // used on creation route
    export let route = false;

    let dropzones = [0,1,2,3],
        nonReactiveStoreCopy = $userLayer.items;
        // this is needed to refill the dropzone after route change as soon as the component is mounted.
        // but we don't want to listen to store changes once the user interacts with the draggables, 
        // since this would lead to conflicts with the logic in Creation.svelte
</script>
<style lang="scss" global>
    @import './Dropzone.scss';
</style>
<div class="layer" id="{route === 'feed' ? ref.id : null}">
    <div class="layer__items grid dropzone {route === 'creation' ? 'is-creation': ''}">
        {#if route === 'feed'}
            {#each items as dropzone, i}
                <div class="droppable">
                    <Item price={dropzone.price} icon={dropzone.icon} alt={dropzone.alt} />
                </div>
            {/each}
        {:else}
            {#each dropzones as dropzone, i}
                <div class="droppable {nonReactiveStoreCopy[i].price ? 'taken' : ''}" data-position={i}>
                    {#if nonReactiveStoreCopy[i].price}
                        <Item price={nonReactiveStoreCopy[i].price} icon={nonReactiveStoreCopy[i].icon} alt={nonReactiveStoreCopy[i].alt} />
                    {/if}
                </div>
            {/each}
        {/if}
    </div>
    <div class="layer__shelf">
        <img class="layer__graphic" src="./assets/images/layer.svg" alt="layer">
    </div>
    <Pricetag route={route} {message} {name} {layerPrice}/>
</div>
{#if route === 'feed'}
    <div class="layer__spacing">
        <img class="layer__spacer has--two-bars" src="./assets/images/two_bars.svg" alt="bars">
    </div>
{/if}