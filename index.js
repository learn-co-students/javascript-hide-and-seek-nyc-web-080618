
function getFirstSelector(selector)  {
  return document.querySelector(selector) //returns the first element  that matches the selector
}

function nestedTarget() {
  return document.querySelector('.target')
}

function increaseRankBy(n) {
  let nodes = document.querySelectorAll(".ranked-list li")
  //nodes is an array

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].innerHTML = parseInt(nodes[i].innerHTML) + n
    debugger

  }

}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div')
    return nodes[nodes.length-1]
}
