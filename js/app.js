function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  //  document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


var clicks = 0;
var i = 1;

$('.catImg').click(function(e) {
 clicks++;
 $('#my-elem').text(clicks);
});

$('.nextImg').click(function(e) {
  i++;
  if(i >= 45){i = 1}
  $('.catImg').attr("src", "/Users/Jtvkw2/Desktop/Udacity/Cat Clicker/img/"+ i + ".jpg");
  $('.catName').text(names[i]);
});

$('.prevImg').click(function(e) {
  i--;
  if(i <= 1){i = 45}
  $('.catImg').attr("src", "/Users/Jtvkw2/Desktop/Udacity/Cat Clicker/img/"+ i + ".jpg");
  $('.catName').text(names[i]);
});

function changeCat(index){
  i = index - 1 ;
  $('.catImg').attr("src", "/Users/Jtvkw2/Desktop/Udacity/Cat Clicker/img/"+ i + ".jpg");
  $('.catName').text(names[i]);
}

var names = ["Oscar", "Max", "Tiger", "Sam", "Misty", "Simba", "Coco", "Chloe", "Lucy", "Missy",
"Bella", "Molly", "Max", "Milo", "Angel", "Tigger", "Lily", "Ashes","Charlie" ,"Poppy",
"Alfie","Sooty","Smudge","Felix","Trevor","Jasper","Max","Daisy","Millie","Chester",
"Buddy","Sammy","Oreo","Baby","Kitty","Princess","Bella","Oliver","Shadow","Misty",
"Eve","Sassy","Sam","Patch","Maggie"];
