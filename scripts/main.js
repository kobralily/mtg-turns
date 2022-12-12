//create controller
var controller = new ScrollMagic.Controller();

//create one scene (of many) to add to the controller
var baseImg = new ScrollMagic.Scene({
  offset: 120 // start this scene after scrolling for 500px
})
.setPin('#anatomyImg') //pins image onto foreground and scrolls w user
.addTo(controller); //assigns the scene to the Controller


//note to self: understand how to create a custom event that triggers on scroll depth
//^^ do this so u can swap images when u scroll to a certain depth

//NEXT STEP: PUT IN THE FULL TEXT RESEARCH-- need distances for triggers


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
var untap = new ScrollMagic.Scene({ //make scene for highlighting
  offset: 380, //after scrolling for 380 px, highlight the box white
  duration: 550 //keep the box highlighted for 550px of scrolling
})
.setClassToggle('#untap', 'border') //this is what highlights the box
//it adds a white 'border' to the box titled #untap
.addTo(controller); //makes it work

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
  duration: 250
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
  offset: 1179
})
.on('start', function(){
  image.setAttribute('src', upkeepImg);
})
.addTo(controller);

//draw-----------------------------------------
var draw = new ScrollMagic.Scene({
  offset: 1180,
  duration: 240
})
.setClassToggle('#draw', 'border')
.addTo(controller);

//first
new ScrollMagic.Scene({
  offset: 1180
})
.on('start', function(){
  image.setAttribute('src', drawImg);
})
.addTo(controller);
//second
new ScrollMagic.Scene({
  offset: 1419
})
.on('start', function(){
  image.setAttribute('src', drawImg);
})
.addTo(controller);

//declare-------------------------------------
var dm1 = new ScrollMagic.Scene({
  offset: 1420,
  duration: 240
})
.setClassToggle('#dm1', 'border')
.addTo(controller);

//first
new ScrollMagic.Scene({
  offset: 1420
})
.on('start', function(){
  image.setAttribute('src', dm1Img);
})
.addTo(controller);
//second
new ScrollMagic.Scene({
  offset: 1799
})
.on('start', function(){
  image.setAttribute('src', dm1Img);
})
.addTo(controller);

//MP1---------------------------------------------------------------------

var main1 = new ScrollMagic.Scene({
  offset: 1800,
  duration: 500
})
.setClassToggle('#divMain1', 'border')
.addTo(controller);

//first
new ScrollMagic.Scene({
  offset: 1800
})
.on('start', function(){
  image.setAttribute('src', main1Img);
})
.addTo(controller);
//second
new ScrollMagic.Scene({
  offset: 2299
})
.on('start', function(){
  image.setAttribute('src', main1Img);
})
.addTo(controller);

//declare--------------------------------

var dmc = new ScrollMagic.Scene({
  offset: 2300,
  duration: 180
})
.setClassToggle('#dcombat', 'border')
.addTo(controller);

//first
new ScrollMagic.Scene({
  offset: 2300
})
.on('start', function(){
  image.setAttribute('src', dmcImg);
})
.addTo(controller);
//second
new ScrollMagic.Scene({
  offset: 2479
})
.on('start', function(){
  image.setAttribute('src', dmcImg);
})
.addTo(controller);

//COMBAT------------------------------------------------------------------

//beg--------------------------------------
var begc = new ScrollMagic.Scene({
  offset: 2600,
  duration: 300
})
.setClassToggle('#begCombat', 'border')
.addTo(controller);

//first
new ScrollMagic.Scene({
  offset: 2600
})
.on('start', function(){
  image.setAttribute('src', begCombatImg);
})
.addTo(controller);
//second
new ScrollMagic.Scene({
  offset: 2899
})
.on('start', function(){
  image.setAttribute('src', begCombatImg);
})
.addTo(controller);

//decl attack-----------------------------------

var datk = new ScrollMagic.Scene({
  offset: 2900,
  duration: 350
})
.setClassToggle('#declareAttacks', 'border')
.addTo(controller);

//first
new ScrollMagic.Scene({
  offset: 2900
})
.on('start', function(){
  image.setAttribute('src', declareAtkImg);
})
.addTo(controller);
//second
new ScrollMagic.Scene({
  offset: 3249
})
.on('start', function(){
  image.setAttribute('src', declareAtkImg);
})
.addTo(controller);

//decl block-----------------------------------

var dblk = new ScrollMagic.Scene({
  offset: 3250,
  duration: 400
})
.setClassToggle('#declareBlocks', 'border')
.addTo(controller);

//first
new ScrollMagic.Scene({
  offset: 3250
})
.on('start', function(){
  image.setAttribute('src', declareBlkImg);
})
.addTo(controller);
//second
new ScrollMagic.Scene({
  offset: 3649
})
.on('start', function(){
  image.setAttribute('src', declareBlkImg);
})
.addTo(controller);

//combat dmg -----------------------------------

var dmg = new ScrollMagic.Scene({
  offset: 3650,
  duration: 400
})
.setClassToggle('#resolveDmg', 'border')
.addTo(controller);

//first
new ScrollMagic.Scene({
  offset: 3650
})
.on('start', function(){
  image.setAttribute('src', combatDmgImg);
})
.addTo(controller);
//second
new ScrollMagic.Scene({
  offset: 4049
})
.on('start', function(){
  image.setAttribute('src', combatDmgImg);
})
.addTo(controller);

//end combat ------------------------------------

var endc = new ScrollMagic.Scene({
  offset: 4050,
  duration: 300
})
.setClassToggle('#endCombat', 'border')
.addTo(controller);

//first
new ScrollMagic.Scene({
  offset: 4050
})
.on('start', function(){
  image.setAttribute('src', endCombatImg);
})
.addTo(controller);
//second
new ScrollMagic.Scene({
  offset: 4349
})
.on('start', function(){
  image.setAttribute('src', endCombatImg);
})
.addTo(controller);

//decl move ------------------------------------------

var endc = new ScrollMagic.Scene({
  offset: 4350,
  duration: 200
})
.setClassToggle('#dm2', 'border')
.addTo(controller);

//first
new ScrollMagic.Scene({
  offset: 4350
})
.on('start', function(){
  image.setAttribute('src', dm2);
})
.addTo(controller);
//second
new ScrollMagic.Scene({
  offset: 4550
})
.on('start', function(){
  image.setAttribute('src', dm2);
})
.addTo(controller);

// MP1 ----------------------------------------------------------------

var main2 = new ScrollMagic.Scene({
  offset: 4700,
  duration: 300
})
.setClassToggle('#divMain2', 'border')
.addTo(controller);

//first
new ScrollMagic.Scene({
  offset: 4700
})
.on('start', function(){
  image.setAttribute('src', main2Img);
})
.addTo(controller);
//second
new ScrollMagic.Scene({
  //offset: 4700
})
.on('start', function(){
  image.setAttribute('src', main2Img);
})
.addTo(controller);

// end ----------------------------------------------------------------

//beg of end--------------------------------
var main2 = new ScrollMagic.Scene({
  offset: 4700,
  duration: 300
})
.setClassToggle('#effects', 'border')
.addTo(controller);

//first
new ScrollMagic.Scene({
  offset: 4700
})
.on('start', function(){
  image.setAttribute('src', begendImg);
})
.addTo(controller);
//second
new ScrollMagic.Scene({
  //offset: 4700
})
.on('start', function(){
  image.setAttribute('src', begendImg);
})
.addTo(controller);

//cleanup --------------------------------------

var main2 = new ScrollMagic.Scene({
  offset: 4700,
  duration: 300
})
.setClassToggle('#cleanup', 'border')
.addTo(controller);

//first
new ScrollMagic.Scene({
  offset: 4700
})
.on('start', function(){
  image.setAttribute('src', cleanupImg);
})
.addTo(controller);
//second
new ScrollMagic.Scene({
  //offset: 4700
})
.on('start', function(){
  image.setAttribute('src', cleanupImg);
})
.addTo(controller);









//.
