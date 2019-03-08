<template>
  <div class="tool container">
    <h3 class="subtitle has-text-centered">{{ app.name }}</h3>
    <p class="has-text-centered">{{ app.description }}</p>
    <textarea v-model="input" class="textarea editor" placeholder="Input your text here" rows="10" />

    <div class="columns is-centered">
      <button class="button is-medium is-primary" @click="encode">Encode</button>
      <button class="button is-medium is-light" @click="decode">Decode</button>
    </div>
  </div>
</template>

<script>
import meta from '@/config/meta'
const app = meta('url-encoder')

export default {
  components: {},
  head () {
    return app.head
  },
  data () {
    return {
      app,
      input: ''
    }
  },
  methods: {
    encode () {
      this.input = encodeURIComponent(this.input)
    },
    decode () {
      this.input = decodeURIComponent(this.input)
    }
  }
}
</script>

<style scoped>
.subtitle {
  font-size: 32px;
}
.editor {
  font-family: Menlo, monospace;
  margin: 30px 0;
}
.columns .button {
  margin: 0 12px;
  outline: none;
}
</style>
