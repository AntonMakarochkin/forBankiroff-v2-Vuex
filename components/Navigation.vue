<template>
  <div>

    <div class="menu">
      <div class="menu__sector">
        <div>Books</div>
        <ul>
          <li v-for="item in classic" :key="item.id">
            <nuxt-link :to="`/books/${item.id}`">{{item.name}}</nuxt-link>
          </li>
           <li v-for="item in adventure" :key="item.id">
            <nuxt-link :to="`/books/${item.id}`">{{item.name}}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="menu__sector">
        <div>Phones</div>
        <ul>
          <li v-for="item in iphone" :key="item.id">
            <nuxt-link :to="`/phones/${item.id}`">{{item.name}}</nuxt-link>
          </li>
          <li v-for="item in android" :key="item.id">
            <nuxt-link :to="`/phones/${item.id}`">{{item.name}}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      classic: 'subcategories/getClassic',
      adventure: 'subcategories/getAdventure',
      iphone: 'subcategories/getIphone',
      android: 'subcategories/getAndroid',
    })
  }
}
</script>


<style lang="sass" scoped>

  .menu
    width: 250px
    height: 400px
    font-size: 25px
    margin: 10px 30px
    box-shadow: 0px -1px 12px 5px rgba(34, 60, 80, 0.2)
    

    
  

  .menu__sector
    width: 150px
    height: 180px
    margin: 10px 30px
    display: flex
    flex-direction: column
    justify-content: space-around
    a
      color: black
      text-decoration: none
    li
      list-style: none
      margin: 5px 0px 
    

   
    
    
    
  .menu__link
    margin: 0 0 0 20px
  

  
    
  
  
</style>