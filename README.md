# Alien Gesture Dance App

## Overview and Tech Used

A gesture recognition software built using [TensorFlow Pose Estimation](https://www.tensorflow.org/lite/examples/pose_estimation/overview) using the [PoseNet](https://github.com/tensorflow/tfjs-models/tree/master/posenet) library that allows you to dance alongside an alien. Built in the p5.js online editor in JavaScript, HTML and CSS. To demo yourself, try out the Alien Dance App on [Github Pages](https://kate-lab.github.io/aliengesture/).

## Approach Taken

### Gesture Recognition via Poses

After using the p5 canvas system to initialise a webcam as a canvas on screen, I used PoseNet's keypoint recognition to identify the keypoints of the body detected via the webcam, and map them into an array of "pose" objects. On console logging these, you can see the x and y axis of these keypoints and the level of certainty to which the software can be sure that they are that specific keypoint.

![gesture recognition](https://res.cloudinary.com/dysirhng8/image/upload/v1638275500/aliendance/Screenshot_2021-11-29_at_12.40.02_epflr5.png)
![keypoint objects](https://res.cloudinary.com/dysirhng8/image/upload/v1638275499/aliendance/Screenshot_2021-11-29_at_12.41.13_kwlk9d.png)

### Keypoint Mapping

I then defined a point that would be mapped as a circle whenever a keypoint was generated with a certain level of certainty, mapping through the poses to create all 16 keypoints as circles.

![gesture recognition](https://res.cloudinary.com/dysirhng8/image/upload/v1638275546/aliendance/Screenshot_2021-11-30_at_12.32.15_r0hhc9.png)

### Skeleton Addition

To create a skeleton, I mapped in the a and b adjoining points for each keypoint and joined them with a stroke. I then added in nebula and blurred ellipse images to overlay on the indvidual keypoints to create a more organic feeling form. I added a random  particle generator with the keypoint  as the centre of 3 concentric circles of variying sizes to generate a swirling galaxy effect around each keypoint.

### X Axis shift

I shifted the keypoint x axis by 300 for the keypoints, the images and the skeleton, so that the character was no longer overlayed over the user's image in camera, but a seperate entity moving alongside the user's image.

### Final Product

I finalised the project by adding in some basic HTML and CSS to create a title, background and to show the user how to use the app.

![elvis](https://res.cloudinary.com/dysirhng8/image/upload/v1638275496/aliendance/Screenshot_2021-11-30_at_11.24.20_ixtkgf.png)
![Skeleton](https://res.cloudinary.com/dysirhng8/image/upload/v1638275500/aliendance/Screenshot_2021-11-30_at_11.19.19_xkewdr.png)
