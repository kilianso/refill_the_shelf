import Feed from './pages/Feed.svelte';
import Create from './pages/Create.svelte';
import Save from './pages/Save.svelte';
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
    path: '/about',
    name: 'About',
    component: About,
  }
]