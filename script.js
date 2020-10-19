prompt("Sprawdz odcinek zanim przystapisz do ogladania FUNgineer ");


function przypinka(){
	x = document.getElementById("top").style.display;
	if (x == 'none'){
        document.getElementById("top").style.display = 'block'
    }
    else{
        document.getElementById("top").style.display = 'none';
    }
}
