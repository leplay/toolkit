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
const app = meta('url-encoder')

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
      let result
      try {
        result = this.$store.state.tabIndex === 0 ? encodeURIComponent(this.$store.state.input) : decodeURIComponent(this.$store.state.input)
      } catch (e) {
        result = ''
        this.$toast.open({
          duration: 5000,
          message: `error`,
          type: 'is-danger'
        })
      }
      return [
        {
          label: 'encode',
          url: 'url-encoder',
          data: result
        },
        {
          label: 'decode',
          url: 'url-decoder',
          data: result
        }
      ]
    }
  }
}
</script>

<style scoped>
/* inherrit from layout/default.vue */
</style>
