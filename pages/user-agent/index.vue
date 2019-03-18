<template>
  <div class="tool container">
    <h1 class="title has-text-centered">{{ app.name }}</h1>
    <p class="description has-text-centered">{{ app.description }}</p>

    <div class="tool-box columns-one">
      <TextOutput class="column" :data="dataMap" :readonly="true" />
    </div>
  </div>
</template>

<script>
import meta from '@/config/meta'
import TextOutput from '@/components/TextOutput'
const app = meta('user-agent')

export default {
  components: { TextOutput },
  head () {
    return app.head
  },
  data () {
    return {
      app,
      dataMap: []
    }
  },
  computed: {
  },
  mounted () {
    this.getUserAgent()
  },
  methods: {
    getUserAgent () {
      this.dataMap = [{
        label: 'RESULT',
        data: window.navigator.userAgent
      }]
    }
  }
}
</script>

<style scoped>
/* inherrit from layout/default.vue */
</style>
