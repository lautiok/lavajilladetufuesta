const tablaProductos = document.getElementById("tablaProductos");
const botonDescargar = document.getElementById("descargarTabla");
function generarTablaProductos(products) {
  let tablaHTML = `
    <table>
      <tr>
        <th>Descripción</th>
        <th>Precio</th>
      </tr>
  `;

  products.forEach((product) => {
    tablaHTML += `
      <tr>
        <td>${product["Descripción"]}</td>
        <td>${product["Precio"]}</td>
      </tr>
    `;
  });

  tablaHTML += `</table>`;
  return tablaHTML;
}
const products = [
    {
      "Descripción": "Plato Principal Blanco Verbano de 26 cm",
      "Precio": "$ 38,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 1.800,00"
    },
    {
      "Descripción": "Plato Entrada Blanco Verbano de 22 cm",
      "Precio": "$ 38,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 1.550,00"
    },
    {
      "Descripción": "Plato Postre Blanco Verbano de 19 cm",
      "Precio": "$ 38,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 1.300,00"
    },
    {
      "Descripción": "Cazuela Blanca de 12 cm",
      "Precio": "$ 75,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 1.400,00"
    },
    {
      "Descripción": "Copa de Agua",
      "Precio": "$ 38,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 750,00"
    },
    {
      "Descripción": "Copa de Vino",
      "Precio": "$ 38,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 750,00"
    },
    {
      "Descripción": "Copa de Champagne",
      "Precio": "$ 38,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 750,00"
    },
    {
      "Descripción": "Vaso de Trago Largo",
      "Precio": "$ 38,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 750,00"
    },
    {
      "Descripción": "Jarra Vidrio 1,6 lt",
      "Precio": "$ 150,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 2.700,00"
    },
    {
      "Descripción": "Cuchara de Postre ac inox",
      "Precio": "$ 38,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 600,00"
    },
    {
      "Descripción": "Cuchillo Principal ac inox",
      "Precio": "$ 38,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 600,00"
    },
    {
      "Descripción": "Tenedor Principal ac. Inox",
      "Precio": "$ 38,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 600,00"
    },
    {
      "Descripción": "Tenedor de Postre ac inox",
      "Precio": "$ 38,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 600,00"
    },
    {
      "Descripción": "Cucharita de Te o Café",
      "Precio": "$ 26,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 400,00"
    },
    {
      "Descripción": "Taza de Te con plato",
      "Precio": "$ 80,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 1000 / $ 500"
    },
    {
      "Descripción": "Taza de Café con plato",
      "Precio": "$ 80,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 1000 / $ 500"
    },
    {
      "Descripción": "Termo Plástico de 4 Litros ( para 40 personas )",
      "Precio": "$ 320,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 11.000,00"
    },
    {
      "Descripción": "Termo Plástico de 8 Litros ( para 80 personas )",
      "Precio": "$ 470,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 18.000,00"
    },
    {
      "Descripción": "Bandeja ac. Inox. Ovalada 39 x 27 cm",
      "Precio": "$ 100,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 2.400,00"
    },
    {
      "Descripción": "Bandeja Mozo ac inox 42 cm",
      "Precio": "$ 125,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 4.200,00"
    },
    {
      "Descripción": "Cucharon ac. Inox (Para ensaladas)",
      "Precio": "$ 60,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 1.000,00"
    },
    {
      "Descripción": "Cuchillo de Torta ac inox",
      "Precio": "$ 100,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 2.000,00"
    },
    {
      "Descripción": "Ensaladera ac inox 24 cm",
      "Precio": "$ 100,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 2.300,00"
    },
    {
      "Descripción": "Ensaladera de Vidrio 3 Litros",
      "Precio": "$ 125,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 1.800,00"
    },
    {
      "Descripción": "Frapera ac inox",
      "Precio": "$ 125,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 3.200,00"
    },
    {
      "Descripción": "Fuente ac inox rectang 33 cm p/servir",
      "Precio": "$ 125,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 3.200,00"
    },
    {
      "Descripción": "Hielera con Pinza ac inox",
      "Precio": "$ 100,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 1.800,00"
    },
    {
      "Descripción": "Pala de Torta ac inox",
      "Precio": "$ 100,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 1.000,00"
    },
    {
      "Descripción": "Panera de Mimbre 24 cm",
      "Precio": "$ 125,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 800,00"
    },
    {
      "Descripción": "Pinza para Servir Multiuso",
      "Precio": "$ 60,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 1.300,00"
    },
    {
      "Descripción": "Salero",
      "Precio": "$ 60,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 500,00"
    },
    {
      "Descripción": "Servilletero",
      "Precio": "$ 60,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 800,00"
    },
    {
      "Descripción": "Mantel Redondo (3 mts) Blancos/Negros",
      "Precio": "$ 460,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 5.800,00"
    },
    {
      "Descripción": "Mantel Rectangular (1,5 x 3 mts) Blancos/Negros",
      "Precio": "$ 460,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 3.600,00"
    },
    {
      "Descripción": "Camino colores varios",
      "Precio": "$ 220,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 900,00"
    },
    {
      "Descripción": "Cubre Silla Blancos/Negros con Lazo",
      "Precio": "$ 150,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 1400 / $ 300"
    },
    {
      "Descripción": "Servilleta colores varios",
      "Precio": "$ 30,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 160,00"
    },
    {
      "Descripción": "Mesas Redondas MADERA (10 personas)",
      "Precio": "$ 720,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 12.000,00"
    },
    {
      "Descripción": "Mesas Rectangular MADERA (2,20 x 0,70)",
      "Precio": "$ 720,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 8.000,00"
    },
    {
      "Descripción": "Sillas MADERA",
      "Precio": "$ 185,00",
      "Sub-Total": "$ 0,00",
      "Reposición": "$ 3.500,00"
    },
    {
      "Descripción": "Gazebo 6x3 (30 personas) con 2 Luces",
      "Precio": "$ 9.000,00",
      "Sub-Total": "$ 0,00",
      "Reposición": ""
    },
    {
      "Descripción": "Juego de Living 10 personas Blanco",
      "Precio": "$ 3.900,00",
      "Sub-Total": "$ 0,00",
      "Reposición": ""
    }
  ];
function aumentarPrecioPorcentaje(products, porcentaje) {
  products.forEach((product) => {
    const precioActual = parseFloat(product["Precio"].replace("$", "").replace(" ", ""));
    
    const aumento = precioActual * (porcentaje / 100);
    
    const nuevoPrecio = precioActual + aumento;
    
    product["Precio"] = "$ " + nuevoPrecio.toFixed(2); 
  });
}

// Uso de la función para aumentar el precio
const porcentajeAumento = 0;
aumentarPrecioPorcentaje(products, porcentajeAumento);

const tablaHTML = generarTablaProductos(products);

tablaProductos.innerHTML = tablaHTML;

function descargarPDF() {
  const doc = new jsPDF();
  
  doc.text("Nuestros Servicios:", 20, 20);
  
  const tabla = generarTablaProductos(products);
  
  doc.fromHTML(tabla, 20, 20);
  
  doc.save("tabla_productos.pdf");
}

botonDescargar.addEventListener("click", () => {
  descargarPDF();
});