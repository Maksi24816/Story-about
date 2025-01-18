let ArrDomWindows = [Inventory.Dom,Skills.Dom,Craft.Dom,GMap.Dom];

setTimeout(() => {
    text = sessionStorage.getItem("World");

    if(text != undefined){
        ARR = JSON.parse(text);
        ArrLocation = ARR[1];
    }
    
    CreateLocation.Controler();
        
    setTimeout(() => {
        Objects.Controler();
        LocationRendering.Cell();
        Moving.Scroll();
    }, 10);

    Time.Controler();
    Status.Controler();
}, 100);
