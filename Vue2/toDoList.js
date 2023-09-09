var toDoList = {
    props: ["propentry"],
    methods: {
        toggleChecked: function (){
            this.propentry.isChecked = !this.propentry.isChecked;
        }
    },
    template:
        "<div v-bind:class='{entry: true, done: propentry.isChecked}'>"+
            "<table><tr><td class='title'>{{propentry.title}}</td></tr><tr><td>{{propentry.content}}</td></tr><tr><td>{{propentry.deadline}}</td></tr></table><button v-on:click='toggleChecked'>Toggle</button><button v-on:click='$emit(`commit-delete-entry`, propentry)'>Delete</button>"+
        "</div>"
}

var toDoListController = {
    data: function(){
        return {
            newEntry: {
                title: "",
                content: "",
                deadline: "",
                isChecked: false
            }
        }
    },
    template:
        "<div>"+
            "<input placeholder='Title' v-model='newEntry.title'><input placeholder='Content' v-model='newEntry.content'><input placeholder='Deadline' v-model='newEntry.deadline'><button v-on:click='$emit(`commit-new-entry`, newEntry)'>Create</button>"+
        "</div>"
}

var vm = new Vue({
    el: "#app",
    data: {
      entries: [
          {
              title: "first entry",
              content: "lorem ipsum dolor met",
              deadline: "not today :)",
              isChecked: true
          }
      ]
    },
    methods: {
        addNewEntry: function(newEntry){
            this.entries.push({
                title: newEntry.title,
                content: newEntry.content,
                deadline: newEntry.deadline,
                isChecked: newEntry.isChecked
            })
        },
        deleteEntry: function(entry){
            this.entries = this.entries.filter((x) => {
                return !(x.title === entry.title && x.content === entry.content && x.deadline === entry.deadline);
            })
        }
    },
    components: {
        "to-do-list-controller": toDoListController,
        "to-do-list": toDoList
    }
})