<template>
  <div class="tool container">
    <h1 class="title has-text-centered">{{ app.name }}</h1>
    <p class="description has-text-centered">{{ app.description }}</p>

    <div class="tool-box columns-two">
      <InputEditor class="column" />
      <OutputEditor class="column" :data="dataMap" :readonly="true" />
    </div>
  </div>
</template>

<script>
import meta from '@/config/meta'
import InputEditor from '@/components/InputEditor'
import OutputEditor from '@/components/OutputEditor'
const app = meta('base64-encoder')

export default {
  components: { InputEditor, OutputEditor },
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
      if (!process.client) return []
      let result
      try {
        result = this.$store.state.tabIndex === 0 ? window.btoa(this.$store.state.input) : window.atob(this.$store.state.input)
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
          url: 'base64-encoder',
          data: result
        },
        {
          label: 'decode',
          url: 'base64-decoder',
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
