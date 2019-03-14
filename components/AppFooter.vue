<template>
  <footer class="footer">
    <div v-if="app" class="credit has-text-centered">
      <div>Author: {{ app.author }}</div>
    </div>
    <div class="content has-text-centered">
      <p>
        <strong>Toolkit.city</strong> by
        <a href="https://leplay.net">Leplay</a>.
      </p>
      <p><a href="/credits/">Credits</a></p>
      <p><a href="/faq/">FAQ</a></p>
    </div>
  </footer>
</template>

<script>
import config from '@/config'
import meta from '@/config/meta'

export default {
  data () {
    return {
      config,
      app: meta(this.$route.name)
    }
  }
}
</script>

<style scoped>
.footer {
  margin: 60px 0 0;
}
</style>
