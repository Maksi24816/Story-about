let WorldCView = [];
let WorldCell = [];
let TFWorldCell = false;
const GeneratorCView = {
    CView () {
        let ArrCView = null;
        //let ArrCView = sessionStorage.getItem("WorldCView");
        //let ArrCell = sessionStorage.getItem("WorldCell");
        //sessionStorage.removeItem("WorldCView");
        if(ArrCView == null){
            for(let h = MinHeightWorld; h < CenterHeightWorld+1; h++){Arr = [];for(let x = 0; x < WorldSize; x++){Arr2 = [];for(let y = 0; y < WorldSize; y++){Arr2[y] = 0;}Arr[x] = Arr2;}WorldCView[h] = Arr;}
            for(let h = CenterHeightWorld+1; h < MaxHeightWorld+1; h++){Arr = [];for(let x = 0; x < WorldSize; x++){Arr2 = [];for(let y = 0; y < WorldSize; y++){Arr2[y] = null;}Arr[x] = Arr2;}WorldCView[h] = Arr;}
            //sessionStorage.setItem("WorldCView", JSON.stringify(WorldCView));
        } else {
            arr = sessionStorage.getItem("WorldCView");
            WorldCView = JSON.parse(ArrCView);
        }
        GeneratorCView.Cell();
    },

    Cell () {
        for(let z = 0; z < MaxHeightWorld+1; z++){
            Arr = [];
            for(let x = 0; x < WorldSize; x++){
                Arr1 = [];
                for(let y = 0; y < WorldSize; y++){
                    Arr1[y] = [];
                }
                Arr[x] = Arr1;
            }
            WorldCell[z] = Arr;
        }
    },

    Transition () {
        for(let z = 0; z < MaxHeightWorld+1; z++){
            for(let x = 0; x < WorldSize; x++){
                for(let y = 0; y < WorldSize; y++){
                    Arr21 = [];
                    if(x != 0 && x != WorldSize-1){
                        if(y != 0 && y != WorldSize-1){
                            neighboringCell = null;
                            for(let x1 = -1; x1 < 2; x1++){
                                Arr22 = [];
                                for(let y1 = -1; y1 < 2; y1++){
                                    if(WorldCView[z][x][y] != null){
                                        TF = false;
        
                                        CCView = ContactCView[WorldCView[z][x][y]];
                                        for(let p = 0; p < CCView.length; p++){
                                            if(WorldCView[z][x+x1][y+y1] === CCView[p][0]){TF = true; neighboringCell = p;}
                                        }
                                        if(TF == true){Arr22[y1+1] = 1;TFWorldCell = true} else {Arr22[y1+1] = 0;}
                                    }
                                }
                                Arr21[x1+1] = Arr22;
                            }
            
                            if(TFWorldCell == true){
                                CCV = ContactCView[WorldCView[z][x][y]][neighboringCell];
                                Go = Transition.CView(Arr21,WorldCView[z][x][y],[CCV[0],CCV[1],neighboringCell],ArrBioCell[x][y])
                                WorldCell[z][x][y] = Go;
                            }
                            else {GeneratorCView.El_NoLogic(z,x,y);}
            
                            TFWorldCell = false;
                        } else {GeneratorCView.El_NoLogic(z,x,y);  }
                    } else {GeneratorCView.El_NoLogic(z,x,y);}
                }
            }
        }
    },

    PointTransition (X,Y){
        for(let x = X-1; x < X+2; x++){
            for(let y = Y-1; y < Y+2; y++){
                Arr21 = [];
                neighboringCell = null;

                for(let x1 = -1; x1 < 2; x1++){
                    Arr22 = [];
                    for(let y1 = -1; y1 < 2; y1++){
                        if(WorldCView[CenterHeightWorld][x][y] != null){
                            TF = false;

                            CCView = ContactCView[WorldCView[CenterHeightWorld][x][y]];
                            console.log(CCView)
                            for(let p = 0; p < CCView.length; p++){
                                if(WorldCView[z][x+x1][y+y1] == CCView[p][0]){TF = true; neighboringCell = p;}
                            }
                            if(TF == true){Arr22[y1+1] = 1;TFWorldCell = true} else {Arr22[y1+1] = 0;}
                        }
                    }
                    Arr21[x1+1] = Arr22;
                }

                if(TFWorldCell == true){
                    CCV = ContactCView[WorldCView[z][x][y]][neighboringCell];
                    Go = Transition.CView(Arr21,WorldCView[z][x][y],[CCV[0],CCV[1],neighboringCell],ArrBioCell[x][y])
                    WorldCell[CenterHeightWorld][x][y] = Go;
                }
                else {GeneratorCView.El_NoLogic(CenterHeightWorld,x,y);}

                TFWorldCell = false;
            }
        }
    },
    
    El_NoLogic (z,x,y) {if(WorldCView[z][x][y] != null){
        CCV = ContactCView[WorldCView[z][x][y]][0];
        WorldCell[z][x][y][0] = [WorldCView[z][x][y],[CCV[0],CCV[1],0],0,ArrBioCell[x][y]];
        WorldCell[z][x][y][1] = [[null,0,0],0];
    }}
};



