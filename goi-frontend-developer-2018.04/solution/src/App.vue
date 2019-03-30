<template>
    <div class="container">
        <h1 class="title is-1"><span class="goi-g">G</span><span class="goi-o">O</span><span class="goi-i">I</span> Task Manager</h1>

        <section class="header">
            <nav class="level">
                <div class="level-left">
                    <div class="level-item">
                        <b-field>
                            <b-input placeholder="Search task..."
                                type="search"
                                icon="magnify"
                                v-model="filterText"
                                ></b-input>
                        </b-field>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <button class="button is-tertiary" @click="addTask">Add Task</button>
                    </div>
                </div>
            </nav>
        </section>

        <section class="list">
            <b-table
                :data="filteredTasks"
                :paginated="isPaginated"
                :per-page="perPage"
                :current-page.sync="currentPage"
                :pagination-simple="isPaginationSimple"
                :checked-rows.sync="checkedRows"
                :mobile-cards="false"
                checkable>

                <template slot-scope="props">

                    <b-table-column field="title" label="Task">
                        {{ props.row.title }}
                    </b-table-column>
                    <b-table-column custom-key="actions" centered="true" width="32">
                        <button class="button is-small goi-o" @click="removeTask(props.row)">
                            <b-icon icon="delete" ></b-icon>
                        </button>
                    </b-table-column>

                </template>
                <template slot="bottom-left">
                    <b>Completed Tasks</b>: {{ checkedRows.length }} / {{ tasks.length }}
                </template>
            </b-table>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'app',
        mounted() {
            this.$superagent.get("/todos")
                .set('accept', 'json')
                .then(data => {
                    this.tasks = data.body.map((r,i)=>({title:r.title, completed:r.completed,idx:i}));
                    this.checkedRows = this.tasks.filter(r => r.completed);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        data() {
            return {
                tasks: [],
                checkedRows: [],
                filterText: '',
                isPaginated: true,
                isPaginationSimple: false,
                defaultSortDirection: 'asc',
                currentPage: 1,
                perPage: 15
            }
        },
        methods: {
            addTask() {
                this.$dialog.prompt({
                    title: 'Create a new task',
                    message: 'Enter task description',
                    inputAttrs: {
                        placeholder: 'e.g. Do some stuff',
                        maxlength: 60
                    },
                    onConfirm: (value) => {
                        let newIdx = Math.max(...this.tasks.map(r=>r.idx))+1;
                        this.tasks.unshift({ title: value, completed: false, idx: newIdx })
                    }
                })
            },
            removeTask({idx}) {
                this.tasks.splice(this.tasks.findIndex(r=>r.idx === idx),1);
            }
        },
        computed: {
            filteredTasks() {
                return this.tasks.filter(r => r.title.includes(this.filterText));
            }
        }
    }
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #adc918;
$primary-invert: findColorInvert($primary);
$secondary: #21b6c1;
$secondary-invert: findColorInvert($secondary);
$tertiary: #ea4b48;
$tertiary-invert: findColorInvert($tertiary);

$colors: (
    "primary": ($primary, $primary-invert),
    "secondary": ($secondary, $secondary-invert),
    "tertiary": ($tertiary, $tertiary-invert),
);

$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
@import "~bulma";
@import "~buefy/src/scss/buefy";

h1, .header, .list {
    margin: 20px 30px;
}
.goi-g { color: #ea4b48; }
.goi-o { color: #21b6c1; }
.goi-i { color: #adc918; }
</style>
