<script>
import '../app.css';
import '../mobile.css';
import Icon from 'svelte-icons-pack/Icon.svelte';
import CgProfile from "svelte-icons-pack/cg/CgProfile";

import ImCart from "svelte-icons-pack/im/ImCart";
</script>

<div class="header">
    <header class="header">
        <div class="header-inner">
            
            <a href="/">
                <div class="brand-names">
                    <div class="bn1">Web</div>
                    <div class="bn2">Mart</div>
                </div>
            </a>
            <div class="header-right-items">
                <a href="/cart">
                    <div class="header-chart">
                        <Icon src={ImCart} color="#cf4952" size="20" title="Custom icon params" />
                    </div>  
                </a>
                <a href="/profile">
                    <div class="header-brand">
                        <Icon src={CgProfile} color="#cf4952" size="30" title="Custom icon params" />
                    </div>
                </a>
            </div>
        </div>
       </header> 
       <div class="app">
        <slot/>
       </div>
    
</div>