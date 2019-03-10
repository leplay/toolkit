<template>
  <div class="editor" :class="{ readonly: readonly }">
    <b-tabs class="tool-tabs" @change="switchTab">
      <b-tab-item v-for="output in data" :key="output.label" :label="output.label">
        <textarea ref="output" class="textarea" spellcheck="false" :value="output.data" :placeholder="placeholder" :readonly="readonly" />
        <div class="status-bar">
          <button class="button action is-info is-outlined" @click="copy">COPY</button>
          <div v-show="output.data.length" class="word-count">{{ output.data.length }}</div>
        </div>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    placeholder: {
      type: String,
      default: 'Result'
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      input: '',
      activeTab: 0
    }
  },
  methods: {
    typing (e) {
      this.$store.commit('input', e.target.value)
    },
    switchTab (index) {
      this.$store.commit('switchTab', index)
    },
    copy () {
      this.$refs.output[this.activeTab].select()
      document.execCommand('copy')
      this.$toast.open({
        message: 'Copied to clipboard',
        type: 'is-success'
      })
    }
  }
}
</script>

<style>
/* inherrit from InputEditor.vue */
</style>
