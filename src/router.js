import Feed from './pages/Feed.svelte';
import Create from './pages/Create.svelte';
import Save from './pages/Save.svelte';
import Donate from './pages/Donate.svelte';
import About from './pages/About.svelte';

export default [
  {
    path: '/',
    name: 'Feed',
    component: Feed,
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/save',
    name: 'Save',
    component: Save,
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  }
]