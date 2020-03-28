<script>
  import { onDestroy } from 'svelte';
  import { userLayer, curRoute } from '../../store';
  import router from '../../router';

  let component;
  const unsubscribe = curRoute.subscribe(value => {
    component = router.filter(r => r.path === $curRoute)[0].component;
  })

  // check if there is already a subpage in the URL
  if(location.pathname !== '/' && userLayer.layerPrice || location.pathname == '/about') {
      curRoute.set(location.pathname);
  }else {
      window.history.replaceState(null, null, window.location.origin);
  }

  function popState(event) { 
    curRoute.set(event.state ? event.state.path : '/');
  }

onDestroy(unsubscribe);

</script>
<svelte:window on:popstate={popState}/>
<svelte:component this={component} />