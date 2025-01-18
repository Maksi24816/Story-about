const ArrCView = [];
const ArrObjects = [];
const ContactCView = [[[1,0]],[[2,1]],[[6,2]],[[4,3]],[[5,4]],[[6,5]],[[7,6],[9,6]],[[8,7]],[[null,8]],[[null,9]]]

for(let x = 0; x < Bio; x++){
    Arr = [];
    for(let y = 0; y < ContactCView.length; y++){
        Arr1 = [];
        for(let z = 0; z < ContactCView[y].length; z++){
            Arr1[z] = new Image();
        }
        Arr[y] = Arr1;
    }
    ArrCView[x] = Arr;
}

ArrCView[0][0][0].src = "./M_Image/Bio/Bio0/CView01.png";
ArrCView[0][1][0].src = "./M_Image/Bio/Bio0/CView12.png";
ArrCView[0][2][0].src = "./M_Image/Bio/Bio0/CView27.png";
ArrCView[0][3][0].src = "./M_Image/Bio/Bio0/CView34.png";
ArrCView[0][4][0].src = "./M_Image/Bio/Bio0/CView45.png";
ArrCView[0][5][0].src = "./M_Image/Bio/Bio0/CView56.png";
ArrCView[0][6][0].src = "./M_Image/Bio/Bio0/CView67.png";
ArrCView[0][7][0].src = "./M_Image/Bio/Bio0/CView78.png";
ArrCView[0][6][1].src = "./M_Image/Bio/Bio0/CView69.png";
ArrCView[0][8][0].src = "./M_Image/Bio/Bio0/CView88.png";
ArrCView[0][9][0].src = "./M_Image/Bio/Bio0/CView99.png";

ArrCView[1][0][0].src = "./M_Image/Bio/Bio1/CView01.png";
ArrCView[1][1][0].src = "./M_Image/Bio/Bio1/CView12.png";
ArrCView[1][2][0].src = "./M_Image/Bio/Bio1/CView27.png";
ArrCView[1][3][0].src = "./M_Image/Bio/Bio1/CView34.png";
ArrCView[1][4][0].src = "./M_Image/Bio/Bio1/CView45.png";
ArrCView[1][5][0].src = "./M_Image/Bio/Bio1/CView56.png";
ArrCView[1][6][0].src = "./M_Image/Bio/Bio1/CView67.png";
ArrCView[1][7][0].src = "./M_Image/Bio/Bio1/CView78.png";
ArrCView[1][6][1].src = "./M_Image/Bio/Bio1/CView69.png";
ArrCView[1][8][0].src = "./M_Image/Bio/Bio1/CView88.png";
ArrCView[1][9][0].src = "./M_Image/Bio/Bio1/CView99.png";

ArrCView[2][0][0].src = "./M_Image/Bio/Bio2/CView01.png";
ArrCView[2][1][0].src = "./M_Image/Bio/Bio2/CView12.png";
ArrCView[2][2][0].src = "./M_Image/Bio/Bio2/CView27.png";
ArrCView[2][3][0].src = "./M_Image/Bio/Bio2/CView34.png";
ArrCView[2][4][0].src = "./M_Image/Bio/Bio2/CView45.png";
ArrCView[2][5][0].src = "./M_Image/Bio/Bio2/CView56.png";
ArrCView[2][6][0].src = "./M_Image/Bio/Bio2/CView67.png";
ArrCView[2][7][0].src = "./M_Image/Bio/Bio2/CView78.png";
ArrCView[2][6][1].src = "./M_Image/Bio/Bio0/CView69.png";
ArrCView[2][8][0].src = "./M_Image/Bio/Bio2/CView88.png";
ArrCView[2][9][0].src = "./M_Image/Bio/Bio2/CView99.png";