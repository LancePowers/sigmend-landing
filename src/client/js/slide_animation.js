var personCount = 0;
var timer = 0
var slides = [
  {percentage: 20,text:"1 in 5 people experience a mental illness in a given year"},
  {percentage: 4,text:"1 in 25 people experience a serious mental illness in a given year"},
  {percentage: 3.7,text:"3.7% of the US population has thoughts of suicide in the past year"},
  {percentage: 1,text:"1% created a plan"},
  {percentage: .5,text:".5% made an attempt"},
  {percentage: .1,text:"For every 25 attempts 1 person dies by suicide."},
  {percentage: 80,text:"Up to 80% of mental health conditions can be treated successfully through therapy and medication alone."},
  {percentage: 96,text:"Alternative treatments have demonstrated 80% success rates for those with treatment resistant mental illness"},
  {percentage: 50,text:"50% of individuals in the tech industry have sought treatment for mental illness"},
  {percentage: 26,text:"Only 26% of individuals in tech are aware of their company's mental health resources and how to seek help. (Finkler, 2015)"}
];

build();

function build(){
  slideHalf();
  slideHalf();
  setInterval(function(){timer+=1; nextSlide();},3000)
}

function nextSlide(){
  var percent = slides[0].percentage;
  changeText(slides[0].text);
  for (var i = 0; i < 100; i++) {
    if(i < percent && percent-i >= 1) {
        color(i,100);
    } else if (i < percent){
      console.log(i,percent)
        color(i, (percent - i) * 100);
    } else{
      color(i,0)
    }
  }
  slides.shift();
}

function populateRow(){
  var people = "";
  for (var i = 0; i < 10; i++) {
    people +=
      `<figure id="`+personCount+`"class="person col-xs-1">
        <img src="./img/person.svg">
      </figure>`;
      personCount += 1;
    }
    return people;
}

function createRow(){
  var row =`<div class="row">
    <div class="col-xs-1"></div>`
      + populateRow() +
    `</div>`;
    return row;
}
function createSide(){
  var side = '<div class="col-sm-6">';
  for (var i = 0; i < 5; i++) {
    side += createRow();
  }
  return side += '</div>'
}

function slideHalf(){
  var $side = createSide();
  console.log($side)
  $('#people-container').append($side)
}

function color(pos, height){
   console.log(pos, height)
  var gradient = "linear-gradient(#fff 0%, #fff "+(height-1)+"%, #17c197 "+(height)+"%, #17c197 100%)";
  $('#'+pos).css("background",gradient)
}
function changeText(text){
  $("#people-title").text(text);
}
// var slides = [{percentage: 20,text:"test"}]
// createRow();
// color(3, 10);
