<template>
  <div class="tool container">
    <h3 class="subtitle has-text-centered">{{ app.name }}</h3>
    <p class="has-text-centered">{{ app.description }}</p>
    <textarea v-model="result" class="textarea editor" placeholder="" rows="10" />

    <div class="columns is-centered">
      <button class="button is-medium is-primary" @click="generate">Generate</button>
    </div>
  </div>
</template>

<script>
import meta from '@/config/meta'
const app = meta('random-number')

export default {
  components: {},
  head () {
    return app.head
  },
  data () {
    return {
      app,
      result: ''
    }
  },
  methods: {
    generate () {
      const min = 0
      const max = 100
      this.result = Math.floor(Math.random() * (max - min)) + min
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
