//Use the project's config.js file to adjust the clock's settings
const clock =  new Clock(FACE,FRAME);
/****************************************************
*Project's main function
****************************************************/
function main()
{
  clock.start();
}

//returns the interval in ms needed to refresh the frame in order
//to achieve the given frames per second
function framesRefreshRate(fps) {
  return 1000/fps;
}

//Convert the radians into an X Y position on the unit circle
function get_XY(radians, distFromFocus)
{
  var y = Math.sin(radians);
  var x = Math.cos(radians);
  x!=0 ? x= (x*distFromFocus) : x = clock.radius;
  y!=0 ? y = (-y*distFromFocus) : y= clock.radius;
  return [x,y]
}

//accepts a timestamp object and a unit of time as a string
//returns a number representing the amount of radians that
//to rotate around a unit circle
function getRadians(ts, unit)
{
  //In order to orient the start of the clock's hands at 12, the
  //clock's hand needs to be rotated by 90 degrees, or PI/2
  var offset = Math.PI/2;
  var radians = 0 + offset;
  var offset_ms, offset_s,offset_mins,offset_hrs;
  //The clock's hands move in the opposite direction of the unit circle.
  //Each incremental movement of the hand must be subtracted from 2 pi.
  switch (unit) {
    case "ms":
        offset_ms = (2*Math.PI)-((ts.ms/1000)*(2*Math.PI));
        radians += offset_ms;
      break;
    case "s":
        //The offset for seconds written as is allow for the second
        //hand to "tick". An adjustment to allow for continuous movement
        //is further below and is conditionally
        offset_s = (2*Math.PI)-((ts.s/60)*(2*Math.PI));
        radians += offset_s;
      break;
    case "mins":
        offset_mins = (2*Math.PI)-((ts.mins/60)*(2*Math.PI));
        radians += offset_mins;
        //minutes are adjusted by both the amount of seconds that have passed
        //for the given minute and the portion of milliseconds
        //that have passed for the given second
        offset_s = ((2*Math.PI)*ts.s)/(Math.pow(60,2));
        offset_ms =((2*Math.PI)*ts.ms)/(1000*Math.pow(60,2));
        radians -= offset_s + offset_ms;
      break;
    case "hrs":

        offset_hrs = (2*Math.PI)-((ts.hrs/12)*(2*Math.PI));
        radians += offset_hrs;
        //hours are adjusted by the combined minutes that have passed for the
        //hour, the portion of seconds that have passed for the minute, and
        //the portion of milliseconds that have passed for the second
        offset_mins = ((2*Math.PI)*ts.mins)/(Math.pow(60,2));
        offset_s = ((2*Math.PI)*ts.s)/(Math.pow(60,3));
        offset_ms = ((2*Math.PI)*ts.ms)/(1000*Math.pow(60,3));
        radians -= offset_mins + offset_s + offset_ms;
      break;
    default:
      radians = radians;
    }
    //Incremental adjustments are to be made to each of the hands based on
    //how much time has elapsed for each smaller unit of measurement
    if (ts.type == 0)
    {
      if (unit=="s") {
        //seconds are adjusted by the total amount of ms that have passed
        //for the given second
        radians -= ((2*Math.PI)*ts.ms)/(1000*60);
      }
    }
  return radians;
}

//draws each hand as two lines: one line on top of the other.
function drawHands(radians, width, length,
  color="black", backGroundColor="black")
{
  clock.ctx.beginPath();
  var [x,y] = get_XY(radians,length);

  //render the background hand
  renderHands(x*1.02,
              y*1.02,
              width*1.2,
              backGroundColor);

  //render the foreground hand
  renderHands(x,
              y,
              width,
              color);
}

//draws a line of a given width and color from a point to another point
function renderHands(x,y,width,color)
{
  clock.ctx.moveTo(0,0);
  clock.ctx.lineTo(x,y);
  clock.ctx.lineWidth=width;
  clock.ctx.strokeStyle = color;
  clock.ctx.stroke();
  clock.ctx.closePath();
}

//convert a the digits on a clock face to roman numerals
function getRomans(num){
  switch (num) {
    case 1:
      return "I";
      break;
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
    case 10:
      return "X";
    case 11:
      return "XI";
    case 12:
      return "XII";
    default:
      return "";
  }
}

function createInnerCircle()
{
  clock.ctx.beginPath();
  clock.ctx.fillStyle = clock.textColor;
  clock.ctx.strokeStyle = clock.textBorderColor;
  clock.ctx.arc(0,
                0,
                clock.radius*0.1,
                0,
                2*Math.PI);
  clock.ctx.stroke();
  clock.ctx.fill();
}
//Adds numbers to the clock face
function createNums(type, length)
{
  clock.ctx.beginPath();
  clock.ctx.font = clock.radius*0.15 + clock.textFont;
  clock.ctx.textBaseline="middle";
  clock.ctx.textAlign="center";
  clock.ctx.fillStyle = clock.textColor;
  clock.ctx.strokeStyle = clock.textBorderColor;
  clock.ctx.stroke();
  clock.ctx.fill();
  //calculate the appropriate radians for each number
  //on the clock face. Each number is to be located at the location
  //of each hour
  for(var num= 1; num <= 12; num++)
  {
    let ts = {hrs: num, mins: 0, s: 0, ms: 0};
    if (type == numberEnum.DIGITS_12)
    {
      drawNums(num,ts,length);
    }
    else if (type == numberEnum.ROMANS)
    {
      var romanNumeral=getRomans(num);
      drawNums(romanNumeral,ts,length);
    }
    else if (type == numberEnum.DIGITS_4)
    {
      num+=2;
      //need to reset the hrs property of the timestamp object so that
      //the numbers appear in the correct location on the clock face
      let ts = {hrs: num, mins: 0, s: 0, ms: 0};
      drawNums(num,ts,length);
    }
  }
  clock.ctx.closePath();
}

//Applies a number to the clock face at a given x, y coordinate
function drawNums(character,ts,length)
{
  var radians = getRadians(ts, "hrs");
  var [x,y] = get_XY(radians,length*.85);
  clock.ctx.strokeText(character.toString(),
                      x,
                      y);
  clock.ctx.fillText(character.toString(),
                      x,
                      y);
}

//Draws the circle for the clock face
function drawClock(color)
{
  clock.ctx.beginPath();
  clock.ctx.arc(0,
                0,
                clock.radius,
                0,
                2 * Math.PI);
  clock.ctx.fillStyle = clock.faceBackGroundColor;
  clock.ctx.fill();
  drawClockFrame();

}

//Draws the clock's frame. Example taken from W3Schools.com
function drawClockFrame()
{
  var grad;
  grad = clock.ctx.createRadialGradient(0,
                                        0,
                                        clock.radius*clock.innerFrameOffset,
                                        0,
                                        0,
                                        clock.radius*clock.outerFrameOffset);
  grad.addColorStop(clock.gradientPos_1,
                    clock.gradientColor_1);
  grad.addColorStop(clock.gradientPos_2,
                    clock.gradientColor_2);
  grad.addColorStop(clock.gradientPos_3,
                    clock.gradientColor_3);
  clock.ctx.strokeStyle = grad;
  clock.ctx.lineWidth = clock.radius*0.1;
  clock.ctx.stroke();
}

main();
