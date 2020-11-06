import { gql } from 'graphql-request'

export const URL_API = 'https://rickandmortyapi.com/graphql';

export const CHARACTERS = gql`
query ($page: Int) {
    data:characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        status
        type
        species
        image
      }
    }
  }
`

export const LOCATIONS = gql`
query ($page: Int) {
  data:locations (page: $page) {
    info{
      count,
      pages,
      next,
      prev
    },
    results {
      id,
      name,
      dimension,
      type
    }
  }
}
`
export const EPISODES = gql`
query($page: Int) {
  data:episodes(page: $page) {
    info {
      count,
      pages,
      next,
      prev
    },
    results {
      id,
      name,
      episode,
      air_date,
    }
  }
}
`