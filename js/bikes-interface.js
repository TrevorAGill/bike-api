// import {Bike} from './../js/bikes.js'

$(document).ready(function() {
  $('#bikeForm').submit(function() {
    // let bike = new Bike ("Trek", "Blue", 97206);
    let location = $('#location').val();
    let manufacturer = $('#manufacturer').val();
    let color = $('#color').val();
    let distance = $('#distance').val();
    let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=${manufacturer}&frame-colors=${color}&location=${location}&distance=${distance}&stolenness=proximity`;



    debugger;
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        console.log("success");
      },
      error: function() {
        console.log('error');
      }
    });



    // $.getJSON(url,function(data) {
    //   debugger;
    //   alert("test");
    //   // let items = [];
    //   // $.each(data, function())
    //   let test = data.bikes[3].title;
    //   debugger;
    //   console.log(data.bikes[3].title);
    // });


  });
});
