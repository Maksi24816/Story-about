let ArrBioCellNew = [];
let ArrBioPlace = [];

function BioPlace () {
    for(let x = 0; x < Bio; x++){ArrBioPlace[x] = x + 1;}
    for(let x = Bio-1; x > 0; x--){ArrBioPlace[ArrBioPlace.length] = x;}
}BioPlace()

const GeneratorBio = {
    Borders () {
        GeneratorBio.Cell();
        GeneratorBio.Random();
        GeneratorBio.Step();
        GeneratorBio.End();
    },

    Cell () {
        for(let x = 0; x < WorldCView[CenterHeightWorld].length; x++){
            Arr = [];
            for(let y = 0; y < WorldCView[CenterHeightWorld].length; y++){
                if(WorldCView[CenterHeightWorld][x][y] > 0){Arr[y] = 0}
                else {Arr[y] = null}
            }
            ArrBioCellNew[x] = Arr;
        }
    },

    Random () {
        ActSizeWorld = Math.floor(GenerY/100*70);
        ActStep = Math.floor(GenerY/100*15);

        BioStep = Math.floor(ActSizeWorld/ArrBioPlace.length);
        BioStepBorderTop = Math.ceil(BioStep/4);
        BioStepBorderCenter = Math.ceil(BioStep/2);
        BioStepBorderBottom = BioStep-BioStepBorderTop;

        for(let x = 0; x < ArrBioPlace.length; x++){
            for(let y = 0; y < ArrBioPlace.length; y++){
                BR_X = ActStep + BioStep*y + Math.floor(Math.random() * BioStepBorderCenter) + BioStepBorderTop
                BR_Y = ActStep + BioStep*x + Math.floor(Math.random() * BioStepBorderCenter) + BioStepBorderTop;
                if(ArrBioCellNew[BR_X][BR_Y] == 0){ArrBioCellNew[BR_X][BR_Y] = ArrBioPlace[x]}
            }
        }
    },

    Step () {
        ArrOld = [];

        for(let x = 1; x < WorldCView[CenterHeightWorld].length-1; x++){
            for(let y = 1; y < WorldCView[CenterHeightWorld].length-1; y++){
                if(ArrBioCellNew[x][y] > 0){ArrOld[ArrOld.length] = [x,y,ArrBioCellNew[x][y]]}
            }
        }

        Num = 0;
        for(let z = 0; z < ArrOld.length; z++){
            for(let x = -1; x < 2; x++){
                for(let y = -1; y < 2; y++){
                    if(ArrBioCellNew[ArrOld[z][0]+x][ArrOld[z][1]+y] == 0){
                        ArrBioCellNew[ArrOld[z][0]+x][ArrOld[z][1]+y] = ArrOld[z][2];
                        Num++;
                    }
                }
            }
        }

        if(Num != 0){
            GeneratorBio.Step();
        }
    },

    End () {
        for(let x = 0; x < WorldCView[CenterHeightWorld].length; x++){
            for(let y = 0; y < WorldCView[CenterHeightWorld].length; y++){
                if(ArrBioCellNew[x][y] == null){ArrBioCellNew[x][y] = 0}
                else{ArrBioCellNew[x][y]--}
            }
        }

        ArrBioCell = ArrBioCellNew;
    }
}

