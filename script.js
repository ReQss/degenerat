var lista = [
  'https://ebd.cda.pl/620x368/367290174',
  'https://ebd.cda.pl/620x368/367292850'
];
function podmiana(odcinek){
document.getElementById("animo").src= lista[odcinek];

}


function przypinka(){
	lista1 = document.getElementById("lista").style.opacity;
	
	if (lista1 == '0'){
        document.getElementById("lista").style.opacity = '1';
    	}
    else{
        document.getElementById("lista").style.opacity = '0';
    	}
	stream = document.getElementById("streamokno").style.opacity;
	if (stream == '0'){
        document.getElementById("streamokno").style.opacity = '1'
    	}
    else{
        document.getElementById("streamokno").style.opacity = '0';
    	}
}

