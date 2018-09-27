function calculatePopulation(){

  const year = document.querySelector("#year").value;
  const country = document.querySelector("#country").value;
  const age = document.querySelector("#age").value;


  $.ajax({
    url: `http://api.population.io:80/1.0/population/${year}/${country}/${age}/`,
    success: function (data) {

      console.log(data);
      
      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Total", "Males", "Females"],
          datasets: [{
            label: '# of Votes',
            data: [data[0].total,data[0].males,data[0].females],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }
        }
      });
   

    },

    error: function (err) {
      console.log(err);
    }
  })
  return false;

}