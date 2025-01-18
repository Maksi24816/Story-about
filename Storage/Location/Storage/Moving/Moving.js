let Shift = false;

const Moving = {
    Controler (X,Y) {
        if(Moving.Checking(X,Y)){
            HeroState = 1;
            Moving.Cell(X,Y);
            Moving.Sight(X,Y);
            Moving.Scroll();
        } else {
            HeroState = 0;
        }

        LocationRendering.Hero()
    },

    Checking (X,Y) {
        if(Moving.CheckingCell()){
            if(Moving.CheckingHeight()){
                return true;
            } else {
                Moving.Cell(-X,-Y);
            }
        } else {
            Moving.Cell(-X,-Y);
        }
    },

    CheckingCell () {
        a = LocationCell[HeroXLocation][HeroYLocation][0][0]
        switch (a) {
            case 0:
              console.log(a)
              break;
            case 1:
                console.log(a)
              break;
            case 2:
                return true;
              break;
            case 3:
                console.log(a)
              break;
            case 4:
                console.log(a)
              break;
            case 5:
                console.log(a)
              break;
            case 6:
                return true;
              break;
            case 7:
                return true;
              break;
            case 8:
                return true;
            break;
            case 9:
                console.log(a)
              break;
            case 10:
                console.log(a)
              break;
            case 11:
                console.log(a)
              break;
            default:
              alert( "Нет таких значений" );
          }
    },

    CheckingHeight () {
        if(LocationCell[HeroXLocation][HeroYLocation][1] !== undefined){
            a = LocationCell[HeroXLocation][HeroYLocation][1][0][0]
            switch (a) {
                case null:
                    return true;
                  break;
                case 0:
                    return false;
                  break;
                case 1:
                    return true;
                  break;
                case 2:
                    return false;
                  break;
                case 3:
                    return false;
                  break;
                default:
                  alert( "Нет таких значений" );
              }
        } else {
            return true;
        }
    },

    Cell (X,Y) { 
        HeroAnimPauseNum++;
        HeroAnimPauseNum = HeroAnimPauseNum%HeroAnimPause;

        MultiplyRun = 1;
        if(Shift === true && RunningStop === false){MultiplyRun = 3; HeroState = 2;}

        HeroXCell+=X*(HeroAnimPauseNum+1)*MultiplyRun;
        HeroYCell+=Y*(HeroAnimPauseNum+1)*MultiplyRun;

        if(HeroXCell > SIZE_EL_MAP_X){
            HeroXCell -= SIZE_EL_MAP_X;
            HeroXLocation++;
        } else if (HeroXCell < 0){
            HeroXCell += SIZE_EL_MAP_X;
            HeroXLocation--;
        }

        if(HeroYCell > SIZE_EL_MAP_Y){
            HeroYCell -= SIZE_EL_MAP_Y;
            HeroYLocation++;
        } else if (HeroYCell < 0){
            HeroYCell += SIZE_EL_MAP_Y;
            HeroYLocation--;
        }

        Moving.Checking(X,Y)
    },
    
    Sight (X,Y) {
        if(X > 0){
            if(Y > 0){
                HeroTurn = 3;
            } else if (Y < 0) {
                HeroTurn = 1;
            } else {
                HeroTurn = 2;
            }
        } else if (X < 0) {
            if(Y > 0){
                HeroTurn = 5;
            } else if (Y < 0) {
                HeroTurn = 7;
            } else {
                HeroTurn = 6;
            }
        } else {
            if(Y > 0){
                HeroTurn = 4;
            } else if (Y < 0) {
                HeroTurn = 0;
            }
        }
    },

    Scroll () {
        X = HeroXLocation*SIZE_EL_MAP_X-windowDistanceX+HeroXCell;;
        Y = HeroYLocation*SIZE_EL_MAP_Y-windowDistanceY+HeroYCell;
        window.scrollTo(X, Y);
    }
}