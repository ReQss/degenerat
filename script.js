var lista = [
  'https://ebd.cda.pl/620x368/367290174',
  'https://ebd.cda.pl/620x368/367292850'
];


function przypinka(){
	lista = document.getElementById("lista").style.opacity;
	
	if (lista == 'none'){
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
streamtitle = document.getElementsByClassName("tw-c-text-overlay tw-font-size-5");
element = document.querySelector("stream-info-card-component__subtitle");
anime = document.getElementById('animee');

var x = document.getElementsByClassName('stream-info-card__body tw-align-items-start tw-flex tw-flex-column tw-pd-l-0');
					
y = document.getElementsByClassName('stream-info-card__body tw-align-items-start tw-flex tw-flex-column tw-pd-l-0');
  var TextInsideLi = document.getElementsByTagName('p')[1];
//alert("Wybierz odcinek i kliknij Maki w prawym górnym rogu");


function podmiana(odcinek){
document.getElementById("animo").src= lista[odcinek];

}
