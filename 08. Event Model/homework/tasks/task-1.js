/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve(){
  return function (selector) {
    var element = selector;
    if(typeof selector === 'string'){
      element = document.getElementById(selector);
    }

    if(!(element instanceof(HTMLElement))){
      throw new Error();
    }

    var buttons = element.querySelectorAll('.button');
    function evHandler(ev){
      var button = ev.target,
          node = button.nextElementSibling;

      while(node.className.indexOf('content') < 0){
        if(node.className.indexOf('button') >= 0){
          break;
        }

        node = node.nextElementSibling;
      }

      if(node.className.indexOf('button') >= 0){
        return;
      }

      if(node.style.display === 'none'){
        node.style.display = '';
        button.innerHTML = 'hide';
      }
      else{
        node.style.display = 'none';
        button.innerHTML = 'show';
      }
    }
    element.addEventListener('click', evHandler);
    for(var i =0; i < buttons.length; i+=1){
      buttons[i].innerHTML = 'hide';
    }
  };
};

module.exports = solve;