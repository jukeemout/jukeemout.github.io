const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value; // grabs the busroute number after button is clicked

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    //ensures not blank/undefined
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // defines where to get route info from

    fetch(busRouteURL) //grabs info from api
      .then((response) => {
        //response is placeholder, can be anything
        return response.json();
      })
      .then((route) => {
        //route is placeholder
        let title = route.title; 
        let latMax = route.lat_max;
        let latMin = route.lat_min;
        let lonMax = route.lon_max;
        let lonMin = route.lon_min; 
        //defines elements

        
          sessionStorage.setItem("title", route.title); //the following syntax sets website wide values for these, remember route is
          sessionStorage.setItem("latMax", route.lat_max); //placeholder from line 13
          sessionStorage.setItem("latMin", route.lat_min);
          sessionStorage.setItem("lonMax", route.lon_max);
          sessionStorage.setItem("lonMin", route.lon_min);

      })

      .catch((err) => {
        //error checking
        console.log(err);
        main.innerHTML = "Invalid bus route";
        sessionStorage.setItem("title", nothing); 
        sessionStorage.setItem("latMax", nothing);
        sessionStorage.setItem("latMin", nothing);
        sessionStorage.setItem("lonMax", nothing);
        sessionStorage.setItem("lonMin", nothing);
      });
  } else {
    main.innerHTML = "No value provided";
    sessionStorage.setItem("title", nothing);
    sessionStorage.setItem("latMax", nothing); 
    sessionStorage.setItem("latMin", nothing);
    sessionStorage.setItem("lonMax", nothing);
    sessionStorage.setItem("lonMin", nothing);
  }
}
