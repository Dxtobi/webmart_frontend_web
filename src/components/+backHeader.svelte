
<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
  import AiOutlineNodeExpand from 'svelte-icons-pack/ai/AiOutlineNodeExpand';

    const goBack = () =>{
        history.back()
    };

</script>

<div class="s-product-name">
    <button on:click={goBack} class="go-back-btn">
        <Icon src={BiFilter} color="white" size="24" title="Filter products" />
    </button>
</div>