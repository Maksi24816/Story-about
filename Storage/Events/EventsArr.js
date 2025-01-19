const Events = {
    Died () {
        //sessionStorage.removeItem("World");
        DiedBox.style.display = "flex";
    }
}

const EventList = [Events.Died];