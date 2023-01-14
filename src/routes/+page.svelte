<script>
	
	//import {CatgoryButton} from "../components/CompIndex";

	import { Hero, SearchBar } from "../components/CompIndex";

    import { fly } from "svelte/transition";

	export let data;
    //console.log(data)
    const {products, categories, filter} = data;

    let search_query = '';
    let displayHero = true;

    function toggleHero() {
       // console.log(displayHero, "<<<")
       if (search_query.trim().length > 0 && displayHero===false) {
        return
       }
        displayHero=!displayHero
    }
    
     function name(one, two) {
        console.log(one, two)
    }
    
    $:name(displayHero, search_query)
    

</script>
<div class="" transition:fly="{{delay:100, y:0, duration:200, x:100}}">
    <div class="search_text">{search_query}</div>
    <SearchBar bind:search_query on:searching={toggleHero} {filter}/>

    {#if displayHero}
        <Hero {categories} />
    {/if}
    
    <div class="divider-1">
        <div class="divider-text">Popular</div>
        <button class="divider-btn">View All</button>
    </div>
    <section class="market-items-holder">
        <div class="market-items-holder-inner-div">
            
            {#each products as product (product.title)}
                <a href={`/${product.title}`} class="market-items-item">      
                    <div class="mii-img-div">
                        <div class="mii-type">{product.inStock? 'In Stock' : 'Out Of Stuck'}</div>
                        <div class="mii-price">${product.price}</div>
                        <div class="mii-ratings">4.5</div>
                        <img class="mii-img-div-img" alt='' src={product.images[0]}/>
                    </div>
                    <div class="mii-name">{product.title}</div>    
                </a>
            {/each}

      
           
        </div>
    </section>
</div> 