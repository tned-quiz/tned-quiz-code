function repControl(repBox, qGmpl, qRep){
  console.log(repBox);
  console.log(qGmpl);

  var check = false;
  var rep;

  //suivant gameplay
  switch (qGmpl){
    // QRU
    case 'qru':
      var input = repBox.getElementsByTagName('input');
      for(var i=0; i<input.length; i++){
        console.log(input[i]);
        if(input[i].checked){
          check = true;
        }
        console.log(check);
      }

      break;
    // QRM
    case 'qrm':

      break;
    //CURSEUR
    case 'curseur' :

      break;
    //ORD_LST
    case 'ord_lst' :

      break;

    //TXT_TR
    case 'txt_tr':

    break;
  }//end switch

  if(!check){
    alert("vous devez repondre!");
    return false;
  }else{
    return true;
  }
}

export {repControl};
