/****************************************************
*The main configurable elements of the clock        *
/****************************************************/
  /****************************************************
  *Canvas attributes                                  *
  *****************************************************/
  //assign an ID value to the canvas
  const CANVASID = 'myCanvas';
  //Clock height and width are relative to the canvas height and width
  const HEIGHT = 400;
  const WIDTH = HEIGHT// alternate example: 400
  //the .style.left property of the canvas element
  const LEFT_POSITION = "300px";
  //the .style.top property of the canvas element
  const TOP_POSITION = "30px";
  //the .style.position property of the canvas element
  const POS_TYPE = "absolute"; //"static|absolute|fixed|relative|sticky|initial|inherit"
  //frames per second
  const FPS = 48;

  /****************************************************
  *Clock hand display attributes                      *
  *****************************************************/
  //Choose 1=true to display the ms, s, min, or hr hands or 0=false to hide them
  const MS = 1;
  const S = 1;
  const MIN = 1;
  const HR = 1;
  //Modify the characters displayed on the clock face
  const NUMERALTYPE = numberEnum.DIGITS_12;//DIGITS_12 =1 | .DIGITS_4 = 2| .ROMANS = 3
  //Modify the movement of the second hand
  const CLOCKTYPE = 0;//0 for continuous or 1 for tick

  /****************************************************
  *Clock face attributes                              *
  *****************************************************/
  const FACE = new Face(
                        this._backGroundColor ="lightBlue",
                        this._textColor = "yellow",
                        this._textBorderColor = "white",
                        this._textFont = "px arial",
                        this._msHandColor = "red",
                        this._msHandBorderColor = "red",
                        this._handColor = "white",
                        this._handBorderColor = "darkBlue"
                      );

  const FRAME = new Frame();
