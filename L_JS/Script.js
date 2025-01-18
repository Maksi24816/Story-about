const Create = document.getElementById("Create");
const Start = document.getElementById("Start");

Create.addEventListener("click", CreateWorld)
//sessionStorage.removeItem("World")
const World = JSON.parse(sessionStorage.getItem("World"));

if (World !== null){
    Start.addEventListener("click", StartGame)
} else {
    Start.classList.add("No")
}

function StartGame () {
    location.href='./Storage/Location/index.html'
}

function CreateWorld () {
    sessionStorage.setItem("Transition", "Main")
    location.href='./Storage/Map/Generator_0.0.0.6/Landscape_0.0.0.6/index.html'
}