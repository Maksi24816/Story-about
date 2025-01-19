const Skills = {
    Controler (ctObject,State) {
      Skills.Add(ctObject,State)
    },

    Dom () {
        const SList = document.getElementById("SList");
        SList.innerHTML = "";

        for(let x = 0; x < SkillsArr.length; x++){
            let div = document.createElement('div');
            div.className = "Class0";
            div.innerHTML = "<div class='ClassTop FLEX'><span>"+SkillsArr[x][0][0]+"</span><div class='ClassInfo'>LVL "+SkillsList[x][0][0]+" XP "+SkillsList[x][0][1]+"</div></div><div class='Class0Bottom'></div>";
            SList.append(div);
        }

        const Class0Bottom = document.querySelectorAll(".Class0Bottom");
        for(let x = 0; x < SkillsArr.length; x++){
            for(let y = 0; y < SkillsArr[x][1].length; y++){
                let div = document.createElement('div');
                div.className = "Class1";
                div.innerHTML = "<div class='ClassTop FLEX'><span>"+SkillsArr[x][1][y][0]+"</span><div class='ClassInfo'>LVL "+SkillsList[x][1][y][0]+" XP "+SkillsList[x][1][y][1]+"</div></div>";
                Class0Bottom[x].append(div);
            }
        }
    },

    Add (ctObject,State) {
        Road = Skills.Type(ctObject,State)

        Prus = ArrObjects[ctObject[0]][ctObject[1]][ctObject[2]][3][State][1];

        SkillsList[Road[0]][0][1]+=Prus
        SkillsList[Road[0]][1][Road[1]][1]+=Prus

        Skills.Up(SkillsList[Road[0]][0],SkillsList[Road[0]][1][Road[1]]);
    },

    Up (P,C) { 
        if(P[1] >= UpXP*(2**(P[0]+1)/2)){
            P[1]-=UpXP*(2**(P[0]+1)/2);
            P[0]++;
        }
        if(C[1] >= UpXP*(2**(C[0]+1)/2)){
            C[1]-=UpXP*(2**(C[0]+1)/2);
            C[0]++;
        }
    },

    Type (ctObject,State) {
        a0 = ctObject[0];
        a1 = ctObject[1];
        a2 = ctObject[2];

        switch (a0) {
            case 1:
                switch (a1) {
                    case 0:
                        switch (a2) {
                            case 0:
                                return [0,0];
                              break;
                            case 1:
                                return [0,1];
                              break;
                            case 2:
                                return [0,2];
                              break;
                            default:
                              console.log("No")
                        }
                      break;
                    case 1:
                        switch (a2) {
                            case 0:
                                return [3,0];
                              break;
                            case 1:
                                return [3,0];
                              break;
                            case 2:
                                return [3,0];
                              break;
                            default:
                              console.log("No")
                        }
                      break;
                    case 2:
                        switch (a2) {
                            case 0:
                                return [1,1];
                              break;
                            case 1:
                                return [1,1];
                              break;
                            default:
                              console.log("No")
                        }
                      break;
                    default:
                      console.log("No")
                }
              break;
            case 2:
                switch (a1) {
                    case 0:
                        switch (a2) {
                            case 0:
                              if(State === 0){
                                return [1,0];
                              } else if (State === 1) {
                                return [2,0];
                              }
                              break;
                            default:
                              console.log("No")
                        }
                      break;
                    default:
                      console.log("No")
                }
              break;
            case 3:
                switch (a1) {
                    case 0:
                        switch (a2) {
                          case 0:
                            return [2,0];
                          break;
                        default:
                          console.log("No")
                        }
                      break;
                    case 1:
                        switch (a2) {
                          case 0:
                            return [2,1];
                            break;
                          case 1:
                            return [2,1];
                            break;
                          case 2:
                            return [2,1];
                            break;
                          break;
                        default:
                          console.log("No")
                        }
                      break;
                    case 2:
                      switch (a2) {
                        case 0:
                          return [2,0];
                          break;
                        case 1:
                          return [2,0];
                          break;
                        case 2:
                          return [2,0];
                          break;
                        break;
                      default:
                        console.log("No")
                      }
                    break;
                    default:
                      console.log("No")
                }
              break;
            default:
              console.log("No")
        }
    }
}
