// Get the Movement
var boxBlur = document.querySelectorAll(".boxBlur");
var box = document.querySelectorAll(".box");
var sensor = document.querySelectorAll(".margin-box");
var text = document.querySelectorAll(".My-name");
var i, middleLeft, middleTop;

for (i = 0; i < sensor.length; i++) {
  // Apply Movement
  let l1 = box[i].offsetLeft;
  let l2 = box[i].clientWidth;
  let t1 = box[i].offsetTop;
  let t2 = box[i].clientHeight;
  let altBox = box[i];
  let altText = text[i];
  let altBlur = boxBlur[i];
  // console.log(l);
  sensor[i].addEventListener("mousemove", (e) => {
    let middleLeft = l1 + l2 / 2;
    let middleTop = t1 + t2 / 2;
    let xAxis = (middleLeft - e.pageX) / 8;
    let yAxis = (middleTop - e.pageY) / 10;
    // console.log(xAxis, yAxis);
    altBox.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
    altBlur.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
    altText.style.transform = `translateZ(5vw)`;
  });

  // Reset Movement

  sensor[i].addEventListener("mouseenter", (e) => {
    altBox.style.transition = `all 0.15s ease-out`;
    altBlur.style.transition = `all 0.15s ease-out`;
    altText.style.transition = `all 0.8s ease-out`;
    altText.style.letterSpacing = `0.66vw`;
  });

  sensor[i].addEventListener("mouseleave", (e) => {
    altBox.style.transition = `all 0.5s ease-out`;
    altBlur.style.transition = `all 0.5s ease-out`;
    altText.style.transition = `all 0.5s ease-out`;
    altText.style.letterSpacing = `0`;
    altBox.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
    altBlur.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
    altText.style.transform = `translateZ(0)`;
  });
}
