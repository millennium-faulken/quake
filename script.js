$(document).ready(function () {
  getQuakes();

  function getQuakes() {
    $.ajax({
      type: "POST",
      url: "api.php",
      beforeSend: function () {
        $("#loading").show();
        $("#table").hide();
      },
      complete: function () {
        $("#loading").hide();
        $("#table").show();
      },
      success: function (response) {
        JSON.parse(response).features.map(function (quake) {
          var item = [];
          const date = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });
          item.push(
            "<tr>" +
              '<td class="place">' +
              quake.properties.place +
              "</td>" +
              '<td class="mag">' +
              quake.properties.mag +
              "</td>" +
              '<td class="time">' +
              date.format(quake.properties.time) +
              "</td>" +
              "<tr/>"
          );
          return $("#quakes").append(item);
        });
      },
      error: function (status) {
        console.log(status);
      },
    });
  }
});
