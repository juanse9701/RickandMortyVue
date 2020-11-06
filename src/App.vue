<template>
  <Navbar></Navbar>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
export default {
  components: {
    Footer,
    Navbar
  },
}
</script>
<style lang="scss">

@mixin special-text {
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  margin: 0;
  padding: 1rem 0;
}

body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: system-ui, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .container {
    padding-left: 6rem;
    padding-right: 6rem;
  }
  .title {
      font-size: 3rem;
      @include special-text;
    }

  .subtitle {
    font-size: 1.5rem;
    color: #00bcd4;
    @include special-text;
  }  

}

</style>
