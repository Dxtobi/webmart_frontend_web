
<script>
    import { createEventDispatcher } from 'svelte';
    import { fly } from "svelte/transition";
	import FilterButton from './+filterButton.svelte';
    export let filter;

    const {tags, location, brands} = filter;
    const condition = ['Both', 'New', 'Used', 'Refurbish']
    console.log(location)
    const dispatch = createEventDispatcher()

    function closeFilter() {
        dispatch('closeFilter')
    }

</script>


<div class="filter-container" >
    <div class="s-product-name"><button on:click={closeFilter} class="go-back-btn">X</button><div>Filter</div></div>
   <div class="single-product" transition:fly="{{delay:100, y:0, duration:200, x:100}}">
    <section class="image-side">
        <div class="s-product-name"><h3>Product Type</h3></div>
        <div class="class-product-filter-flow-display">

            {#each tags as tag }
            <FilterButton item_name={tag}  type={'tags'}/>
            {/each}
            
            
        </div>
       
        <div class="divider-2">
            <div class="divider-text">Brands</div>
            <div class="d-objects">
                <div class="d-o-1"></div>
                <div class="d-o-2"></div>
                <div class="d-o-3"></div>
            </div>
        </div>
        <div class="class-product-filter-flow-display">
            {#each brands as brand }
                <FilterButton item_name={brand}  type={'brand'}/>
            {/each}
        </div>

        <div class="divider-2">
            <div class="divider-text">Condition</div>
            <div class="d-objects">
                <div class="d-o-1"></div>
                <div class="d-o-2"></div>
                <div class="d-o-3"></div>
            </div>
        </div>
        <div class="class-product-filter-flow-display">
            {#each condition as cond}
            <FilterButton item_name={cond} type={'condition'}/>
            {/each}

        </div>

        <div class="divider-2">
            <div class="divider-text">Shiping From</div>
            <div class="d-objects">
                <div class="d-o-1"></div>
                <div class="d-o-2"></div>
                <div class="d-o-3"></div>
            </div>
        </div>
        <div class="class-product-filter-flow-display">
            {#each location as loc }
                <FilterButton item_name={loc}  type={'location'}/>
            {/each}
        </div>
    </section>

    <section class="more-details">
       <div class="f-p-comp">
        <div class="s-product-name"><h3>Price Range</h3></div>
        <div class="filter-price-div">
            <div class="flex-div"><div>Min</div> <div>$100</div></div>
            <input type="range" class="filter-price-input"/>
        </div>

        <div class="filter-price-div">
            <div class="flex-div"><div>Max</div> <div>$200</div></div>
            <input type="range" class="filter-price-input"/>
        </div>

        <button class="pay-button-cart " on:click={closeFilter}>Apply Filter</button>
       </div>
    </section>
   </div>

   
</div> 