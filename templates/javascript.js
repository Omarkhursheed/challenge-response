var row_color = ["red", "green", "blue", "yellow", "cyan", "magenta", "black", "pink", "purple", "orange"];
var col_color = ["red", "green", "blue", "yellow", "cyan", "magenta", "black", "pink", "purple", "orange"];

password = "";
var z = document.getElementById("woah");
    var x = z.getElementsByTagName("td");
    var list = [];
    for(i=0;i<x.length;i++){
      
      if(x[i].innerHTML.length > 3){
        if(x[i].id=="0")
          list.push(x[i]);
      }

    }

row_set = list.splice(0,9);
col_set = list.splice(10,19);
shuffle(row_color);
shuffle(col_color);

function fill(){
  for(i=0;i<row_set.length;i++){
  row_set[i].style = "background-color:"+row_color[i]+";";
  row_set[i].innerHTML = row_color[i];
}

for(i=0;i<col_set.length;i++){
  col_set[i].style = "background-color:"+col_color[i]+";";
  col_set[i].innerHTML = col_color[i];

}
}
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


function left(){
  temp = row_color[0];
  for(int i=0;i<row_color.length-1;i++){
    row_color[i] = row_color[(i+1)%10];
  }
  row_color[9] = temp;
  fill();
}

function right(){
  temp = row_color[10];
  for(int i=1;i<row_color.length;i++){
    row_color[i] = row_color[(i-1)%10];
  }
  row_color[0] = temp;
  fill();
}

function top(){
  temp = col_color[0];
  for(int i=0;i<col_color.length;i++){
    col_color[i] = col_color[(i+1)%10];
  }
  col_color[9] = temp;
  fill();
}

function bottom(){
  temp = col_color[10];
  for(int i=1;i<col_color.length;i++){
    col_color[i] = col_color[(i-1)%10];
  }
  col_color[0] = temp;
  fill();
}



fill();

