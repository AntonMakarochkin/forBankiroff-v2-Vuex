
<template>
    <div>
        <button @click='sortMin'>Min Price</button>
        <button @click='sortMax'>Max Price</button>
        <button @click='sortName'>Name</button>
        <Navigation/>
        <div v-for="item in iphone" :key="item.id" class="cart" >
            <div class="img"> 
                <nuxt-link :to='`/phones/iphone/${item.id}`'>
                 <img :src="item.img" alt="">
                </nuxt-link>
            </div>
            <div class="price">{{item.price}}</div>
            <div class="title">{{item.title}}</div>
            <div class="text">{{item.text}}</div>
            
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Navigation from '../../../components/Navigation'
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
        })
    },
    methods: {
        sortMin() {
            this.$store.commit('subcategories/sortMinIphone')
        },
        sortMax() {
            this.$store.commit('subcategories/sortMaxIphone')
        },
        sortName() {
            this.$store.commit('subcategories/sortNameIphone')
        },
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
        top: -530px
        left: 300px

        
    .price
        width: 100%
        height: 30px
        margin: 0 0 0 15px
   .title
        width: 100%
        height: 30px
        margin: 0 0 0 15px

   .text
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
button 
    width: 100px
    height: 30px
    background: white
    box-shadow: 0px -1px 12px 5px rgba(34, 60, 80, 0.2)
    border: none
    margin: 20px 30px
    cursor: pointer
   
                                
        
</style>
