<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import BiArrowBack from "svelte-icons-pack/bi/BiArrowBack";

    import AiFillWallet from "svelte-icons-pack/ai/AiFillWallet";
    import FaSolidShippingFast from "svelte-icons-pack/fa/FaSolidShippingFast";
    import BsBox2Fill from "svelte-icons-pack/bs/BsBox2Fill";
    import AiFillCheckCircle from "svelte-icons-pack/ai/AiFillCheckCircle";

    import BsBagHeartFill from "svelte-icons-pack/bs/BsBagHeartFill";
    import AiFillShop from "svelte-icons-pack/ai/AiFillShop";
    import BiSolidOffer from "svelte-icons-pack/bi/BiSolidOffer";
    import { fly } from "svelte/transition";
</script>   



<div class='profile-container' transition:fly="{{delay:100, y:300, duration:200, x:100}}">

    <div class='p-header'>
        <img src='/favicon.png' alt='' class='p-img'/>
        <div class='p-name'>Joseph Akanbi</div>
    </div>

    <div class='p-sub-header'>
        <button class='p-sub-button-header'>
            <Icon src={BsBagHeartFill} color="white" size="24" title="go back" />
            <div class='p-sub-i-text'>wish list</div>
        </button>
        <button class='p-sub-button-header'>
            <Icon src={AiFillShop} color="white" size="24" title="go back" />
            <div class='p-sub-i-text'>following</div>
        </button>
        <button class='p-sub-button-header'>
            <Icon src={BiSolidOffer} color="white" size="24" title="go back" />
            <div class='p-sub-i-text'>offers</div>
        </button>
    </div>

    <div class='p-sub-order'>
        <button class='p-sub-button'>
            <Icon src={AiFillWallet} color="black" size="24" title="go back" />
            <div class='p-sub-i-text'>Un paid</div>
        </button>
        <button class='p-sub-button'>
            <Icon src={FaSolidShippingFast} color="black" size="24" title="go back" />
            <div class='p-sub-i-text'>shipped</div>
        </button>
        <button class='p-sub-button'>
            <Icon src={BsBox2Fill} color="black" size="24" title="go back" />
            <div class='p-sub-i-text'>to be shipped</div>
        </button>
        <button class='p-sub-button'>
            <Icon src={AiFillCheckCircle} color="black" size="24" title="go back" />
            <div class='p-sub-i-text'>received</div>
        </button>
    </div>
</div>