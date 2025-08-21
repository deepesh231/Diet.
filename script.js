document.getElementById("dietForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const disease = document.getElementById("disease").value;

  let result = "";

  // Simple recommendations
  if (disease === "diabetes") {
    result += "<h3>Recommended Diet (Diabetes)</h3>";
    result += "<ul><li>Low glycemic foods (oats, brown rice)</li><li>High fiber vegetables (broccoli, spinach)</li><li>Lean protein (fish, chicken)</li><li>Avoid sugar and white bread</li></ul>";
  } else if (disease === "hypertension") {
    result += "<h3>Recommended Diet (Hypertension)</h3>";
    result += "<ul><li>Low sodium foods</li><li>Fruits rich in potassium (banana, orange)</li><li>Whole grains</li><li>Limit red meat and caffeine</li></ul>";
  } else {
    result += "<h3>General Healthy Diet</h3>";
    result += "<ul><li>Balanced diet with fruits, veggies, lean protein, and carbs</li><li>Drink 2-3 liters of water daily</li><li>Limit processed food and sugar</li></ul>";
  }

  // BMI logic (basic)
  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);
  result += `<p><strong>BMI:</strong> ${bmi}</p>`;

  if (bmi < 18.5) result += "<p>You are underweight. Consider increasing healthy calorie intake.</p>";
  else if (bmi < 25) result += "<p>You have a healthy weight. Keep maintaining a balanced diet.</p>";
  else result += "<p>You are overweight. Focus on portion control and physical activity.</p>";

  document.getElementById("result").innerHTML = result;
});
