Vue.component('product-short', {
    props: ['item'], 
    template: `
        <div class="basket-item">
            <img src="http://placehold.it/50x50">
            <b>{{item.product_name}}</b>
            <div class="price">{{item.quantity}} шт. на {{item.price*item.quantity}} рублей</div>
        </div>
        `
});

export default Vue.component('basket', {
    props: ['products'],
    data: () =>{
        return {
            showBasket: false,
            amount: 0,
            content: []
        }
    },
    template: `
        <div class="basket" @click="showBasket = !showBasket">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <div class="basketContent"> {{ amount }} рублей</div>
            <div class="basketList" v-if="showBasket">
                <p v-if="amount == 0">Ваша корзина пуста</p>
                
                <product-short 
                    v-for="elem of content" 
                    :item="elem" 
                    :key="elem.id_product"
                ></product-short>
            </div>
        </div>
        `
});