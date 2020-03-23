<script>
    let dropzones = [0,1,2,3];
</script>
<style lang="scss" global>
    @import './Dropzone.scss';
</style>
<div class="grid dropzone">
    {#each dropzones as {dropzone}, i}
        <div class="droppable" data-position={i}></div>
    {/each}
</div>