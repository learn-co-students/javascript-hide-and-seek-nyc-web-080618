function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target') //argument is found in html page.
}

function deepestChild(){
  let nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length- 1];
}

function increaseRankBy(n){
  let nodes = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < nodes.length; i++){  
    nodes[i].innerHTML = parseInt(nodes[i].innerHTML) + n
  }
}
