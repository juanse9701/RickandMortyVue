<template>
  <div class="card-episode">
      <div class="card-header">
       <h3 class="card-header__title">{{name}}</h3>
      </div>
      <div class="card-info">
          <span>{{episode}}</span>
          <hr/>
          <span>{{date}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'card-episode',
    props: ['name', 'episode', 'date']
}
</script>

<style lang="scss">
    .card-episode {
        display: flex;
        flex-direction: column;
        background-color: whitesmoke;
        border-top-right-radius: 15px;
        border-bottom-left-radius: 10px;
        overflow: hidden;
        text-align: center;

        .card-header, .card-info {
            padding: 1rem;
        }

        .card-header {
            background-color: #DCEDC8;
            &__title {
                font-size: 1.2rem;
                margin: 0;
                color: #2c3e50;
            }
        }

        .card-info {
            background-color: #2c3e50;
            color: whitesmoke;
        }
    }
</style>