let NewArrWorldCell = [];
let Num = DegreeWorldSize-1;
let NumSep = 3**Num;
let NewSizeWorldS = WorldSize/NumSep;
let MapCoordinateX = 13, MapCoordinateY = 13;

const SeparationMap = {
    Separation3 () {
        SeparationMap.Preparation();

        for(let y1 = 0 ; y1 < NumSep; y1++){
            for(let y2 = 0 ; y2 < NumSep; y2++){
                arr1 = [];
                for(let z1 = y1*NewSizeWorldS; z1 < (y1+1)*NewSizeWorldS; z1++){
                    arr2 = [];
                    for(let z2 = y2*NewSizeWorldS; z2 < (y2+1)*NewSizeWorldS; z2++){
                        arr2[z2-y2*NewSizeWorldS] = WorldCell[CenterHeightWorld][z1][z2];
                    }
                    arr1[z1-y1*NewSizeWorldS] = arr2;
                }
                NewArrWorldCell[y1][y2] = arr1;
            }
        }
    },

    PointSeparation3 (X,Y) {
        for(let y1 = X-1 ; y1 < X+2; y1++){
            for(let y2 = Y-1 ; y2 < Y+2; y2++){
                arr1 = [];
                for(let z1 = y1*NewSizeWorldS; z1 < (y1+1)*NewSizeWorldS; z1++){
                    arr2 = [];
                    for(let z2 = y2*NewSizeWorldS; z2 < (y2+1)*NewSizeWorldS; z2++){
                        arr2[z2-y2*NewSizeWorldS] = WorldCell[CenterHeightWorld][z1][z2];
                    }
                    arr1[z1-y1*NewSizeWorldS] = arr2;
                }
                NewArrWorldCell[y1][y2] = arr1;
            }
        }
    },

    Preparation () {
        arr1 = [];
        for(let x = 0; x < NumSep; x++){
            arr2 = [];
            for(let y = 0; y < NumSep; y++){
                arr2[y] = [];
            }
            arr1[x] = arr2;
        }
        NewArrWorldCell = arr1;
    }
}
