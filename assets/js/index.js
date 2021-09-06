// fetch("https://data.covid19india.org/data.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     return data.statewise;

//     // console.log(data);

//     //Process Your data
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//https://data.covid19india.org/data.json

const api_url = "https://data.covid19india.org/data.json";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  //console.log(data);
  if (response) {
    //hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

function show(data) {
  //for (let r of data.statewise) {
  var total = data.statewise[0];
  var active = total.active;
  var confirmed = total.active;
  var recovered = total.recovered;
  var deaths = total.deaths;

  document.getElementById("active").innerHTML = active;
  document.getElementById("confirmed").innerHTML = confirmed;
  document.getElementById("recovered").innerHTML = recovered;
  document.getElementById("deaths").innerHTML = deaths;

  //   var total = data.statewise.totalconfirmed;
  //   console.log(total);
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Active Cases", "Confirmed Cases", "Recovered", "Deaths"],
      datasets: [
        {
          data: [active, confirmed, recovered, deaths],
          backgroundColor: [
            "rgba(54, 162, 235)",
            "rgba(255, 206, 86)",
            "rgba(102,255,153)",
            "rgba(255,0,0)",
          ],
        },
      ],
    },
    options: {
      responsive: false,

      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        title: {
          display: true,
          text: "TOTAL INDIA REPORT",
          fontSize: "40px",
        },
      },

      animation: {
        duration: 1000,
        easing: "linear",
        loop: false,
      },
    },
  });
}
