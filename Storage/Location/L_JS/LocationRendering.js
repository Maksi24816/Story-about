
const LocationRendering = {
    Cell (Num) {
        for (let x0 = 0; x0 < 3; x0++) {
            for (let y0 = 0; y0 < 3; y0++) {
                let X = x0-1, Y = y0-1;
                for(let y = 0; y < LocationSectionCell[XLocSectionStart+X][YLocSectionStart+Y].length; y++){
                    for(let x = 0; x < LocationSectionCell[XLocSectionStart+X][YLocSectionStart+Y][0].length; x++){
                        let num = LocationSectionCell[XLocSectionStart+X][YLocSectionStart+Y][x][y];
        
                        context.drawImage(ArrCView[num[0][3]][num[0][1][1]][num[0][1][2]],
                            num[0][2]*SIZE_EL_IMG_X,0,SIZE_EL_IMG_X,SIZE_EL_IMG_Y,
                            ((x0*27)+x)*SIZE_EL_MAP_X,((y0*27)+y)*SIZE_EL_MAP_Y,SIZE_EL_MAP_X,SIZE_EL_MAP_Y)
                    }
                }
                
                for(let y = 0; y < LocationSectionCell[XLocSectionStart+X][YLocSectionStart+Y].length; y++){
                    for(let x = 0; x < LocationSectionCell[XLocSectionStart+X][YLocSectionStart+Y][0].length; x++){
                        let num = LocationSectionCell[XLocSectionStart+X][YLocSectionStart+Y][x][y];
        
                        if(num[1][0][0] !== null){
                            RetreatX = ArrObjects[num[1][0][0]][num[1][0][1]][num[1][0][2]][1][0];
                            RetreatY = ArrObjects[num[1][0][0]][num[1][0][1]][num[1][0][2]][1][1];
                            context.drawImage(ArrObjectsIMG[num[1][0][0]][num[1][0][1]][num[1][0][2]],
                                0*SIZE_EL_IMG_X,num[1][1]*SIZE_EL_IMG_Y,SIZE_EL_IMG_X*(RetreatX+1),SIZE_EL_IMG_Y*(RetreatY+1),
                                ((x0*27)+(x-RetreatX/2))*SIZE_EL_MAP_X,((y0*27)+(y-RetreatY))*SIZE_EL_MAP_Y,SIZE_EL_MAP_X*(RetreatX+1),SIZE_EL_MAP_Y*(RetreatY+1))
                        }
                        if(XLocSectionStart+X === XLocSectionStart && YLocSectionStart+Y === YLocSectionStart){
                            if(x === HeroXLocation && y === HeroYLocation){
                                if(Num === 1){
                                    context.drawImage(IMGHero,
                                        (HeroState*8+HeroTurn)*SizeHeroX,HeroAnim*SizeHeroY,SizeHeroX,SizeHeroY,
                                        (27+HeroXLocation)*SIZE_EL_MAP_X+HeroXCell-HeroXCellCenter,(26+HeroXLocation)*SIZE_EL_MAP_Y-HeroYCell,SIZE_EL_MAP_X,SIZE_EL_MAP_Y*2)
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    Hero () {
        for(let y = HeroYLocation-3; y < HeroYLocation+2; y++){
            for(let x = HeroXLocation-2; x < HeroXLocation+3; x++){
                if(x < 27 && x > -1){
                    if(y < 27 && y > -1){
                    let num = LocationSectionCell[XLocSectionStart][YLocSectionStart][x][y];

                    context.drawImage(ArrCView[num[0][3]][num[0][1][1]][num[0][1][2]],
                        num[0][2]*SIZE_EL_IMG_X,0,SIZE_EL_IMG_X,SIZE_EL_IMG_Y,
                        (27+x)*SIZE_EL_MAP_X,(27+y)*SIZE_EL_MAP_Y,SIZE_EL_MAP_X,SIZE_EL_MAP_Y)
                    }
                }
            }
        }

        for(let y = HeroYLocation-3; y < HeroYLocation+2; y++){
            for(let x = HeroXLocation-2; x < HeroXLocation+3; x++){
                if(x < 27 && x > -1){
                    if(y < 27 && y > -1){
                        let num = LocationSectionCell[XLocSectionStart][YLocSectionStart][x][y];

                        if(num[1][0][0] !== null){
                            RetreatX = ArrObjects[num[1][0][0]][num[1][0][1]][num[1][0][2]][1][0];
                            RetreatY = ArrObjects[num[1][0][0]][num[1][0][1]][num[1][0][2]][1][1];
                            context.drawImage(ArrObjectsIMG[num[1][0][0]][num[1][0][1]][num[1][0][2]],
                                0*SIZE_EL_IMG_X,num[1][1]*SIZE_EL_IMG_Y,SIZE_EL_IMG_X*(RetreatX+1),SIZE_EL_IMG_Y*(RetreatY+1),
                                (27+x-RetreatX/2)*SIZE_EL_MAP_X,(27+y-RetreatY)*SIZE_EL_MAP_Y,SIZE_EL_MAP_X*(RetreatX+1),SIZE_EL_MAP_Y*(RetreatY+1))
                        }

                        if(x === HeroXLocation && y === HeroYLocation){
                            context.drawImage(IMGHero,
                                (HeroState*8+HeroTurn)*SizeHeroX,HeroAnim*SizeHeroY,SizeHeroX,SizeHeroY,
                                (27+HeroXLocation)*SIZE_EL_MAP_X+HeroXCell-HeroXCellCenter,(25+HeroYLocation)*SIZE_EL_MAP_Y+HeroYCell,SIZE_EL_MAP_X,SIZE_EL_MAP_Y*2)
                        }
                    }
                }
            }
        }
    }
}
