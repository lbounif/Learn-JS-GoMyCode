//Function addition
function addition(a, b) {
  let result = a + b
  return result
}
//Function call
// let som1 = addition(4, 3)
// console.log(som1)
// let som2 = addition(5, 6)
// console.log(som2)

//Function Substract
function substract(a, b) {
  return a - b
}
// console.log(substract(10, 4))

//Function Division
function division(a, b) {
  if (b === 0) return "b must be different then zero"
  else return a / b
}
// console.log(division(10, 5))
// console.log(division(10, 0))

//Function returning fullName
function fullName(firstName, lastName) {
  return firstName + " " + lastName
}
// console.log(fullName("Lies", "Nabi"))

//conditions
function checkIfNumber(x) {
  console.log("Le type de la variable est: ", typeof x)
  if (typeof x === "number") {
    console.log(x + " is a number.")
  } else {
    console.log(x + " is not a number.")
  }
}
checkIfNumber(5)
checkIfNumber("hello")
