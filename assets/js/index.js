fetch("https://data.covid19india.org/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    3;

    console.log(data.statewise);

    // console.log(data);

    //Process Your data
  })
  .catch(function (err) {
    console.log(err);
  });

var url = "https://data.covid19india.org/data.json";
