let secrets;
secrets=["SEX HARASSMENT",
"RELATIVES",
"UNCLE-IN-LAW",
"LESBIAN",
"GIRLS",
"LOVE",
"GAY",
"COMING-OUT",
"FRIEND",
"MALE",
"BESTIES",
"MISS",
"EX",
"BOYFRIEND",
"GIRLFRIEND",
"EXPECTATION",
"FANTASY",
"MAGIC",
"RICH",
"GRANDPA",
"REGRETION",
"DREAM",
"LYRICWRITER",
"CONTROL-FREEK",
"MOM",
"REJECTION",
"RELIVE",
"UGLY",
"PUBERTY",
"ADOLESCENCE",
"DATE",
"KISS",
"PREGNANT",
"VIRGIN",
"SUICIDE",
"FIRST-LOVE",
"DORM",
"LITTLEPRINCE",
"FICTION",
"BULLYING",
"SCHOOL",
"POSSESSIVE",
"COUPLE",
"ILLNESS",
"5-YEARS",
"NOTHING"]
           
function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(0);
  noStroke();
  frameRate(5);
  
}

function draw() {
 fill(0,0,0,50);
 rect(0,0,windowWidth,windowHeight);
 fill(255);
 textSize(random(100));
  var i= int (random (44));
 text(secrets[i], random(windowWidth), random(windowHeight));
  fill(0);
  textSize(20);

}