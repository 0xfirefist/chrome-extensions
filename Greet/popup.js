
var but=document.getElementById('show');

if(but)
{
	but.addEventListener("click", function(){
    var text=document.getElementById('name').value;
	document.getElementById('greet').innerHTML="Hello "+text+" !";
	});
}
