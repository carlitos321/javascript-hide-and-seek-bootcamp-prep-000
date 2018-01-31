function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const allLi = document.querySelectorAll('ul.ranked-list li').innerHTML

  for (let i = 0; i < allLi.length; i++) {
      parseInt(allLi[i] + n) 
  }
}

function deepestChild() {
  document.querySelector('#grand-node ')

  //select #grand-node parent
  // Then drill to into the innerHTML of div

}
