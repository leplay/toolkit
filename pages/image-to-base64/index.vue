<template>
  <div class="tool container">
    <h1 class="title has-text-centered">{{ app.name }}</h1>
    <p class="description has-text-centered">{{ app.description }}</p>

    <div class="tool-box columns-two">
      <UploadInput class="column" accept="image/*" tip="Support JPG / GIF / PNG / WebP / SVG / BMP." />
      <TextOutput class="column" :data="dataMap" :readonly="true" />
    </div>
  </div>
</template>

<script>
import meta from '@/config/meta'
import UploadInput from '@/components/UploadInput'
import TextOutput from '@/components/TextOutput'
const app = meta('image-to-base64')

const readFile = function (file) {
  return new Promise(function (resolve, reject) {
    if (!file) {
      return reject(new Error())
    }
    try {
      const reader = new window.FileReader()
      reader.onloadend = function () {
        resolve(reader.result)
      }
      reader.readAsDataURL(file)
    } catch (error) {
      reject(error)
    }
  })
}

export default {
  components: { UploadInput, TextOutput },
  head () {
    return app.head
  },
  data () {
    return {
      app,
      dataMap: [{}]
    }
  },
  watch: {
    '$store.state.file': async function (file) {
      if (!file) {
        return
      }
      this.dataMap = [{
        label: 'loading'
      }]
      const result = await readFile(file)
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
