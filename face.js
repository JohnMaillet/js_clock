//stylistic features for the face of the clock
class Face {
  constructor(){
    if(arguments.length==0){
      this._backGroundColor = "white";
      this._textColor = "black";
      this._textBorderColor = "white";
      this._textFont = "px arial";
      this._msHandColor = "red";
      this._msHandBorderColor = "red";
      this._handColor = "black";
      this._handBorderColor = "black";
    }
    else{
      this._backGroundColor = arguments[0];//"darkBlue";
      this._textColor = arguments[1];//"lightBlue";
      this._textBorderColor = arguments[2];
      this._textFont = arguments[3];//"px arial";
      this._msHandColor = arguments[4];//"red";
      this._msHandBorderColor = arguments[5];//"black";
      this._handColor = arguments[6];//"lightBlue";
      this._handBorderColor = arguments[7];//"darkBlue";
    }
    console.log("arguments: " + arguments.length);
    //this.backGroundColor = theme.backGroundColor;
  };
  get backGroundColor () {return this._backGroundColor};
  get textColor () {return this._textColor};
  get textBorderColor () {return this._textBorderColor};
  get textFont () {return this._textFont};
  get msHandColor () {return this._msHandColor};
  get msHandBorderColer () {return this._msHandBorderColor};
  get handColor () {return this._handColor};
  get handBorderColor () {return this._handBorderColor};
}

//clock frame stylistic properties
class Frame {
  constructor(){};
  get innerOffset () {return 0.95};
  get outerOffset () {return 1.05};
  //a color for each gradient within the clock's frame
  get gradientColor_1 () {return 'Blue'};
  get gradientColor_2 () {return 'lightBlue'};
  get gradientColor_3 () {return 'Blue'};

  //A value between 0.0 and 1.0 that represents the position between start and
  //end in a gradient
  get gradientPos_1 () {return .3};
  get gradientPos_2 () {return 1};
  get gradientPos_3 () {return 1};
}
