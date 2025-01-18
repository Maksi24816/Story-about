const GenerX = WorldSize, GenerY = GenerX, GenerXY = GenerX*GenerY;
const Land100 = [40,10,20]
const Land = [];
const GWParametrs = [[true,6,0,6],[false,0,6,2],[false,2,0,1]]

const GeneratorWorld = {
    Controller () {
        for(let x = 0 ; x < Land100.length; x++){
            setTimeout(()=>{
                Land[x] = GenerXY/100*Land100[x];
                GeneratorWorld.Land(GWParametrs[x],Land[x])

                if(x == Land100.length-1){
                    GeneratorBio.Borders();
                    GeneratorRiver.Controller();
                    
                    setTimeout(() => {
                        RuNGeneratorObjects = true;
                        GeneratorHeight.Controller();  
                        
                        setTimeout(() => {
                            Render();
                        }, 100);
                    }, 100);
                }

               //Render();
            },300 * x)
        }
    },

    Land (Param,Land) {
        Step = 0;
        Dot = Param[0];p1 = Param[1];
        p2 = Param[2];p3 = Param[3];

        Num = 0;
        for(let x = 0 ; x < 1;){
            if(Dot == true){
                MathStep = Math.ceil(Step/12)
                for(let x = 0; x < MathStep; x++){
                    RX = Math.floor (50 + Math.random() * (GenerX-100));
                    RY = Math.floor (50 + Math.random() * (GenerY-100));
                    WorldCView[CenterHeightWorld][RX][RY] = 6;
                }
                Step++;
            }

            if(Land > Num){Num = GeneratorWorld.Cycle(p1,p2,p3);}
            else{x = 1}
        }

        for(let x = 1; x < 5; x++){
            GeneratorWorld.Smoothing(p2,p3)
        }
    },

    Cycle (p1,p2,p3){
        PrArr = [];
        for(let x = 1; x < GenerX-1; x++){
            Arr1 = [];
            for(let y = 1; y < GenerY-1; y++){
                WCV = WorldCView[CenterHeightWorld][x][y];
                if(WCV == p1 || WCV == p3){Arr1[y] = 1;}
                else {Arr1[y] = 0;}
            }
            PrArr[x] = Arr1;
        }

        for(let x = 1; x < GenerX-1; x++){
            for(let y = 1; y < GenerY-1; y++){
                if(PrArr[x][y] === 1){
                    WCV = WorldCView[CenterHeightWorld][x][y];
                    if(WCV === p1){Num = GeneratorWorld.Neighbour(x,y,p2,p3,Num,PrArr)}
                    else if (WCV === p3){Num = GeneratorWorld.Neighbour(x,y,p2,p3,Num,PrArr)}
                }
            }
        }

        //for(let x = 1; x < GenerX-1; x++){
        //    for(let y = 1; y < GenerY-1; y++){
        //        if(WorldCView[CenterHeightWorld][x][y] == Type){
        //            if(P1Arr[x][y] == Type){
        //                Num = GeneratorWorld.Checking(Num,x,y)
        //            }
        //        }
        //    }
        //}

        return Num;
    },

    Neighbour (X,Y,p2,p3,Num){
        TF = false;
        arrNeighbour = [];
        for(let x = X-1 ; x < X+2; x++){
            for(let y = Y-1 ; y < Y+2; y++){
                if(WorldCView[CenterHeightWorld][x][y] == p2){
                    TF = true;
                    arrNeighbour[arrNeighbour.length] = [x,y]
                };
            }
        }
        if(TF === true){Num = GeneratorWorld.Checking(Num,p3,arrNeighbour);}

        return Num;
    },

    Checking (Num,p3,arrNeighbour) {
        num = Math.floor(Math.random() * arrNeighbour.length);
        aNX = arrNeighbour[num][0];
        aNY = arrNeighbour[num][1];

        WorldCView[CenterHeightWorld][aNX][aNY] = p3;
        Num++;

        return Num;
    },

    Smoothing (p2,p3) {
        for(let x = 1 ; x < GenerX-1; x++){
            for(let y = 1 ; y < GenerY-1; y++){
                GeneratorWorld.SmoothingCount(x,y,p2,p3);
            }
        }
    },

    SmoothingCount (X,Y,p2,p3) {
        num2 = 0;
        num3 = 0;
        for(let x = X-1 ; x < X+2; x++){
            for(let y = Y-1 ; y < Y+2; y++){
                if(WorldCView[CenterHeightWorld][x][y] == p3){num3++}
                else if (WorldCView[CenterHeightWorld][x][y] == p2){num2++}
            }
        }

        if(num3 > 4){WorldCView[CenterHeightWorld][X][Y] = p3}
        else if (num2 > 4){WorldCView[CenterHeightWorld][X][Y] = p2}
    }
}

