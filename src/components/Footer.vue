<template>
  <footer class="container">
      <div class="code">
          <h2 class="subtitle">Framework</h2>
          <img src="https://blog.irontec.com/wp-content/uploads/2018/02/vue-newsletter.png" alt="Vue">
      </div>
      <div class="contact">
          <h2 class="subtitle">contact</h2>
      </div>
      <div class="">
          <h2 class="subtitle">api</h2>
      </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
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
}
</style>