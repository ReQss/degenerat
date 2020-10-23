


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
});
anime = document.getElementById('animee');
title = document.querySelector('stream-info-card-component__subtitle');
//alert("Wybierz odcinek i kliknij Maki w prawym górnym rogu");
