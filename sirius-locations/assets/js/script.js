const locationsList = [
  {
    "country": "assets/img/united-states.png",
    "state": "Arizona",
    "city": "Scottsdale",
    "contact": "602-383-3500"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "California",
    "city": "Irvine",
    "contact": "949-777-0400"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Colorado",
    "city": "Centennial",
    "contact": "720-407-1400"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Connecticut",
    "city": "Norwalk",
    "contact": "203-299-1420"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Florida",
    "city": "Boca Raton",
    "contact": "561-997-2900"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Idaho",
    "city": "Boise",
    "contact": "800-460-1237"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Illinois",
    "city": "Rosemont",
    "contact": "800-843-4488"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Iowa",
    "city": "West Des Moines",
    "contact": "515-246-4100"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Kansas",
    "city": "Overland Park",
    "contact": "913-322-2020"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Maryland",
    "city": "Crofton (Sirius Federal)",
    "contact": "800-391-0204"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Minnesota",
    "city": "Bloomington",
    "contact": "952-896-6300"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Missouri",
    "city": "St.Louis",
    "contact": "314-726-3630"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Nebraska",
    "city": "Omaha",
    "contact": "402-965-2300"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "New York",
    "city": "Liverpool",
    "contact": "315-214-6200"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "New York",
    "city": "Pittsford",
    "contact": "800-460-1237"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "North Carolina",
    "city": "Charlotte",
    "contact": "800-460-1237"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "North Carolina",
    "city": "Greensboro",
    "contact": "336-365-7037"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "North Carolina",
    "city": "Raleigh",
    "contact": "800-460-1237"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Ohio",
    "city": "Cincinnati",
    "contact": "513-891-8888"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Ohio",
    "city": "Strongsville",
    "contact": "5440-826-8800"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "South Dakota",
    "city": "Sioux Falls",
    "contact": "800-460-1237"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Texas",
    "city": "Austin",
    "contact": "512-840-7419"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Texas",
    "city": "Dallas",
    "contact": "972-725-2000"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Texas",
    "city": "Houston",
    "contact": "713-463-1600"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Texas",
    "city": "San Antonio",
    "contact": "800-460-1237"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Utah",
    "city": "Salt Lake City",
    "contact": "801-964-4900"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Washington",
    "city": "Bellevue",
    "contact": "425-406-5112"
  },
  {
    "country": "assets/img/india.png",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "contact": "91-44-6650-7800"
  },
  {
    "country": "assets/img/united-states.png",
    "state": "Ontario",
    "city": "Mississauga",
    "contact": "800-460-1237"
  }
]

$(function () {   //Tabs widget from JQuery UI
  $("#tabs").tabs();
});

$(document).ready(function () {     //Function that loads up on document launch
  $("#accordion").accordion({   //Accordion Widget
    collapsible: true,
    heightStyle: "20rem"
  });

  $('#tabs-3').ready(function () {  //Function that loads up when the third tab is ready
    $.each(locationsList, function (index, obj) {   //For each loop to traverse the locations 
      var locationRow = $("<div class=location-row></div>");
      $('.locations').append(locationRow);
      var location = $(`<img src=${obj.country} class=location__image>`);
      locationRow.append(location);
      var stateNew = $(`<p class=location__state>${obj.state}</p>`);
      locationRow.append(stateNew);
      var cityNew = $(`<p class=location__city>${obj.city}</p>`);
      locationRow.append(cityNew);
      var contactNew = $(`<p class=location__contact>${obj.contact}</p>`);
      contactNew.attr("text-align", "end")
      locationRow.append(contactNew);
      $('.location-row:odd').css("background-color", "#f2d9f7") //Alternating Colors for rows
      $('.location-row:even').css("background-color", "#eeeeee")
    });
  });

});