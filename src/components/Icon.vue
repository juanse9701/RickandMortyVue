<template>
  <a :href="url" target="_blank">
      <img :width="width" :src="img" alt="icon">
  </a>
</template>

<script>
export default {
    name: 'Icon',
    props: ['url', 'img', 'width']

}
</script>

<style>

    a {
        cursor: pointer;
    }

</style>