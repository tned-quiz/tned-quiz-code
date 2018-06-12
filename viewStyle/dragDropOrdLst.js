function dragDropOrdLst(dragSpan, gameplay, divRep){

  console.log("start drag!!!!");
  console.log(dragSpan.length);
  //start drag&drop
  for (var i=0; i<dragSpan.length; i++){
    dragSpan[i].addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text/plain", event.target.id);
    console.log("dataTransfer start");
    });
  }

  var dragged;

  /* Drag & drop function */

  /* events fired on the DRAGGABLE target */
  //add an style event when drag start & stop.. dragenter / dragleave
  divRep.addEventListener("dragstart", function(event){
    console.log(event.target);
    // store a ref. on the dragged elem
    dragged = event.target;
    console.log(dragged);
    // make it little transparent
    event.target.style.opacity = .2;
  });

  divRep.addEventListener("dragend", function( event ) {
      // reset transparency
      event.target.style.opacity = 1;
  }, false);


  /* events fired on the DROP targets */
  /*dragover => every time (a lot..) whent elmnt drag over valid dropzone*/
  divRep.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);

  /* dragenter => when elmnt drag over valid drop ONCE */
  divRep.addEventListener("dragenter", function( event ) {
    //console.log(event.target);
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "droparea" ) {
        event.target.style.backgroundColor = "var(--primary-op-color)";
      }else if (event.target.className == "draggable_span") {
        //add same active style to dropzone (parent)
        event.target.parentNode.style.backgroundColor = "var(--primary-op-color)";

        //Start move drag elmnt
        console.log(event.target.parentNode);
      }
  }, false);

  divRep.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "droparea" ) {
          event.target.style.background = "";
      }
  }, false);

  divRep.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elmt to the selected drop target
    if ( event.target.className == "droparea" ) {
      event.target.style.background = "";
      var data = event.dataTransfer.getData("text"); //id drag span
      var list_items = divRep.getElementsByClassName("draggable_span");
      var drop_span = event.target.querySelector("span"); // drop span
      var save_data = drop_span.innerHTML;

      //recup position elmt drag & drop
      for(var i=0; i<list_items.length; i++){
        //select id elemt drop -> position puis switch items...
        if(list_items[i].getAttribute("id") == drop_span.getAttribute("id")){
          console.log("drop : "+i);
          var dp = i;
        }
        if(list_items[i].getAttribute("id") == data){
          console.log(("drag : "+i));
          var dg = i;
        }
      }

      data = document.getElementById(data).innerHTML;
      drop_span.innerHTML = data;
      for(var i=1; i<=Math.abs(dg-dp); i++){
        //i contient nbre itération
        //suivant move top - down
        if(dp>dg){
          data = list_items[dp-i].innerHTML;
          list_items[dp-i].innerHTML = save_data;
        }else{
          data = list_items[i+dp].innerHTML;
          list_items[i+dp].innerHTML = save_data;
        }
        save_data = data;
      }

      //event.target.value = divRep.getElementById(data).innerHTML;
    }
  }, false);
}

export {dragDropOrdLst};
