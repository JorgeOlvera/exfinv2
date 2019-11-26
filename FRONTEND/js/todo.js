var token = localStorage.getItem('token');
if (token) {
  token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end.
}


var todos = document.querySelectorAll("input[type=checkbox]");

function loadTodos() {
  $.ajax({
    url: 'https://sol-ex-finalweb.herokuapp.com/todos',
    // url: 'https://tuapp.herokuapp.com/todos',
    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
      console.log(data)

      for( let i = 0; i < data.length; i++) {
        // aqui va su código para agregar los elementos de la lista
        console.log(data[i].description)
        // algo asi:
        addTodo(data[i]._id, data[i].description, data[i].completed)
        // no tienen que usar la funcion de addTodo, es un ejemplo
      }
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });
}

loadTodos()


// o con jquery
$('input[name=newitem]').keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
   if(keycode == '13'){
       $.ajax({})
     }
});

var input = document.querySelector("input[name=newitem]");

input.addEventListener('keypress', function (event) {
  if (event.charCode === 13) {
    json_to_send = {
      "description" : input.value
    };
    json_to_send = JSON.stringify(json_to_send);
    $.ajax({
      url: 'https://sol-ex-finalweb.herokuapp.com/todos',
      // url: 'https://tuapp.herokuapp.com/todos',
      headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + token
      },
      method: 'POST',
      dataType: 'json',
      data: json_to_send,
      success: function(data){
        console.log(data)
        // agregar código aqui para poner los datos del todolist en el el html
        var node = document.createElement("LI")
        var textnode = document.createTextNode(document.getElementById("newitem").value())
        node.appendChild(textnode)
        document.getElementById("todo-list").appendChild(node)
        
      },
      error: function(error_msg) {
        alert((error_msg['responseText']));
        var node = document.createElement("LI")
        var textnode = document.createTextNode(document.getElementById("newitem").value())
        node.appendChild(textnode)
        document.getElementById("todo-list").appendChild(node)
      }
    });
    input.value = '';
  }
})


function addTodo(id, todoText, completed) {
  
}