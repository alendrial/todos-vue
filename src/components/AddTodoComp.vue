<template>
<form  v-on:submit.prevent="onSubmit" >
    <input type="text" v-model="title">
    <button type="submit">Create</button>
</form>
</template>

<script>
export default {
    methods: {
        onSubmit() {
            console.log('submit', this.title);
            if (this.title.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }
                this.$emit('add-todo', newTodo);
                this.title = ''
                console.log(newTodo)
            }
        },
    },
    data() {
        return {
            title: ''
        }
    }
}
</script>

<style scoped lang="scss">
    form {
        display: flex;
    }

    input {
        width: 400px;
    }
</style>