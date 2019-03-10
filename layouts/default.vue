<template>
  <section>
    <AppHeader v-if="path !== '/'" />
    <div class="page-content">
      <nuxt />
    </div>
    <AppFooter />
  </section>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    path () {
      return this.$route.path
    }
  },
  mounted () {
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.page-content {
  padding: 40px 20px;
  overflow: hidden;
}

/* Tool Page CSS */
.tool {
}
.tool .title {

}
.tool .description {
  margin: 20px 0 40px;
}
.tool .tool-box {
  box-shadow: 0 2px 4px #eee;
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid #eee;
}
.tool .tool-box.columns-two .column {
  width: 50%;
  min-height: 400px;
  float: left;
  box-sizing: border-box;
  position: relative;
}
</style>
