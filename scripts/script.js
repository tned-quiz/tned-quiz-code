//getData demoCorpus
import {demoCorpus} from '../fixtures/q_demo_export';

import {qCorpusAleat} from '../control/qCorpusAleat';
//CONTENT LOAD question
import {loadQ} from './loadQ';
//CONTENT LOAD RESULTS
import {loadResult} from './loadResult';

//TIMER
import {startTimer} from '../components/startTimer';
//PROGRESS BAR
import {progressBar} from '../components/progressBar';
import {progressBarInit} from '../components/progressBar';


/********* Recupération des elmts du DOM *********/
var qBox = document.getElementsByClassName('main_quiz')[0];
// content quiz elmts
var contentQuiz = qBox.getElementsByClassName('content_box_quiz')[0];
//input Valid => Add event load new question
var validInput = qBox.getElementsByTagName('input')[0];
// barre de progression
var progBox = document.getElementsByClassName('progress')[0];


/* TIMER */
var chrono = document.getElementById('timer').getElementsByTagName('p')[0];
startTimer(chrono);


/********* Récupération des data JSON *********/
/*var requestURL = 'fixtures/q_demo.json';
getData(requestURL, data => {
  getCorpus(data);
});*/
console.log(demoCorpus);
getCorpus(demoCorpus);



/********* Fct° JS de traitement des data *********/
function getCorpus(dataObj){
  //recup object questions => corpus test
  var qObj = dataObj.questions;
  //recup object gameplay => intitulés suivant code gamplay
  var gameObj = dataObj.gameplays;

  //recup gameplays
  const gpId = gameObj.map(gp => gp.id);
  console.log(gpId);

  //fct° return q -  array questions aleatoires du corpus
  var qCorpus = qCorpusAleat(qObj.length);
  console.log(qCorpus);

  //init Index & chrg 1ere Q
  var x = 0;

  //recup data question
  var q = qObj.find(q => q.id === qCorpus[x]);
//q=qObj[6];

  //recup data gameplay correspondant
  var gp = gameObj.find(gp => gp.id === q.gameplay);
  console.log(gp);

  //empty content_box_quiz (tantque a enfant => suppr)
  while(contentQuiz.hasChildNodes()){
    contentQuiz.removeChild(contentQuiz.firstChild);
  }

  loadQ(q, gp, qBox, x+1);

  progressBarInit(progBox, qCorpus.length);

  validInput.onclick = function(){
    console.log("valid click!");
    //add control si rep..
    x++;
    q = qObj.find(q => q.id === qCorpus[x]);
    gp = gameObj.find(gp => gp.id === q.gameplay);

    //empty content_box_quiz (tantque a enfant => suppr)
    while(contentQuiz.hasChildNodes()){
      contentQuiz.removeChild(contentQuiz.firstChild);
    }

    /* PROGRESS BARRE */
    progressBar(progBox, x+1);

//test end fin q
x = qCorpus.length;
//test end time

    //tant que question & temps sinon endQuiz
    (x<qCorpus.length) ? loadQ(q, gp, qBox, x+1) : loadResult(qBox);

  }
}
