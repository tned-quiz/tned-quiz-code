function dragDrop(dragSpan, gameplay, divRep){
  console.log("start drag!!!!");
  //start drag&drop
  for (var i=0; i<dragSpan.length; i++){
    dragSpan[i].addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text/plain", event.target.id);
    });
  }

  /* Drag & drop function */
  //add an style event when drag start & stop.. dragenter / dragleave
  /* events fired on the draggable target */
  divRep.addEventListener("dragend", function( event ) {
      // add transparency
      //event.target.style.opacity = .5;
  }, false);

  /* events fired on the drop targets */
  divRep.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  divRep.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "droparea" ) {
          event.target.style.background = "lightgray";
      }
  }, false);
  divRep.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "droparea" ) {
          event.target.style.background = "";
      }
  }, false);
  if(gameplay == "d&d"){
    divRep.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elmt to the selected drop target
      if ( event.target.className == "droparea" ) {
          event.target.style.background = "";
          var data = event.dataTransfer.getData("text");
          event.target.value = divRep.getElementById(data).innerHTML;
      }
    }, false);
  }else if(gameplay == "ord_lst"){
/*********** LISTE ORDONNEE ***********/
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
        data = divRep.getElementById(data).innerHTML;
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
}

export {dragDrop};
