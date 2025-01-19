const SIZE_EL_GMAP_X = innerWidth/(WorldSize*3), SIZE_EL_GMAP_Y = SIZE_EL_GMAP_X;
console.log(innerWidth)

const GMap = {
    Controler () {
        console.log(123)
    },

    Dom () {
        const Map = document.getElementById("Map");
        const CanvasMap = document.getElementById("CanvasMap");
        const MapContext = CanvasMap.getContext('2d');

        const ActLocationBox = document.getElementById("ActLocationBox");
        ActLocationBox.innerHTML = "";

        CanvasMap.width = WorldSize*SIZE_EL_GMAP_X*3, CanvasMap.height = WorldSize*SIZE_EL_GMAP_Y*3;

        for(let y = 0; y < ArrLocation.length; y++){
            for(let x = 0; x < ArrLocation[0].length; x++){
                let num = ArrLocation[x][y];

                MapContext.drawImage(ArrCView[num[0][3]][num[0][1][1]][num[0][1][2]],
                    num[0][2]*SIZE_EL_IMG_X,0,SIZE_EL_IMG_X,SIZE_EL_IMG_Y,
                    x*SIZE_EL_GMAP_X,y*SIZE_EL_GMAP_Y,SIZE_EL_GMAP_X,SIZE_EL_GMAP_Y)
            }
        }

        let div = document.createElement('div');
        div.className = "ActLocation";

        div.style.width = SIZE_EL_GMAP_X*9 + "px";
        div.style.height = SIZE_EL_GMAP_X*9 + "px";

        div.style.top = SIZE_EL_GMAP_X*YLocSectionStart*3 + "px";
        div.style.left = SIZE_EL_GMAP_X*XLocSectionStart*3 + "px";

        ActLocationBox.append(div);
    },
}