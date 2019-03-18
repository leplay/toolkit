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
import shajs from 'sha.js'
import meta from '@/config/meta'
import TextInput from '@/components/TextInput'
import TextOutput from '@/components/TextOutput'
const app = meta('sha-1')

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
          label: 'SHA-1',
          data: shajs('sha').update(this.$store.state.input).digest('hex')
        },
        {
          label: 'SHA-0',
          data: shajs('sha1').update(this.$store.state.input).digest('hex')
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
        },
        {
          label: 'SHA-384',
          data: shajs('sha384').update(this.$store.state.input).digest('hex')
        }
      ]
    }
  }
}
</script>

<style scoped>
/* inherrit from layout/default.vue */
</style>
