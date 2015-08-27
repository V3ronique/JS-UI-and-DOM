/* globals $ */
$.fn.gallery = function (columns) {
    var $this = $(gallery).addClass('gallery'),
        $selectedDiv = $this.find('.selected'),
        count = 0;
    columns = columns || 4;
    $selectedDiv.hide();
    $this.find('.image-container').each(function(index, imageContainer){
        count += 1;
        if(count === columns){
            $(imageContainer).after($('<div/>').addClass('clearfix'));
            count = 0;
        }
    });


    var $images = $this.find('.image-container img');

    function updateSelected(currentIndex){
        var previousIndex = currentIndex - 1,
            nextIndex = (currentIndex + 1)% $images.length,
            $currentImage = $images.eq(currentIndex),
            $previousImage = $images.eq(previousIndex),
            $nextImage = $images.eq(nextIndex);
        $('#current-image').attr('src', $currentImage.attr('src')).attr('data-info', currentIndex + 1);
        $('#previous-image').attr('src', $previousImage.attr('src')).attr('data-info', previousIndex + 1);
        $('#next-image').attr('src', $nextImage.attr('src')).attr('data-info', nextIndex + 1);
    }

    $this.find('.gallery-list').on('click', '.image-container', function(){
        $selectedDiv.show();
        $('.gallery-list').addClass('background-disabled').addClass('blurred');
        $this = $(this);
        var currentIndex = $this.find('img').attr('data-info') - 1;
        updateSelected(currentIndex );
    });

    $('#current-image').on('click', function(){
        $selectedDiv.hide();
        $('.gallery-list').removeClass('background-disabled').removeClass('blurred');
    });

    $this.find('.previous-image, .next-image').on('click', function(){
        var currentIndex = $(this).find('img').attr('data-info') - 1;
        updateSelected(currentIndex)
    });
};