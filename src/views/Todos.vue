<template>
  <div>
    <h2>Todo Application</h2>
    <addTodo @add-todo="addTodo"/>
    <select v-model="filter">
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="not-completed">not-completed</option>
    </select>
    <hr>
    <Loader v-if="loading"/>
    <TodoList v-bind:todos="filterTodos" @remove-todo="removeTodo" v-else-if="filterTodos.length"/>
    <p v-else>No todos!</p>
    <router-link to="/">HomePage</router-link>
  </div>

</template>

<script>
import AddTodo from '../components/AddTodoComp.vue'
import TodoList from '../components/TodoList.vue'
import Loader from '../components/Loader.vue'
export default {
  name: "",
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => { setTimeout(() => {this.todos = json
        this.loading = false}, 1000)
        
      })
  },
  //watch: {
  //    filter(value) {
  //        console.log(value)
  //    }
  //},
  computed: {
      filterTodos(){
          if (this.filter === 'all') { 
              return this.todos
          }
          if (this.filter === 'completed') { 
              return this.todos.filter(t => t.completed)
          }
          if (this.filter === 'not-completed') { 
              return this.todos.filter(t => !t.completed)
          }
      }
  },
  components: {
    TodoList, AddTodo, Loader
  },
  
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id != id)
  },
    addTodo(todo){
      this.todos.push(todo)
    },
    
}
}

</script>

<style lang="scss">

</style>
