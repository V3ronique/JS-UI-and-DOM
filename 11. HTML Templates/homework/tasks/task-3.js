function solve(){
  return function(){
    $.fn.listview = function(data){
      var $this = $(this),
          source = $('#' + $this.attr('data-template')).html(),
          template = handlebars.compile(source);

      for(var i=0; i < data.length; i+=1){
        $this.append(template(data[i]));
      }
    };
  };
}

module.exports = solve;