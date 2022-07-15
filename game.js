// $("h1").css("color","red");
var userClickedPattern=[];
var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var level=0;
var a= false;
$(document).keydown(function() {
  if(a==false)
  {
    // $("h1").html("Level "+level);
    nextSequence();
    a= true;
  }
});
$(".btn").click(function(){
    var userChosenColour= $(this).attr("id");
    // var userChosenColour= this.getAttribute("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    $("#"+userChosenColour).fadeOut(100).fadeIn(100);
    check(userClickedPattern.length-1);
    // console.log(userClickedPattern.length);
    // console.log(userClickedPattern);
});

function check(n)
{
  if(gamePattern[n] === userClickedPattern[n])
  {
    if(userClickedPattern.length === gamePattern.length)
    {
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else
    fuckoff();

  // { k++;
  //
  //   if(n===gamePattern.length)
  //   { setTimeout(function(){
  //     nextSequence();
  //   },1000);
  //
  //   }
  //
  // }
};


function nextSequence(){
  userClickedPattern=[];

  $("h1").text("Level "+level);
  level++;
  var randomNumber= Math.floor((Math.random()*4));
  var randomChosenColour= buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

};



function playSound(name){
  var audio= new Audio("sounds/"+name+".mp3");
  audio.play();
};


function fuckoff()
{ var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  $("h1").text("Game over bitch. Press any key to restart.");
  setTimeout(function(){
    $("body").removeClass("game-over");
   },1000);

  level=0;
  gamePattern=[];

  a=false;
};
