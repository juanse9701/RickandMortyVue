<template>
  <nav class="container" id="nav">
    <div class="banner">
      <picture class="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png"
          alt="logo"
        />
      </picture>
    </div>
    <ul>
      <router-link to="/characters">Characters</router-link>
      <router-link to="/episodes">Episodes</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
#nav {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px #d0cccc;

  .banner {
      .logo {
          img {
              width: 100px;
          }
      }
  }

ul {
  a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;
    margin-right: 10px;
    &:last-child {
        margin-right: 0;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
}
</style>