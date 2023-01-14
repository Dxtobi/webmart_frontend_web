
<script>
	import {BackBtn, Button} from "../../components/CompIndex";

   
    import { fly } from "svelte/transition";
</script>


<div transition:fly="{{delay:100, y:10, duration:200, x:0}}">
    <div class="single-product">
        <section class="image-side">
            <BackBtn/>
            <div class="image-side-inner">
                <img src="/favicon.png" alt="" class="si-img"/>
            </div>
            <div class="images-and-colors">
                <div class="iac-imgs">
                    <img src="/favicon.png" alt="" class="iac-imgs-img item-active"/>
                    <img src="/favicon.png" alt="" class="iac-imgs-img"/>
                    <img src="/favicon.png" alt="" class="iac-imgs-img"/>
                    <img src="/favicon.png" alt="" class="iac-imgs-img"/>
                </div>
                <div class="iac-colors">
                    <div class="iac-head">colors</div>

                    <div class="flex-div">
                        <div class="iac-imgs-color1 item-active"></div>
                        <div class="iac-imgs-color2"></div>
                        <div class="iac-imgs-color3"></div>
                        <div class="iac-imgs-color4"></div>
                    </div>
                </div>
                <div class="iac-sizes">
                    <div class="iac-head">Sizes</div>
                    <div class="flex-div">
                        <div class="iac-sizes-size">41</div>
                        <div class="iac-sizes-size item-active">43</div>
                        <div class="iac-sizes-size">34</div>
                        <div class="iac-sizes-size">24</div>
                    </div>
                    
                </div>
            </div>
        </section>
        <section class="more-details">
            <div class="s-product-name"><div>Product Name</div> <div style="color: #738b6a;">$2000</div></div>
            <div class="description-content">
                <div class="flex-div">
                    <div>Review</div>
                    <div class="rating-comp">
                        <div class="rating-amout"><div>7.3</div><div>300</div></div>
                        <div class="rating-line">
                            <div class="ratings-color"></div>
                        </div>
                    </div>
                </div>
                 <div class="divider-2">
                    <div class="divider-text">Product Description</div>
                    <div class="d-objects">
                        <div class="d-o-1"></div>
                        <div class="d-o-2"></div>
                        <div class="d-o-3"></div>
                    </div>
                </div>
                <div class="discription-product-s">
                    <p style="text-align: start;">Lorem, ipsum veritatis. Suscipit, enim! Alias, eaque delectus mollitia perferendis assumenda similique itaque adipisci placeat voluptatum soluta eos, voluptas odit asperiores, repellendus ut. Nulla, illo eum quibusdam ullam ab optio praesentium blanditiis deserunt assumenda dolorum adipisci commodi autem corporis voluptates asperiores officia, sunt repellendus minima culpa neque amet iure quasi? Distinctio voluptatibus consequatur vitae praesentium, quis, unde aperiam architecto et dolor, illo reiciendis.</p>
                </div>
                <div class="divider-2">
                    <div class="divider-text">Comments</div>
                    <div class="d-objects">
                        <div class="d-o-1"></div>
                        <div class="d-o-2"></div>
                        <div class="d-o-3"></div>
                    </div>
                </div>
                <section class="comment-section">
                    <div class="add-comment">
                        <div class="add-comment-input-div"><input class="add-comment-input" placeholder="Comment"/><button class="add-comment-btn">Comment</button></div>
                    </div>
                    <div class="comment-box">
                        <div class="comment-header"><div class="comment-name">John Toxic</div><div>2 june</div></div>
                        <div class="comment-comment">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nam?</div>
                    </div>
                    <div class="comment-box">
                        <div class="comment-header"><div class="comment-name">John Toxic</div><div>2 june</div></div>
                        <div class="comment-comment">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nam?</div>
                    </div>
                    <div class="comment-box">
                        <div class="comment-header"><div class="comment-name">John Toxic</div><div>2 june</div></div>
                        <div class="comment-comment">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nam?</div>
                    </div>
                    <div class="comment-box">
                        <div class="comment-header"><div class="comment-name">John Toxic</div><div>2 june</div></div>
                        <div class="comment-comment">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nam?</div>
                    </div>
                </section>
            </div>
        </section>
       </div>
    
       <div class="add-to-cart-contact">
        <div class="contact-seller">
            <div class="cont-icon"></div>
            <div>Contact</div>
        </div>
        <div class="add-to-cart">
            <div class="cont-icon-"></div>
            <div>Add To Cart</div>
        </div>
       </div>
</div>