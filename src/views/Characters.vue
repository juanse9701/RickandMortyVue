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
import CardHorizontal from '../components/CardHorizontal'
import { CHARACTERS, URL_API } from '../graphql/Query';
import { useFetchGql } from '../hooks/useFetchGql';

export default {
    components: {
        CardHorizontal
    },
    setup() {
        const {data} = useFetchGql(URL_API, CHARACTERS);
        return {
            characters: data
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