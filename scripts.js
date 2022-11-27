function myFunction() {
    const input = document.getElementById("pickday").value;
    const box = document.getElementById("box");
    const date = new Date(input);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayColors = ["#dc3545", "#ecb807", "#d63384", "#198754", "#fd7e14", "#1D809F", "#6f42c1"];
    
    if (input == "") {
        alert("Please select a date.");
    } else {
        document.getElementById("weekday").innerHTML = days[date.getDay()]; 
        box.style.backgroundColor = dayColors[date.getDay()];

        if (date.getFullYear() % 4 == 0) {
            document.getElementById("leapyear").innerHTML = ("Leap Year");
        } else {
            document.getElementById("leapyear").innerHTML = ("Common Year");
        }
    }
    
}
  