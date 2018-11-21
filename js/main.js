function li (string) {
    var ul = document.getElementById("test");
    var child = document.createElement("li");
    var text = document.createTextNode(string);
    child.appendChild(text);
    ul.appendChild(child);
};

for (var i = 1; i < 101; i = i*2){
    li(i);
}


