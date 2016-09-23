var newSchedule = [];
var newContact = [];


function validate() {
	if(document.myForm.edate.value == false) {
		alert("pls enter date!");
		document.myForm.date.focus();
		return false;
	}
	if(document.myForm.startTime.value == false) {
		alert("Pls enter start time");
		document.myForm.startTime.focus();
		return false;
	}
	if(document.myForm.desc.value == false) {
		alert("Please enter Description");
		document.myForm.desc.focus();
		return false;
	}
	return true;
}

function addSchedule() {

var task="";
var currentSch = "";
var fullDate = "";



var view = {
	 "date": document.myForm.date.value,
	 "startTime": document.myForm.startTime.value,
	 "endTime": document.myForm.endTime.value,
	 "desc": document.myForm.desc.value
};


 

if(validate()) {
	newSchedule.push(view);
    for(var i = 0; i < newSchedule.length; i++) {

	task += "<p>" + newSchedule[i].date +"<br />" + newSchedule[i].startTime + " - " +	 newSchedule[i].endTime + "<br />" + newSchedule[i].desc +"</p>" + "<hr>";
   
    }
 

 
	document.getElementById("display").innerHTML = task;
	document.getElementById("form").reset();
	alert("Event was added successfully");

	 for(var i = 0; i < newSchedule.length; i++){


	      	 currentDate = new Date();
             year = currentDate.getFullYear().toString();
             month = currentDate.getMonth().toString();
             day = currentDate.getDate().toString();
             fullDate = year + "-0" + month + "-" + day;

	 	if(newSchedule[i].date === fullDate ) {
         
         currentSch += "<p>" + newSchedule[i].date +"<br />" + newSchedule[i].startTime + " - " +	 newSchedule[i].endTime + "<br />" + newSchedule[i].desc +"</p>" + "<hr>";
		document.getElementById("todaySchedule").innerHTML = currentSch;
		alert("bitch ass!");
	}
	 }
}


	
  }

function addContact() {
	var details="";

	var contactDetails = {
		"name": document.myForm2.addName.value,
		"email": document.myForm2.addEmail.value,
		"phoneNo": document.myForm2.phoneNo.value
	};

	newContact.push(contactDetails);
	for (var i = 0; i < newContact.length; i++) {
		details += "<tr><td>" + newContact[i].name + "</td><td>" + newContact[i].email + "</td><td>" + newContact[i].phoneNo + "</td></tr>";
	}

	document.getElementById("tbody").innerHTML = details;
	document.getElementById("form2").reset();

}

var addNewBtn = document.getElementById("addNewBtn");

addNewBtn.onclick = function() {
var home = document.getElementById("scheduler");
var addNew = document.getElementById("addNewPill");
addNew.setAttribute("class", "active");
homePill = document.getElementById("home").removeAttribute("class", "active");
//home.style.display = "none";

//addNew.style.display = "block";



}
function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }

/**function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 44.540, lng: -78.546},
            zoom: 8
        });
      }