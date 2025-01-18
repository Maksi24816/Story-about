const ArrCView = [];
const ArrObjectsIMG = [];
const ArrInventoryIMG = [];

const ArrObjectsIMGName = [["Walls/",["Natural/"]],["Сollect/",["Resources/","Herbs/","Berries/"]],["Сollect_Extract/",["Bushes/"]],["Extract/",["Shrubs/","Stones/"]]];
const ArrInventoryIMGName = [["Resources/",["Сollect/"]],["Food/",["Сollect/"]],["Tools/",["Prey/"]]];

const ContactCView = [[[1,0]],[[2,1]],[[6,2]],[[4,3]],[[5,4]],[[6,5]],[[7,6],[9,6]],[[8,7]],[[null,8]],[[null,9]]]
const IMGHero = new Image();
IMGHero.src = "./M_Image/Hero.png";

for(let x = 0; x < 3; x++){
    Arr = [];
    for(let y = 0; y < ContactCView.length; y++){
        Arr1 = [];
        for(let z = 0; z < ContactCView[y].length; z++){
            Arr1[z] = new Image();
            if(ContactCView[y][z][0]===null){
                Arr1[z].src = "./M_Image/Bio/Bio"+x+"/CView"+ContactCView[y][0][1]+ContactCView[y][0][1]+".png";
            } else {
                Arr1[z].src = "./M_Image/Bio/Bio"+x+"/CView"+ContactCView[y][0][1]+ContactCView[y][0][0]+".png";
            }
        }
        Arr[y] = Arr1;
    }
    ArrCView[x] = Arr;
}

for(let x = 0; x < ArrObjects.length; x++){
    Arr = [];
    for(let y = 0; y < ArrObjects[x].length; y++){
        Arr1 = [];
        for(let z = 0; z < ArrObjects[x][y].length; z++){
            Arr1[z] = new Image();
            Arr1[z].src = "./M_Image/Objects/"+ArrObjectsIMGName[x][0]+ArrObjectsIMGName[x][1][y]+ArrObjects[x][y][z][0];
        }
        Arr[y] = Arr1;
    }
    ArrObjectsIMG[x] = Arr;
}
console.log(ArrObjectsIMG)

for(let x = 0; x < InventoryArr.length; x++){
    Arr = [];
    for(let y = 0; y < InventoryArr[x].length; y++){
        Arr1 = [];
        for(let z = 0; z < InventoryArr[x][y].length; z++){
            Arr1[z] = new Image();
            Arr1[z].src = "./M_Image/Inventory/"+ArrInventoryIMGName[x][0]+ArrInventoryIMGName[x][1][y]+InventoryArr[x][y][z][0];
        }
        Arr[y] = Arr1;
    }
    ArrInventoryIMG[x] = Arr;
}