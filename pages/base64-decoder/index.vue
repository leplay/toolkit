<template>
  <div class="tool container">
    <h3 class="title has-text-centered">{{ app.name }}</h3>
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
const app = meta('base64-decoder')

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
        result = this.$store.state.tabIndex === 0 ? window.atob(this.$store.state.input) : window.btoa(this.$store.state.input)
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
          label: 'decode',
          url: 'base64-decoder',
          data: result
        },
        {
          label: 'encode',
          url: 'base64-encoder',
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
