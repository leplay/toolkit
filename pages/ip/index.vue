<template>
  <div class="tool container">
    <h1 class="title has-text-centered">{{ app.name }}</h1>
    <p class="description has-text-centered">{{ app.description }}</p>

    <div class="tool-box columns-one">
      <OutputEditor class="column" :data="dataMap" :readonly="true" />
    </div>
    <p class="partner">The public IP address API is served by <a href="https://www.ipify.org/">ipify</a>.</p>
  </div>
</template>

<script>
import meta from '@/config/meta'
import OutputEditor from '@/components/OutputEditor'
const app = meta('ip')

export default {
  components: { OutputEditor },
  head () {
    return app.head
  },
  data () {
    return {
      app,
      dataMap: [{
        label: 'RESULT',
        data: 'loading...'
      }]
    }
  },
  computed: {
  },
  mounted () {
    this.getIp()
  },
  methods: {
    async getIp () {
      const remote = await this.$axios.$get('https://api.ipify.org?format=json')
      this.dataMap = [{
        label: 'RESULT',
        data: remote.ip
      }]
    }
  }
}
</script>

<style scoped>
/* inherrit from layout/default.vue */
</style>
