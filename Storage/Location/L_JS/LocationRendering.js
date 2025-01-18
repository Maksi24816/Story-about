
const LocationRendering = {
    Cell () {
        for(let y = 0; y < LocationCell.length; y++){
            for(let x = 0; x < LocationCell.length; x++){
                let num = LocationCell[x][y];

                context.drawImage(ArrCView[num[0][3]][num[0][1][1]][num[0][1][2]],
                    num[0][2]*SIZE_EL_IMG_X,0,SIZE_EL_IMG_X,SIZE_EL_IMG_Y,
                    x*SIZE_EL_MAP_X,y*SIZE_EL_MAP_Y,SIZE_EL_MAP_X,SIZE_EL_MAP_Y)
            }
        }
        
        for(let y = 0; y < LocationCell.length; y++){
            for(let x = 0; x < LocationCell.length; x++){
                let num = LocationCell[x][y];

                if(num[1][0][0] !== null){
                    RetreatX = ArrObjects[num[1][0][0]][num[1][0][1]][num[1][0][2]][1][0];
                    RetreatY = ArrObjects[num[1][0][0]][num[1][0][1]][num[1][0][2]][1][1];
                    context.drawImage(ArrObjectsIMG[num[1][0][0]][num[1][0][1]][num[1][0][2]],
                        0*SIZE_EL_IMG_X,num[1][1]*SIZE_EL_IMG_Y,SIZE_EL_IMG_X*(RetreatX+1),SIZE_EL_IMG_Y*(RetreatY+1),
                        (x-RetreatX/2)*SIZE_EL_MAP_X,(y-RetreatY)*SIZE_EL_MAP_Y,SIZE_EL_MAP_X*(RetreatX+1),SIZE_EL_MAP_Y*(RetreatY+1))
                }

                if(x === HeroXLocation && y === HeroYLocation){
                    context.drawImage(IMGHero,
                        (HeroState*8+HeroTurn)*SizeHeroX,HeroAnim*SizeHeroY,SizeHeroX,SizeHeroY,
                        HeroXLocation*SIZE_EL_MAP_X+HeroXCell-HeroXCellCenter,(HeroYLocation-1)*SIZE_EL_MAP_Y-HeroYCell,SIZE_EL_MAP_X,SIZE_EL_MAP_Y*2)
                }
            }
        }
    },

    Hero () {
        for(let y = HeroYLocation-3; y < HeroYLocation+2; y++){
            for(let x = HeroXLocation-2; x < HeroXLocation+3; x++){
                let num = LocationCell[x][y];

                context.drawImage(ArrCView[num[0][3]][num[0][1][1]][num[0][1][2]],
                    num[0][2]*SIZE_EL_IMG_X,0,SIZE_EL_IMG_X,SIZE_EL_IMG_Y,
                    x*SIZE_EL_MAP_X,y*SIZE_EL_MAP_Y,SIZE_EL_MAP_X,SIZE_EL_MAP_Y)
            }
        }

        for(let y = HeroYLocation-3; y < HeroYLocation+2; y++){
            for(let x = HeroXLocation-2; x < HeroXLocation+3; x++){
                let num = LocationCell[x][y];

                if(num[1][0][0] !== null){
                    RetreatX = ArrObjects[num[1][0][0]][num[1][0][1]][num[1][0][2]][1][0];
                    RetreatY = ArrObjects[num[1][0][0]][num[1][0][1]][num[1][0][2]][1][1];
                    context.drawImage(ArrObjectsIMG[num[1][0][0]][num[1][0][1]][num[1][0][2]],
                        0*SIZE_EL_IMG_X,num[1][1]*SIZE_EL_IMG_Y,SIZE_EL_IMG_X*(RetreatX+1),SIZE_EL_IMG_Y*(RetreatY+1),
                        (x-RetreatX/2)*SIZE_EL_MAP_X,(y-RetreatY)*SIZE_EL_MAP_Y,SIZE_EL_MAP_X*(RetreatX+1),SIZE_EL_MAP_Y*(RetreatY+1))
                }

                if(x === HeroXLocation && y === HeroYLocation){
                    context.drawImage(IMGHero,
                        (HeroState*8+HeroTurn)*SizeHeroX,HeroAnim*SizeHeroY,SizeHeroX,SizeHeroY,
                        HeroXLocation*SIZE_EL_MAP_X+HeroXCell-HeroXCellCenter,(HeroYLocation-2)*SIZE_EL_MAP_Y+HeroYCell,SIZE_EL_MAP_X,SIZE_EL_MAP_Y*2)
                }
            }
        }
    }
}
