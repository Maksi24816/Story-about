const CollectEventsList = {
    AddInv (ctObject,State) {
        Obj = ArrObjects[ctObject[0]][ctObject[1]][ctObject[2]][2][State];
        Rand = Math.random();     

        for (let x = 0; x < Obj.length; x++) {
            if(Rand > Obj[x][0]){
                InventoryList[1][InventoryList[1].length] = [
                    Obj[x][1][0],
                    InventoryArr[Obj[x][1][0][0]][Obj[x][1][0][1]][Obj[x][1][0][2]][1]
                ];
            }
        }
    },

    DeleteObj (Arr,State) {
        LocationCell[Arr[0]][Arr[1]][1][0] = [null,0,0]
        LocationRendering.Hero()
    },

    UpdateObj (Arr,State) {
        LocationCell[Arr[0]][Arr[1]][1][1]++;
        LocationRendering.Hero()
    }
} 