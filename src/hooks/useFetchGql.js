import { inject, ref, watchEffect } from "vue";
import { request as fetchGraphql } from "graphql-request";
import { useRoute } from "vue-router"

export function useFetchGql(url, query) {
  /* referencia a cualquier tipo de dato y reacciona cada que hay un cambio, es usado para valores que son asincronos */  
  let characters = ref([]);
  let info = inject('info')
  const route = useRoute()

  watchEffect(() => {  
    fetchGraphql(url, query, {
      page: Number(route.params.page) || 1,
    }).then(({data}) => {
        characters.value = data.results
        info.value = data.info
        });
  });

  return {
    data: characters
  };
}
