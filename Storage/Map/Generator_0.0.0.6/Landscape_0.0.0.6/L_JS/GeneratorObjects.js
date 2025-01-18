const GeneratorObjects = {
    Controller () {
        RuNGeneratorObjects = true;
        GeneratorObjects.Start();
        setTimeout(()=>{
            GeneratorHeight.Controller();
        },100)
    },

    Start () {
        for(let x = 0 ; x < WorldSize; x++){
            for(let y = 0 ; y < WorldSize; y++){
                WorldCell[CenterHeightWorld][x][y][1] = [[null,0,0],0,0,WorldCell[CenterHeightWorld][x][y][0][3]]
            }
        }

    }
}


 
