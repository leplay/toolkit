<template>
  <div class="editor">
    <b-tabs class="tool-tabs ignore">
      <b-tab-item label="Original text">
        <textarea v-model="input" class="textarea" autofocus spellcheck="false" :placeholder="placeholder" />
        <div class="status-bar">
          <div v-show="input.length" class="word-count">{{ input.length }}</div>
        </div>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Input your text here'
    }
  },
  data () {
    return {
      input: ''
    }
  },
  watch: {
    input (newVal) {
      this.$store.commit('input', newVal)
    }
  },
  methods: {
  }
}
</script>

<style>
/* inherrit from InputEditor.vue */
</style>
