
<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import BiSearch from "svelte-icons-pack/bi/BiSearch";
    import BiFilter from 'svelte-icons-pack/bi/BiFilter';
	import { createEventDispatcher } from 'svelte';
    
	import Filter from './+filter.svelte';
    const dispatch = createEventDispatcher()
    export let search_query
    export let filter
    //console.log(filter) 
    let boolFilter = false
    function dispatchFocus() {
        dispatch('searching')
    }
    function changeText(e) {
        search_query = search_query
    }
    function closeFilter() {
        boolFilter = !boolFilter
    }
</script>

<div class="search-component ">
    <div class="search-input-icon-div">
        <input class="search-input" type="search" placeholder="Search..."
         on:blur={dispatchFocus} 
         on:focus={dispatchFocus} 
         bind:value={search_query}
         on:input={changeText}
         />
        <button class="search-icon"><Icon src={BiSearch} color="red" size="24" title="search" /></button>
    </div>
    <button on:click={closeFilter} class="filter-icon">
        <Icon src={BiFilter} color="white" size="24" title="Filter products" />
    </button>
</div>

{#if boolFilter}
    <Filter on:closeFilter={closeFilter} {filter}/>
{/if}