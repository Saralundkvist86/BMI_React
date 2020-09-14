export const calculateBmi = (weight, height) => {
  const bmiValue = (weight / (((height / 100) * height) / 100)).toFixed(2);
  const bmiMessage = setBMIMessage(bmiValue);
  return [bmiValue, bmiMessage];
};

const setBMIMessage = finalBMI => {
  if(finalBMI <= 18.5) {
    return "underweight";
  }
  if(finalBMI > 18.5 && finalBMI <= 25) {
    return "Normal";
  }
  if(finalBMI > 25 && finalBMI <= 30) {
    return "overweight";
  }
  if(finalBMI > 30) {
    return "Obese";
  }
};