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
import shajs from 'sha.js'
import meta from '@/config/meta'
import InputEditor from '@/components/InputEditor'
import OutputEditor from '@/components/OutputEditor'
const app = meta('sha-384')

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
      return [
        {
          label: 'SHA-384',
          data: shajs('sha384').update(this.$store.state.input).digest('hex')
        },
        {
          label: 'SHA-256',
          data: shajs('sha256').update(this.$store.state.input).digest('hex')
        },
        {
          label: 'SHA-512',
          data: shajs('sha512').update(this.$store.state.input).digest('hex')
        },
        {
          label: 'SHA-224',
          data: shajs('sha224').update(this.$store.state.input).digest('hex')
        }
      ]
    }
  }
}
</script>

<style scoped>
/* inherrit from layout/default.vue */
</style>
