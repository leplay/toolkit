<template>
  <div class="page container">
    <h2 class="title">Open Source Credits</h2>
    <ul>
      <li><a href="https://vuejs.org/">Vue.js</a></li>
      <li><a href="https://nuxtjs.org/">Nuxt.js</a></li>
      <li><a href="https://buefy.org/">Buefy</a></li>
      <li><a href="https://bulma.io/">Bulma</a></li>
      <li><a href="https://github.com/pvorb/node-md5">MD5</a></li>
      <li><a href="https://github.com/crypto-browserify/sha.js">sha.js</a></li>
      <li><a href="https://github.com/showdownjs/showdown">showdown</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Open Source Credits - Toolkit',
      meta: [
        { hid: 'description', name: 'description', content: 'Open source software at Tookit' }
      ]
    }
  }
}
</script>
