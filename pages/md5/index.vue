<template>
  <div class="tool container">
    <h1 class="title has-text-centered">{{ app.name }}</h1>
    <p class="description has-text-centered">{{ app.description }}</p>

    <div class="tool-box columns-two">
      <TextInput class="column" />
      <TextOutput class="column" :data="dataMap" :readonly="true" />
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import meta from '@/config/meta'
import TextInput from '@/components/TextInput'
import TextOutput from '@/components/TextOutput'
const app = meta('md5')

export default {
  components: { TextInput, TextOutput },
  head () {
    return app.head
  },
  data () {
    return {
      app
    }
  },
  computed: {
    dataMap () {
      return [
        {
          label: 'md5',
          data: md5(this.$store.state.input)
        }
      ]
    }
  }
}
</script>

<style scoped>
/* inherrit from layout/default.vue */
</style>
