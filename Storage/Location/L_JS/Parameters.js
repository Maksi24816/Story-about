const SIZE_EL_MAP_X = 48, SIZE_EL_MAP_Y = 39;
const SIZE_EL_IMG_X = 64, SIZE_EL_IMG_Y = 52;

const DegreeWorldSize = 4;
const WorldSize = 3**DegreeWorldSize;

let width = WorldSize*SIZE_EL_MAP_X; canvas.width = width;
let height = WorldSize*SIZE_EL_MAP_Y; canvas.height = height;

const MinHeightWorld = 0, MaxHeightWorld = 2;
const CenterHeightWorld = 1;
let HeightWorld = CenterHeightWorld;

let HeroXLocation = 13, HeroYLocation = 13;

let HeroXCell = SIZE_EL_MAP_X/2, HeroYCell = SIZE_EL_MAP_Y/2;
const HeroXCellCenter = HeroXCell, HeroYCellCenter = HeroYCell;

let RunningStop = false;
let HeroTurn = 4, HeroAnim = 1;
let HeroState = 0;
const HeroAnimPause = 5;
let HeroAnimPauseNum = 0;
const SizeHeroX = 36, SizeHeroY = 66;

const windowDistanceX = window.innerWidth/2
const windowDistanceY = window.innerHeight/2

const UpXP = 100;

let HeroHunger = 65,MaxHeroHunger = 100;
let HeroStamina = 100,MaxHeroStamina = 100;