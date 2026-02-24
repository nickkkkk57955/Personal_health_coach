function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight) {
        alert("Please enter valid inputs");
        return;
    }

    let bmi = weight / (height * height);

    document.getElementById("result").innerText = "Your BMI: " + bmi.toFixed(2);

    giveSuggestion(bmi);
}

function giveSuggestion(bmi) {
    let suggestion = "";

    if (bmi < 18.5) {
        suggestion = "Increase calorie intake. Eat protein-rich foods.";
    } else if (bmi >= 18.5 && bmi < 25) {
        suggestion = "Great! Maintain your healthy lifestyle.";
    } else if (bmi >= 25 && bmi < 30) {
        suggestion = "Start regular exercise and reduce sugar intake.";
    } else {
        suggestion = "Consult a doctor. Focus on diet and daily physical activity.";
    }

    document.getElementById("suggestion").innerText = suggestion;
}
