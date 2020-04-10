// JavaScript File
function calculateArea() {
        var lineA = Number(document.getElementById("areaLineA").value);
        var lineB = Number(document.getElementById("areaLineB").value);
        var height = Number(document.getElementById("areaHeight").value);
        var areaOne = lineA + lineB; 
        var areaTwo = areaOne/2; 
        var areaFinal = areaTwo*height;
        alert ("The area of the trapezoid is "+ areaFinal);
      }