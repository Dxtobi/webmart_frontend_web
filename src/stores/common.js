import { writable } from "svelte/store";

export const searchObjects = writable({
    global_search_query: '',
    showHero:true
})