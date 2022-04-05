<template>
 <div>
  <ul>
    <TodoItem
    v-for="(todo, i) of todos" :todo="todo"
    v-on:remove-todo="removeTodo"
    v-bind:index="i"
    />
  </ul>
</div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
}

</script>

<style scoped lang="scss">
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
