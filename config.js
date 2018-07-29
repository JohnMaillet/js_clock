//import * as e from './enums.js'
/****************************************************
*Configuragble settings for the clock               *
*****************************************************/
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//canvas size properies
canvas.height = 500;
canvas.width = 500;

/*other configurable elemements of the canvas
canvas.style.left = "200px";
canvas.style.top = "200px";
canvas.style.position = "absolute";
*/

/****************************************************
*The main configurable elements of the clock        *
/****************************************************/
const CONFIG = {
  //choose which hands to display
  hands: {
    ms: true,
    s: true,
    min: true,
    hr: true},
  c: canvas,
  ctx: context,
  //Modify the characters displayed on the clock face
  //.DIGITS_12 | .DIGITS_4 | .ROMANS
  numeralType: numberEnum.DIGITS_12,
  //Modify the movement of the second hand
  //.tick | .continuous
  clockType: clockTickEnum.continuous,
  //Clock's circle focus position
  focus: 200,
  //size of the clock
  radius: 150,
  //enter the number of frames
  fps: 48,
  //stylistic features of the clock
  faceBackGroundColor: "darkBlue",
  textColor: "lightBlue",
  textFont: "px arial",
  msHandColor: "red",
  msHandBorderColer: "black",
  handColor: "lightBlue",
  handBorderColor: "darkBlue",
  //clock frame stylistic properties
  innerFrameOffset: 0.95,
  outerFrameOffset: 1.05,
  //a color for each gradient within the clock's frame
  gradientColor_1: 'Blue',
  gradientColor_2: 'lightBlue',
  gradientColor_3: 'Blue',
  //A value between 0.0 and 1.0 that represents the position between start and
  //end in a gradient
  gradientPos_1: .3,
  gradientPos_2: 1,
  gradientPos_3: 1
}
