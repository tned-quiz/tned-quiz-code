import {dragDropOrdLst} from '../../viewStyle/dragDropOrdLst';

function repOrdLst(q, divRep){
  var ordListe = document.createElement('ol');
  for (var x in q.reponses){
    var itemListe = document.createElement('li');
    var divDrop = document.createElement('div');
    divDrop.className = "droparea";
    //SPAN DRAGGABLE
    var spanDrag = document.createElement('span');
    spanDrag.className = "draggable_span";
    spanDrag.id = "drag"+x;
    spanDrag.setAttribute("draggable", true);
    //Add Nodes
    spanDrag.innerHTML = q.reponses[x].label;
    divDrop.appendChild(spanDrag);
    itemListe.appendChild(divDrop);
    ordListe.appendChild(itemListe);
  }
  divRep.appendChild(ordListe);
  //add annim style dragDrop
  dragDropOrdLst(divRep.getElementsByClassName('draggable_span'), q.gamplay, divRep);
}

export {repOrdLst};
