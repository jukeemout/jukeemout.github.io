// Get saved data from sessionStorage
let title =  sessionStorage.getItem("title"); // Your code here
let lat_max = sessionStorage.getItem("latMax");
let lat_min = sessionStorage.getItem("latMin");
let lon_max = sessionStorage.getItem("lonMax");
let lon_min = sessionStorage.getItem("lonMin");

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above

document.querySelector('#title').innerHTML = title;
document.querySelector('#lat_max').innerHTML = lat_max;
document.querySelector('#lat_min').innerHTML = lat_min;
document.querySelector('#lon_max').innerHTML = lon_max;
document.querySelector('#lon_min').innerHTML = lon_min;

