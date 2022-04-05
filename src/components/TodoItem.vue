<template>

    <li>
      
      <span v-bind:class="{done: todo.completed}">
      <input type="checkbox" v-on:change="todo.completed=!todo.completed">
      <strong>{{ index + 1 }}</strong>
      {{ todo.title }}
      </span>
      <button class="buttonCancel" v-on:click="$emit('remove-todo',todo.id)" type="submit">&times;</button>
    </li>

</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
    
  },
  filters: {
      uppercase(value) {
        console.log(value)
        
    }
  }
}
</script>

<style scoped lang="scss">
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
}

.buttonCancel {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

.done {
  text-decoration: line-through;
}

</style>
