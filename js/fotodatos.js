document.getElementById("file-input").onchange = function(e) {
            var file = e.target.files[0]
            if (file && file.name) {
                EXIF.getData(file, function() {
                	var json = EXIF.getAllTags(file);
                	console.log(json);
                	agregarFila(json);

//               		var elem = document.getElementById('nombre');
               		
            	});
            }
        }
function agregarFila(datos){
	//var tblBody = document.getElementById('tabla');
	var fila = "<td>"+datos.GPSLatitude+"</td><td>"+datos.GPSLongitude;+"</td>"
  	document.getElementById("tabla").insertRow(-1).innerHTML = fila;


               		/*elem.innerHTML = json.GPSLatitude;
               		var hilera = document.createElement("tr");
               		var celda = document.createElement("td");
               		var textoCelda = document.createTextNode(json.GPSLatitude);
               		celda.appendChild(textoCelda);
      				hilera.appendChild(celda);
               		tblBody.appendChild(hilera);*/
	
}