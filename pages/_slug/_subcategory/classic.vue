<template>
    <div>
        <button @click='sortMin'>Min Price</button>
        <button @click='sortMax'>Max Price</button>
        <button @click='sortName'>Name</button>
        <Navigation/>
        <div v-for="item in classic" :key="item.id" class="cart" >
            <div class="img"> <nuxt-link :to='`/books/classic/${item.id}`'><img :src="item.img" alt=""></nuxt-link></div>
            <div class="price">{{item.price}}</div>
            <div class="title">{{item.title}}</div>
            <div class="text">{{item.text}}</div>
        </div>
    </div>
</template>
<script>
import Navigation from '../../../components/Navigation'
import {mapGetters} from 'vuex'
export default {
  components: {
      Navigation, 
    },
    computed: {
        subcategory() {
            return this.$route.params.subcategory
        },

     
        ...mapGetters({
           classic: 'subcategories/getClassic',
           counter: 'subcategories/getCounter',
        }),


    },
    methods: {
        sortMin() {
            this.$store.commit('subcategories/sortMinClassic')
        },
        sortMax() {
            this.$store.commit('subcategories/sortMaxClassic')
        },
        sortName() {
            this.$store.commit('subcategories/sortNameClassic')
        },
    },


    
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

