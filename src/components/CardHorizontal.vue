<template>
  <div class="card-horizontal">
      <img :src="img" alt="image" />
      <div class="info">
          <p class="info-title">{{name}}</p>
          <p class="info-detail"><span>Status:</span> {{status}}</p>
          <p class="info-detail"><span>Type:</span> {{type || 'unknown'}}</p>
          <p class="info-detail"><span>Specie:</span> {{species}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CardHorizontal',
    props: ['img', 'name', 'status', 'type', 'species']
}
</script>

<style lang="scss">
    .card-horizontal {
        display: flex;
        background-color: white;
        border-radius: 5px;
        box-shadow: 2px 2px #e6e1e1;
        img {
            width: 100px;
            border-radius: 50%;
            padding: 1rem;
        }

        .info {
            width: 100%;
            padding: 10px;
            &-title {
                text-align: center;
                font-size: 1.2rem;
                font-weight: 600;
                letter-spacing: 0px;
                margin: 0;
            }

            &-detail {
                margin: 0;
                span {
                    font-weight: 600;
                }
            }
        }
    }
</style>