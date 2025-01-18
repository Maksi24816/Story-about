let StaminaPr = 100;

const Stamina = {
    Controler (N) {
        //console.log(HeroStamina)
        if(HeroStamina < 10){
            RunningStop = true
        } else {
            RunningStop = false
        }

        if(N < 0){
            if(HeroStamina < MaxHeroStamina){
                HeroStamina-=N;
                if(HeroStamina > MaxHeroStamina){HeroStamina = MaxHeroStamina}
            }
        } else {
            if(HeroStamina >= N){
                //console.log(HeroStamina,N)
                HeroStamina-=N;
            }
        }

        Stamina.Scale()
    },

    Scale () {
        const DivStamina = document.getElementById("Stamina");
        StaminaPr = HeroStamina/MaxHeroStamina*100;
        DivStamina.style.width = StaminaPr + "%";
    }
}