/***************************************************************************
*DO NOT MODIFY THIS FILE                                                   *
*make a config object that is not modifiable by code outside this file     *
****************************************************************************/

//Clock's circle focus position
const focus= (canvas.height)/2;
//size of the clock
const radius= (canvas.height*.9)/2;

class Clock {
  constructor(){
    var args = arguments[0];
    this.face = new Face(args._backGroundColor,
                        args._textColor,
                        args._textBorderColor,
                        args._textFont,
                        args._msHandColor,
                        args._msHandBorderColor,
                        args._handColor,
                        args._handBorderColor);

    this.frame = new Frame(arguments[1])
  };
  get numeralType(){return NUMERALTYPE;};
  get fps(){return FPS;};
  get c(){return canvas;};
  get ctx(){return context;};
  get clockType(){return CLOCKTYPE;};
  get focus(){return focus;};
  get radius(){return radius};
  get faceBackGroundColor(){return this.face.backGroundColor;};
  get textColor(){return this.face.textColor;};
  get textBorderColor(){return this.face.textBorderColor;};
  get textFont(){return this.face.textFont;};
  get msHandColor(){return this.face.msHandColor;};
  get handColor(){return this.face.handColor;};
  get handBorderColor(){return this.face.handBorderColor;};
  get innerFrameOffset(){return this.frame.innerOffset;};
  get outerFrameOffset(){return this.frame.outerOffset;};
  get gradientColor_1() {return this.frame.gradientColor_1;};
  get gradientColor_2() {return this.frame.gradientColor_2;};
  get gradientColor_3() {return this.frame.gradientColor_3;};
  get gradientPos_1(){return this.frame.gradientPos_1;};
  get gradientPos_2(){return this.frame.gradientPos_2;};
  get gradientPos_3(){return this.frame.gradientPos_3;};
  get tick() { return this.tick;};
  get hands(){return {ms: MS,
                s: S,
                min: MIN,
                hr: HR}}
  //runs the clock in a continuos loop with the setInterval method
  start(){
    var lineLength = this.radius;
    this.c.setAttribute("width",
                          this.c.width);
    this.c.setAttribute("height",
                          this.c.height);
    this.ctx.lineWidth = this.c.height*(.03/5);//3;
      console.log(this.c.height*(.03/5));
    this.ctx.translate(this.focus,
                        this.focus);
    var date = new Date();

    //repeat according to the desired frames per second
    setInterval(function() {
        var t = new Date();
        clock.ctx.clearRect(-150,
                            -150,
                            clock.c.width,
                            clock.c.height);

        //a group of variables that make a given point in time static
        //and allow for a different behavior based on the type variable
        var timestamp =  {
          ms: t.getMilliseconds(),
          s: t.getSeconds(),
          mins: t.getMinutes(),
          hrs: t.getHours(),
          type: clock.clockType
      }

      drawClock();
      if(clock.hands.ms){
        drawHands(getRadians(timestamp,"ms"),
                  clock.c.height*(.01/5),
                  lineLength*.95,
                  clock.msHandColor,
                  clock.msHandBorderColor);
      }
      if(clock.hands.s){
        drawHands(getRadians(timestamp,"s"),
                  clock.c.height*(.02/5),//2,
                  lineLength*.75,
                  clock.handColor,
                  clock.handBorderColor);
      }
      if(clock.hands.min){
        drawHands(getRadians(timestamp,"mins"),
                  clock.c.height*(.05/5),
                  lineLength*.75,
                  clock.handColor,
                  clock.handBorderColor);
      }
      if(clock.hands.hr){
        drawHands(getRadians(timestamp,"hrs"),
                  clock.c.height*(.09/5),
                  lineLength*.65,
                  clock.handColor,
                  clock.handBorderColor);
      }
      createInnerCircle();
      createNums(clock.numeralType,lineLength);
    }, framesRefreshRate(clock.fps));
  };
}
