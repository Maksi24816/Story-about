let ArrBioCell = [];

for(let x = 0; x < WorldSize; x++){
    Arr = [];
    for(let y = 0; y < 1; y++){
        Arr2 = [];
        for(let z = 0; z < WorldSize; z++){
            Arr2[z] = 0;
        }
        Arr[y] = Arr2
    }
    ArrBioCell[x] = Arr[0]
}