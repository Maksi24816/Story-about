let ArrCellRiver = [];
let ArrCellRiverStart = [];
let ArrlastNum = [];

const radiusNum = 50;

const GeneratorRiver = {
    Controller () {
        Unit = Math.ceil(Math.random() * 3) + 3;
        for(let x = 0; x < Unit; x++){
            ArrCellRiver[x] = [];
            ArrlastNum = [];

            GeneratorRiver.Checking();

            Block = Math.floor(Math.random() * 4);
            ArrCellRiverStart[ArrCellRiverStart.length] = [gcX,gcY];
            GeneratorRiver.Cell(gcX,gcY,Block,0,x);
        }
    },

    Checking () {
        gcX = Math.floor(Math.random() * WorldSize);
        gcY = Math.floor(Math.random() * WorldSize);

        if(WorldCView[CenterHeightWorld][gcX][gcY] == 6) {
            if(GeneratorRiver.Radius(gcX,gcY)){
                return [gcX,gcY];
            } else {
                GeneratorRiver.Checking();
            }
        } else {
            GeneratorRiver.Checking();
        }
    },

    Radius (gcX,gcY) {
        if(ArrCellRiverStart.length != 0){
            TFgr = false;
            for(let x = 0; x < ArrCellRiverStart.length; x++){
                if(gcX < ArrCellRiverStart[x][0] + radiusNum && gcX > ArrCellRiverStart[0] - radiusNum){
                    if(gcY < ArrCellRiverStart[x][1] + radiusNum && gcY > ArrCellRiverStart[1] - radiusNum){
                        TFgr = true;
                    }
                }
            }
            
            if(TFgr == true){
                return false;
            } else {
                return true;
            }
            
        } else {
            return true;
        }
    },

    Cell (gcX,gcY,Block,lastNum,X) {
        V = Math.floor(Math.random() * 4);
        if(Block != V){
            if (V === 0){
                gvX = 1,gvY = 0;
            } else if (V === 1){
                gvX = 0,gvY = 1;
            } else if (V === 2){
                gvX = -1,gvY = 0;
            } else if (V === 3){
                gvX = 0,gvY = -1;
            }
    
            gc_vX = gcX+gvX;
            gc_vY = gcY+gvY

            if(lastNum < 2){
                GeneratorRiver.CellLogics(gc_vX,gc_vY,Block,lastNum,X);
            } else {
                TFgc = false;
                for(let x = -1; x < 2; x++){
                    for(let y = -1; y < 2; y++){
                        if(ArrlastNum[lastNum-2][0]+x === gc_vX && ArrlastNum[lastNum-2][1]+y === gc_vY) {
                            TFgc = true;
                        }
                    }
                }

                if(TFgc === false){
                    GeneratorRiver.CellLogics(gcX,gcY,Block,lastNum,X);
                } else {
                    GeneratorRiver.Cell(gcX,gcY,Block,lastNum,X);
                }
            }
            
        } else {
            last = null;
            GeneratorRiver.Cell(gcX,gcY,Block,lastNum,X);
        }
    },

    CellLogics (gcX,gcY,Block,lastNum,X) {
        ArrlastNum[lastNum] = [gcX,gcY];

        if(WorldCView[CenterHeightWorld][gc_vX][gc_vY] === 6){
            ArrCellRiver[X][ArrCellRiver[X].length] = [gc_vX,gc_vY];

            last = [gc_vX,gc_vY];
            lastNum++;
            GeneratorRiver.Cell(gc_vX,gc_vY,Block,lastNum,X);
        } else {
            GeneratorRiver.Rendering(X);
        }    
    },

    Rendering (X) {
        for(let z = ArrCellRiver[X].length-1; z >= 0; z--){
            Size = Math.ceil((z+1)/50)+1;
            Rounding = Math.floor(Size/4);
            StartX = ArrCellRiver[X][z][0];
            StartY = ArrCellRiver[X][z][1];
            StopX = ArrCellRiver[X][z][0]+Size;
            StopY = ArrCellRiver[X][z][1]+Size;
            for(let x = StartX; x < StopX; x++){
                for(let y = StartY; y < StopY; y++){
                    if(x >= StartX+Rounding && StopX-Rounding > x){
                        if(y >= StartY+Rounding && StopY-Rounding > y){
                            WorldCView[CenterHeightWorld][x][y] = 2;
                        }
                    }
                }
            }
        }
    }
}

