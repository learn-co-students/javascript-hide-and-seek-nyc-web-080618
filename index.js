function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let elem of list) {
    elem.innerHTML = parseInt(elem.innerHTML) + n
  }
}

function deepestChild() {
  var lis = document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for (let i = 0; i < lis.length - 1; i++) {
    test = lis[i].querySelector("div");
  }
  return test;
}