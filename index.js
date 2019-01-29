function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget(nested = '#nested',target = '.target') {
  return document.querySelector(`${nested} ${target}`);
};

function deepestChild(grandparent = '#grand-node', el = 'div') {
  const nestedChildren = document.querySelectorAll(`${grandparent} ${el}`);
  const lastNode = nestedChildren[nestedChildren.length - 1];
  return lastNode;
};

function increaseRankBy(n) {
  const nodes = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < nodes.length; i++) {
    let newValue = parseInt(nodes[i].innerHTML, 10) + n;
    nodes[i].innerHTML = newValue;
  };
};