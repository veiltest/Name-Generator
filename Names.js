

function rndmRGB()  {
  ss = Math.floor(Math.random()*200);
  if (ss > 10)  {
    var c = new Array();
    c[0] = (180+Math.round(Math.random()*70));
    c[1] = (180+Math.round(Math.random()*70));
    c[2] = (180+Math.round(Math.random()*70));
    x='rgb(' + c[0]  + ', ' + c[1]  + ', ' + c[2] + ')';

    return 'rgb(' + c[0]  + ', ' + c[1]  + ', ' + c[2] + ')';
  } else {
    s2 = Math.floor(Math.random()*3);
    switch(s2)  {
      case 0:
        return 'rgb(0, 0, 0)';
        break;
      case 1:
        return 'rgb(0,0,255)';
        break;
      case 2:
        return 'rgb(255,0,0)';
        break;
      default:
        return 'rgb(126,126,126)';
    }
  }
}

function init() {
  cx = $("body").width()/2;
  cy = $("body").height()/2;

  timer = 0;

  c=0,v=1,y=2,bc=3,ec=4;
  document.getElementById("body").style.background = rndmRGB();
  vowels = ["a","e","i","o","u"];
  consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","qu","r","s","t","v","w","z","ss","ch","sh"];
  begc = ["b","c","d","f","g","h","j","k","l","m","n","p","qu","r","s","t","v","w","z","ch","sh"];
  endc = ["b","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","z","ch","sh","ss","x"];
  yLetter = ["y"];
  syllables = [
    [v,ec],
    [bc,v],
    [v,c,v],
    [bc,v,ec],
    [v,c,v,ec],
    [bc,v,c,v],
    [y,v],
    [v,c,c,v,ec]
  ];  //syllables[index "i"].[length "j" ]
}

function rndL(letterType)  {
  var letter;
  switch(letterType)  {
    case 0:
      letter = consonants[Math.floor(Math.random()*consonants.length)];
      break;
    case 1:
      letter = vowels[Math.floor(Math.random()*vowels.length)];
      break;
    case 2:
      letter = yLetter[0];
      break;
    case 3:
      letter = begc[Math.floor(Math.random()*begc.length)];
      break;
    case 4:
      letter = endc[Math.floor(Math.random()*endc.length)];
      break;
    default:
      break;
  }
  return letter;
}
function rndSyl(n) {
  var component = new Array;
  var composition = new Array;
  var comp2="";
  for(syls=0;syls<=n;syls++) {
    var s = Math.floor(Math.random()*syllables.length);
    var ss = syllables[s].length;
    for(p=0;p<ss;p++) {
      component.push(syllables[s][p]);
    }
  }
  for(i=0;i<component.length;i++)  {
    composition.push(rndL(component[i]));
    comp2 = comp2.concat(composition[i]);
  }
  return comp2;
}
function generateName() {
  var name;
  firstName = rndSyl(Math.floor(Math.random()*2));
  lastName = rndSyl(Math.floor(Math.random()*2));
  name = firstName+" "+lastName;
  document.getElementById("maintxtbox").innerHTML = name;
}
function motion(e) {
  var x = e.clientX - cx;
  var y = e.clientY - cy;
  maintxtbox.style.top = cy-0.02*y-15;
  maintxtbox.style.left = cx-0.02*x-150;
  rndmbutton.style.top = cy-0.02*y-15;
  rndmbutton.style.left = cx-0.02*x-180;
}
function pulse()  {
  timer++;
  //x = document.getElementById('rndmbutton').offsetHeight;
  //maintxtbox.style.width =  300 + Math.floor(10*Math.sin(5*timer*2*Math.PI/360))+'px';
  b = Math.cos(5*timer*2*Math.PI/360);
  rndmbutton.style.color =  'rgba(255,165,0,'+b+')';
  requestAnimationFrame(pulse);
}

window.onload = function(){

  init(); //initializes canvas elements
  requestAnimationFrame(pulse);
}
