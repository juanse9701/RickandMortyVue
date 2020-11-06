<template>
  <div class="container">
      <h1 class="title">episodes</h1>
      <ul class="list">
        <li :key="id" v-for="{id, name, episode, air_date} in episodes">
          <card-episode :name="name" :episode="episode" :date="air_date"></card-episode>
        </li>
      </ul>
  </div>
</template>

<script>
import { EPISODES, URL_API } from '../graphql/Query';
import { useFetchGql } from '../hooks/useFetchGql';
import CardEpisode from '../components/CardEpisode'

export default {
  components: {
    'card-episode': CardEpisode
  },
  setup() {
    const { data } = useFetchGql(URL_API, EPISODES)
    return {
      episodes: data
    }
  }
}
</script>

<style lang="scss">
ul.list {
  display: grid;
  margin: 0;
  padding: 1rem;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>