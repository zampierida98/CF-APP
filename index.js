$('#content').css('display', 'none');

function calcolaMese(meseStr) {
	if (meseStr == "A")
		return "gennaio";
	else if (meseStr == "B")
		return "febbraio";
	else if (meseStr == "C")
		return "marzo";
	else if (meseStr == "D")
		return "aprile";
	else if (meseStr == "E")
		return "maggio";
	else if (meseStr == "H")
		return "giugno";
	else if (meseStr == "L")
		return "luglio";
	else if (meseStr == "M")
		return "agosto";
	else if (meseStr == "P")
		return "settembre";
	else if (meseStr == "R")
		return "ottobre";
	else if (meseStr == "S")
		return "novembre";
	else if (meseStr == "T")
		return "dicembre";
}

// The web page fetch information from an XML file with AJAX
function loadDoc(mioCodice) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			calcolaComune(this, mioCodice);
		}
	};
	xhttp.open("GET", "catasto.xml", true);
	xhttp.send();
}

function calcolaComune(xml, mioCodice) {
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("ENTRY");
	var i;
	for (i = 0; i < x.length; i++) {
		var codice = x[i].getElementsByTagName("CODICE")[0].childNodes[0].nodeValue;
		if (codice == mioCodice) {
			var comune = x[i].getElementsByTagName("COMUNE")[0].childNodes[0].nodeValue;
			$('#luogo').html("Luogo di nascita: " + comune);
		}
	}
}

var app = {
	scan: function() {
        $('#content').css('display', 'none');
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                if (result.cancelled == true) {
                    alert("Scansione cancellata!");
                } else {
					var resultStr = result.text;
					if (resultStr.length != 16) {
						alert("Nessun codice fiscale trovato!");
					} else {
						$('#text').html(resultStr);
			
						// elaborazione luogo:
						loadDoc(resultStr.substr(11,4));
						
						// elaborazione sesso e data:
						var giorno = parseInt(resultStr.substr(9,2));
						if (giorno > 40)
						    $('#sesso').html("Sesso: femminile");
						else
						    $('#sesso').html("Sesso: maschile");

						var meseStr = resultStr.substr(8,1);
						var mese = calcolaMese(meseStr);
						var anno = "19" + resultStr.substr(6,2);
						$('#data').html("Data di nascita: " + giorno + " " + mese + " " + anno);
					}
					$('#content').css('display', 'block');
                }
            },
            function (error) {
                alert("Scansione fallita: " + error);
            },
            {
                showTorchButton : true,
                prompt : "Posiziona il codice a barre all'interno dell'area di scansione",
                resultDisplayDuration: 0,
                formats : "CODE_39",
                orientation : "portrait"
            }
        );
    }
};
