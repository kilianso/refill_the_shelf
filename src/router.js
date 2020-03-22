import Feed from './pages/Feed.svelte';
import Creation from './pages/Creation.svelte';
import Message from './pages/Message.svelte';
import Donation from './pages/Donation.svelte';
import Confirmation from './pages/Confirmation.svelte';
import About from './pages/About.svelte';

export default [
  {
    path: '/',
    name: 'Feed',
    component: Feed,
  },
  {
    path: '/creation',
    name: 'Creation',
    component: Creation,
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
  },
  {
    path: '/donation',
    name: 'Donation',
    component: Donation,
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: Confirmation,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  }
]