


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
element = document.querySelector("stream-info-card-component__subtitle");
anime = document.getElementById('animee');

var x = document.getElementsByClassName('stream-info-card__body tw-align-items-start tw-flex tw-flex-column tw-pd-l-0');
					
y = document.getElementsByClassName('stream-info-card__body tw-align-items-start tw-flex tw-flex-column tw-pd-l-0');
  var TextInsideLi = document.getElementsByTagName('p')[1];
//alert("Wybierz odcinek i kliknij Maki w prawym górnym rogu");
var lista = [
  'https://www.youtube.com/watch?v=WasyO7DzMjQ',
  'Muzyka/hinkik.mp3'
];
$plik=file_get_contents($odcinki.txt);
