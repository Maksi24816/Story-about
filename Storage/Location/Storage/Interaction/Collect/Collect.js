let ArrFCollect;
const Collect = {
    Controler (X,Y) {
        if(Collect.Radius(X,Y)){
            Collect.Type0(X,Y);
        }
    },

    Radius (X,Y) {
        if(HeroXLocation+2 > X && HeroXLocation-2 < X){
            if(HeroYLocation+2 > Y && HeroYLocation-2 < Y){
                return true;
            }
        }
    }, 

    Type0 (X,Y) {
        ctCell = LocationCell[X][Y];
        if(ctCell[1][0][0] !== null){
            ctObject = ctCell[1][0];
            State = ctCell[1][1];

            ArrFCollect = [
                [
                    [CollectEventsList.AddInv,ctObject],
                    [CollectEventsList.DeleteObj,[X,Y]]
                ],
                [
                    [CollectEventsList.AddInv,ctObject],
                    [CollectEventsList.UpdateObj,[X,Y]]
                ]
            ]

            const DivTimer = document.getElementById("Timer");

            a0 = ctObject[0];
            a1 = ctObject[1];
            a2 = ctObject[2];
            switch (a0) {
                case 1:
                    Collect.Go(0,DivTimer,State);
                  break;
                case 2:
                    if(LocationCell[X][Y][1][1] === 0){
                        Collect.Go(1,DivTimer,State);
                    } else {
                        switch (a1) {
                            case 0:
                                if(Collect.Tool(0)){
                                    Collect.Go(0,DivTimer,State);
                                }
                              break;
                            default:
                              console.log("No")
                          }
                    }
                  break;
                case 3:
                    switch (a1) {
                        case 0:
                            if(Collect.Tool(0)){
                                Collect.Go(0,DivTimer,State);
                            }
                          break;
                        case 2:
                            switch (a2) {
                                case 1:
                                    if(Collect.Tool(0)){
                                        Collect.Go(0,DivTimer,State);
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
                default:
                  console.log("No")
              }
        }
    },

    Tool (N) {
        for (let x = 6; x < 10; x++) {
            if(InventoryList[0][x][0][1] === N){
                return true;
            }
        }
    },

    Go (Num,DivTimer,State) {
        console.log(ArrObjects[ctObject[0]][ctObject[1]][ctObject[2]][3][State])
        Millisecond = ArrObjects[ctObject[0]][ctObject[1]][ctObject[2]][3][State][0];
        Collect.Timer(Millisecond,DivTimer);

        setTimeout(() => {
            for (let x = 0; x < ArrFCollect[Num].length; x++) {
                ArrFCollect[Num][x][0](ArrFCollect[Num][x][1],State)
            }

            Skills.Controler(ctObject,State)

            DivTimer.style.display = "none";
        }, Millisecond);
    },

    Timer (Millisecond,DivTimer) {
        const Indicator = document.querySelector(".Indicator");
        DivTimer.style.display = "flex";

        ctNum = 0;
        Frame = 16.67;
        Percent = 100/(Millisecond/Frame);

        Int = setInterval(()=>{
            Indicator.style.width = ctNum*Percent + "%";
            ctNum++;
        },Frame)

        setTimeout(() => {
            clearInterval(Int);
        }, Millisecond);
    }
}
