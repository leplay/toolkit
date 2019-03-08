<template>
  <section class="home">
    <h1>
      <a href="/" class="title">Toolkit.city</a>
    </h1>
    <h2 class="subtitle">Open source tools collection</h2>

    <div class="github">
      <a
        class="github-button"
        href="https://github.com/leplay/toolkit.city"
        data-size="large"
        data-show-count="true"
        aria-label="Star leplay/toolkit.city on GitHub"
      >Star</a>
    </div>

    <div class="columns">
      <div v-for="category in categories" :key="category" class="column category">
        <h3 class="category-title">{{ category }}</h3>
        <ul class="tools">
          <li v-for="item in toolsByCategory[category]" :key="item.id" class="item">
            <a :href="'/' + item.id" :title="item.description">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import tools from '@/config/tools'
import categories from '@/config/categories'
export default {
  components: {
  },
  data () {
    return {
      categories
    }
  },
  computed: {
    toolsByCategory () {
      const result = {}
      tools.forEach(function (tool) {
        result[tool.category] = result[tool.category] || []
        result[tool.category].push(tool)
      })
      return result
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  overflow: hidden;
}

.title {
  font-family: 'Righteous', cursive;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  text-decoration: none;
  text-align: center;
  margin: 20px 0;
}
.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.github {
  overflow: hidden;
  margin: 40px 0;
}
.columns:last-child {
  margin: 0;
}
.category {
  min-height: 320px;
  background-color: #f5f5f5;
  border-radius: 6px;
  margin: 0 8px;
  padding: 0;
  overflow: hidden;
}
.category .category-title {
  font-size: 20px;
  border-bottom: 1px dashed #ddd;
  line-height: 50px;
}
.category .tools {
  list-style: none;
  margin: 0;
}
.category .tools .item {
  margin: 0;
  padding: 0;
  font-size: 16px;
  clear: both;
  display: block;
  line-height: 24px;
}
</style>
