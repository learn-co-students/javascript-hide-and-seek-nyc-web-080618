function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let elements = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < elements.length; i++){
    let children = elements[i].children
    for (let j = 0; j < children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild(){
  return document.querySelector("#grand-node div div div div")
}

// function deepestChild(){
//   function deepestChild() {
//   let node = document.getElementById('grand-node');
//   let nextNode = node.children[0];
//
//   while (nextNode) {
//     node = nextNode;
//     nextNode = node.children[0];
//   }
//
//   return node;
// }
