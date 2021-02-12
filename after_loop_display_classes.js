// XXX:
$(document).ready(function() {

  console.log('ready!');
  let pList = document.querySelectorAll('div.tc_price');
  console.log('pList');
  console.log(pList);
  console.log('pList.length');
  console.log(pList.length);
  console.log(pList[1].innerText);
  for (let i = 0; i < pList.length; i++) {
    if(pList[i].innerText.includes("24")){
      alert('dziala');
    document.querySelectorAll(".tc_footer")[i].classList.add("test");
    document.querySelectorAll(".tc_price")[i].classList.add("hide");

  }

  }

});
