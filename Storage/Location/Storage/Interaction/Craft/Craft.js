const Craft = {
  Controler (t) {
    if(Craft.Checking(t)){
      Craft.Timer(t);
    }
  },

  Dom () {
    const CList = document.getElementById("CList");
    CList.innerHTML = "";
    
    for(let x = 0; x < CraftArr.length; x++){
      for(let y = 0; y < CraftArr[x].length; y++){
        for(let z = 0; z < CraftArr[x][y].length; z++){
          let div = document.createElement('div');
          div.className = "Recipe FLEX";
          div.setAttribute("onclick", "Craft.Controler("+JSON.stringify(CraftArr[x][y][z])+")")

          Text0 = "<div class='Result FLEX'>";
          Res = CraftArr[x][y][z][0];
          for (let x1 = 0; x1 < Res.length; x1++) {
            Text0+= "<div class='Resource FLEX'><img src='"+ArrInventoryIMG[Res[x1][0][0]][Res[x1][0][1]][Res[x1][0][2]].src+"'></img><span> "+Res[x1][1]+" </span></div>";
          }
          Text0+= "</div>";

          Text0+= "<div class='Material FLEX'>";
          Res = CraftArr[x][y][z][1];
          for (let x1 = 0; x1 < Res.length; x1++) {
            Text0+= "<div class='Resource FLEX'><img src='"+ArrInventoryIMG[Res[x1][0][0]][Res[x1][0][1]][Res[x1][0][2]].src+"'></img><span> "+Res[x1][1]+" </span></div>";
          }
          Text0+= "</div>";

          div.innerHTML = Text0;
          CList.append(div);
        }
      } 
    }
  },

  Checking (t) {
    for (let x = 0; x < t[1].length; x++) {
      Num = 0;
      for (let y = 0; y < InventoryList[1].length; y++) {
        if(t[1][x][0][0] === InventoryList[1][y][0][0]){
          if(t[1][x][0][1] === InventoryList[1][y][0][1]){
            if(t[1][x][0][2] === InventoryList[1][y][0][2]){
              Num++;
              //console.log(Num,t[1][x][0],InventoryList[1][y][0])
            }
          }
        }
      }

      if(t[1][x][1] > Num){
        return
      }
    }
    return true;
  },

  InvDelete (t) {
    for (let x = 0; x < t[1].length; x++) {
      for (let z = 0; z < t[1][x][1]; z++) {
        Craft.InvDeleteEl1(x,z,t)
      }
    }
  },

  InvDeleteEl1 (x,z,t) {
    for (let y = InventoryList[1].length-1; y > -1; y--) {
      if(t[1][x][0][0] === InventoryList[1][y][0][0]){
        if(t[1][x][0][1] === InventoryList[1][y][0][1]){
          if(t[1][x][0][2] === InventoryList[1][y][0][2]){
            InventoryList[1].splice(y, 1);
            return;
          }
        }
      }
    }
  },

  InvAdd (t) {
    for (let x = 0; x < t.length; x++) {
      for (let y = 0; y < t[x][1]; y++) {
        Param = InventoryArr[t[x][0][0]][t[x][0][1]][t[x][0][2]][1] 
        InventoryList[1][InventoryList[1].length] = [t[x][0],Param];
      }
    }
  },

  Timer (t) {
    Craft.InvDelete(t);

    const DivTimer = document.getElementById("Timer");
    const Indicator = document.querySelector(".Indicator");

    DivTimer.style.display = "flex";
    
    ctNum = 0;
    Frame = 16.67;
    Millisecond = t[2][0];
    Percent = 100/(Millisecond/Frame);
    
    Int = setInterval(()=>{
        Indicator.style.width = ctNum*Percent + "%";
        ctNum++;
    },Frame)

    setTimeout(() => {
      Craft.InvAdd(t[0])
      clearInterval(Int);
      DivTimer.style.display = "none";
      console.log(InventoryList[1])
    }, Millisecond);
  }
}
