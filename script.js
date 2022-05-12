$(document).ready(function () {
  getQuakes();
  // getFireball();

  function getQuakes() {
    $.ajax({
      type: "POST",
      url: "api.php",
      success: function (response) {
        console.log(response);
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
              '<td class="mag">' +
              date.format(quake.properties.time) +
              "</td>" +
              "<tr/>"
          );
          return $("#quakes").append(item);
        });
      },
      error: function (xhr, status, error) {
        console.log(status);
      },
    });
  }
});
