
let size = 16


function getGridSize(){
size = Number(window.prompt("Please enter a whole number between 1 and 100:"))

while((isNaN(size))||(!Number.isInteger(size))){
    size = Number(window.prompt("Invalid input.  Please enter a number:"))
}

while((size>100)||(size<1)){
    size = Number(window.prompt("Invalid input.  Number must be between 1-100:"))
    while((isNaN(size))||(!Number.isInteger(size))){
        size = Number(window.prompt("Invalid input.  Please enter a number:"))
    }
}
main.innerHTML = ""
createGrid(size)
}

const changeButton = document.createElement('button')
changeButton.textContent = "Change grid size:"
changeButton.addEventListener('click', () => {
    getGridSize()
})
const main = document.createElement('div')

main.classList.add('main')

document.body.appendChild(changeButton)
document.body.appendChild(main)


function createGrid(width){
    
for(let i = 0; i<size; i++){
    let row = document.createElement('div')
    row.classList.add("row")
        for(let i =0; i< size;i++){

        let x = document.createElement('div')
        x.classList.add("cell")
        x.addEventListener("mouseover", () =>{
            x.classList.add("hover")
        })
        row.appendChild(x)
    }
    main.appendChild(row)
}

}

createGrid(size)


