<template>
  <section class="container">
      <h1 class="title">Characters</h1>
      <ul class="list">
          <li v-for="(character, index) in characters" :key="index">
              <CardHorizontal 
                :img="character.image" 
                :name="character.name" 
                :status="character.status"
                :type="character.type"
                :species="character.species">
              </CardHorizontal>
          </li>
      </ul>
  </section>
</template>

<script>
import { request as fetchGraphql } from 'graphql-request';
import { ref } from 'vue';
import CardHorizontal from '../components/CardHorizontal'
const URL_API = 'https://rickandmortyapi.com/graphql';
export default {
    components: {
        CardHorizontal
    },
    setup() {
        /* referencia a cualquier tipo de dato, es usado para valores que son asincronos */
        let characters = ref([]);

        fetchGraphql(URL_API, 
        `
            query {
                characters(page: 1) {
                    info {
                    count,
                    pages,
                    next,
                    prev
                    }
                    results {
                    name,
                    status,
                    type,
                    species,
                    image
                    }
                }
            }
        `
        ).then( data => characters.value = data.characters.results);
        
        return {
            characters
        }
    }
}
</script>

<style lang="scss">
    section {
        background-color: whitesmoke;
        padding-bottom: 1rem;

        .list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 15px;
            list-style: none;
        }
    }
</style>