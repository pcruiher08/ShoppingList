var lista = document.getElementById('newItems');
var submitButton = document.getElementById('boton');

lista.addEventListener("click", (event) =>{
    event.preventDefault();
    var element = event.target.parentElement;
    var elementText = (element.parentElement).querySelector(".newItem");
    var deleteClicked = event.target.matches('.delete');
    var addClilcked = event.target.matches('.add');
    if(deleteClicked || addClilcked){
        if(deleteClicked){
            (element.parentElement).remove();
        }
        if(addClilcked && event.target.parentElement.parentElement.querySelector('span').style.textDecoration != "line-through"){
           
            event.target.parentElement.parentElement.querySelector('span').style.textDecoration = "line-through";
        }else{
            event.target.parentElement.parentElement.querySelector('span').style.textDecoration = "";
        }
    }   
});

submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    var name = document.getElementById("name").value;
    if(name != ""){
        var tag = name;
        var toAddText = '';
        toAddText += '<li><span>';
        toAddText += name;
        toAddText += '</span><div><button class="add"> Check </button> <button class="delete"> Delete </button></div></li>';
        lista.innerHTML += toAddText;
    }
    document.getElementById("name").value= "";
});
