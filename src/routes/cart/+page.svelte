
<script>
	import Cartitem from "../../components/+cartitem.svelte";

    let c = [1, 2, 3, 4]
</script>

<div >
    <div class="s-product-name"><button class="go-back-btn" on:click={()=>history.back()}>Back</button><div>Cart</div></div>
   <div class="single-product">
    <section class="image-side">
        <div class="cart-lista">
            {#each c as ce}
                <Cartitem cart={ce}/>
            {/each}
        </div>
    </section>
    <section class="more-details">
       <div class="staying-fixed">
        <div class="s-product-name"><div>Wallet Ballance</div> <div style="color: #738b6a;">$2000</div></div>
        <div class="description-content inner-width">
            <div class="flex-div"><div>5 items </div><div>Way Bill: $200</div></div>
            <button class="pay-button-cart ">PAY $19000</button>
        </div>
       </div>
    </section>
   </div>

   
</div> 