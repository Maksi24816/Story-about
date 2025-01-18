function Render () {
    GeneratorCView.Transition();
    SeparationMap.Separation3();
    LocationRendering.Cell();
}

ArrCView[2][8][0].onload = () => {
    GeneratorCView.CView();
    GeneratorWorld.Controller();
    GeneratorCView.Transition();
    SeparationMap.Separation3();
    LocationRendering.Cell();
    //Render();
}

setInterval(() => {
    sessionStorage.setItem("WorldCView", JSON.stringify(WorldCView));
    Render();
    //console.log(NewArrWorldCell)
}, 150000);