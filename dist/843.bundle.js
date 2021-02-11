(self.webpackChunkjs_2_hw_6=self.webpackChunkjs_2_hw_6||[]).push([[843],{843:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n}),Vue.component("product-short",{props:["item"],template:'\n        <div class="basket-item">\n            <img src="http://placehold.it/50x50">\n            <b>{{item.product_name}}</b>\n            <div class="price">{{item.quantity}} шт. на {{item.price*item.quantity}} рублей</div>\n        </div>\n        '});const n=Vue.component("basket",{props:["products"],data:()=>({showBasket:!1,amount:0,content:[]}),template:'\n        <div class="basket" @click="showBasket = !showBasket">\n            <i class="fa fa-shopping-cart" aria-hidden="true"></i>\n            <div class="basketContent"> {{ amount }} рублей</div>\n            <div class="basketList" v-if="showBasket">\n                <p v-if="amount == 0">Ваша корзина пуста</p>\n                \n                <product-short \n                    v-for="elem of content" \n                    :item="elem" \n                    :key="elem.id_product"\n                ></product-short>\n            </div>\n        </div>\n        '})}}]);