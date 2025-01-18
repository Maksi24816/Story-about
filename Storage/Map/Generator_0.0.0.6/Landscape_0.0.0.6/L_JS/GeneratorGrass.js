const ArrBioGrass100 = [[0.5,0.80,0],[0.4,0.55,0]]

const GeneratorGrass = {
    Controller () {
        GeneratorGrass.Run(6,7,ArrBioGrass100[0],6);
        GeneratorGrass.Run(7,8,ArrBioGrass100[1],7);

        let Transition = sessionStorage.getItem("Transition");

        if(Transition === "Main"){
            sessionStorage.setItem("World", JSON.stringify(WorldCell));
            location.href='../../../../index.html'
        }
    },

    Run (p1,p2,Pr100,Contact) {
        GeneratorGrass.Search(p1,p2,Pr100,Contact)

        for(let x = 0; x < 3; x++){
            GeneratorGrass.Neighbour(p1,p2,3,x);
        }

        Render();
    },

    Search (p1,p2,Pr100,Contact) {
        for(let x = 1; x < GenerX-1; x++){
            for(let y = 1; y < GenerY-1; y++){
                if(WorldCell[CenterHeightWorld][x][y][0][0] == p1){
                    if(GeneratorGrass.Radius(x,y,Contact)){
                        Rand = Math.random();
                        if(Rand < Pr100[WorldCell[CenterHeightWorld][x][y][0][3]]){WorldCView[CenterHeightWorld][x][y] = p2;}    
                    }
                }
            }
        }
    },

    Radius (X,Y,Contact){
        for(let x = X-1 ; x < X+2; x++){
            for(let y = Y-1 ; y < Y+2; y++){
                gnW = WorldCView[CenterHeightWorld][x][y];
                if(gnW < Contact){
                    return false
                }
            }
        }

        for(let x = X-2 ; x < X+3; x++){
            for(let y = Y-2 ; y < Y+3; y++){
                gnW = WorldCView[CenterHeightWorld][x][y];
                if(gnW > 8){
                    return false
                }
            }
        }

        return true;
    },

    Neighbour (p1,p2,Stop,Num) {
        for(let x = 1; x < GenerX-1; x++){
            for(let y = 1; y < GenerY-1; y++){
                gnWC = WorldCView[CenterHeightWorld][x][y];

                gnN1 = p1-1;
                gnN2 = p2+1;
                if(gnWC > gnN1 && gnWC < gnN2){

                    gcNum = 0;
                    for(let x2 = x-1 ; x2 < x+2; x2++){
                        for(let y2 = y-1 ; y2 < y+2; y2++){
                            if(WorldCView[CenterHeightWorld][x2][y2] === p2){gcNum++}
                        }
                    }

                    if(gcNum > 4){WorldCView[CenterHeightWorld][x][y] = p2}
                    else {WorldCView[CenterHeightWorld][x][y] = p1}
                }
            }
        }
    }
}

