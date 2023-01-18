let catsPicked = []

let catAmount = document.getElementById("catNumber")

let jeffersButton = document.getElementById("jeffersPick")
let jeffersStatus = false

let keffersButton = document.getElementById("keffersPick")
let keffersStatus = false

let leffersButton = document.getElementById("leffersPick")
let leffersStatus = false

const Jeffers = () => {

    if (jeffersStatus == false) {
        jeffersStatus = true
        catsPicked.push("Jeffers")
        catAmount.innerHTML = catsPicked.length
        jeffersButton.innerHTML = "Release Jeffers"
    }

    else {
        jeffersStatus = false
        catsPicked.pop("Jeffers")
        catAmount.innerHTML = catsPicked.length
        jeffersButton.innerHTML = "Adopt Jeffers"
    }

}

const Keffers = () => {

    if (keffersStatus == false) {
        keffersStatus = true
        catsPicked.push("Keffers")
        catAmount.innerHTML = catsPicked.length
        keffersButton.innerHTML = "Release Keffers"
    }

    else {
        keffersStatus = false
        catsPicked.pop("Keffers")
        catAmount.innerHTML = catsPicked.length
        keffersButton.innerHTML = "Adopt Keffers"
    }

}

const Leffers = () => {

    if (leffersStatus == false) {
        leffersStatus = true
        catsPicked.push("Leffers")
        catAmount.innerHTML = catsPicked.length+1
        leffersButton.innerHTML = "Release Keffers"
    }

    else {
        leffersStatus = false
        catsPicked.pop("Leffers")
        catAmount.innerHTML = catsPicked.length
        leffersButton.innerHTML = "Adopt Leffers"
    }

}