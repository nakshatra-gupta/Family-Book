var images = 
[
"All.JPG", "Dad.jpg", "Mom.JPG", "Me.jpg"
];
var names = ["Family Book", "Nakshatra Gupta", "Kanchan Sah Gupta", "Shashwat Gupta"];
var i = 0
function update()
{
    i++
    var number = 5
    if(i > number )
    {
        i = 0
    }
    var updated = images[i];
    var updated_n = names[i];
    document.getElementById("images").src = updated;
    document.getElementById("names").innerHTML = updated_n;
}