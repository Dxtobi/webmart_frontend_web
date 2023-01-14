
<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import BiArrowBack from "svelte-icons-pack/bi/BiArrowBack";

    const goBack = () =>{
        history.back()
    };

</script>

<div class="s-product-name">
    <button on:click={goBack} class="go-back-btn">
        <Icon src={BiArrowBack} color="black" size="24" title="go back" />
    </button>
</div>