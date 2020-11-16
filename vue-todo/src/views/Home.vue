<template>
  <div class="home">
    <todo></todo>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Todo from './Todo.vue'
// import Todo from '../components/Todo.vue'

@Component({
  components: {
    Todo
  }
})
export default class Home extends Vue {}
</script>
