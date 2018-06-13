import {dragDrop} from '../../viewStyle/dragDrop';

function repDragDrop(q, qName, inpuType, divRep){
  var divDrop = document.createElement('div');
  divDrop.id = "drop_box";
  var divDrag = document.createElement('div');
  divDrag.id = "draggable_box";
  var count = 0;
  for(var x in q.reponses){
    var qRepX = q.reponses[x];
    var label = document.createElement('label');
    var input = document.createElement('input');
    //INPUT setAttribute
    input.className = "droparea";
    input.setAttribute("type", inpuType);
    input.name = qName+'_rep'+x;
    input.id = qName+'_rep'+x;
    input.readOnly = true;
    //LABEL setAttribute
    label.htmlFor = input.id;
    //Add DROP Nodes
    //si label array (input au milieu)
    if(Array.isArray(qRepX.label)){
      label.innerHTML = qRepX.label[0];
      label.appendChild(input);
      label.insertAdjacentText("beforeend", qRepX.label[1]);
    }else{
      label.innerHTML = qRepX.label;
      label.appendChild(input);
    }
    divDrop.appendChild(label);
    //DRAG Box
    for(var y in qRepX.options){
      var span = document.createElement('span');
      //SPAN setAttribute
      span.className = "draggable_span";
      span.id = "drag"+count;
      span.setAttribute("draggable", true);
      //Add DRAG Nodes
      span.innerHTML = qRepX.options[y];
      divDrag.appendChild(span);
      count++;
    }
  }
  divRep.appendChild(divDrop);
  divRep.appendChild(divDrag);
  //Style D&D REPONSES
  divRep.className += " dragDrop_rep";
  //add annim style dragDrop
  dragDrop(divDrag.getElementsByTagName('span'), q.gamplay, divRep);
}

export {repDragDrop};
