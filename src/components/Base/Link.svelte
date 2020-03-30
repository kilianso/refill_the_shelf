<script>
  import { curRoute } from '../../store';
  
  export let page;
  export let ariaLabel;
  export let linkClass = '';

  function redirectTo(event){
    // go to top
    window.scrollTo(0, 0);
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    // change current router path
    curRoute.set(event.target.pathname);
    // push the path into web browser history API
    window.history.pushState({path: page.path}, '', window.location.origin + page.path);
  }
  
</script>

<a class={linkClass} href={page.path} on:click|preventDefault={redirectTo} aria-label={ariaLabel ? ariaLabel : null}>{page.name}</a>