const inputs = document.querySelectorAll(".angle-input");
const IsTriangleBtn = document.querySelector("#Is-triangle-button");
const outputEl = document.querySelector("#output");
function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngle = angle1 + angle2 + angle3;
  // console.log(sumOfAngle);
  return sumOfAngle;
}

function isTriangle() {
  const sumOfAngle = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  //console.log(inputs[0].value,inputs[1].value,inputs[2].value)
  console.log(sumOfAngle);
  if (sumOfAngle == 180) {
    outputEl.innerText = "Yay! the angles form a triangle";
  } else {
    outputEl.innerText = "oh oh!the angles not form a triangle";
  }
}
IsTriangleBtn.addEventListener("click", isTriangle);
