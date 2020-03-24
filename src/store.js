import { writable, derived } from 'svelte/store';

export const curRoute = writable('/');
export const user = writable(undefined);

export const feedLayers = writable([]);
/* single feed layer should have the following data - will be fetched from database
layer: {
    id: null,
    name: '',
    message: '',
    layerPrice,
    items: [
        {
            taken: false,
            price: 0,
            icon: '',
            alt: ''
        }
    ]
}
*/
export const userLayer = writable(
    [
        {
            price: 0,
            icon: '',
            alt: ''
        },
        {
            price: 0,
            icon: '',
            alt: ''
        },
        {
            price: 0,
            icon: '',
            alt: ''
        },
        {
            price: 0,
            icon: '',
            alt: ''
        }
    ]
);

function calculateTotal (userLayer) {
    let total = 0;
    userLayer.forEach((el)=> {
        total += parseInt(el.price);
    });
    return total;
}

// syntax of derived store
//derived(storeName, ($storeValues) => {})

export const layerPrice = derived(userLayer,($userLayer) => {
      return calculateTotal($userLayer);
    }
)