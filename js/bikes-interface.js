import {Bike} from './../js/bikes.js'

$(document).ready(function() {
  $('#bikeForm').submit(function(event) {
    event.preventDefault();
    let location = $('#location').val();
    let bike = new Bike ("Trek", "Blue", 97206);
    let manufacturer = $('#manufacturer').val();
    let color = $('#color').val();
    let distance = $('#distance').val();
    let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=${manufacturer}&frame-colors=${color}&location=${location}&distance=${distance}&stolenness=proximity`;

    bike.getAPIData(url,function(simpleBikeArray){
      console.log(simpleBikeArray);
      simpleBikeArray.forEach(function(bike) {
        $(".results").append('<strong>Model: ' + bike.model + '</strong><br>');
        $(".results").append('Year: ' + bike.year + '<br>');
        $(".results").append('Serial #: ' + bike.serial + '<br>');
        $(".results").append('Date Stolen: ' + bike.dateStolen + '<br>');
        $(".results").append('Location Stolen: ' + bike.locationStolen + '<br><br>');
      });
    });





    // $.getJSON(url,function(data.bikes) {
    //   console.log(data.bikes);
    //   $.each(data, function() {
    //     console.log(data.bikes.title)
    //     // let model = data.bikes.;
    //     // let serial = ;
    //     // let year = ;
    //     // let locationStolen = ;
    //     // let bike[i]
    //     // let test = data.bikes[3].title;
    //     // debugger;
    //     // console.log(data.bikes[3].title);
    //   });
    // });



  });
});
