Vue.component('product-item', {
    // name: 'product-item',
    props: ['item'], 
    template: `
        <div class="product-item" :data-id="item.product_id">
            <img src="http://placehold.it/150x200">
            <h4>{{item.product_name}}</h4>
            <div class="price">{{item.price}} рублей</div>
            <button :data-id="item.id_product" class="btnMinus" @click="$emit(decrementNum,$event)">-</button>
            <input :data-id="item.id_product" type="number" name="nunProd" value="1">
            <button :data-id="item.id_product" class="btnPlus" @click="$emit(incrementNum,$event)">+</button><br>
            <button :data-id="item.id_product" class="btnBuyIt" @click="$emit(putInBasket,$event)">Купить</button>
        </div>`
});

export default Vue.component('catalog-page', {
    // name: 'catalogPage',
    props: ['products'], 
    template: `
        <div id="catalog">
            <product-item 
                v-for="product of products" 
                :key="product.id_product" 
                :item="product">
            </product-item>
        </div>`
});