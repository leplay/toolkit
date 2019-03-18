<template>
  <div class="tool container">
    <h1 class="title has-text-centered">{{ app.name }}</h1>
    <p class="description has-text-centered">{{ app.description }}</p>

    <div class="tool-box columns-two">
      <UploadInput class="column" accept="image/*" tip="Support JPG / GIF / PNG / WebP / SVG / BMP." />
      <TextOutput class="column" :placeholder="placeholder" :data="dataMap" :readonly="true" />
    </div>
  </div>
</template>

<script>
import meta from '@/config/meta'
import convertFileToBase64 from '@/plugins/convertFileToBase64'
import UploadInput from '@/components/UploadInput'
import TextOutput from '@/components/TextOutput'
const app = meta('image-to-base64')

export default {
  components: { UploadInput, TextOutput },
  head () {
    return app.head
  },
  data () {
    return {
      app,
      dataMap: [{}],
      placeholder: ''
    }
  },
  watch: {
    '$store.state.file': async function (file) {
      if (!file) {
        return
      }
      this.placeholder = 'loading'
      const result = await convertFileToBase64(file)
      this.dataMap = [{
        data: result
      }]
    }
  }
}
</script>

<style scoped>
/* inherrit from layout/default.vue */
</style>
