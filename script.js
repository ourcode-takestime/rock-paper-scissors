console.log("Hello World")

function getComputerChoice() {
    let choice = Math.random() *3;
        if (choice <= 1) {
            console.log("Rock")
        }
        else if (choice > 1 && choice < 2) {
            console.log("Paper")
        }
        else {
            console.log("Scissors")
        }
}