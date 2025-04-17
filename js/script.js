function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const bmiOutput = document.getElementById("bmi");
    const messageOutput = document.getElementById("message");
  
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert("Please enter valid height and weight!");
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(2);
  
    bmiOutput.textContent = `Your BMI: ${bmiRounded}`;
  
    let category = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    messageOutput.textContent = `Category: ${category}`;
  }
  