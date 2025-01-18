const LandHeight = Math.floor(GenerXY/100*(Land100[0]-Land100[1])/10*1.5);
let NumLandHeight = 0;
let ArrLandHeight = [];
console.log(GenerXY)
const GeneratorHeight = {
    Controller () {
        Num = Math.ceil(Math.random()*6)+3;
        for(let x = 0; x < Num; x++){
            GeneratorHeight.RandStart();
        }
        NumLandHeight += Num;
        
        GeneratorHeight.Neighbour(0);
        
        GeneratorCView.Transition();
    },

    RandStart () {
        gsX = Math.floor(Math.random() * WorldSize);
        gsY = Math.floor(Math.random() * WorldSize);

        if(WorldCView[CenterHeightWorld][gsX][gsY] === 6){
            if(GeneratorHeight.Radius(CenterHeightWorld,gsX,gsY)){
                WorldCView[CenterHeightWorld][gsX][gsY] = 9
            } else {
                GeneratorHeight.RandStart();
            }
        } else {
            GeneratorHeight.RandStart();
        }
    },

    Radius  (Z,X,Y) {
        for(let x = -5; x < 6; x++){
            for(let y = -5; y < 6; y++){
                WC = WorldCView[Z][X+x][Y+y];
                if(WC < 4){return false;}
            }
        }

        return true;
    },

    Neighbour (gnNum) {
        ArrLandHeight = [];

        for(let x = 0; x < WorldSize; x++){
            for(let y = 0; y < WorldSize; y++){
                if(WorldCView[CenterHeightWorld][x][y] === 9){
                    ArrLandHeight[ArrLandHeight.length] = [x,y];
                }
            }
        }

        GeneratorHeight.Arrow()

        if(NumLandHeight < LandHeight){
            gnNum++;
            if(gnNum % 3 === 0){GeneratorHeight.RandStart();}
            GeneratorHeight.Neighbour(gnNum);
        } else {
            for(let x = 0; x < 3; x++){
                setTimeout(() => {
                    GeneratorHeight.Smoothing();
                    //Render()
                }, x*1000);
            }

            setTimeout(() => {
                GeneratorGrass.Controller();
                //Render();  
            }, 100);
            //GeneratorHeight.Transition();
        }
    },

    Arrow () {
        gaNum = 0;

        for(let x = 0; x < ArrLandHeight.length; x++){
            V = Math.floor(Math.random() * 4);

            if (V === 0){
                gaX = 1,gaY = 0;
            } else if (V === 1){
                gaX = 0,gaY = 1;
            } else if (V === 2){
                gaX = -1,gaY = 0;
            } else if (V === 3){
                gaX = 0,gaY = -1;
            }
    
            aX = ArrLandHeight[x][0]+gaX;
            aY = ArrLandHeight[x][1]+gaY;

            if(WorldCView[CenterHeightWorld][aX][aY] < 9 && WorldCView[CenterHeightWorld][aX][aY] > 3){
                if(GeneratorHeight.Radius(CenterHeightWorld,aX,aY)){
                    WorldCView[CenterHeightWorld][aX][aY] = 9;
                    gaNum++;
                }
            }

        }

        //console.log(NumLandHeight,LandHeight,gaNum)

        NumLandHeight += gaNum;
    },

    Smoothing () {
        for(let x = 1 ; x < WorldSize-1; x++){
            for(let y = 1 ; y < WorldSize-1; y++){
                GeneratorHeight.SmoothingCount(x,y);
            }
        }
    },

    SmoothingCount (X,Y) {
        gscNum = 0;
        for(let x = X-1 ; x < X+2; x++){
            for(let y = Y-1 ; y < Y+2; y++){
                if(WorldCView[CenterHeightWorld][x][y] === 9){gscNum++}
            }
        }

        if(gscNum > 4){WorldCView[CenterHeightWorld][X][Y] = 9}
        else {if(WorldCView[CenterHeightWorld][X][Y] === 9){WorldCView[CenterHeightWorld][X][Y] = 6}}
    },

    Transition () {
        for(let x = 1; x < WorldSize-1; x++){
            for(let y = 1; y < WorldSize-1; y++){
                arr = [];
                for(let x2 = -1; x2 < 2; x2++){
                    arr1 = []
                    for(let y2 = -1; y2 < 2; y2++){
                        if(WorldCView[CenterHeightWorld][gsX][gsY] === 9){
                            arr1[y2+1] = true
                        } else {
                            arr1[y2+1] = false
                        }
                    }
                    arr[x2+1] = arr1;
                }
                //Transition.Height(arr,WorldCell[CenterHeightWorld][x][y][1]);
            }
        }
    }
}

