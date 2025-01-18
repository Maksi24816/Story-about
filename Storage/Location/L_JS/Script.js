const canvas = document.getElementById("Canvas");
const context = canvas.getContext('2d');

const ListWindows = document.querySelectorAll(".Window");
let ArrTFWindows = [false,false,false,false];
function Windows (TF,N) {
    if(TF === 0){ListWindows[N].style.display = "none"; ArrTFWindows[N] = false} 
    else {ListWindows[N].style.display = "flex"; ArrTFWindows[N] = true; ArrDomWindows[N]();}
}

//<div class="Items"></div>