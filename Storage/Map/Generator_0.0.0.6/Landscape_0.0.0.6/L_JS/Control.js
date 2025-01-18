let ActCView = 0;
const TypeCView_Elem = document.querySelectorAll(".TypeCView_Elem");
for(let x = 0; x < TypeCView_Elem.length; x++){
    TypeCView_Elem[x].addEventListener("click", () => {
        ActCView = JSON.parse(TypeCView_Elem[x].getAttribute("data"));
    })
}

function CopyWorldButt () {
    text = JSON.stringify(WorldCell);
    navigator.clipboard.writeText(text);
}

function GoCopyWorldButt (){
    const ReceptionArr_Input = document.querySelector(".ReceptionArr_Input");
    sessionStorage.setItem("WorldCView", ReceptionArr_Input.value);
    WorldCView = JSON.parse(ReceptionArr_Input.value);
    GeneratorCView.Transition();
    SeparationMap.Separation3();
    LocationRendering.Cell();
    console.log(WorldCView);
}

let actMouse = false;
canvas.addEventListener("mousedown", ()=>{actMouse = true;})
canvas.addEventListener("mouseup", ()=>{actMouse = false;})
canvas.addEventListener("mousemove", (e)=>{
    if(actMouse == true){
        OldX = Math.abs(Math.floor((e.offsetX)/SIZE_EL_MAP_X));
        OldY = Math.abs(Math.floor((e.offsetY)/SIZE_EL_MAP_Y));
        X = OldX + (MapCoordinateX-MinRend)*3;
        Y = OldY + (MapCoordinateY-MinRend)*3;
        WorldCView[HeightWorld][X][Y] = Number(ActCView);
        GeneratorCView.PointTransition(X,Y);
        SeparationMap.PointSeparation3(Math.floor(X/3),Math.floor(Y/3));
        LocationRendering.PointCell(Math.floor(OldX/3),Math.floor(OldY/3),Math.floor(X/3),Math.floor(Y/3));
    }
})





window.addEventListener("keydown", (e)=>{
    if(Number(e.key)){
        console.log("N")
    } else {
        if(e.code == "KeyQ"){if(MinHeightWorld < HeightWorld){HeightWorld--;LocationRendering.Cell();}} 
        else if (e.code == "KeyE"){if(MaxHeightWorld > HeightWorld){HeightWorld++;LocationRendering.Cell();}} 

        else if (e.code == "KeyW"){if(MapCoordinateY > 13){MapCoordinateY-=9;LocationRendering.Cell();}} 
        else if (e.code == "KeyD"){if(MapCoordinateX < NumSep-14){MapCoordinateX+=9;LocationRendering.Cell();}} 
        else if (e.code == "KeyS"){if(MapCoordinateY < NumSep-14){MapCoordinateY+=9;LocationRendering.Cell();}} 
        else if (e.code == "KeyA"){if(MapCoordinateX > 13){MapCoordinateX-=9;LocationRendering.Cell();}} 
    }
})