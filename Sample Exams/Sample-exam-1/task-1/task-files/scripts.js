function createCalendar(selector, events){
var container = document.querySelector(selector),
    dayBox = document.createElement('div'),
    dayBoxTitle = document.createElement('strong'),
    dayBoxContent = document.createElement('div');
    dayBox.appendChild(dayBoxTitle);
    dayBox.appendChild(dayBoxContent);
    dayBoxContent.innerHTML = '&nbsp;';

    dayBoxContent.className = 'day-content';
    dayBoxTitle.className = 'day-title';
    dayBox.style.border = '1px solid black';
    dayBox.style.width = '120px';
    dayBox.style.height = '120px';
    dayBox.style.display = 'inline-block';
    container.style.width = (7.5*120) + 'px';
    dayBoxTitle.style.background = 'gray';
    dayBoxTitle.style.display = 'block';
    dayBoxTitle.style.width = '120px';
    dayBoxTitle.style.textAlign = 'center';
    dayBoxTitle.style.borderBottom = '2px solid black';

    var selectedBox = null;
    //function resetBoxesStyles(boxes){
      //  for(var i=0; i<boxes.length; i+=1){
        //    boxes[i].style.background = '';
        //}
    //}

    function onBoxMouseOver(ev){
        if(selectedBox !== this) {
            this.style.background = 'purple';
        }
    }

    function onBoxMouseOut(ev){
        if(selectedBox !==this) {
            this.style.background = '';
        }
    }

    function onBoxClick(ev){
        if(selectedBox){
            selectedBox.style.background ='';
        }
        if(selectedBox === this){
            selectedBox = null;
        }else {
            this.style.background = 'pink';
            selectedBox = this;
        }
    }

    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    function addEvents(boxes, events){
        for(var i=0; i<events.length; i+=1){
            var event = events[i],
                content  = boxes[event.date-1].querySelector('.day-content');
            content.innerHTML = event.hour + ' ' + event.title;
        }
    }

    function createMonthBoxes(){
        var dayBoxes = [];
        for(var i=0; i < 30; i+=1) {
            var dayOfWeek = daysOfWeek[i%7];
            dayBoxTitle.innerHTML = dayOfWeek + ' '+ (i+1) + ' Jun 2014';
            dayBoxes.push(dayBox.cloneNode(true));
        }
        return dayBoxes;
    }

    var boxes = createMonthBoxes();
    addEvents(boxes, events);

    for(var i = 0; i < boxes.length; i+=1){
        boxes[i].addEventListener('click', onBoxClick);
        boxes[i].addEventListener('mouseover', onBoxMouseOver);
        boxes[i].addEventListener('mouseout', onBoxMouseOut);
        container.appendChild(boxes[i]);
    }
   /* if(typeof selector !== 'string'){
        throw new Error();
    }
    if (!selector instanceof(HTMLElement)){
        throw new Error();
    }

    var isArray = function(event){
        return event && typeof event === 'object' &&
            typeof event.length === 'number' &&
            typeof event.splice === 'function' &&
            !(event.propertyIsEnumerable('length'));
    };

    if(!isArray(event)){
        throw new Error();
    }

    function isCorrectTime(time){
        if(typeof time !=='string'){
            throw new Error;
        }
        if(time.length !== 5){
            throw new Error();
        }
        if(time.indexOf(':') !== 2){
            throw new Error();
        }
        if((time.substring(time, 0, 2))*1 >= 24 &&  (time.substring(time, 0, 2))*1 < 0){
            throw new Error();
        }
        if((time.substring(time, 3))*1 >= 60 &&  (time.substring(time, 3))*1 < 0){
            throw new Error();
        }
    }

    for(var i=0; i<event.length; i+=1){
        if(event[i].title !== 'string'){
            throw new Error();
        }
        if(event[i].date < 1 && event[i].date > 30){
            throw new Error();
        }
        if(!isCorrectTime(event[i].time)) {
            throw new Error();
        }
        if(event[i].duration < 0 && event[i].duration >1440){
            throw new Error();
        }
    }*/
}