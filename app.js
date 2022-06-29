const  App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString :'Введите название заметки',
            inputValue:'',
            notes: [' Заметка 1','Заметка 2'],
        }
    },
    methods: {
        addNewNote() {
            if(this.inputValue !== '') {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        toUppercase(item){
            return item.toUpperCase();
        },
        deleteNote(i) {
           this.notes.splice(i,1);
        }
    },
    computed: {
        doubleCountComputed(){
            return this.notes.length*2;
        },
    },
    watch: {
        inputValue(value) {
            if( value.length >10) {
                this.inputValue = '';
            }
        }
    }
}
Vue.createApp(App).mount('#app');