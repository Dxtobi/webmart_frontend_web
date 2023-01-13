
<script>
    import Carousel from 'svelte-carousel'
	import { CategoryButton } from "./CompIndex";
    import { fly } from "svelte/transition";

    export let categories 
    
    //console.log(category)
</script>
<section class="hero-category" transition:fly="{{delay:100, y:200, duration:200}}">
    <div class="slider">
        <div class="carosel-slider">
            <div class="c-s-text">
                <p>Lorem ipsum dolor sit amet.</p>
                <h2 class="big-text">50% OFF</h2>
            </div>
            <img src="/favicon.png" alt="" class="c-s-img"/>
        </div>
        <div><span class="span-active"/><span class="span-"/><span class="span-"/></div>
    </div>
    <div class="category-div">
        <button class="category-item">All</button>
        {#each categories as category}
            <CategoryButton {category}/>
        {/each}
        
        
    </div>
</section>