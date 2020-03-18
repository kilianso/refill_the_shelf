import { writable } from 'svelte/store';

export const curRoute = writable('/');
export const user = writable(undefined);