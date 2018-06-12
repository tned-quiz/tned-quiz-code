function headBoxQuiz(q, qGp, headQuiz, rangQ){
  //remove p.typeCode if exist
  if(headQuiz.getElementsByClassName('typeCode').length!==0){
    headQuiz.removeChild(headQuiz.getElementsByClassName('typeCode')[0]);
  }

  // TITLE - Question N°
  var title = headQuiz.getElementsByClassName('title')[0];
  title.innerHTML = "Question "+rangQ;

  //GAMEPLAY
  var leadGp = headQuiz.getElementsByClassName('gameplay')[0];
  //si q.type leadGameplay = libelle name type correspondant sinon libelle default
  var typeX = (!q.type) ?
    qGp.type.findIndex(e=> e.default):
    qGp.type.findIndex(e=> e.name===q.type);
  leadGp.innerHTML = qGp.type[typeX].libelle;

  //INSTRUCTION
  var instruct = headQuiz.getElementsByClassName('instruct')[0];
  instruct.innerHTML = qGp.instruction;

  //si name...
  if(q.name){
    var lead = document.createElement('p');
    lead.className = "gameplay typeCode";
    lead.innerHTML = q.name;
    headQuiz.insertBefore(lead, instruct);
  }
}

export {headBoxQuiz};
