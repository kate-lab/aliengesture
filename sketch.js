let video;
let poseNet;
let poses = [];
let history = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
let blob;
let skeleton;

function preload() {
  blob = loadImage(
    "https://res.cloudinary.com/dysirhng8/image/upload/c_scale,e_blur:258,h_150,o_37,w_200/v1638224920/pngegg_xusyak.png"
  );
  yellowBlob = loadImage(
    "https://res.cloudinary.com/dysirhng8/image/upload/c_scale,o_72,w_151/v1638228907/pngfind.com-dust-cloud-png-66336_bmcbun.png"
  );
}

function setup() {
  createCanvas(640, 380);

  //set up video capture
  video = createCapture(VIDEO);
  video.hide();

  // create new posenet method
  poseNet = ml5.poseNet(video, modelLoaded);
  // Listen to new 'pose' events
  poseNet.on("pose", (results) => {
    poses = results;
  });
}

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

// video input/output
function draw() {
  background(184, 255, 60);
  image(video, 0, 0, video.width, video.height);
  drawKeypoints();
}

// pose detector based on keypoints
function drawKeypoints() {
  // loop through array of poses detected
  for (let i = 0; i < poses.length; i++) {
    // then loop through each keypoint/body part in each pose
    const pose = poses[i].pose;

    for (let j = 0; j < pose.keypoints.length; j++) {
      const keypoint = pose.keypoints[j];
      // check keypoint probability and only draw if a certain decimal
      if (keypoint.score > 0.2) {
        image(yellowBlob, keypoint.position.x + 220, keypoint.position.y - 70);
        image(blob, keypoint.position.x + 220, keypoint.position.y - 90);
        fill(233, 38, 255);
        circle(keypoint.position.x + 300, keypoint.position.y, 5);
        history.splice(0, 1);
        history.push({ x: keypoint.position.x, y: keypoint.position.y });
        // console.log('history ->', history)
        createParticles();
      }
    }
    const skeleton = poses[i].skeleton;
    for (let i = 0; i < skeleton.length; i++) {
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      stroke(233, 38, 255);
      strokeWeight(3);
      line(a.position.x + 300, a.position.y, b.position.x + 300, b.position.y);
    }
  }
}

function createParticles() {
  for (let p = 0; p < history.length; p++) {
    fill(207, 184, 255);
    noStroke();

    let xTranslate = history[p].x + 300 + random(-50, 50);
    let yTranslate = history[p].y + random(-50, 50);
    let xTranslateTwo = history[p].x + 300 + random(-30, 30);
    let yTranslateTwo = history[p].y + random(-30, 30);
    let xTranslateThree = history[p].x + 300 + random(-7, 7);
    let yTranslateThree = history[p].y + random(-7, 7);

    circle(xTranslate, yTranslate, 1);
    circle(xTranslateTwo, yTranslateTwo, 1.5);
    circle(xTranslateThree, yTranslateThree, 1.5);
  }
}