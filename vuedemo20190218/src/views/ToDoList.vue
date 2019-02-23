<template>
    <div>
        <div id="todo-list-example">
            <form v-on:submit.prevent="addNewTodo">
                <label for="new-todo">Add a todo</label>
                <input
                v-model="newTodoText"
                id="new-todo"
                placeholder="E.g. Feed the cat"
                />
                <button>Add</button>
            </form>
            <ul>
                <li
                is="todo-item"
                v-for="(todo, index) in todos"
                v-bind:key="todo.id"
                v-bind:title="todo.title"
                :ref="todo.ref"
                v-on:remove="todos.splice(index, 1)"
                ></li>
            </ul>
        </div>
    </div>
</template>


<script>
import TodoItem from "../components/ToDoItem.vue"
export default {
    data(){
        return{
            newTodoText: '',
            todos: [
            {
                id: 1,
                ref:"index1",
                title: 'Do the dishes',
            },
            {
                id: 2,
                ref:"index2",
                title: 'Take out the trash',
            },
            {
                id: 3,
                ref:"index3",
                title: 'Mow the lawn'
            }
            ],
            nextTodoId: 4
        }
    },
    methods: {
        addNewTodo: function () {
        this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
        })
        this.newTodoText = ''
        }
    },
    created(){
        this.$refs.index2.ppp();
    },
    components:{
        TodoItem
    },
}
</script>

<style lang="scss">
    
</style>
