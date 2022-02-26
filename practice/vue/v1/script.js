// Activity 2

// let app = new Vue({
//   // bind it to the #root div in the DOM
//   el: "#root",
//   // provide data for bindings
//   data: {
//     names: ['Emma', 'Brandon', 'Lucy', 'Jorge'],
//     newName: ''
//   },
//   // custom methods
//   methods: {
//     // addName will add the value of the newName property to the list of names
//     addName() {
//       if (this.newName === '')
//         return;
//       this.names.push(this.newName);
//       this.newName = "";
//     }
//   }
// });


// Activity 3
// let app = new Vue({
//   // bind it to the #root div in the DOM
//   el: "#root",
//   // provide data for bindings
//   data: {
//     title: 'Brought to you by JavaScript',
//     className: 'red',
//     isLoading: true
//   },
//   methods: {
//     toggleLoading() {
//       this.isLoading = !this.isLoading;
//     }
//   }
// });


// Activity 4
// let app = new Vue({
//   // bind it to the #root div in the DOM
//   el: "#root",
//   // provide data for bindings
//   data: {
//     message: 'I really like bread',
//     tasks: [{
//         description: "Create some loaves of bread",
//         completed: true
//       },
//       {
//         description: "Create some fish",
//         completed: true
//       },
//       {
//         description: "Create more loaves of bread",
//         completed: false,
//       },
//       {
//         description: "Create more fish",
//         completed: false
//       },
//       {
//         description: "Create more loaves of bread",
//         completed: false
//       },
//       {
//         description: "Tell Peter to clean up the mess",
//         completed: false
//       }
//     ]
//   },
//   computed: {
//     screaming() {
//       return this.message.toUpperCase();
//     },
//     incompleteTasks() {
//       return this.tasks.filter(task => !task.completed);
//     }
//   }
// });


let app = new Vue({
  el: '#root',
  data: {
      todos: [{
        text: "make an app",
        completed: false,
      }, {
        text: "declare victory",
        completed: false,
      }, {
        text: "profit",
        completed: false
      }],
      message: '',
    },
    methods: {
      addItem() {
        this.todos.push({text: this.message, completed:false});
        this.message = '';
      },
    }
});