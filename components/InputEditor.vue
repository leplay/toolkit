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
