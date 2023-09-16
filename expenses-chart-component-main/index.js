

window.onload = function () {
const ctx = document.querySelector(".chart");
let daysNames = [];
let daysAmount = [];

async function getData() {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
}

getData().then((datos) => {
  daysNames = datos.map((day) => day.day);
  daysAmount = datos.map((day) => day.amount);
  console.log(daysNames);

let backgroundColors = ["#EC755D","#EC755D","#76B5BC",
"#EC755D","#EC755D","#EC755D","#EC755D" ]

const data = {
    labels: daysNames,
    datasets: [
      {
        data: daysAmount,
        backgroundColor: 
        backgroundColors,
        borderRadius: 3,
        hoverBackgroundColor: ["#F8C9C3","#F8C9C3","#C9E4E7"
    ,"#F8C9C3","#F8C9C3","#F8C9C3","#F8C9C3"],
        barPercentage: .9,
      }
    ]
  };
  
  // Configura las opciones del gráfico
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        display: false ,
        barPercentage: 0,
       
      },
      x: {
        grid: {
            display: false  
        },
        ticks: {
            color: 'rgba(0,0,0,.4)', // Cambia el color de las etiquetas en el eje x a azul
        },
      }
    },
    plugins: {
        legend: {
          display: false // Oculta el label
        }
    },
    

  };
  
  // Crea el gráfico de barras
  const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });


});
};