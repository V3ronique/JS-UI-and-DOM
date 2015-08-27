function solve(){
  return function(selector){
    var $selector = $(selector),
        $containingDiv = $('<div />').addClass('dropdown-list');
    $selector.css('display', 'none');
    $selector.find('option').each(function(index, option){
      var $option = $(option),
          html = $option.html(),
          value = $option.val(),
          $innerDiv = $('<div />').addClass('dropdown-item')
              .attr('data-value', value)
              .attr('data-index', index)
              .html(html)
              .appendTo($containingDiv);
    });
    $(document.body).append($containingDiv);

   return this;
  };
}

module.exports = solve;