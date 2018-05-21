
var y = ["red", "green", "blue", "yellow", "cyan", "magenta", "black", "pink", "purple", "orange"];
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


    var z = document.getElementById("woah");
    var x = z.getElementsByTagName("td");
    var list = [];
    for(i=0;i<x.length;i++){
      
      if(x[i].innerHTML.length > 3){
        if(x[i].id=="0")
          list.push(x[i]);
      }

    }

first_set = list.slice(0,9);
second_set = list.slice(10,19);
    
    for(i=0;i<list.length;i++){
      list[i].style = "background-color:red;";
      list[i].innerHTML = "woahhh";
    }

shuffle(y);
for(i=0;i<first_set.length;i++){
	first_set[i].style = "background-color:"+y[i]+";";
	first_set[i].innerHTML = y[i];
}
shuffle(y);
for(i=0;i<second_set.length;i++){
	second_set[i].style = "background-color:"+y[i]+";";
	second_set[i].innerHTML = y[i];

}

console.log("HELLO THERE");