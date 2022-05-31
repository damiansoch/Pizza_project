function getReceipt() {
  var text1 = '<h3 class="textStyle">You Ordered : </h3>';
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("size");
  var selectedSize;

  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      selectedSize = sizeArray[i].value;
      text1 = text1 + selectedSize + "<br>";
    }
  }
  console.log(selectedSize);
  if (selectedSize === "Small pizza") {
    sizeTotal = 6;
  } else if (selectedSize === "Personal pizza") {
    sizeTotal = 8;
  } else if (selectedSize === "Medium pizza") {
    sizeTotal = 10;
  } else if (selectedSize === "Large pizza") {
    sizeTotal = 14;
  } else if (selectedSize === "Extra large pizza") {
    sizeTotal = 16;
  }
  runningTotal = sizeTotal;
  console.log(`${selectedSize} \u20AC ${sizeTotal}.00`);
  console.log(`size text1: ${text1}`);
  console.log(`subtotal: \u20AC${runningTotal}.00`);

  getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
  if (runningTotal != 0) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
      if (toppingArray[j].checked) {
        selectedTopping.push(toppingArray[j].value);
        console.log("selected topping item: (" + toppingArray[j].value + ")");
        text1 = text1 + toppingArray[j].value + "<br>";
      }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
      toppingTotal = toppingCount - 1;
    } else {
      toppingCount = 0;
    }
    runningTotal = runningTotal + toppingTotal;
    console.log(`total selected topping items: ${toppingCount}`);
    console.log(
      `${toppingCount} toppings -1 free topping = \u20AC${toppingTotal}.00`
    );
    console.log(`topping text1: ${text1}`);
    console.log(`Purchase Total: \u20AC${runningTotal}.00`);

    document.getElementById("showText").innerHTML = text1;
    document.getElementById(
      "totalPrice"
    ).innerHTML = `<h3 class="textStyle center total"> Total: <strong><br> \u20AC${runningTotal}.00 </strong></h3>`;
  } else {
    document.getElementById("showText").innerHTML =
      '<h3 class="textStyle select">Select Pizza Size!</h3>';
  }
}
