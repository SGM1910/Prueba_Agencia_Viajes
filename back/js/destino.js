//esta fncion obtiene los datos del servidor y los muestra
async function obtenerDestinos() {
    try {
        //todo lo q esta aca adentro si hay un error no se congela, salta a donde dice catch
    
        const respuesta = await fetch("../backend/routes/api.php?seccion=destino"); //este valor no puede ser modificado, por eso constante y no variable
   
        const destinos = await respuesta.json(); //convierte la respuesta q le pdio al seridor a un json
console.log(destinos)
        const contenedorDestinos = document.getElementById("card-container"); 
        contenedorDestinos.innerHTML = mostrarDestinos(destinos);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        document.getElementById("card-container").innerHTML = "<p> Error al cargar los datos </p>"

    }

}

//mostrar los destinos en formato de texto
function mostrarDestinos(destinos) {
    let contenido = "";
console.log(destinos);
    destinos.forEach(destinos => {
       
        contenido += `<img src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2024/01/ilustracion-viajes-turismo-3259609.jpg?tf=3840x"`;
        contenido += `<div class="card-content">`;
        contenido += `<h3 class="card-title">${destinos.nombre_destino}</h3>`;
        contenido += `<p class="card-text">${destinos.descripcion_destino}</p>`;
        contenido += `<a href="#" class="card-button">Ver más</a>`;
        //contenido += ` <td> <a href="../backend/routes/api.php?seccion=libros&accion=eliminar&id=${libro.id}">Eliminar</a></td>`;
        contenido += "</div>"; //separa destinos


    });

    return contenido;
}
//llama a la funcion para obtener y mostrar los libros al cargar la pagina 
obtenerDestinos();//cuando se ejecuta el js llama a esta funcion

