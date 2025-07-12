function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const result = document.getElementById("result");
  const tip = document.getElementById("tip");

  if (!weight || !height || weight <= 0 || height <= 0) {
    result.textContent = "Please enter valid weight and height.";
    result.style.color = "red";
    tip.textContent = "";
    return;
  }

  let bmi;
  if (unit === "metric") {
    const heightInM = height / 100;
    bmi = weight / (heightInM * heightInM);
  } else {
    bmi = (weight / (height * height)) * 703;
  }

  bmi = bmi.toFixed(2);

  let category = "";
  let advice = "";

  if (bmi < 18.5) {
    category = "Underweight";
    advice = "Consider eating more nutritious food and consult a doctor.";
  } else if (bmi < 24.9) {
    category = "Normal weight";
    advice = "Great job! Keep maintaining a healthy lifestyle.";
  } else if (bmi < 29.9) {
    category = "Overweight";
    advice = "Try to include physical activity and a balanced diet in your routine.";
  } else {
    category = "Obese";
    advice = "Consider consulting a healthcare provider for guidance.";
  }

  result.textContent = `Your BMI is ${bmi} (${category})`;
  result.style.color = "#222";
  tip.textContent = advice;
}

function resetForm() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("tip").textContent = "";
}
