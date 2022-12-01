//create controller
var controller = new ScrollMagic.Controller();

//create scene
new ScrollMagic.Scene({
  //duration: 3500, // the scene should last for a scroll distance of 100px
  offset: 120 // start this scene after scrolling for 500px
})
.setPin('#anatomyImg')
.addTo(controller); //assigns the scene to the Controller


//note to self: understand how to create a custom event that triggers on scroll depth
//^^ do this so u can swap images when u scroll to a certain depth

//NEXT STEP: PUT IN THE FULL TEXT RESEARCH-- need distances for triggers
