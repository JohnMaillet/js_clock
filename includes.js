/******************************************************************
*TODO: make it so that all clock functions are in the clock class
*Create color themes that can be chosen by an enum value. Examples:
*morning, afternoon, evening, and night themes.
*******************************************************************/

//A self invoking function that populates the HTML with the appropriate
//javascript files for the project.
(function () {
  //a list of each of the js files that are used in this project
  var fileNames = [
                    'enums.js',
                    'face.js',
                    'config.js',
                    'canvas.js',
                    'clock.js',
                    'script.js'
                ];

  var body = document.getElementsByTagName("body");

  //write the javascript files to the HTML
  for (var i = 0; i< fileNames.length; i++)
  {
    //an alternate way of adding javascript to the HTML body
    document.write('<scr'+'ipt   src="' +fileNames[i]+ '" ></scr'+'ipt>')
    // var script = document.createElement('script');
    // script.src =  fileNames[i];
    // script.type = 'text/javascript';
    //
    // try {
    //   document.body.appendChild(script);
    // } catch (e) {
    //   console.log(e);
    //   document.body.appendChild(script);
    // }
  }
}) ();
