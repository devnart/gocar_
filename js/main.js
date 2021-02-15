function getType() {
  var type = document.getElementById("type").value;
  switch (type) {
    case "Select Type":
      var ele = document.getElementsByName("boit");
      for (var i = 0; i < ele.length; i++) ele[i].checked = false;
  }
}
function clear() {
  var ele = document.getElementsByName("boit");
  console.log(ele);
  for (var i = 0; i < ele.length; i++){
    ele[i].checked = false;
  } 
}
