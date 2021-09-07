<template>
    <div>
        <Navigation/>
        <h2>{{id}}</h2>
    </div>
</template>
<script>
import Navigation from '../../../../components/Navigation'
export default {
  components: {
      Navigation 
    },
    
    computed: {
        id() {
            return this.$route.params.id
        },
     

    }
}
</script>