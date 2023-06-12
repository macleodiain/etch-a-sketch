let size = Number(window.prompt("Please enter a number:"))
console.log(`${size}`)
while((isNaN(size))||(!Number.isInteger(size))){
    size = Number(window.prompt("Invalid input.  Please enter a number:"))
}
console.log(`${typeof(size)}`)