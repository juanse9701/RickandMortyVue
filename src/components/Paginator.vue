<template>
  <div class="pagination">
      <router-link :to="prev">Prev</router-link>
      <router-link :to="next">Next</router-link>
  </div>
</template>

<script>
import { computed, inject} from 'vue'
import { useRoute } from 'vue-router'

export default {
    name: 'Paginator',
    setup() {
        /* obtengo informacion de la ruta actual */
        const route = useRoute()

        const info = inject('info')

        const prev = computed(()=> ({
            name: route.name,
            params: {
                page: info.value.prev || route.params.page
            }
        }))
        const next = computed(()=> ({
            name: route.name,
            params: {
                page: info.value.next || route.params.page
            }
        }))
        return {
            prev,
            next
        }
    }
}
</script>

<style lang="scss">
.pagination {
     display: flex;
     justify-content: center;
     padding: 1rem;

     a {
       display: block;
       margin-right: 15px;
       text-decoration: none;
       padding: 10px 1rem;
       background-color: #2c3e50;
       color: white;
       border-top-left-radius: 10px;
       border-bottom-right-radius: 10px;
    }
}
</style>