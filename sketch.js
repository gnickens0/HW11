let sub = ["Barstool Admin", "Business major #22314", "Random campus walker", "A pledge"];
let place = ["McBryde backrooms", "Torg bridge study lounge", "Benny's line", "Centros"];
let conclusion = ["drove on the 81 and ran someone off the road", "pulled the fire alarm in Pritchard", "surprisingly did nothing"]

let sentence = "Click Here";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(155);

  textAlign(CENTER);
  fill(0, 0, 0);
  textWrap(WORD);
  textSize(25);
  text(sentence, 100, 100, 200);

}

function mouseClicked() {
  let newSub = random(sub);
  let newPlace = random(place);
  let newConclusion = random(conclusion);

  sentence = newSub + " went to " + newPlace + " and " + newConclusion;

}