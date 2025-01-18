const Hunger = {
    Controler (N) {
        if(HeroHunger > 0){HeroHunger-=N;}

        if(HeroHunger < 0) {
            console.log("Died")
        } else {
            Hunger.Scale()
            //console.log(HeroHunger)
        }
    },

    Scale () {
        const DivHunger = document.getElementById("Hunger");
        Pr = HeroHunger/MaxHeroHunger*100;
        DivHunger.style.width = Pr + "%";
    }
}