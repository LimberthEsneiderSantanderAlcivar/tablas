function mostrartabla (j){
 	document.getElementById("mostrar").innerHTML="";
 	var mostrar = document.getElementById('mostrar')
 	var h= "<div class='row'>" 
	for (var i = 1; i <= 12; i++) {
		h+= j + " * "+i+" = "+i*j+"<br>";
	}
	h+="</div></div>";
	mostrar.innerHTML += h;
}