function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
        Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
        Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
        Color_Output = "Green" + Color_String;
        break;
        case "Blue":
        Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
        Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
        Color_Output = "Purple" + Color_String;
        break;
        default:   
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("Canvas_test");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.rect(20, 20, 150, 100);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.rect(40, 40, 150, 100);
ctx.fillStyle = "blue";
ctx.fill();


var d = document.getElementById("Canvas_2");
var dtx = d.getContext("2d");

var grd = dtx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

dtx.fillStyle = grd;
dtx.fillRect(20, 20, 150, 100);