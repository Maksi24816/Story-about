const MinRend = 13,MaxRend = 14;

const LocationRendering = {
    Cell () {                        
        for(let x = 0; x < 81; x++){
            for(let y = 0; y < 81; y++){
                NewSW = NewArrWorldCell[x][y];
                for(let z1 = 0; z1 < NewSizeWorldS; z1++){
                    for(let z2 = 0; z2 < NewSizeWorldS; z2++){
                        let num = ArrCView[NewSW[z1][z2][0][3]][NewSW[z1][z2][0][1][1]][NewSW[z1][z2][0][1][2]];
                        if(num != null){
                            context.drawImage(num,
                                NewSW[z1][z2][0][2]*SIZE_EL_IMG_X,0,SIZE_EL_IMG_X,SIZE_EL_IMG_Y,
                                (z1+(x*NewSizeWorldS))*SIZE_EL_MAP_X,(z2+(y*NewSizeWorldS))*SIZE_EL_MAP_Y,SIZE_EL_MAP_X,SIZE_EL_MAP_Y)
                        }
    
                    }
                }
            }
        }
    }
}

