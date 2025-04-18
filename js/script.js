document.getElementById('bmiForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;

  if (weight > 0 && height > 0) {
    const bmi = weight / (height * height);
    let status = '';

    if (bmi < 18.5) {
      status = 'Underweight';
    } else if (bmi < 24.9) {
      status = 'Normal weight';
    } else if (bmi < 29.9) {
      status = 'Overweight';
    } else {
      status = 'Obese';
    }

    document.getElementById('result').innerHTML = `
      Your BMI is <strong>${bmi.toFixed(2)}</strong> (${status})
    `;
  } else {
    document.getElementById('result').textContent = 'Please enter valid numbers.';
  }
});
