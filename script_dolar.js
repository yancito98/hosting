function fetchCurrencyValues(callback) {
    fetch("https://api.bluelytics.com.ar/v2/latest")
        .then(response => response.json())
        .then(data => {
            // Reemplaza "data" con la estructura correcta de la respuesta de tu API
            const lastUpdate = new Date(data.last_update); // Convertir a formato de fecha
            const dolarOficial = data.oficial;
            const dolarBlue = data.blue;
            const euroOficial = data.oficial_euro;
            const euroBlue = data.blue_euro;

            // Actualizar la información de la última actualización
            document.getElementById("lastUpdate").textContent = lastUpdate.toLocaleString();

            // Actualizar los elementos en la página con los valores de divisas
            document.getElementById("dolarOficialCompra").textContent = dolarOficial.value_buy;
            document.getElementById("dolarOficialPromedio").textContent = dolarOficial.value_avg;
            document.getElementById("dolarOficialVenta").textContent = dolarOficial.value_sell;

            document.getElementById("dolarBlueCompra").textContent = dolarBlue.value_buy;
            document.getElementById("dolarBluePromedio").textContent = dolarBlue.value_avg;
            document.getElementById("dolarBlueVenta").textContent = dolarBlue.value_sell;

            document.getElementById("euroOficialCompra").textContent = euroOficial.value_buy;
            document.getElementById("euroOficialPromedio").textContent = euroOficial.value_avg;
            document.getElementById("euroOficialVenta").textContent = euroOficial.value_sell;

            document.getElementById("euroBlueCompra").textContent = euroBlue.value_buy;
            document.getElementById("euroBluePromedio").textContent = euroBlue.value_avg;
            document.getElementById("euroBlueVenta").textContent = euroBlue.value_sell;

            // Llamar al callback si se proporciona
            if (typeof callback === "function") {
                callback();
            }
        })
        .catch(error => {
            console.error("Error al obtener los valores de divisas desde la API:", error);
            // Llamar al callback con un error si se proporciona
            if (typeof callback === "function") {
                callback(error);
            }
        });
}

// Llamar a la función para obtener los valores de divisas al cargar la página
fetchCurrencyValues(function(error) {
    if (!error) {
        console.log("Valores de divisas cargados exitosamente.");
    } else {
        console.error("Error al cargar los valores de divisas.");
    }
});
