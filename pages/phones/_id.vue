<template>
<div>
    <Navigation/>
    <div v-if='id == "iphone"'>
        <div v-for="item in iphone" :key="item.id" class="cart">
            <div>
                <div class="img"><img :src="item.data.img" alt=""></div>
                <div class="price">{{item.data.price}}</div>
                <div class="title">{{item.data.title}}</div>
                <div class="description">{{item.data.text}}</div>
            </div>
        </div>
        <div v-for="item in iphone" :key="item.id" class="cart">
            <div>
                <div class="img"><img :src="item.data2.img" alt=""></div>
                <div class="price">{{item.data2.price}}</div>
                <div class="title">{{item.data2.title}}</div>
                <div class="description">{{item.data2.text}}</div>
            </div>
        </div>
    </div>
    <div v-if='id == "android"'>
        <div v-for="item in android" :key="item.id" class="cart">
            <div>
                <div class="img"><img :src="item.data.img" alt=""></div>
                <div class="price">{{item.data.price}}</div>
                <div class="title">{{item.data.title}}</div>
                <div class="description">{{item.data.text}}</div>
            </div>
        </div>
        <div v-for="item in android" :key="item.id" class="cart" >
            <div>
                <div class="img"><img :src="item.data2.img" alt=""></div>
                <div class="price">{{item.data2.price}}</div>
                <div class="title">{{item.data2.title}}</div>
                <div class="description">{{item.data2.text}}</div>
            </div>
        </div>
    </div>
    
</div>
</template>
<script>
import {mapGetters} from 'vuex'
import Navigation from '../../components/Navigation'
export default {
  components: {
      Navigation 
    },
    
    computed: {
        id() {
            return this.$route.params.id
        },
     
        ...mapGetters({
           iphone: 'subcategories/getIphone',
            android: 'subcategories/getAndroid',
        })
    }
}
</script>
<style lang="sass" scoped>
    .cart
        width: 300px
        height: 300px
        box-shadow: 0px -1px 12px 5px rgba(34, 60, 80, 0.2)
        margin: 20px 20px 
        position: relative
        top: -420px
        left: 300px

        
    .price
        width: 100%
        height: 30px
        margin: 0 0 0 15px
   .title
        width: 100%
        height: 30px
        margin: 0 0 0 15px

   .description
        width: 100%
        height: 30px
        margin: 0 0 0 15px

   .img
        width: 100%
        height: 200px
        img
          width: 100%
          height: 100%
          object-fit: contain
   
                                
        
</style>