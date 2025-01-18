//Type
const TestObjectsPar = [
    [
        [
            []
        ]
    ],
    [
        [
            [[6,7,8],[.8,1.4]],
            [[6,7,8],[.5,.8]],
            [[7,8],[4,6]]
        ],
        [
            [[8],[.5,1]],
            [[8,7],[.3,.8]],
            [[8],[.2,.5]]
        ],
        [
            [[8],[.5,1]],
            [[8,7],[.3,1]]
        ]
    ],
    [
        [
            [[7,8],[.25,.7]]
        ]
    ],
    [
        [
            [[7,8],[.15,.4]]
        ],
        [
            [[6],[.5,1.7]]
        ]
    ]
];

const Objects = {
    Controler () {
        let ArrTypeCO = [];

        ArrTypeCO = Objects.Type(ArrTypeCO);

        Objects.SpawnNum(ArrTypeCO)

        //LocationCell[45][44][1][0] = [1,0,0];
    },

    Type (Arr) {
        for (let x = 0; x < 10; x++) {
            Arr[x] = [];
        }

        for (let x = 0; x < LocationCell.length; x++) {
            for (let y = 0; y < LocationCell[0].length; y++) {
                Arr[LocationCell[x][y][0][0]][Arr[LocationCell[x][y][0][0]].length] = [x,y]
            }
        }

        return Arr;
    },

    SpawnNum (Arr) {
        for (let x = 1; x < TestObjectsPar.length; x++) {
            for (let y = 0; y < TestObjectsPar[x].length; y++) {
                for (let z = 0; z < TestObjectsPar[x][y].length; z++) {
                    for (let a = 0; a < TestObjectsPar[x][y][z][0].length; a++) {
                        TOP = TestObjectsPar[x][y][z];
                        Num = Math.floor((Arr[TOP[0][a]].length/100) * (Math.random() * (TOP[1][1] - TOP[1][0]) + TOP[1][0])) 

                        Objects.Spawn(Arr,Num,TOP[0][a],x,y,z);
                    }
                }
            }
        }
    },

    Spawn (Arr,Num,Type,X,Y,Z) {
        for (let x = 0; x < Num; x++) {
            Rand = Math.floor(Math.random() * Arr[Type].length);
            LocationCell[Arr[Type][Rand][0]][Arr[Type][Rand][1]][1] = [[X,Y,Z],0]
        }

        LocationRendering.Cell();
    }
}