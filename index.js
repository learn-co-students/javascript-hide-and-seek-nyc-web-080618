function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  debugger;
  let ranked = document.querySelectorAll(".ranked-list li");
  ranked.forEach(ele => ele.innerHTML = parseInt(ele.innerHTML) + n);
  // for (let ele of ranked){
  //   ele.innerHTML = parseInt(ele.innerHTML) + n;
  // }
}

function deepestChild(){
  return document.querySelector("#grand-node div div div div")
}
