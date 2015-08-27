/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

//module.exports = function () {
function solve(){
  return function (element, contents) {
    if(typeof element === 'string'){
      element = document.getElementById(element);
    }
    if(typeof element === 'undefined' || typeof contents === 'undefined'){
      throw new Error();
    }

    if (!element instanceof(HTMLElement)){
      throw new Error();
    }
    var isArray = function(contents){
      return contents && typeof contents === 'object' &&
              typeof contents.length === 'number' &&
              typeof contents.splice === 'function' &&
              !(contents.propertyIsEnumerable('length'));
    };

    if(!isArray(contents)){
      throw new Error();
    }

    var templateElement = document.createElement('div'),
        docFrag = document.createDocumentFragment();

    for(var i = 0; i < contents.length; i+=1){
      if(typeof contents[i] !== 'string' && typeof contents[i] !== 'number'){
        throw new Error();
      }
      var div = templateElement.cloneNode(true);
      div.innerHTML = contents[i];
      docFrag.appendChild(div);
    }
    element.innerHTML = '';
    element.appendChild(docFrag);
  };
}