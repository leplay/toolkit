<template>
  <div class="editor" :class="{ readonly: readonly }">
    <b-tabs class="tool-tabs" @change="switchTab">
      <b-tab-item v-for="(output, index) in data" :key="index" :label="output.label || 'result'">
        <textarea ref="output" class="textarea" spellcheck="false" :value="output.data" :placeholder="placeholder || 'Result'" :readonly="readonly" />
        <div v-if="output.data" class="status-bar">
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
        return [{
          label: 'result'
        }]
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
.editor {
  margin: 0;
  height: 400px;
  box-sizing: border-box;
  padding: 0;
  border: none;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
}
.editor.readonly {
  background-color: #f8f8f8;
}
/* tabs */
.editor .b-tabs {
  overflow: hidden;
  display: block;
}
.editor .b-tabs .tab-content {
  padding: 0;
}
.editor .tabs ul {
  margin: 0;
  padding: 0;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
}
.editor .tabs ul li a {
  display: block;
  line-height: 50px;
  padding: 10px 0 0 0;
  margin: 0 20px;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 4px solid transparent;
}
.editor .tabs li.is-active a {
  color: #2567f3;
  border-bottom: 4px solid #2567f3;
}
.editor .tool-tabs.ignore li.is-active a {
  color: #6f6f6f;
  border-bottom-color: transparent;
}
.editor .tool-tabs .tab-item {
  padding: 12px;
}
/* textarea */
.editor .textarea {
  font-size: 16px;
  font-family: Menlo, monospace;
  resize: none;
  box-sizing: border-box;
  box-shadow: none;
  border-radius: 0;
  border: none;
  outline: none;
  min-height: 400px
}

.editor.readonly .textarea {
  background-color: #f8f8f8;
}
.editor .textarea:focus,
.editor .textarea:active {
  box-shadow: none;
  border: none;
  outline: none;
}

/* Status Bar */
.editor .status-bar {
  overflow: hidden;
  line-height: 36px;
  margin-top: 12px;
}
.editor .status-bar .button.action {
  float: left;
}
.editor .status-bar .word-count {
  float: right;
  font-size: 10px;
  text-align: center;
  box-sizing: border-box;
}
</style>
