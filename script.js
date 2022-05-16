$(document).ready(function () {
  getQuakes();

  function getQuakes() {
    $("#loading").hide();
    $("#table").hide();

    $("#submit").click(function () {
      var mag = $("#mag").val();
      console.log($("#mag").val());

      $.ajax({
        type: "POST",
        url: "api.php",
        data: {
          mag: mag,
        },
        beforeSend: function () {
          $("#loading").show();
          $("#table").hide();
          $("#quakes").empty();
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
                parseFloat(quake.properties.mag).toFixed(2) +
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
    });
  }
});
