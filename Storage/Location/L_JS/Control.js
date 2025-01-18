let ArrLocation = [];

let HeroRunX = 0;
let HeroRunY = 0;

let ArrKeyMoving = [false,false,false,false];
let TFDirection = false;

function GoCopyWorldButt (){
    const ReceptionArr_Input = document.querySelector(".ReceptionArr_Input");
    WorldCView = JSON.parse(ReceptionArr_Input.value);
    ArrLocation = WorldCView[1];

    sessionStorage.setItem("World",JSON.stringify(ArrLocation))
    console.log(WorldCView);

    LocationRendering.Cell();
}

canvas.addEventListener("click", (e)=>{
    X = Math.floor(e.offsetX/SIZE_EL_MAP_X)
    Y = Math.floor(e.offsetY/SIZE_EL_MAP_Y)
    Collect.Controler(X,Y);
})

window.addEventListener("keydown", (e)=>{
    if(Number(e.key)){
        console.log("N")
    } else {
        if(e.code == "KeyW" || e.code == "KeyS" || e.code == "KeyD" || e.code == "KeyA"){
            if (e.code == "KeyW"){if(ArrKeyMoving[0] === false){ArrKeyMoving[0] = true;}} 
            if (e.code == "KeyD"){if(ArrKeyMoving[1] === false){ArrKeyMoving[1] = true;}} 
            if (e.code == "KeyS"){if(ArrKeyMoving[2] === false){ArrKeyMoving[2] = true;}} 
            if (e.code == "KeyA"){if(ArrKeyMoving[3] === false){ArrKeyMoving[3] = true;}} 

            Direction.Controler();
        }

        if(e.code == "ShiftLeft"){Shift = true;}; 

        if(e.code == "KeyI"){if(ArrTFWindows[0] === false){Windows(1,0);}else{Windows(0,0)}}
        else if (e.code == "KeyK") {if(ArrTFWindows[1] === false){Windows(1,1);}else{Windows(0,1)}}
        else if (e.code == "KeyC") {if(ArrTFWindows[2] === false){Windows(1,2);}else{Windows(0,2)}}
        else if (e.code == "KeyM") {if(ArrTFWindows[3] === false){Windows(1,3);}else{Windows(0,3)}}
    }
})

window.addEventListener("keyup", (e)=>{
    if(Number(e.key)){
        console.log("N")
    } else {
        if(e.code == "KeyW" || e.code == "KeyS" || e.code == "KeyD" || e.code == "KeyA"){
            if (e.code == "KeyW"){ArrKeyMoving[0] = false} 
            if (e.code == "KeyD"){ArrKeyMoving[1] = false} 
            if (e.code == "KeyS"){ArrKeyMoving[2] = false} 
            if (e.code == "KeyA"){ArrKeyMoving[3] = false} 
        }
        
        if(e.code == "ShiftLeft"){Shift = false}; 
    }
})

const Direction = {
    Controler () {
        if(TFDirection === false){
            TFDirection = true;
            Direction.Command();
        }
    }, 

    Command () {
        X = 0,Y = 0;

        NumKeyRun = 0;

        for(let x = 0; x < ArrKeyMoving.length; x++){
            if(ArrKeyMoving[x]){
                NumKeyRun++;
            }
        }

        if(ArrKeyMoving[0]){Y--;}
        if(ArrKeyMoving[1]){X++;}
        if(ArrKeyMoving[2]){Y++;}
        if(ArrKeyMoving[3]){X--;}

        Moving.Controler(X,Y)

        if(NumKeyRun > 0){
            setTimeout(() => {Direction.Command();},33.3)
        } else {
            HeroState = 0;
            TFDirection = false
        }
    }
}