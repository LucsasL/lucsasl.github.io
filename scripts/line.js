let path = document.querySelector(".curves1");
let pathLength = document.getTotalLength(path);

path.style.strokeDasharray = `${pathLength} ${pathLength}`;

path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {

  // What % down is it?
  let scrollPercentage = (
    document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Length to offset the dashes
    let drawLength = pathLength + scrollPercentage;

    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;

})