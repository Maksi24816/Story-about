let InventoryList = [
    [
        null,null,null,null,null,null,
        [[2,0,0],[0]],null,null,null,
        null,null,null,null,null,
        null,null,null,null,null
    ],
    [
    ]
]

const Inventory = {
    Controler (Num) {
        Inventory.Type(Num)
    },

    Dom () {
        const ThingsList = document.getElementById("ThingsList");
        ThingsList.innerHTML = "";
        
        for(let x = 0; x < InventoryList[1].length; x++){
            let div = document.createElement('div');
            div.className = "Items FLEX";
            div.setAttribute("onclick","Inventory.Controler("+x+")")
            div.innerHTML = "<img src='"+ArrInventoryIMG[InventoryList[1][x][0][0]][InventoryList[1][x][0][1]][InventoryList[1][x][0][2]].src+"'>";
            ThingsList.append(div);
        }

        const EType_El = document.querySelectorAll(".EType_El");
        for(let x = 0; x < EType_El.length; x++){
            EType_El[x].innerHTML = "";
            if(InventoryList[0][x] !== null){
                let div = document.createElement('div');
                div.className = "Items FLEX";
                div.setAttribute("onclick","Inventory.TakeOff("+x+")")
                div.innerHTML = "<img src='"+ArrInventoryIMG[InventoryList[0][x][0][0]][InventoryList[0][x][0][1]][InventoryList[0][x][0][2]].src+"'>";
                EType_El[x].append(div);
            }
        }
    },

    Dress (Num) {
        Type = InventoryList[1][Num][1][0];

        for (let x = 0; x < InventoryList[0].length; x++) {
            if(TypeInvList[x] === Type){
                if(InventoryList[0][x] === null){
                    InventoryList[0][x] = InventoryList[1][Num];
                    InventoryList[1].splice(Num, 1);
                    return;
                }
            }
        }
    },

    TakeOff (Num) {
        InventoryList[1][InventoryList[1].length] = InventoryList[0][Num];
        InventoryList[0][Num] = null;
        Inventory.Dom();
    },

    Type (Num) {
        a1 = InventoryList[1][Num][0][0];
        a2 = InventoryList[1][Num][0][1];
        a3 = InventoryList[1][Num][0][2];

        Inventory.Events(InventoryList[1][Num]);

        switch (a1) {
            case 0:

              break;
            case 1:
                Inventory.Eat(Num)
              break;
            case 2:
                Inventory.Dress(Num);
              break;
            default:
              console.log("No")
        }

        Inventory.Dom();
    },

    Eat (Num) {
        Saturation = InventoryList[1][Num][1][0];
        if(HeroHunger < MaxHeroHunger-Saturation){
            HeroHunger+=Saturation

            InventoryList[1].splice(Num, 1);
            Hunger.Scale();
        }
    },

    Events (Items) {
        IA = InventoryArr[Items[0][0]][Items[0][1]][Items[0][2]][2];
        
        for (let x = 0; x < IA.length; x++) {
            EventList[IA[x]]();
        }
    }
}