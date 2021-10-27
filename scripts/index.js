var buttonColours=["daya","jetha","sundar","champak","popat","bhide"];
var gamePattern=[];
var playerPattern=[];
var level=0;
var running=false;

function resetGame()
{
  $("body").addClass("red");
  setTimeout(function(){
    $("body").removeClass("red");
  },200)
  var audio = new Audio( 'sounds/wrong.mp3');
  audio.play();
  running=false;
  $("h1").text("Press A Key to Start");
  gamePattern=[];
  level=0;
  playerPattern=[];
}

function checkResult( para)
{
  if(playerPattern[para]===gamePattern[para])
  {
    if(playerPattern.length===gamePattern.length)
    {
      setTimeout(function(){nextSequence();},400);
    }
  }
  else
  {
    resetGame();
  }
}

function nextSequence()
{
  level++;
  playerPattern=[];
  $("h1").text("LEVEL "+level);
  var randomNumber=Math.round(Math.random()*10)%6;
  var randomColorChosen=buttonColours[randomNumber];
  var audio = new Audio( 'sounds/'+randomColorChosen+'.mp3');
  audio.play();
  $("#"+randomColorChosen).fadeOut(100).fadeIn(100);
  gamePattern.push(randomColorChosen);

}

$(".btn").click(function(){
  var ele=$(this);
  var name=ele.attr("id");
  // var audio = new Audio( 'sounds/'+name+'.mp3');
  // audio.play();
  ele.addClass("pressed");
  setTimeout(function(){
    ele.removeClass("pressed");
  },70);
  playerPattern.push(name);
  checkResult(playerPattern.length-1)
});

$(document).keypress(function(e){
  if(running==false){
    running=true;
  nextSequence();
}
});
