var lista = document.getElementById('newItems');
var submitButton = document.getElementById('boton');

lista.addEventListener("click", (event) =>{
    event.preventDefault();
    var element = event.target.parentElement;
    var elementText = element.parentElement.querySelector(".newItem");
    var deleteClicked = event.target.matches('.delete');
    var addClilcked = event.target.matches('.add');
    if(deleteClicked || addClilcked){
        if(deleteClicked){
            console.log("voy a borrar");
            (element.parentElement).remove();
        }
        if(addClilcked && element.style.textDecoration != "line-through"){
            console.log("voy a tachar");
            elementText.style.textDecoration = "line-through";
        }else{
            elementText.style.textDecoration = "underline";
        }
    }   
});

submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    var name = document.getElementById("name").value;
    console.log(name)
    if(name != ""){
        var tag = name;
        console.log(tag);
        var toAddText = '';
        toAddText += '<li><div>';
        toAddText += name;
        toAddText += '</div><div><button class="add"> Check </button> <button class="delete"> Delete </button></div></li>';
        lista.innerHTML += toAddText;
    }
    document.getElementById("name").value= "";
});
