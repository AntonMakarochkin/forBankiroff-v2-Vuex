<template>
  <div>
    <div class="menu">
      <div class="menu__sector">
        <div>Books</div>
        <nuxt-link to='/books/classic' class="menu__link">classic</nuxt-link>
        <nuxt-link to='/books/adventure' class="menu__link">adventure</nuxt-link>
      </div>
      <div class="menu__sector">
        <div>Phones</div>
            <nuxt-link to='/phones/iphone' class="menu__link">iphone</nuxt-link>
            <nuxt-link to='/phones/android' class="menu__link">android</nuxt-link>
      </div>
    </div>
    <Explorer/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Explorer from './Explorer.vue'
export default {
  components: {
    Explorer
  },
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