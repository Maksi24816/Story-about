const StateRunHero = [-10,-2,10]

const Time = {
    Controler () {
        setInterval(() => {
            Time.Animation();
        }, 225);

        setInterval(() => {
            Stamina.Controler(StateRunHero[HeroState])
            //console.log(StateRunHero[HeroState],HeroState)
            if(StaminaPr > 80){Hunger.Controler(1)
            } else if (StaminaPr > 50) {Hunger.Controler(2)
            } else {Hunger.Controler(3)}
        }, 1000);
    },

    Animation () {
        HeroAnim++;
        HeroAnim = HeroAnim%8;

        LocationRendering.Hero()
    }
}