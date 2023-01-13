
<script>
    export let item_name
    let selected = false
    console.log(item_name)

    function selectFun(params) {
        selected = !selected
    }
</script>

<button on:click={selectFun} class={`f-o-btn ${selected && 'filter-active'}`}>{item_name}</button>