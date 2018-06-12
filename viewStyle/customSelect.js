function customSelect(divRep){

//custom-select
var divCustomBox = divRep.getElementsByClassName("custom_select");
var selElmnt, divOptSel, divOptBox, divOpt;

//creat divCustom content selElmnt (tag select)
for (var i=0; i<divCustomBox.length; i++) {
  //get select
  selElmnt = divCustomBox[i].getElementsByTagName("select")[0];

  //for each element, create a new DIV that will act as the selected item:
  divOptSel = document.createElement("DIV");
  divOptSel.className = "select-selected";
  //creat empty option first (index0)
  var opt = document.createElement("OPTION");
  opt.text = "...";
  selElmnt.options.add(opt, 0);

  divOptSel.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  divCustomBox[i].appendChild(divOptSel);

  /*for each element, create a new DIV that will contain the option list:*/
  divOptBox = document.createElement("DIV");
  divOptBox.className = "select-items select-hide";

  //Add OPTIONS
  for (var j=1; j<selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    divOpt = document.createElement("DIV");
    divOpt.innerHTML = selElmnt.options[j].innerHTML;

    //add EVENT OPTION SELECTED
    divOpt.addEventListener("click", function(e) {
      console.log("divOpt Clic");
      console.log(divOpt);
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        //get parent select
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        //get option selected -> divOptSel
        h = this.parentNode.previousSibling;

        //Update divOptBox & divOptSel with selected option
        for (i=0; i<s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            //get opt selected index & add to divOptSel selected
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;

            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k=0; k<y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.className = "same-as-selected";
            break;
          }
        }
        //EVENT
        h.click();
    });
    divOptBox.appendChild(divOpt);
  }
  divCustomBox[i].appendChild(divOptBox);

  divOptSel.addEventListener("click", function(e) {
    console.log("divOptSel Clic");
    console.log(e.target);
    console.log(this);
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();

      //closeAllSelect(this);

      //toogle class (rm / add) divOptBox
      console.log(this.nextSibling);
      e.target.nextSibling.classList.toggle("select-hide");
      console.log(this.nextSibling);

      //move arrow
      e.target.classList.toggle("select-arrow-active");
      console.log(this);
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var divOptBox, divOptSel, i, arrNo = [];
  divOptBox = divRep.getElementsByClassName("select-items");
  divOptSel = divRep.getElementsByClassName("select-selected");
  for (i=0; i<divOptSel.length; i++) {
    if (elmnt == divOptSel[i]) {
      arrNo.push(i)
    } else {
      divOptSel[i].classList.remove("select-arrow-active");
    }
  }
  for (i=0; i<divOptBox.length; i++) {
    if (arrNo.indexOf(i)) {
      divOptBox[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
divRep.addEventListener("click", closeAllSelect);
}

export {customSelect};
