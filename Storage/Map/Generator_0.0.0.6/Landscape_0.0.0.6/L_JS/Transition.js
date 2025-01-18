const Transition = {
    CView (Arr,WorldCView,Neighboring,BioCell) {
        Go = [[WorldCView,Neighboring,0,BioCell],[[null,0,0],0]];
        UP = 0;
        
        if(Arr[0][1] == 1){if(Arr[2][1] == 1){Go[0][2] = 0;UP++}}
        if(Arr[2][1] == 1){if(Arr[0][1] == 1){Go[0][2] = 0;UP++}}
        if(Arr[1][0] == 1){if(Arr[1][2] == 1){Go[0][2] = 0;UP++}}
        if(Arr[1][2] == 1){if(Arr[1][0] == 1){Go[0][2] = 0;UP++}}

        if(UP == 0){
            if(Arr[0][1] == 1){if(Arr[1][2] == 1){Go[0][2] = 12;UP++}}
            if(Arr[1][2] == 1){if(Arr[2][1] == 1){Go[0][2] = 11;UP++}}
            if(Arr[2][1] == 1){if(Arr[1][0] == 1){Go[0][2] = 10;UP++}}
            if(Arr[1][0] == 1){if(Arr[0][1] == 1){Go[0][2] = 9;UP++}}
        }

        if(UP == 0){
            if(Arr[0][1]){Go[0][2] = 5;UP++}
            if(Arr[1][2]){Go[0][2] = 6;UP++}
            if(Arr[2][1]){Go[0][2] = 7;UP++}
            if(Arr[1][0]){Go[0][2] = 8;UP++}
        }
        
        if(UP == 0){
            if(Arr[0][2]){Go[0][2] = 4;UP++}
            if(Arr[2][2]){Go[0][2] = 3;UP++}
            if(Arr[2][0]){Go[0][2] = 2;UP++}
            if(Arr[0][0]){Go[0][2] = 1;UP++}
        }

        return Go;
    },

    Height (Arr, Cell) {
        //Cell[2] = 0;

        if(Arr[2][1] == 1){ 
            if(Arr[1][2] == 1) {
                if(Arr[1][0]){
                    if(Arr[0][1] == 1){Cell[2] = 15;}
                    else{Cell[2] = 12;}
                }
                else if(Arr[0][1] == 1) {
                    if(Arr[1][0] == 1){Cell[2] = 15;}
                    else{Cell[2] = 13;}
                }
                else{Cell[2] = 9;}
            }
            else if(Arr[0][1] == 1) {
                if(Arr[1][0]){
                    if(Arr[1][2] == 1){Cell[2] = 15;}
                    else{Cell[2] = 11;}
                }
                else if(Arr[1][2] == 1) {
                    if(Arr[1][0] == 1){Cell[2] = 15;}
                    else{Cell[2] = 13;}
                }
                else{Cell[2] = 5;}
            }
            else if(Arr[1][0] == 1) {
                if(Arr[0][1]){
                    if(Arr[0][1] == 1){Cell[2] = 15;}
                    else{Cell[2] = 11;}
                }
                else if(Arr[1][2] == 1) {
                    if(Arr[1][0] == 1){Cell[2] = 15;}
                    else{Cell[2] = 12;}
                }
                else{Cell[2] = 8;}
            }
            else {Cell[2] = 1;}
        }
        else if(Arr[0][1] == 1){
            if(Arr[1][2] == 1) {
                if(Arr[1][0]){
                    if(Arr[2][1] == 1){Cell[2] = 15;}
                    else{Cell[2] = 14;}
                }
                else if(Arr[2][1] == 1) {
                    if(Arr[1][0] == 1){Cell[2] = 15;}
                    else{Cell[2] = 13;}
                }
                else{Cell[2] = 10;}
            }
            else if(Arr[1][0] == 1) {
                if(Arr[2][1]){
                    if(Arr[1][2] == 1){Cell[2] = 15;}
                    else{Cell[2] = 11;}
                }
                else if(Arr[1][2] == 1) {
                    if(Arr[2][1] == 1){Cell[2] = 15;}
                    else{Cell[2] = 14;}
                }
                else{Cell[2] = 7;}
            }
            else {Cell[2] = 2;}
        }
        else if(Arr[1][2] == 1){
            if(Arr[1][0] == 1) {
                if(Arr[0][1]){
                    if(Arr[0][1] == 1){Cell[2] = 15;}
                    else{Cell[2] = 14;}
                }
                else if(Arr[2][1] == 1) {
                    if(Arr[1][0] == 1){Cell[2] = 15;}
                    else{Cell[2] = 12;}
                }
                else{Cell[2] = 6;}
            }
            else {Cell[2] = 3;}
        }
        else if(Arr[1][0] == 1){Cell[2] = 4;}
    }
}