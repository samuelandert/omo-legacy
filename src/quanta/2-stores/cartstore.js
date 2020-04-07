import {
    writable
} from "svelte/store"

const cartstore = writable([{
        id: "p3",
        title: "Ein Puzzle",
        price: 5.99
    },
    {
        id: "p4",
        title: "Eine Decke",
        price: 8.99
    }
]);

export default cartstore;