
// CAT ONE
let eyebrow;
let head;
let scene;
let nose;

// CAT TWO
let head2;
let scene2;
let nose2;

// CAT THREE
let head3;
let nose3;
let scene3;

// CAT FOUR
let head4;
let nose4;
let scene4;

// OTHER
let isMouthOpen = false;



function prepareInteraction() {

  // CAT ONE
  head = loadImage('/images/face.png');
  scene = loadImage('/images/background.png');
  nose = loadImage('/images/nose.png');

  // CAT TWO 
  head2 = loadImage('/images/face2.png');
  scene2 = loadImage('/images/backround2.png');
  nose2 = loadImage('/images/nose2.png');

  // CAT THREE
  head3 = loadImage('/images/face3.png');
  nose3 = loadImage('/images/nose3.png');
  scene3 = loadImage('/images/background3.png');

  //Cat FOUR
  head4 = loadImage('/images/face4.png');
  nose4 = loadImage('/images/nose4.png');
  scene4 = loadImage('/images/background4.png');
}


function drawInteraction(faces, hands) {


  // for loop to capture if there is more than one face on the screen.
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face
    console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }

  
    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;

strokeWeight(0)
stroke(0)

// CAT ONE - orange silly
if (key === 'a'){

  image(scene,0, 0)
push();

imageMode(CENTER)
//BODY
   fill(186, 142, 93)
    ellipse(faceCenterX, faceCenterY+400, faceWidth*2.0, faceheight*2.10);

   fill(201, 155, 105)
    ellipse(faceCenterX, faceCenterY+400, faceWidth*1.9, faceheight*2);

 fill(249, 238, 219)
    ellipse(faceCenterX, faceCenterY+400, faceWidth*1.2, faceheight*1);

   
//HEAD
image(head,faceCenterX, faceCenterY-50,700,500)
pop();
strokeWeight(0)
stroke(0)

//EYES
stroke(0)
// WHITE PART SHADOW
   fill(227, 208, 152)
    ellipse(leftEyeCenterX+30, leftEyeCenterY+30, leftEyeWidth*2.5, leftEyeHeight*6.5);
    ellipse(rightEyeCenterX-50, rightEyeCenterY+30, rightEyeWidth*2.5, rightEyeHeight*6.5);

// WHITE PART
   fill(245, 231, 186)
    ellipse(leftEyeCenterX+30, leftEyeCenterY+30, leftEyeWidth*2.5, leftEyeHeight*5.5);
    ellipse(rightEyeCenterX-50, rightEyeCenterY+30, rightEyeWidth*2.5, rightEyeHeight*5.5);

 // COLOURED EYES SHADOW
   fill(99, 69, 36)
    ellipse(leftEyeCenterX+30, leftEyeCenterY+30, leftEyeWidth*1.5, leftEyeHeight*4);
    ellipse(rightEyeCenterX-50, rightEyeCenterY+30, rightEyeWidth*1.5, rightEyeHeight*4);

// COLOURED EYES
   fill(122, 87, 48)
    ellipse(leftEyeCenterX+30, leftEyeCenterY+30, leftEyeWidth*1.5, leftEyeHeight*3);
    ellipse(rightEyeCenterX-50, rightEyeCenterY+30, rightEyeWidth*1.5, rightEyeHeight*3);

// BLACK PUPIL
    fill(0);
    // fill(get(leftEyeCenterX, leftEyeCenterY))
    ellipse(leftEyeCenterX+30, leftEyeCenterY+30, leftEyeWidth/1.5, leftEyeHeight*2);
    ellipse(rightEyeCenterX-50, rightEyeCenterY+30, rightEyeWidth/1.5, rightEyeHeight*2);

// WHITE SPECK
      fill(255);
    // fill(get(leftEyeCenterX, leftEyeCenterY))
    ellipse(leftEyeCenterX+10, leftEyeCenterY+20, leftEyeWidth/2, leftEyeHeight);
    ellipse(rightEyeCenterX-30, rightEyeCenterY+20, rightEyeWidth/2, rightEyeHeight);

//NOSE 
image(nose, noseTipX-150/2, noseTipY+50, 150, 150);


 checkIfMouthOpen(face);
    if (isMouthOpen) {
      fill(0);
      textSize(40);
      text("meow", face.keypoints[287].x+200, face.keypoints[287].y) // 287 is corner of mouth 
    text("meow", face.keypoints[287].x+150, face.keypoints[287].y+100)
    }
}

// CAT TWO - grey grumpy
if (key === 's'){

image(scene2,0, 0,1280,720)
push();
imageMode(CENTER)

//BODY

//BODY SHADOW
  fill(80,80,80)
ellipse(faceCenterX, faceCenterY+400, faceWidth*2.2, faceheight*2.10);
//MAIN BODY
  fill(90, 90, 90)
ellipse(faceCenterX, faceCenterY+400, faceWidth*2.1, faceheight*2);
 // LIGHT PART
  fill(210,210,210)
ellipse(faceCenterX, faceCenterY+400, faceWidth, faceheight);

   
//HEAD
image(head2,faceCenterX, faceCenterY-50,700,500)

strokeWeight(0)
stroke(0)
pop();

//EYES
stroke(0)
// WHITE PART SHADOW
  fill(230,230,225)
arc(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*2, leftEyeHeight*6, 0, PI);
arc(rightEyeCenterX-40, rightEyeCenterY+5, rightEyeWidth*2, rightEyeHeight*6, 0, PI);

// WHITE PART
  fill(245, 245, 230)
arc(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*1.5, leftEyeHeight*5.5, 0, PI);
arc(rightEyeCenterX-40, rightEyeCenterY+5, rightEyeWidth*1.5, rightEyeHeight*5.5, 0, PI);

noStroke()
//COLOURED EYE SHADOW
  fill(66, 140, 66)
arc(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*1.3, leftEyeHeight*4, 0, PI);
arc(rightEyeCenterX-40, rightEyeCenterY+5, rightEyeWidth*1.3, rightEyeHeight*4, 0, PI);

//COLOURED EYES
  fill(80, 163, 80)
arc(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight*3.5, 0, PI);
arc(rightEyeCenterX-40, rightEyeCenterY+5, rightEyeWidth, rightEyeHeight*3.5, 0, PI);

// BLACK PUPIL
  fill(0);
arc(leftEyeCenterX, leftEyeCenterY, leftEyeWidth/1.5, leftEyeHeight*3, 0, PI);
arc(rightEyeCenterX-40, rightEyeCenterY+5, rightEyeWidth/1.5, rightEyeHeight*3, 0, PI);

// WHITE SPECK
fill(255,120);
ellipse(leftEyeCenterX+10, leftEyeCenterY+10, leftEyeWidth/2, leftEyeHeight);
ellipse(rightEyeCenterX-30, rightEyeCenterY+15, rightEyeWidth/2, rightEyeHeight);

//NOSE 
image(nose2, noseTipX-80, noseTipY+10, 150, 100);


 checkIfMouthOpen(face);
    if (isMouthOpen) {
  fill(255);
  strokeWeight(4);
      textSize(40);
      text("MEOWW", face.keypoints[287].x+150, face.keypoints[287].y) // 287 is corner of mouth 
    text("MEOW", face.keypoints[287].x+300, face.keypoints[287].y+50)
    }

}

//CAT THREE - white 
if (key === 'd'){

image(scene3,0,0)
push();
imageMode(CENTER)
//BODY
   fill(220)
    ellipse(faceCenterX, faceCenterY+400, faceWidth*2.0, faceheight*2.10);

   fill(245)
    ellipse(faceCenterX, faceCenterY+400, faceWidth*1.9, faceheight*2);

   
//HEAd
image(head3,faceCenterX, faceCenterY-50,700,500)

strokeWeight(0)
stroke(0)

//EYES
stroke(0)
// white part shadow
   fill(221, 233, 237)
    ellipse(leftEyeCenterX+20, leftEyeCenterY+30, leftEyeWidth*1.5, leftEyeHeight*5.5);
    ellipse(rightEyeCenterX-30, rightEyeCenterY+30, rightEyeWidth*1.5, rightEyeHeight*5.5);

// white part
   fill(237, 250, 255)
    ellipse(leftEyeCenterX+20, leftEyeCenterY+30, leftEyeWidth*1.5, leftEyeHeight*5);
    ellipse(rightEyeCenterX-30, rightEyeCenterY+30, rightEyeWidth*1.5, rightEyeHeight*5);

 //coloured eyes shadow
   fill(78, 169, 204)
    ellipse(leftEyeCenterX+20, leftEyeCenterY+30, leftEyeWidth*1.1, leftEyeHeight*3);
    ellipse(rightEyeCenterX-30, rightEyeCenterY+30, rightEyeWidth*1.1, rightEyeHeight*3);

//coloured eyes
   fill(89, 185, 222)
    ellipse(leftEyeCenterX+20, leftEyeCenterY+30, leftEyeWidth*1, leftEyeHeight*2.5);
    ellipse(rightEyeCenterX-30, rightEyeCenterY+30, rightEyeWidth*1, rightEyeHeight*2.5);

// black pupil
    fill(0);
    // fill(get(leftEyeCenterX, leftEyeCenterY))
    ellipse(leftEyeCenterX+20, leftEyeCenterY+30, leftEyeWidth/1.5, leftEyeHeight*2);
    ellipse(rightEyeCenterX-30, rightEyeCenterY+30, rightEyeWidth/1.5, rightEyeHeight*2);

// white speck
      fill(255,140);
    // fill(get(leftEyeCenterX, leftEyeCenterY))
    ellipse(leftEyeCenterX, leftEyeCenterY+20, leftEyeWidth/2, leftEyeHeight);
    ellipse(rightEyeCenterX-10, rightEyeCenterY+20, rightEyeWidth/2, rightEyeHeight);

//nose 
image(nose3, noseTipX, noseTipY+50, 150, 150);


 checkIfMouthOpen(face);
    if (isMouthOpen) {

      textSize(40);
        fill(255, 158, 200);
      strokeWeight(4);
      text("meowww", face.keypoints[287].x+200, face.keypoints[287].y) // 287 is corner of mouth 
    text("meowww", face.keypoints[287].x+150, face.keypoints[287].y+100)
    }

}

//CAT FOUR - brown cutie
if (key === 'f'){

image(scene4,0,0)
push();
imageMode(CENTER)
//BODY
   fill(104, 66, 33)
    ellipse(faceCenterX, faceCenterY+400, faceWidth*2.0, faceheight*2.10);

   fill(119, 79, 40)
    ellipse(faceCenterX, faceCenterY+400, faceWidth*1.9, faceheight*2);

   
//HEAd
image(head4,faceCenterX, faceCenterY-50,700,500)

strokeWeight(0)
stroke(0)

//EYES
stroke(0)
// white part shadow
   fill(221, 233, 237)
    ellipse(leftEyeCenterX+20, leftEyeCenterY+30, leftEyeWidth*1.5, leftEyeHeight*5.5);
    ellipse(rightEyeCenterX-30, rightEyeCenterY+30, rightEyeWidth*1.5, rightEyeHeight*5.5);

// white part
   fill(237, 250, 255)
    ellipse(leftEyeCenterX+20, leftEyeCenterY+30, leftEyeWidth*1.5, leftEyeHeight*5);
    ellipse(rightEyeCenterX-30, rightEyeCenterY+30, rightEyeWidth*1.5, rightEyeHeight*5);

 //coloured eyes shadow
   fill(171, 115, 67)
    ellipse(leftEyeCenterX+20, leftEyeCenterY+30, leftEyeWidth*1.1, leftEyeHeight*3);
    ellipse(rightEyeCenterX-30, rightEyeCenterY+30, rightEyeWidth*1.1, rightEyeHeight*3);

//coloured eyes
   fill(179, 126, 80)
    ellipse(leftEyeCenterX+20, leftEyeCenterY+30, leftEyeWidth*1, leftEyeHeight*2.5);
    ellipse(rightEyeCenterX-30, rightEyeCenterY+30, rightEyeWidth*1, rightEyeHeight*2.5);

// black pupil
    fill(0);
    // fill(get(leftEyeCenterX, leftEyeCenterY))
    ellipse(leftEyeCenterX+20, leftEyeCenterY+30, leftEyeWidth/1.5, leftEyeHeight*2);
    ellipse(rightEyeCenterX-30, rightEyeCenterY+30, rightEyeWidth/1.5, rightEyeHeight*2);

// white speck
      fill(255,140);
    // fill(get(leftEyeCenterX, leftEyeCenterY))
    ellipse(leftEyeCenterX, leftEyeCenterY+20, leftEyeWidth/2, leftEyeHeight);
    ellipse(rightEyeCenterX-10, rightEyeCenterY+20, rightEyeWidth/2, rightEyeHeight);

//nose 
image(nose4, noseTipX, noseTipY+50, 150, 150);


 checkIfMouthOpen(face);
    if (isMouthOpen) {

      textSize(40);
        fill(0);
        stroke(0);
  strokeWeight(4);
      text("meow", face.keypoints[287].x+200, face.keypoints[287].y) // 287 is corner of mouth 
    text("meow", face.keypoints[287].x+150, face.keypoints[287].y+100)
    }
}

    pop();
  }

}
function checkIfMouthOpen(face) {

  let upperLip = face.keypoints[13]
  let lowerLip = face.keypoints[14]
 

  let d = dist(upperLip.x, upperLip.y, lowerLip.x, lowerLip.y);
  if (d < 10) {
    isMouthOpen = false;
  } else {
    isMouthOpen = true;
  }



}




