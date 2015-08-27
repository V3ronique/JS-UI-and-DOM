function createImagesPreviewer(selector, items) {
var left = document.createElement('div'),
    right = document.createElement('div'),
    img = document.createElement('img'),
    title = document.createElement('h1'),
    root = document.querySelector(selector);

    left.className += 'image-preview';
    left.style.float = 'left';
    right.style.float = 'left';
    right.style.overflowY = 'scroll';
    right.style.height = '400px';
    img.src = items[0].url;
    img.width = '400';
    img.style.borderRadius = '15px';
    title.innerHTML = items[0].title;
    left.appendChild(title);
    left.appendChild(img);

    function handleOnclickEvent(e) {
        var target = e.target,
            containerDiv = target,
            title,
            src;

        while(containerDiv.className !== ' image-container') {
            containerDiv = containerDiv.parentElement;
        }

        title = containerDiv.firstChild.innerHTML;
        src = containerDiv.firstChild.nextSibling.src;

        left.firstChild.innerHTML = title;
        left.firstChild.nextSibling.src = src;
    }

    function handleOnMouseover(e){
        e.target.style.background = 'gray';
    }

    function handleOnMouseout(e){
        e.target.style.background = '';
    }

    var filterLabel = document.createElement('label'),
        filterInput = document.createElement('input'),
        id = 'input-id-'+ Math.random();
    filterLabel.innerHTML = 'Filter';
    filterInput.id = id;
    filterLabel.setAttribute('for', id);

    right.appendChild(filterLabel);
    right.appendChild(filterInput);

    items.forEach(function(item){
       var title = document.createElement('strong');
        title.innerHTML = item.title;
        title.style.display = 'block';
        var img = document.createElement('img');
        img.src = item.url;
        img.width = '150';
        img.style.borderRadius = '15px';
        var container = document.createElement('div');
        container.className += ' image-container';
        container.style.textAlign = 'center';
        container.appendChild(title);
        container.appendChild(img);
        container.onclick = handleOnclickEvent;
        container.onmouseover = handleOnMouseover;
        container.onmouseout = handleOnMouseout;
        right.appendChild(container);
    });

    root.appendChild(left);
    root.appendChild(right);
}