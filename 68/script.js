console.log("Raj")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "Green"

// document.querySelector(".box").style.backgroundColor = "green"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
})