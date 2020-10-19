prompt("Sprawdz odcinek zanim przystapisz do ogladania FUNgineer ");


function przypinka(){
	lista = document.getElementById("lista").style.display;
	
	if (lista == 'none'){
        document.getElementById("lista").style.display = 'block'
    	}
    else{
        document.getElementById("lista").style.display = 'none';
    	}
	stream = document.getElementById("streamokno").style.display;
	if (stream == 'none'){
        document.getElementById("streamokno").style.display = 'block'
    	}
    else{
        document.getElementById("streamokno").style.display = 'none';
    	}
}
