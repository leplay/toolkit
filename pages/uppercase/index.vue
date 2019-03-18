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
import meta from '@/config/meta'
import TextInput from '@/components/TextInput'
import TextOutput from '@/components/TextOutput'
const app = meta('uppercase')

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
          label: 'uppercase',
          url: 'uppercase',
          data: this.$store.state.input.toUpperCase()
        },
        {
          label: 'lowercase',
          url: 'lowercase',
          data: this.$store.state.input.toLowerCase()
        }
      ]
    }
  }
}
</script>

<style scoped>
/* inherrit from layout/default.vue */
</style>
