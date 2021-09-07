<template>
<div class="explorer">
    <input v-model="message" placeholder="отредактируй меня"  @change="search"/>
    <button @click='search'>поиск</button>
    <p>Поиск по item.title</p>
    <div v-for="(item, index) in list" :key="index" class="cart"> 
        <div class="img"> 
            <nuxt-link :to='`/phones/iphone/${item.id}`'>
                <img :src="item.img" alt="">
            </nuxt-link>
        </div>
        <div class="text">{{item.text}}</div>
        <div class="price">{{item.price}}</div>
        <div class="title">{{item.title}}</div>

    </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {

  data() {
      return {
          message: 'Iphone10',
          list : ''
         
      }
  },
  computed: {
    ...mapGetters({
      classic: 'subcategories/getClassic',
      adventure: 'subcategories/getAdventure',
      iphone: 'subcategories/getIphone',
      android: 'subcategories/getAndroid',
    }),

  },
  methods: {
      search() {
          
            let filterExplore = this.$store.state.subcategories.classic 
            this.list = filterExplore.filter(item => item.title == this.message)

            if (this.list == '') {
                filterExplore = this.$store.state.subcategories.adventure
                 this.list = filterExplore.filter(item => item.title == this.message) 
            } 
            if (this.list == '') {
                filterExplore = this.$store.state.subcategories.iphone
                 this.list = filterExplore.filter(item => item.title == this.message) 
             }
            if (this.list == '') {
                filterExplore = this.$store.state.subcategories.android
                 this.list = filterExplore.filter(item => item.title == this.message) 
             } 
             
      }
  }
}
</script>

<style lang="sass" scoped>
    .cart
        width: 300px
        height: 300px
        box-shadow: 0px -1px 12px 5px rgba(34, 60, 80, 0.2)
        margin: 20px 20px 
        position: absolute
        top: 60px
        left: 800px

        
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
    .explorer
        width: 100px
        height: 100px
   
   
                                
        
</style>