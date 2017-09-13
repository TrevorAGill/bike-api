export class Bike {
  constructor(manufacturer,color,location) {
    this.manufacturer = manufacturer;
    this.color = color;
    this.location = location;
  }

  getAPIData(url,fn) {
    $.ajax({
      data: {
        format: 'json'
      },
      url: url,
      type: 'GET',
      success: (response) => {
        let bikesArray = response.bikes;
        let simpleBikeArray = this.parseBikeArray(bikesArray);
        fn(simpleBikeArray);
      },
      error: function(jqXHR, textStatus, errorThrown) {
               alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

               $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
               console.log('jqXHR:');
               console.log(jqXHR);
               console.log('textStatus:');
               console.log(textStatus);
               console.log('errorThrown:');
               console.log(errorThrown);
           }
    });
  }

  parseBikeArray(bikesArray) {
    let simpleBikeArray = [];
    bikesArray.forEach(function(bike){
      let newBike = { model          : bike.frame_model,
                      year           : bike.year,
                      serial         : bike.serial,
                      dateStolen     : moment.unix(bike.date_stolen).format("MM-DD-YYYY"),
                      locationStolen : bike.stolen_location
                    };
      simpleBikeArray.push(newBike);
    });
    console.log("inside parseBikeArray: " + simpleBikeArray);
    return simpleBikeArray;
  }


}
