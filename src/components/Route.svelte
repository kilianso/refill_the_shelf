<script>
  import { onDestroy } from 'svelte';
  import { user, curRoute } from '../store';
  import router from '../router';

  let component;
  const unsubscribe = curRoute.subscribe(value => {
    component = router.filter(r => r.path === $curRoute)[0].component;
  })

onDestroy(unsubscribe);

</script>

<style>
.main-container {
  padding: 1rem;
}
</style>

<div class="main-container">
  <svelte:component {...$user} this={component} />
</div>