<template>
  <div class="tool container">
    <h1 class="title has-text-centered">{{ app.name }}</h1>
    <p class="description has-text-centered">{{ app.description }}</p>

    <div class="tool-box columns-two">
      <TextInput class="column" placeholder="Input your markdown here" />
      <TextOutput class="column" :data="dataMap" :readonly="true" />
    </div>
  </div>
</template>

<script>
import showdown from 'showdown'
import meta from '@/config/meta'
import TextInput from '@/components/TextInput'
import TextOutput from '@/components/TextOutput'
const app = meta('markdown-to-html')

const converter = new showdown.Converter()

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
          label: 'Result',
          data: converter.makeHtml(this.$store.state.input)
        }
      ]
    }
  }
}
</script>

<style scoped>
/* inherrit from layout/default.vue */
</style>
