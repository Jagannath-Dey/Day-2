//=====nested if=======

var english=true;
var poem=true;
var story=false;

if(english==true){
    if( poem==true){
        if(story==true){
            console.log('Go for story line');
        }else{
            console.log('Not go for story line');
        }
    }else{
        console.log('Not teken poem');
    }
}else{
    console.log('Not allowed in english course');
}