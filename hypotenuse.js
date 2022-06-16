const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputEl = document.querySelector('#output');
function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}
function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const calculateHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText ="length of Hypotenuse is : " + calculateHypotenuse;
}
hypotenuseBtn.addEventListener("click",calculateHypotenuse );