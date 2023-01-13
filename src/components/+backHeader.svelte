
<script>
    import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';

    const goBack = () =>{
        history.back()
    };

</script>

<div class="s-product-name"><button on:click={goBack} class="go-back-btn"><FaArrowLeft/></button></div>