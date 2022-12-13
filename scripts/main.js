//create controller
var controller = new ScrollMagic.Controller();
var i = false;


//MEDIA QUERY MEDIA QUERY MEDIA QUERY MEDIA QUERY MEDIA QUERY MEDIA QUERY

let mediaQuery = window.matchMedia('(max-width: 1233px)');


//INITIALIZE SWITCHING SCROLLMAGIC SCENES------------------------------
let bigImg = new ScrollMagic.Scene({
  offset: 120,
})
.setPin('#anatomyImg')


let smallImg = new ScrollMagic.Scene({
  offset: 750,
})
.setPin('#anatomyImg')


//IF STATEMENT TO TEST MEDIA QUERY-------------------------------------
if (mediaQuery.matches || i == false) { //i being false means event listener hasnt gone off yet
  screenTest(mediaQuery);
  depthTest(mediaQuery);
}


//MEDIA QUERY TO SWAP PINNING HEIGHTS ----------------------------------
function screenTest(e) {

    controller.removeScene(baseImg);

  if (e.matches) {
    console.log('small screen'); //test for if statement running

      if (i == true) {
          controller.removeScene(bigImg);
      }

      controller.addScene(smallImg);
  }

  else {
    console.log('big screen'); //test for if statement running

    if (i == true) {
        controller.removeScene(smallImg);
    }
    controller.addScene(bigImg);
  }

  i = true;
  console.log(i);
}

mediaQuery.addEventListener('change', screenTest); //this notices when the screen is changed, which will rerun the two mediaquery test functions

//MEDIA QUERY MEDIA QUERY MEDIA QUERY MEDIA QUERY MEDIA QUERY MEDIA QUERY





let image = document.getElementById('baseImg');
//images
let originalImg = "images/original.PNG";
let untapImg = "images/untap.PNG";
let upkeepImg = "images/upkeep.PNG";
let drawImg = "images/draw.PNG";
let dm1Img = "images/declarem1.PNG";

let main1Img = "images/main1.PNG";
let dmcImg = "images/blank_m1.PNG";

let begCombatImg = "images/begcombat.PNG";
let declareAtkImg = "images/declareatk.PNG";
let declareBlkImg = "images/declareblk.PNG";
let combatDmgImg = "images/combatdmg.PNG";
let endCombatImg = "images/endcombat.PNG";
let dm2 = "images/blank_m2.PNG"

let main2Img = "images/main2.PNG";
let dendImg = "images/blank_m2.PNG";

let begendImg = "images/begend.PNG";
let cleanupImg = "images/cleanup.PNG";


var og = new ScrollMagic.Scene({
  offset: 379,
})
.on('start', function(){
  image.setAttribute('src', originalImg);
})
.addTo(controller);



//HIGHLIGHTING

//BEGINNING----------------------------------------------------------
//untap

function depthTest(e) {

  if (e.matches) {

    console.log('small screen success'); //test for if statement running


    var untap = new ScrollMagic.Scene({
      offset: 800,
      duration: 900
    })
    .setClassToggle('#untap', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 800

    })
    .on('start', function(){
      image.setAttribute('src', untapImg);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 1699
    })
    .on('start', function(){
      image.setAttribute('src', untapImg);
    })
    .addTo(controller);

    //upkeep----------------------------------------
    var upkeep = new ScrollMagic.Scene({
      offset: 1700,
      duration: 600
    })
    .setClassToggle('#upkeep', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 1700
    })
    .on('start', function(){
      image.setAttribute('src', upkeepImg);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 2299
    })
    .on('start', function(){
      image.setAttribute('src', upkeepImg);
    })
    .addTo(controller);

    //draw-----------------------------------------
    var draw = new ScrollMagic.Scene({
      offset: 2300,
      duration: 500
    })
    .setClassToggle('#draw', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 2300
    })
    .on('start', function(){
      image.setAttribute('src', drawImg);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 2799
    })
    .on('start', function(){
      image.setAttribute('src', drawImg);
    })
    .addTo(controller);

    //declare-------------------------------------
    var dm1 = new ScrollMagic.Scene({
      offset: 2800,
      duration: 500
    })
    .setClassToggle('#dm1', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 2800
    })
    .on('start', function(){
      image.setAttribute('src', dm1Img);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 3299
    })
    .on('start', function(){
      image.setAttribute('src', dm1Img);
    })
    .addTo(controller);

    //MP1---------------------------------------------------------------------

    var main1 = new ScrollMagic.Scene({
      offset: 3400,
      duration: 1200
    })
    .setClassToggle('#divMain1', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 3400
    })
    .on('start', function(){
      image.setAttribute('src', main1Img);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 4599
    })
    .on('start', function(){
      image.setAttribute('src', main1Img);
    })
    .addTo(controller);

    //declare--------------------------------

    var dmc = new ScrollMagic.Scene({
      offset: 4600,
      duration: 400
    })
    .setClassToggle('#dcombat', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 4600
    })
    .on('start', function(){
      image.setAttribute('src', dmcImg);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 4999
    })
    .on('start', function(){
      image.setAttribute('src', dmcImg);
    })
    .addTo(controller);

    //COMBAT------------------------------------------------------------------

    //beg--------------------------------------
    var begc = new ScrollMagic.Scene({
      offset: 5000,
      duration: 700
    })
    .setClassToggle('#begCombat', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 5000
    })
    .on('start', function(){
      image.setAttribute('src', begCombatImg);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 5699
    })
    .on('start', function(){
      image.setAttribute('src', begCombatImg);
    })
    .addTo(controller);

    //decl attack-----------------------------------

    var datk = new ScrollMagic.Scene({
      offset: 5700,
      duration: 900
    })
    .setClassToggle('#declareAttacks', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 5700
    })
    .on('start', function(){
      image.setAttribute('src', declareAtkImg);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 6599
    })
    .on('start', function(){
      image.setAttribute('src', declareAtkImg);
    })
    .addTo(controller);

    //decl block-----------------------------------

    var dblk = new ScrollMagic.Scene({
      offset: 6600,
      duration: 800
    })
    .setClassToggle('#declareBlocks', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 6600
    })
    .on('start', function(){
      image.setAttribute('src', declareBlkImg);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 7399
    })
    .on('start', function(){
      image.setAttribute('src', declareBlkImg);
    })
    .addTo(controller);

    //combat dmg -----------------------------------

    var dmg = new ScrollMagic.Scene({
      offset: 7400,
      duration: 1000
    })
    .setClassToggle('#resolveDmg', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 7400
    })
    .on('start', function(){
      image.setAttribute('src', combatDmgImg);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 8399
    })
    .on('start', function(){
      image.setAttribute('src', combatDmgImg);
    })
    .addTo(controller);

    //end combat ------------------------------------

    var endc = new ScrollMagic.Scene({
      offset: 8400,
      duration: 500
    })
    .setClassToggle('#endCombat', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 8400
    })
    .on('start', function(){
      image.setAttribute('src', endCombatImg);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 8999
    })
    .on('start', function(){
      image.setAttribute('src', endCombatImg);
    })
    .addTo(controller);

    //decl move ------------------------------------------

    var dm1 = new ScrollMagic.Scene({
      offset: 9000,
      duration: 400
    })
    .setClassToggle('#dm2', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 9000
    })
    .on('start', function(){
      image.setAttribute('src', dm2);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 9399
    })
    .on('start', function(){
      image.setAttribute('src', dm2);
    })
    .addTo(controller);

    // MP2 ----------------------------------------------------------------

    var main2 = new ScrollMagic.Scene({
      offset: 9400,
      duration: 1100
    })
    .setClassToggle('#divMain2', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 9400
    })
    .on('start', function(){
      image.setAttribute('src', main2Img);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 10499
    })
    .on('start', function(){
      image.setAttribute('src', main2Img);
    })
    .addTo(controller);

    //declr end------------------------
    var dend = new ScrollMagic.Scene({
      offset: 10500,
      duration: 300
    })
    .setClassToggle('#dcend', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 10500
    })
    .on('start', function(){
      image.setAttribute('src', dendImg);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 10800
    })
    .on('start', function(){
      image.setAttribute('src', dendImg);
    })
    .addTo(controller);

    // end ----------------------------------------------------------------

    //beg of end--------------------------------
    var bend = new ScrollMagic.Scene({
      offset: 10800,
      duration: 500
    })
    .setClassToggle('#effects', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 10800
    })
    .on('start', function(){
      image.setAttribute('src', begendImg);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 11299
    })
    .on('start', function(){
      image.setAttribute('src', begendImg);
    })
    .addTo(controller);

    //cleanup --------------------------------------
    var clean = new ScrollMagic.Scene({
      offset: 11300,
      duration: 1200
    })
    .setClassToggle('#cleanup', 'border')
    .addTo(controller);

    //first
    new ScrollMagic.Scene({
      offset: 11300
    })
    .on('start', function(){
      image.setAttribute('src', cleanupImg);
    })
    .addTo(controller);
    //second
    new ScrollMagic.Scene({
      offset: 12500
    })
    .on('start', function(){
      image.setAttribute('src', cleanupImg);
    })
    .addTo(controller);

  }


















  else {

    console.log('big screen success'); //test for if statement running

      var untap = new ScrollMagic.Scene({
        offset: 380,
        duration: 550
      })
      .setClassToggle('#untap', 'border')

      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 380

      })
      .on('start', function(){
        image.setAttribute('src', untapImg);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 929
      })
      .on('start', function(){
        image.setAttribute('src', untapImg);
      })
      .addTo(controller);

      //upkeep----------------------------------------
      var upkeep = new ScrollMagic.Scene({
        offset: 930,
        duration: 500
      })
      .setClassToggle('#upkeep', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 930
      })
      .on('start', function(){
        image.setAttribute('src', upkeepImg);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 1429
      })
      .on('start', function(){
        image.setAttribute('src', upkeepImg);
      })
      .addTo(controller);

      //draw-----------------------------------------
      var draw = new ScrollMagic.Scene({
        offset: 1430,
        duration: 470
      })
      .setClassToggle('#draw', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 1430
      })
      .on('start', function(){
        image.setAttribute('src', drawImg);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 1899
      })
      .on('start', function(){
        image.setAttribute('src', drawImg);
      })
      .addTo(controller);

      //declare-------------------------------------
      var dm1 = new ScrollMagic.Scene({
        offset: 1900,
        duration: 250
      })
      .setClassToggle('#dm1', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 1900
      })
      .on('start', function(){
        image.setAttribute('src', dm1Img);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 2149
      })
      .on('start', function(){
        image.setAttribute('src', dm1Img);
      })
      .addTo(controller);

      //MP1---------------------------------------------------------------------

      var main1 = new ScrollMagic.Scene({
        offset: 2250,
        duration: 800
      })
      .setClassToggle('#divMain1', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 2250
      })
      .on('start', function(){
        image.setAttribute('src', main1Img);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 3049
      })
      .on('start', function(){
        image.setAttribute('src', main1Img);
      })
      .addTo(controller);

      //declare--------------------------------

      var dmc = new ScrollMagic.Scene({
        offset: 3050,
        duration: 300
      })
      .setClassToggle('#dcombat', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 3050
      })
      .on('start', function(){
        image.setAttribute('src', dmcImg);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 3349
      })
      .on('start', function(){
        image.setAttribute('src', dmcImg);
      })
      .addTo(controller);

      //COMBAT------------------------------------------------------------------

      //beg--------------------------------------
      var begc = new ScrollMagic.Scene({
        offset: 3400,
        duration: 500
      })
      .setClassToggle('#begCombat', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 3400
      })
      .on('start', function(){
        image.setAttribute('src', begCombatImg);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 3899
      })
      .on('start', function(){
        image.setAttribute('src', begCombatImg);
      })
      .addTo(controller);

      //decl attack-----------------------------------

      var datk = new ScrollMagic.Scene({
        offset: 3900,
        duration: 500
      })
      .setClassToggle('#declareAttacks', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 3900
      })
      .on('start', function(){
        image.setAttribute('src', declareAtkImg);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 4399
      })
      .on('start', function(){
        image.setAttribute('src', declareAtkImg);
      })
      .addTo(controller);

      //decl block-----------------------------------

      var dblk = new ScrollMagic.Scene({
        offset: 4400,
        duration: 600
      })
      .setClassToggle('#declareBlocks', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 4400
      })
      .on('start', function(){
        image.setAttribute('src', declareBlkImg);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 4999
      })
      .on('start', function(){
        image.setAttribute('src', declareBlkImg);
      })
      .addTo(controller);

      //combat dmg -----------------------------------

      var dmg = new ScrollMagic.Scene({
        offset: 5000,
        duration: 700
      })
      .setClassToggle('#resolveDmg', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 5000
      })
      .on('start', function(){
        image.setAttribute('src', combatDmgImg);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 5699
      })
      .on('start', function(){
        image.setAttribute('src', combatDmgImg);
      })
      .addTo(controller);

      //end combat ------------------------------------

      var endc = new ScrollMagic.Scene({
        offset: 5700,
        duration: 500
      })
      .setClassToggle('#endCombat', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 5700
      })
      .on('start', function(){
        image.setAttribute('src', endCombatImg);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 6199
      })
      .on('start', function(){
        image.setAttribute('src', endCombatImg);
      })
      .addTo(controller);

      //decl move ------------------------------------------

      var dm1 = new ScrollMagic.Scene({
        offset: 6200,
        duration: 300
      })
      .setClassToggle('#dm2', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 6200
      })
      .on('start', function(){
        image.setAttribute('src', dm2);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 6499
      })
      .on('start', function(){
        image.setAttribute('src', dm2);
      })
      .addTo(controller);

      // MP1 ----------------------------------------------------------------

      var main2 = new ScrollMagic.Scene({
        offset: 6600,
        duration: 600
      })
      .setClassToggle('#divMain2', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 6600
      })
      .on('start', function(){
        image.setAttribute('src', main2Img);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 7199
      })
      .on('start', function(){
        image.setAttribute('src', main2Img);
      })
      .addTo(controller);

      //declr end------------------------
      var dend = new ScrollMagic.Scene({
        offset: 7200,
        duration: 200
      })
      .setClassToggle('#dcend', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 7200
      })
      .on('start', function(){
        image.setAttribute('src', dendImg);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 7399
      })
      .on('start', function(){
        image.setAttribute('src', dendImg);
      })
      .addTo(controller);

      // end ----------------------------------------------------------------

      //beg of end--------------------------------
      var bend = new ScrollMagic.Scene({
        offset: 7500,
        duration: 300
      })
      .setClassToggle('#effects', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 7500
      })
      .on('start', function(){
        image.setAttribute('src', begendImg);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 7799
      })
      .on('start', function(){
        image.setAttribute('src', begendImg);
      })
      .addTo(controller);

      //cleanup --------------------------------------
      var clean = new ScrollMagic.Scene({
        offset: 7800,
        duration: 500
      })
      .setClassToggle('#cleanup', 'border')
      .addTo(controller);

      //first
      new ScrollMagic.Scene({
        offset: 7800
      })
      .on('start', function(){
        image.setAttribute('src', cleanupImg);
      })
      .addTo(controller);
      //second
      new ScrollMagic.Scene({
        offset: 8400
      })
      .on('start', function(){
        image.setAttribute('src', cleanupImg);
      })
      .addTo(controller);

    }
}




































//.
