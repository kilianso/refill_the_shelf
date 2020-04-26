<script>
  import { onDestroy } from 'svelte';
  import { userLayer, curRoute } from '../../store';
  import router from '../../router';

  let component;
  const unsubscribe = curRoute.subscribe(value => {
    component = router.filter(r => r.path === $curRoute)[0].component;
  })

  let userLayerFromLocalStorage = localStorage.getItem('userLayer');
  let userLayerFromStore = JSON.stringify($userLayer);

  if(userLayerFromLocalStorage && userLayerFromLocalStorage !== userLayerFromStore) {
    //console.log('there is a userLayer object in the localstore that is not equal to the userLayer object in the Svelte store. I'm gonna use the one in the localStorage to keep the right route and prefill stuff after redirect / reload)
    userLayer.update((entries) => {
      entries = JSON.parse(userLayerFromLocalStorage);
      return entries;
    });
  }

  // check if there is already a subpage in the URL
  if(location.pathname !== '/' && $userLayer.layerPrice || location.pathname == '/about') {
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