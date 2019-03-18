<template>
  <div class="editor upload-area">
    <b-tabs class="tool-tabs ignore">
      <b-tab-item label="image">
        <b-field class="file">
          <b-upload v-model="file" :accept="accept" @input="fileChange">
            <a class="button is-primary">
              <span>Click to upload</span>
            </a>
          </b-upload>
          <span v-if="file" class="file-name">{{ file.name }}</span>
        </b-field>
        <span v-if="tip" class="tip">{{ tip }}</span>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
export default {
  props: {
    accept: {
      type: String,
      default: '*'
    },
    tip: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      file: null
    }
  },
  methods: {
    fileChange (file) {
      this.$store.commit('upload', file)
    }
  }
}
</script>

<style scoped>
.upload-area .file {
  margin: 20px 0;
}
.upload-area .tip {
  font-size: 12px;
}
</style>
