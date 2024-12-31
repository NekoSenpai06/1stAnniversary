function display() {
    var x = document.querySelector("body");
    var y = document.getElementById("page");
    var z = document.getElementById("main");
    var song = new Audio("wave to earth - seasons.mp3")
    x.style = "background-image: url('image.png')";
    y.style = "display: none";
    z.style = "display: inline";
    song.play();
}