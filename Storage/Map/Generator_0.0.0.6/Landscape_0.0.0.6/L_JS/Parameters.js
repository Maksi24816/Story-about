const SIZE_EL_MAP_X = 32, SIZE_EL_MAP_Y = 32;
const SIZE_EL_IMG_X = 64, SIZE_EL_IMG_Y = 52;

const DegreeWorldSize = 5;
const WorldSize = 3**DegreeWorldSize;

let width = WorldSize*SIZE_EL_MAP_X; canvas.width = width;
let height = WorldSize*SIZE_EL_MAP_Y; canvas.height = height;

const MinHeightWorld = 0, MaxHeightWorld = 2;
const CenterHeightWorld = 1;
let HeightWorld = CenterHeightWorld;

const Bio = 3;

let RuNGeneratorObjects = false;