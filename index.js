function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let list = document.querySelectorAll('#grand-node div')
  let lastList = list[list.length - 1]
  return lastList;
}

function increaseRankBy(n) {
  let lists = document.querySelectorAll('.ranked-list li')
  return lists.forEach(list => (list.innerHTML = (parseInt(list.innerHTML) + n)))
}
