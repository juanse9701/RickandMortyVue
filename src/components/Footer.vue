<template>
  <footer class="container">
      <div class="code">
          <h2 class="subtitle">Framework</h2>
          <Icon 
          :url="'https://v3.vuejs.org/guide/introduction.html'" 
          :img="'https://blog.irontec.com/wp-content/uploads/2018/02/vue-newsletter.png'" 
          :width="'200'"></Icon>
      </div>
      <div class="contact">
          <h2 class="subtitle">contact</h2>
          <div class="list-contact">
              <Icon v-for="({url, img, width}, index) in socialMedia" 
              :key="index" 
              :url="url" 
              :img="img" 
              :width="width"></Icon>
          </div>
      </div>
      <div class="api">
          <h2 class="subtitle">api</h2>
          <a href="https://rickandmortyapi.com/" target="_blank">The Rick and Morty API</a>
      </div>
  </footer>
</template>

<script>
import Icon from "./Icon";
export default {
    name: 'Footer',
    components: {
        Icon
    },
    setup() {
        const socialMedia = [
            {
                url: 'https://github.com/juanse9701',
                img: 'https://abb1991.github.io/images/thumbnails/github-logo.svg',
                width: '30'
            },
            {
                url: 'https://www.linkedin.com/in/juan-sebastian-peralta-mu%C3%B1oz-a36b45196/',
                img: 'https://uploads-ssl.webflow.com/5c4a015f28aefe4ab3577cf0/5c56253a4ed796183ef02c47_Icono%20Linkedin.png',
                width: '30'
            }
        ]
        return {
            socialMedia
        }
    }
}
</script>

<style lang="scss">
footer {
    min-width: 300px;
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #181819;

    .code {
        img {
            width: 200px;
        }
    }

    .api {
        a {
            text-decoration: none;
            color: azure;
            font-size: 1.2rem;
            font-weight: 500;
        }
    }
}
</style>