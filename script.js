


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
streamtitle = document.getElementsByClassName("tw-c-text-overlay tw-font-size-5");
odcinki = document.getElementsByClassName("listatext").innerHTML = "Odcin";
document.getElementById("xd").innerHTML = "New text!";
//alert("Wybierz odcinek i kliknij Maki w prawym górnym rogu");
