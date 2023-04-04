
function calculateBmi() {

    let weight = document.getElementById("w").value
    let height = document.getElementById("h").value

    let bmi=  (weight) / (height/100*height/100)
    //bmi formula = weight/height 

    document.getElementById("heading").innerHTML = "Your BMI is: "
    document.getElementById("bmi-output").innerHTML = bmi.toFixed(2)

    if (bmi <= 18.5) {
    document.getElementById("message").innerHTML = "You are underweight"
    }
    else if (bmi <= 25) {
   document.getElementById("message").innerHTML = "You are healthy"
    }
    else {
    document.getElementById("message").innerHTML = "You are overweight"
    } 
}

function reload() {
    window.location.reload()
}

