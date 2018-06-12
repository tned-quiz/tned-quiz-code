// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({22:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var demoCorpus = {
  "gameplays": [{
    "id": "qru",
    "type": [{ "name": "radio", "default": true, "libelle": "Question Vrai - Faux" }, { "name": "img_btn", "libelle": "Selectionner l'image" }],
    "instruction": "Sélectionner la bonne réponse"
  }, {
    "id": "qrm",
    "type": [{ "name": "checkbox", "default": true, "libelle": "Question à choix multiple" }, { "name": "img_btn", "libelle": "Selectionner les images" }],
    "instruction": "Sélectionner la ou les bonnes réponses"
  }, {
    "id": "txt_tr",
    "type": [{ "name": "select", "default": true, "libelle": "Text à trou" }, { "name": "d&d", "libelle": "Drag and Drop" }],
    "instruction": "Trouver les mots manquants"
  }, {
    "id": "curseur",
    "type": [{ "name": "range", "default": true, "libelle": "Slider" }],
    "instruction": "Déplacer le curseur"
  }, {
    "id": "ord_lst",
    "type": [{ "name": "d&d", "default": true, "libelle": "Remettre dans l'ordre" }],
    "instruction": "Maintenir cliqué l'élément et déplacer"
  }, {
    "id": "assoc",
    "type": [{ "libelle": "Association" }],
    "instruction": "Relier entre eux"
  }],
  "categorie": ["connaissances", "compréhension", "comportement"],
  "questions": [{
    "id": 1,
    "gameplay": "qrm",
    "categorie": "compréhension",
    "intitules": "La voiture jaune est bien placée pour :",
    "assets": {
      "type": "img",
      "src": "Question1.jpg"
    },
    "reponses": [{ "label": "prendre la première sortie", "value": true }, { "label": "prendre la troisième sortie", "value": false }, { "label": "aller tout droit", "value": true }, { "label": "aller à Lyon", "value": true }]
  }, {
    "id": 2,
    "gameplay": "qru",
    "categorie": "compréhension",
    "intitules": "La voiture jaune est-elle bien placée pour tourner à gauche ?",
    "assets": {
      "type": "img",
      "src": "Question2.jpg"
    },
    "reponses": [{ "label": "non", "value": true }, { "label": "oui", "value": false }]
  }, {
    "id": 3,
    "gameplay": "qru",
    "categorie": "compréhension",
    "intitules": "On est le 17 du mois, peut-on stationner du côté de la rue où le numéro des maison est impair ?",
    "assets": {
      "type": "img",
      "src": "Question3.png"
    },
    "reponses": [{ "label": "faux", "value": true }, { "label": "vrai", "value": false }]
  }, {
    "id": 4,
    "gameplay": "curseur",
    "categorie": "connaissance",
    "intitules": "Combien de points peut-on perdre sur son permis de conduire pour avoir stationner ou circuler sur la bande d'arrêt d’urgence ?",
    "reponses": {
      "true": 3,
      "min": 0,
      "max": 12,
      "step": 1
    }
  }, {
    "id": 5,
    "gameplay": "curseur",
    "categorie": "connaissance",
    "intitules": "Combien de points risque t-on de perdre sur son permis lorsque l’on se gare à contresens de la circulation ? ",
    "reponses": {
      "true": 0,
      "min": 0,
      "max": 12,
      "step": 1
    }
  }, {
    "id": 6,
    "gameplay": "qrm",
    "categorie": "compréhension",
    "intitules": "Que doit faire le conducteur de la voiture jaune ?",
    "assets": {
      "type": "img",
      "src": "Question6.jpg"
    },
    "reponses": [{ "label": "mettre le pied face au frein", "value": true }, { "label": "observer attentivement la voiture bleue", "value": true }, { "label": "maintenir mon allure", "value": false }, { "label": "etablir un contact visue", "value": true }]
  }, {
    "id": 7,
    "gameplay": "ord_lst",
    "categorie": "connaissance",
    "intitules": "Que faut-il faire avant d’engager un dépassement sur voie rapide ?",
    "reponses": [{ "label": "observer dans son rétroviseur intérieur", "value": 1 }, { "label": "observer dans son rétroviseur extérieur gauche", "value": 2 }, { "label": "observer dans son angle mort gauche", "value": 3 }, { "label": "activer son clignotant", "value": 4 }, { "label": "passer sur la voie de gauche", "value": 5 }, { "label": "maintenir une allure soutenue", "value": 6 }, { "label": "voir le véhicule doublé en entier dans son rétroviseur intérieur", "value": 7 }, { "label": "se rabattre à droite sans coup de volant", "value": 8 }]
  }, {
    "id": 8,
    "gameplay": "ord_lst",
    "categorie": "compréhension",
    "intitules": "Comment le conducteur de la voiture orange doit-il se comporter dans cette situation ?",
    "assets": {
      "type": "img",
      "src": "Question8.jpg"
    },
    "reponses": [{ "label": "observer dans son rétroviseur intérieur", "value": 1 }, { "label": "observer dans son rétroviseur extérieur droit", "value": 2 }, { "label": "observer son angle mort droit", "value": 3 }, { "label": "mettre son clignotant", "value": 4 }, { "label": "s'arrêter pour laisser passer le cycliste", "value": 5 }, { "label": "tourner une fois le cycliste passé", "value": 6 }]
  }, {
    "id": 9,
    "gameplay": "qrm",
    "type": "img_btn",
    "categorie": "connaissance",
    "intitules": "Quels usagers n’ont pas le droit de circuler sur la voie rapide ?",
    "assets": {
      "type": "dossier",
      "src": "Question9/"
    },
    "reponses": [{ "img": "interdit velo", "src": "interditVelo@3x.png", "value": true }, { "img": "interdit bus", "src": "interditBus@3x.png", "value": false }, { "img": "interdit marchandises", "src": "interditMarchandises@3x.png", "value": false }, { "img": "interdit moto", "src": "interditMoto@3x.png", "value": false }, { "img": "interdit tracteur", "src": "interditTracteur@3x.png", "value": true }, { "img": "interdit mobylette", "src": "interditMobylette@3x.png", "value": true }, { "img": "interdit pieton", "src": "interditPieton@3x.png", "value": true }, { "img": "interdit 12t", "src": "interdit12t@3x.png", "value": false }, { "img": "interdit caravane", "src": "interditCaravane@3x.png", "value": false }]
  }, {
    "id": 10,
    "gameplay": "qrm",
    "type": "img_btn",
    "categorie": "connaissance",
    "intitules": "Quel panneaux peut on rencontrer dans une zone de stationnement payant ?",
    "assets": {
      "type": "dossier",
      "src": "Question10/"
    },
    "reponses": [{ "img": "arrêt/stationnement interdit", "src": "ASinterdit@3x.png", "value": false }, { "img": "arrêt/stationnement interdit sauf..", "src": "ASinterditSauf@3x.png", "value": true }, { "img": "stationnement interdit", "src": "Sinterdit@3x.png", "value": false }, { "img": "zone stationnement interdit", "src": "SinterditZone@3x.png", "value": false }, { "img": "fin zone stationnement interdit", "src": "SinterditZoneFin@3x.png", "value": false }, { "img": "zone stationnement limité par disque", "src": "SlimitéDisqueZone@3x.png", "value": false }, { "img": "fin zone stationnement limité par disque", "src": "SlimitéDisqueZoneFin@3x.png", "value": false }, { "img": "zone stationnement payant", "src": "SpayantZone@3x.png", "value": true }, { "img": "fin zone stationnement payant", "src": "SpayantZoneFin@3x.png", "value": true }]
  }, {
    "id": 11,
    "gameplay": "qru",
    "categorie": "connaissance",
    "name": "Questions type code",
    "intitules": ["L’éco-conduite a des effets positifs, en terme de sécurité routière : ", "en terme de confort pour le conducteur et les passagers : "],
    "assets": {
      "type": "img",
      "src": "Question11.png"
    },
    "reponses": [[{ "label": "oui", "value": true }, { "label": "non", "value": false }], [{ "label": "oui", "value": true }, { "label": "non", "value": false }]]
  }, {
    "id": 12,
    "gameplay": "qrm",
    "categorie": "compréhension",
    "name": "Question type code",
    "intitules": "Sur cette route, je peux circuler à",
    "assets": {
      "type": "img",
      "src": "Question12.png"
    },
    "reponses": [{ "label": "90 km/h", "value": true }, { "label": "100 km/h", "value": true }, { "label": "110 km/h", "value": true }, { "label": "130 km/h", "value": false }]
  }, {
    "id": 13,
    "gameplay": "txt_tr",
    "categorie": "connaissance",
    "intitules": "A quoi servent les voies réservées ?",
    "assets": {
      "type": "img",
      "src": "Question13.jpg"
    },
    "reponses": [{ "label": ["Elles servent à délimiter l’espace de chaque ", " de la route;"],
      "options": ["usager", "partie"],
      "value": "usager" }, { "label": ["et ainsi mieux ", " . "],
      "options": ["cohabiter", "circuler"],
      "value": "cohabiter" }, { "label": "Il est donc important que chacun ",
      "options": ["respect", "ignore", "observe"],
      "value": "respect" }]
  }, {
    "id": 14,
    "gameplay": "txt_tr",
    "categorie": "connaissance",
    "intitules": "Quels sont les avantages du covoiturage ? ",
    "reponses": [{ "label": ["Le covoiturage ", " le nombre de véhicules  en circulation"],
      "options": ["diminue", "augmente"],
      "value": "diminue" }, { "label": ["et par conséquent réduit les rejets de ", ", "],
      "options": ["CO2", "H2O", "SO2"],
      "value": "CO2" }, { "label": "le risque d’accident et les nuisances ",
      "options": ["sonores", "visuelles"],
      "value": "sonores" }]
  }, {
    "id": 15,
    "gameplay": "qrm",
    "categorie": "compréhension",
    "intitules": "Quelle erreur commet le conducteur de la voiture jaune ?",
    "assets": {
      "type": "video",
      "src": "Question15.mp4",
      "alt": "vidéo croisement / obstacle sur la chaussée"
    },
    "reponses": [{ "label": "il oublie de mettre son clignotant", "value": false }, { "label": "il ne respecte pas les règles de priorité", "value": true }, { "label": "il roule trop vite", "value": false }, { "label": "il circule à contresens", "value": false }]
  }, {
    "id": 16,
    "gameplay": "qrm",
    "categorie": "compréhension",
    "intitules": "Cette manoeuvre est:",
    "assets": {
      "type": "video",
      "src": "Question16.mp4",
      "alt": "Vidéo créneau stationnement à contresens"
    },
    "reponses": [{ "label": "autorisée", "value": false }, { "label": "interdite", "value": true }, { "label": "passible d’une amende de 35€", "value": true }, { "label": "passible d’une amende de 135€", "value": false }]
  }]
};

exports.demoCorpus = demoCorpus;
},{}],18:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//Fonction de recuperation d'une question du Corpus
function qCorpusAleat(nbrQ) {
  //nbreQ demo = 16
  //temp (recup nbre determiner de Q aléatoires du corpus...)

  //init empty array length nbre de questions..
  var qId = [];
  //do tant que arrayId non rempli
  while (qId.length < nbrQ) {
    //recup Id aléatoire
    var aleatId = getRandomQ(nbrQ);
    //vreif si id déja présent dans array, sinon on l'ajoute
    if (!qId.includes(aleatId)) {
      qId.push(aleatId);
    }
  }
  return qId.map(function (q) {
    return q + 1;
  }); //+1 pour id de 1 à 16
}

//retourn nbre aleat < max
function getRandomQ(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

exports.qCorpusAleat = qCorpusAleat;
},{}],26:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function headBoxQuiz(q, qGp, headQuiz, rangQ, nbreQ) {

  // TITLE - Question N°
  var title = headQuiz.getElementsByClassName('title')[0];
  title.innerHTML = "Question " + rangQ + " / " + nbreQ;

  //GAMEPLAY
  var leadGp = headQuiz.getElementsByClassName('gameplay')[0];
  //si q.type leadGameplay = libelle name type correspondant sinon libelle default
  var typeX = !q.type ? qGp.type.findIndex(function (e) {
    return e.default;
  }) : qGp.type.findIndex(function (e) {
    return e.name === q.type;
  });
  leadGp.innerHTML = qGp.type[typeX].libelle;

  //INSTRUCTION
  var instruct = headQuiz.getElementsByClassName('instruct')[0];
  instruct.innerHTML = qGp.instruction;
}

exports.headBoxQuiz = headBoxQuiz;
},{}],27:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function intituleQuiz(intitule, key) {
  var intituleDiv = document.createElement('div');
  intituleDiv.className = "intitules";
  var para = document.createElement('p');
  para.innerHTML = key != null ? intitule[key] : intitule;
  intituleDiv.appendChild(para);

  return intituleDiv;
}

exports.intituleQuiz = intituleQuiz;
},{}],28:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function assetQuiz(q, url, key) {
  if (key) {
    //temp
    return;
  } else {
    var divAsset = document.createElement('div');
    divAsset.className = "assets";
    var asseType = q.assets.type;
    //url de l'asset
    var urlAsset = url + asseType + '/';
    var asset = document.createElement(asseType);
    //si img
    if (asseType == "img") {
      asset.alt = q.intitules;
      asset.src = urlAsset + q.assets.src;
    }
    //si video...
    if (asseType == "video") {
      asset.controls = true;
      var source = document.createElement('source');
      source.src = urlAsset + q.assets.src;
      source.type = "video/mp4";
      asset.innerHTML = "Video non pris en charge..." + "<br/>" + q.assets.alt;
      asset.insertBefore(source, asset.childNodes[asset.childNodes.length - 1]);
    }
    //assign asset
    divAsset.appendChild(asset);

    return divAsset;
  }
}

exports.assetQuiz = assetQuiz;
},{}],35:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function imgCheck(imgClic, qType) {

  //get default css border
  var imgBorder = imgClic[0].style.border;
  var imgBgColor = imgClic[0].style.backgroundColor;

  //init borderColor &bgColor
  for (var x = 0; x < imgClic.length; x++) {
    imgClic[x].style.border = imgBorder;
    imgClic[x].style.backgroundColor = imgBgColor;
  }

  //Toogle border suivant gameplay qru / qrm
  for (var i = 0; i < imgClic.length; i++) {
    imgClic[i].addEventListener("click", function (ev) {

      //Si QRU -> on toogle borders & bg
      if (qType === "qru") {
        for (var x = 0; x < imgClic.length; x++) {
          imgClic[x].style.border = imgBorder;
          imgClic[x].style.backgroundColor = imgBgColor;
        }
        //add border & bg select
        ev.target.style.border = ".1rem solid var(--primary-color)";
        ev.target.style.backgroundColor = ".1rem solid var(--primary-color)";
      }

      //Si QRM -> on retire border au click
      if (qType === "qrm") {
        if (ev.target.style.backgroundColor === "var(--primary-color)") {
          ev.target.style.border = imgBorder;
          ev.target.style.backgroundColor = imgBgColor;
        } else {
          //add select
          ev.target.style.border = ".1rem solid var(--primary-color)";
          ev.target.style.backgroundColor = "var(--primary-color)";
        }
      }
    });
  }
}

exports.imgCheck = imgCheck;
},{}],36:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function labelCheck(divRep, qType) {
  var inputClic = divRep.getElementsByTagName('input');

  //get default css style elmnt
  var label = divRep.getElementsByTagName('label')[0];
  var checkmark = label.getElementsByClassName("checkmark")[0];
  var lbBgColor = label.style.backgroundColor;
  var lbBorder = label.style.border;
  var chkmBgColor = checkmark.style.backgroundColor;
  var chkmBorder = checkmark.style.border;

  for (var i = 0; i < inputClic.length; i++) {

    inputClic[i].addEventListener("click", function (ev) {
      label = ev.target.parentNode;
      checkmark = label.getElementsByClassName("checkmark")[0];

      //Si QRU -> on toogle
      if (qType === "qru") {
        var labels = divRep.getElementsByTagName('label');
        var checkmarks = divRep.getElementsByClassName('checkmark');

        //Init default style
        for (var x = 0; x < labels.length; x++) {
          labels[x].style.backgroundColor = lbBgColor;
          labels[x].style.border = lbBorder;
          checkmarks[x].style.backgroundColor = chkmBgColor;
          checkmarks[x].style.border = chkmBorder;
        }
        //add bg select
        label.style.backgroundColor = "var(--primary-color)";
        //label.style.border =
        checkmark.style.backgroundColor = "var(--main-ft-color)";
        //checkmark.style.border
      }

      //Si QRM -> on rm active color au click
      if (qType === "qrm") {
        if (label.style.backgroundColor == "var(--primary-color)") {
          label.style.backgroundColor = lbBgColor;
          checkmark.style.backgroundColor = chkmBgColor;
        } else {
          //add bg select
          label.style.backgroundColor = "var(--primary-color)";
          checkmark.style.backgroundColor = "var(--main-ft-color)";
        }
      }
    });
  }
}

exports.labelCheck = labelCheck;
},{}],38:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function labelCheckTypeC(divRep, qType, key) {

  var inputClic = divRep.getElementsByTagName('input');

  //get default css style elmnt
  var label = divRep.getElementsByTagName('label')[0];
  var checkmark = label.getElementsByClassName("checkmark")[0];
  var lbBgColor = label.style.backgroundColor;
  var lbBorder = label.style.border;
  var chkmBgColor = checkmark.style.backgroundColor;
  var chkmBorder = checkmark.style.border;

  for (var i = 0; i < inputClic.length; i++) {

    inputClic[i].addEventListener("click", function (ev) {
      var label = ev.target.parentNode;
      var checkmark = label.getElementsByClassName("checkmark")[0];

      //Si QRU -> on toogle
      if (qType === "qru") {
        var labels;
        var checkmarks;

        //si typeCode...
        if (key !== null) {
          var repKey = divRep.parentNode.getElementsByClassName('reponses')[key];
          labels = repKey.getElementsByTagName('label');
          checkmarks = repKey.getElementsByClassName('checkmark');
        } else {
          labels = divRep.getElementsByTagName('label');
          checkmarks = divRep.getElementsByClassName('checkmark');
        }

        //Init default style
        for (var x = 0; x < labels.length; x++) {
          labels[x].style.backgroundColor = lbBgColor;
          checkmarks[x].style.backgroundColor = chkmBgColor;
        }
        //add bg select
        label.style.backgroundColor = "var(--primary-color)";
        checkmark.style.backgroundColor = "var(--main-ft-color)";
      }

      //Si QRM -> on rm active color au click
      if (qType === "qrm") {
        if (label.style.backgroundColor == "var(--primary-color)") {
          label.style.backgroundColor = lbBgColor;
          checkmark.style.backgroundColor = chkmBgColor;
        } else {
          //add bg select
          label.style.backgroundColor = "var(--primary-color)";
          checkmark.style.backgroundColor = "var(--main-ft-color)";
        }
      }
    });
  }
}

exports.labelCheckTypeC = labelCheckTypeC;
},{}],31:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repQr = undefined;

var _imgCheck = require('../../viewStyle/imgCheck');

var _labelCheck = require('../../viewStyle/labelCheck');

var _labelCheckTypeC = require('../../viewStyle/labelCheckTypeC');

function repQr(q, qName, urlImg, inpuType, key, divRep) {
  //si TypeCode modif qName pour id input htmlFor
  qName = key !== null ? qName + "." + key : qName;
  //si Q multiple...Type code
  for (var x in key !== null ? q.reponses[key] : q.reponses) {

    //INPUT setAttribute
    var input = document.createElement('input');
    input.setAttribute("type", inpuType);
    input.name = q.gameplay == 'qrm' ? qName + '[]' : qName;
    input.value = qName + '_rep' + x;
    input.id = qName + '_rep' + x;

    //LABEL setAttribute
    var label = document.createElement('label');
    label.htmlFor = input.id;

    //si type IMG_BTN
    if (q.type && q.type === "img_btn") {
      label.className = "labelImgBox";

      var imgX = q.reponses[x];
      var imgSrc = urlImg + q.assets.src;

      //INPUT setAttribute
      input.className = "rad_img";
      input.value = imgX.img;

      //IMG setAttribute
      var img = document.createElement('img');
      img.className = "img_btn";
      img.src = imgSrc + imgX.src;
      img.alt = imgX.img;
      img.height = "114";
      img.width = "114";

      //label NODES ImgBtn
      label.appendChild(img);
    } else {
      label.className = "labelBox";

      //span attr ->rm input default style
      var span = document.createElement('span');
      span.className = "checkmark";

      //label NODES QR
      var labelTxt = (key !== null ? q.reponses[key] : q.reponses)[x].label;
      labelTxt = labelTxt.substr(0, 1).toUpperCase() + labelTxt.substr(1, labelTxt.length);
      label.innerHTML = labelTxt;
      //label.innerText.charAt(0).toUpperCase();
      label.insertBefore(span, label.firstChild);
    }

    //label NODES
    label.insertBefore(input, label.firstChild);
    //div reponse Nodes
    divRep.appendChild(label);
  }

  var tagCheck;
  if (q.type === "img_btn") {
    //style GRID divRep si q gameplay= imageClick -> type dossier
    divRep.className += " clickImg_rep";

    //def anim imgCheck
    (0, _imgCheck.imgCheck)(divRep.getElementsByTagName('img'), q.gameplay);
  } else {
    if (key === null) {
      //def anim labelChecked
      (0, _labelCheck.labelCheck)(divRep, q.gameplay);
    } else {
      (0, _labelCheckTypeC.labelCheckTypeC)(divRep, q.gameplay, key);
    }
  }
}

exports.repQr = repQr;
},{"../../viewStyle/imgCheck":35,"../../viewStyle/labelCheck":36,"../../viewStyle/labelCheckTypeC":38}],39:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function cursorValue(curseur, count) {
  /* add txt value for type range */
  count.textContent = curseur.value;

  curseur.oninput = function () {
    count.textContent = curseur.value;
  };
}

exports.cursorValue = cursorValue;
},{}],32:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repCurseur = undefined;

var _cursorValue = require('../../viewStyle/cursorValue');

function repCurseur(q, qName, inpuType, divRep) {
  var input = document.createElement('input');
  var br = document.createElement('br');
  var span = document.createElement('span');
  span.className = "crs_count";
  //input Attr
  input.setAttribute("type", inpuType);
  input.id = qName;
  input.name = qName;
  input.defaultValue = q.reponses.min;
  input.min = q.reponses.min;
  input.max = q.reponses.max;
  input.step = q.reponses.step;
  //div reponse Nodes
  divRep.appendChild(input);
  divRep.appendChild(br);
  divRep.appendChild(span);
  //add anim cursorValue
  (0, _cursorValue.cursorValue)(input, span);
}

exports.repCurseur = repCurseur;
},{"../../viewStyle/cursorValue":39}],37:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function dragDropOrdLst(dragSpan, gameplay, divRep) {

  //start drag&drop
  for (var i = 0; i < dragSpan.length; i++) {
    dragSpan[i].addEventListener("dragstart", function (event) {
      event.dataTransfer.setData("text/plain", event.target.id);
      console.log("dataTransfer start");
    });
  }

  var dragged;

  /* Drag & drop function */

  /* events fired on the DRAGGABLE target */
  //add an style event when drag start & stop.. dragenter / dragleave
  divRep.addEventListener("dragstart", function (event) {
    console.log(event.target);
    // store a ref. on the dragged elem
    dragged = event.target;
    console.log(dragged);
    // make it little transparent
    event.target.style.opacity = .2;
  });

  divRep.addEventListener("dragend", function (event) {
    // reset transparency
    event.target.style.opacity = 1;
  }, false);

  /* events fired on the DROP targets */
  /*dragover => every time (a lot..) whent elmnt drag over valid dropzone*/
  divRep.addEventListener("dragover", function (event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);

  /* dragenter => when elmnt drag over valid drop ONCE */
  divRep.addEventListener("dragenter", function (event) {
    //console.log(event.target);
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "droparea") {
      event.target.style.backgroundColor = "var(--primary-op-color)";
    } else if (event.target.className == "draggable_span") {
      //add same active style to dropzone (parent)
      event.target.parentNode.style.backgroundColor = "var(--primary-op-color)";

      //Start move drag elmnt
      console.log(event.target.parentNode);
    }
  }, false);

  divRep.addEventListener("dragleave", function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "droparea") {
      event.target.style.background = "";
    }
  }, false);

  divRep.addEventListener("drop", function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elmt to the selected drop target
    if (event.target.className == "droparea") {
      event.target.style.background = "";
      var data = event.dataTransfer.getData("text"); //id drag span
      var list_items = divRep.getElementsByClassName("draggable_span");
      var drop_span = event.target.querySelector("span"); // drop span
      var save_data = drop_span.innerHTML;

      //recup position elmt drag & drop
      for (var i = 0; i < list_items.length; i++) {
        //select id elemt drop -> position puis switch items...
        if (list_items[i].getAttribute("id") == drop_span.getAttribute("id")) {
          console.log("drop : " + i);
          var dp = i;
        }
        if (list_items[i].getAttribute("id") == data) {
          console.log("drag : " + i);
          var dg = i;
        }
      }

      data = document.getElementById(data).innerHTML;
      drop_span.innerHTML = data;
      for (var i = 1; i <= Math.abs(dg - dp); i++) {
        //i contient nbre itération
        //suivant move top - down
        if (dp > dg) {
          data = list_items[dp - i].innerHTML;
          list_items[dp - i].innerHTML = save_data;
        } else {
          data = list_items[i + dp].innerHTML;
          list_items[i + dp].innerHTML = save_data;
        }
        save_data = data;
      }

      //event.target.value = divRep.getElementById(data).innerHTML;
    }
  }, false);
}

exports.dragDropOrdLst = dragDropOrdLst;
},{}],33:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repOrdLst = undefined;

var _dragDropOrdLst = require('../../viewStyle/dragDropOrdLst');

function repOrdLst(q, divRep) {
  var ordListe = document.createElement('ol');
  for (var x in q.reponses) {
    var itemListe = document.createElement('li');
    var divDrop = document.createElement('div');
    divDrop.className = "droparea";
    //SPAN DRAGGABLE
    var spanDrag = document.createElement('span');
    spanDrag.className = "draggable_span";
    spanDrag.id = "drag" + x;
    spanDrag.setAttribute("draggable", true);
    //Add Nodes
    spanDrag.innerHTML = q.reponses[x].label;
    divDrop.appendChild(spanDrag);
    itemListe.appendChild(divDrop);
    ordListe.appendChild(itemListe);
  }
  divRep.appendChild(ordListe);
  //add annim style dragDrop
  (0, _dragDropOrdLst.dragDropOrdLst)(divRep.getElementsByClassName('draggable_span'), q.gamplay, divRep);
}

exports.repOrdLst = repOrdLst;
},{"../../viewStyle/dragDropOrdLst":37}],42:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function dragDrop(dragSpan, gameplay, divRep) {
  console.log("start drag!!!!");
  //start drag&drop
  for (var i = 0; i < dragSpan.length; i++) {
    dragSpan[i].addEventListener("dragstart", function (event) {
      event.dataTransfer.setData("text/plain", event.target.id);
    });
  }

  /* Drag & drop function */
  //add an style event when drag start & stop.. dragenter / dragleave
  /* events fired on the draggable target */
  divRep.addEventListener("dragend", function (event) {
    // add transparency
    //event.target.style.opacity = .5;
  }, false);

  /* events fired on the drop targets */
  divRep.addEventListener("dragover", function (event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  divRep.addEventListener("dragenter", function (event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "droparea") {
      event.target.style.background = "lightgray";
    }
  }, false);
  divRep.addEventListener("dragleave", function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "droparea") {
      event.target.style.background = "";
    }
  }, false);
  if (gameplay == "d&d") {
    divRep.addEventListener("drop", function (event) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elmt to the selected drop target
      if (event.target.className == "droparea") {
        event.target.style.background = "";
        var data = event.dataTransfer.getData("text");
        event.target.value = divRep.getElementById(data).innerHTML;
      }
    }, false);
  } else if (gameplay == "ord_lst") {
    /*********** LISTE ORDONNEE ***********/
    divRep.addEventListener("drop", function (event) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elmt to the selected drop target
      if (event.target.className == "droparea") {
        event.target.style.background = "";
        var data = event.dataTransfer.getData("text"); //id drag span
        var list_items = divRep.getElementsByClassName("draggable_span");
        var drop_span = event.target.querySelector("span"); // drop span
        var save_data = drop_span.innerHTML;

        //recup position elmt drag & drop
        for (var i = 0; i < list_items.length; i++) {
          //select id elemt drop -> position puis switch items...
          if (list_items[i].getAttribute("id") == drop_span.getAttribute("id")) {
            console.log("drop : " + i);
            var dp = i;
          }
          if (list_items[i].getAttribute("id") == data) {
            console.log("drag : " + i);
            var dg = i;
          }
        }
        data = divRep.getElementById(data).innerHTML;
        drop_span.innerHTML = data;
        for (var i = 1; i <= Math.abs(dg - dp); i++) {
          //i contient nbre itération
          //suivant move top - down
          if (dp > dg) {
            data = list_items[dp - i].innerHTML;
            list_items[dp - i].innerHTML = save_data;
          } else {
            data = list_items[i + dp].innerHTML;
            list_items[i + dp].innerHTML = save_data;
          }
          save_data = data;
        }

        //event.target.value = divRep.getElementById(data).innerHTML;
      }
    }, false);
  }
}

exports.dragDrop = dragDrop;
},{}],41:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repDragDrop = undefined;

var _dragDrop = require('../../viewStyle/dragDrop');

function repDragDrop(q, qName, inpuType, divRep) {
  var divDrop = document.createElement('div');
  divDrop.id = "drop_box";
  var divDrag = document.createElement('div');
  divDrag.id = "draggable_box";
  var count = 0;
  for (var x in q.reponses) {
    var qRepX = q.reponses[x];
    var label = document.createElement('label');
    var input = document.createElement('input');
    //INPUT setAttribute
    input.className = "droparea";
    input.setAttribute("type", inpuType);
    input.name = qName + '_rep' + x;
    input.id = qName + '_rep' + x;
    input.readOnly = true;
    //LABEL setAttribute
    label.htmlFor = input.id;
    //Add DROP Nodes
    //si label array (input au milieu)
    if (Array.isArray(qRepX.label)) {
      label.innerHTML = qRepX.label[0];
      label.appendChild(input);
      label.insertAdjacentText("beforeend", qRepX.label[1]);
    } else {
      label.innerHTML = qRepX.label;
      label.appendChild(input);
    }
    divDrop.appendChild(label);
    //DRAG Box
    for (var y in qRepX.options) {
      var span = document.createElement('span');
      //SPAN setAttribute
      span.className = "draggable_span";
      span.id = "drag" + count;
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
  (0, _dragDrop.dragDrop)(divDrag.getElementsByTagName('span'), q.gamplay, divRep);
}

exports.repDragDrop = repDragDrop;
},{"../../viewStyle/dragDrop":42}],40:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function customSelect(divRep) {

  //custom-select
  var divCustomBox = divRep.getElementsByClassName("custom_select");
  var selElmnt, divOptSel, divOptBox, divOpt;

  //creat divCustom content selElmnt (tag select)
  for (var i = 0; i < divCustomBox.length; i++) {
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
    for (var j = 1; j < selElmnt.length; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      divOpt = document.createElement("DIV");
      divOpt.innerHTML = selElmnt.options[j].innerHTML;

      //add EVENT OPTION SELECTED
      divOpt.addEventListener("click", function (e) {
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
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            //get opt selected index & add to divOptSel selected
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;

            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
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

    divOptSel.addEventListener("click", function (e) {
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
    var divOptBox,
        divOptSel,
        i,
        arrNo = [];
    divOptBox = divRep.getElementsByClassName("select-items");
    divOptSel = divRep.getElementsByClassName("select-selected");
    for (i = 0; i < divOptSel.length; i++) {
      if (elmnt == divOptSel[i]) {
        arrNo.push(i);
      } else {
        divOptSel[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < divOptBox.length; i++) {
      if (arrNo.indexOf(i)) {
        divOptBox[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  divRep.addEventListener("click", closeAllSelect);
}

exports.customSelect = customSelect;
},{}],34:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repTxtTr = undefined;

var _repDragDrop = require('./repDragDrop');

var _customSelect = require('../../viewStyle/customSelect');

function repTxtTr(q, qName, inpuType, divRep) {
  //si type Drag & drop
  if (q.type && q.type === "d&d") {
    inpuType = "text";
    (0, _repDragDrop.repDragDrop)(q, qName, inpuType, divRep);
  } else {
    //sinon SELECT
    for (var x in q.reponses) {
      var select = document.createElement('select');
      var qRepX = q.reponses[x];

      //SELECT
      select.id = qName + "_rep" + x;
      select.name = qName + "_rep" + x;
      for (var y in qRepX.options) {
        //OPTIONS
        var option = document.createElement('option');
        option.text = qRepX.options[y];
        option.value = y;
        select.add(option);
      }
      select.selectedIndex = -1; //default select empty
      select.setAttribute("required", true);

      //DIVCUSTOM
      var divCustom = document.createElement('div');
      divCustom.className = "custom_select";
      divCustom.appendChild(select);

      //LABEL
      var label = document.createElement('label');
      label.htmlFor = select.id;
      //si label array (input au milieu)
      if (Array.isArray(qRepX.label)) {
        label.innerHTML = qRepX.label[0];
        label.appendChild(divCustom);
        label.insertAdjacentText("beforeend", qRepX.label[1]);
      } else {
        label.innerHTML = qRepX.label;
        label.appendChild(divCustom);
      }
      //DIVREP ADD NODES
      divRep.appendChild(label);
    }
    //customSelect(divRep);
  } //end toogle d&d select
}

exports.repTxtTr = repTxtTr;
},{"./repDragDrop":41,"../../viewStyle/customSelect":40}],29:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reponsesQuiz = undefined;

var _repQr = require('./repGameplay/repQr');

var _repCurseur = require('./repGameplay/repCurseur');

var _repOrdLst = require('./repGameplay/repOrdLst');

var _repTxtTr = require('./repGameplay/repTxtTr');

function reponsesQuiz(q, urlImg, key) {
  var qName = q.gameplay + q.id;

  var divRep = document.createElement('div');
  divRep.className = "reponses";
  //style class GAMEPLAY reponse
  divRep.className += " " + q.gameplay + "_rep";

  var inpuType;

  //suivant gameplay
  switch (q.gameplay) {
    // QRU QRM
    case 'qru':
    case 'qrm':
      inpuType = q.gameplay == 'qrm' ? "checkbox" : "radio";
      (0, _repQr.repQr)(q, qName, urlImg, inpuType, key, divRep);
      break;
    //CURSEUR
    case 'curseur':
      inpuType = 'range';
      (0, _repCurseur.repCurseur)(q, qName, inpuType, divRep);
      break;
    //ORD_LST
    case 'ord_lst':
      (0, _repOrdLst.repOrdLst)(q, divRep);
      break;

    //TXT_TR
    case 'txt_tr':
      (0, _repTxtTr.repTxtTr)(q, qName, inpuType, divRep);
      break;
  } //end switch

  return divRep;
}

exports.reponsesQuiz = reponsesQuiz;
},{"./repGameplay/repQr":31,"./repGameplay/repCurseur":32,"./repGameplay/repOrdLst":33,"./repGameplay/repTxtTr":34}],19:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadQ = undefined;

var _headBoxQuiz = require('./components/headBoxQuiz');

var _intituleQuiz = require('./components/intituleQuiz');

var _assetQuiz = require('./components/assetQuiz');

var _reponsesQuiz = require('./components/reponsesQuiz');

//Components Content box quiz
function loadQ(q, qGameplay, qBox, rangQ, nbreQ) {
  /********* Recupération des elmts du DOM *********/
  // head_box_quiz elmts
  var headQuiz = qBox.getElementsByClassName('head_box_quiz')[0];
  // content quiz elmts
  var contentQuiz = qBox.getElementsByClassName('content_box_quiz')[0];

  /********* Def chemin url des src *********/
  var url = './assets/';
  var urlImg = url + 'img/';

  //headBoxQuiz
  (0, _headBoxQuiz.headBoxQuiz)(q, qGameplay, headQuiz, rangQ, nbreQ);

  //Content Box Quiz
  //Si Q multiples => 1 template/gameplay - plusieurs contents
  //Q type code
  if (Array.isArray(q.intitules)) {
    contentQuiz.className += " typeCode";
    //recup la clé des data multiples (en array)
    q.intitules.map(function (intitule, key) {
      return getContentQ(key);
    });
  } else {
    getContentQ(null);
  }

  function getContentQ(key) {

    //INTITULE
    var intitule = (0, _intituleQuiz.intituleQuiz)(q.intitules, key);

    //si ASSETS
    if (q.assets && q.assets.type != "dossier") {
      var asset = (0, _assetQuiz.assetQuiz)(q, url, key);
    }

    //REPONSES
    var reponse = (0, _reponsesQuiz.reponsesQuiz)(q, urlImg, key);

    if (Array.isArray(q.intitules)) {
      //temp pour multi q type code...plusieurs content_box_quiz
      if (asset) {
        contentQuiz.appendChild(asset);
        //asset.style.height = "200px";//temp
      }
      contentQuiz.appendChild(intitule);
      contentQuiz.appendChild(reponse);
    } else {
      contentQuiz.appendChild(intitule);
      if (asset) {
        contentQuiz.appendChild(asset);
      }
      contentQuiz.appendChild(reponse);
    }
  } //endGetContentKey
}

exports.loadQ = loadQ;
},{"./components/headBoxQuiz":26,"./components/intituleQuiz":27,"./components/assetQuiz":28,"./components/reponsesQuiz":29}],24:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/////////////////////////////////////////////////////////
/////////////// The Radar Chart Function ////////////////
/////////////// Written by Nadieh Bremer ////////////////
////////////////// VisualCinnamon.com ///////////////////
/////////// Inspired by the code of alangrafu ///////////
/////////////////////////////////////////////////////////

function RadarChart(id, data, options) {
	var cfg = {
		w: 600, //Width of the circle
		h: 600, //Height of the circle
		margin: { top: 20, right: 20, bottom: 20, left: 20 }, //The margins of the SVG
		levels: 3, //How many levels or inner circles should there be drawn
		maxValue: 0, //What is the value that the biggest circle will represent
		labelFactor: 1.25, //How much farther than the radius of the outer circle should the labels be placed
		wrapWidth: 60, //The number of pixels after which a label needs to be given a new line
		opacityArea: 0.4, //The opacity of the area of the blob
		dotRadius: 8, //The size of the colored circles of each blog
		opacityCircles: 0.1, //The opacity of the circles of each blob
		strokeWidth: 2, //The width of the stroke around each blob
		roundStrokes: false, //If true the area and stroke will follow a round path (cardinal-closed)
		color: d3.scale.category10() //Color function
	};

	//Put all of the options into a variable called cfg
	if ('undefined' !== typeof options) {
		for (var i in options) {
			if ('undefined' !== typeof options[i]) {
				cfg[i] = options[i];
			}
		} //for i
	} //if

	//If the supplied maxValue is smaller than the actual one, replace by the max in the data
	var maxValue = Math.max(cfg.maxValue, d3.max(data, function (i) {
		return d3.max(i.map(function (o) {
			return o.value;
		}));
	}));

	var allAxis = data[0].map(function (i, j) {
		return i.axis;
	}),
	    //Names of each axis
	total = allAxis.length,
	    //The number of different axes
	radius = Math.min(cfg.w / 2, cfg.h / 2),
	    //Radius of the outermost circle
	Format = d3.format('%'),
	    //Percentage formatting
	angleSlice = Math.PI * 2 / total; //The width in radians of each "slice"

	//Scale for the radius
	var rScale = d3.scale.linear().range([0, radius]).domain([0, maxValue]);

	/////////////////////////////////////////////////////////
	//////////// Create the container SVG and g /////////////
	/////////////////////////////////////////////////////////

	//Remove whatever chart with the same id/class was present before
	d3.select(id).select("svg").remove();

	//Initiate the radar chart SVG
	var svg = d3.select(id).append("svg").attr("width", cfg.w + cfg.margin.left + cfg.margin.right).attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom).attr("class", "radar" + id);
	//Append a g element
	var g = svg.append("g").attr("transform", "translate(" + (cfg.w / 2 + cfg.margin.left) + "," + (cfg.h / 2 + cfg.margin.top) + ")");

	/////////////////////////////////////////////////////////
	////////// Glow filter for some extra pizzazz ///////////
	/////////////////////////////////////////////////////////

	//Filter for the outside glow
	var filter = g.append('defs').append('filter').attr('id', 'glow'),
	    feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation', '2.5').attr('result', 'coloredBlur'),
	    feMerge = filter.append('feMerge'),
	    feMergeNode_1 = feMerge.append('feMergeNode').attr('in', 'coloredBlur'),
	    feMergeNode_2 = feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

	/////////////////////////////////////////////////////////
	/////////////// Draw the Circular grid //////////////////
	/////////////////////////////////////////////////////////

	//Wrapper for the grid & axes
	var axisGrid = g.append("g").attr("class", "axisWrapper");

	//Draw the background circles
	axisGrid.selectAll(".levels").data(d3.range(1, cfg.levels + 1).reverse()).enter().append("circle").attr("class", "gridCircle").attr("r", function (d, i) {
		return radius / cfg.levels * d;
	}).style("fill", "#CDCDCD").style("stroke", "#CDCDCD").style("fill-opacity", cfg.opacityCircles).style("filter", "url(#glow)");

	//Text indicating at what % each level is
	axisGrid.selectAll(".axisLabel").data(d3.range(1, cfg.levels + 1).reverse()).enter().append("text").attr("class", "axisLabel").attr("x", 4).attr("y", function (d) {
		return -d * radius / cfg.levels;
	}).attr("dy", "0.4em").style("font-size", "10px").attr("fill", "#737373").text(function (d, i) {
		return Format(maxValue * d / cfg.levels);
	});

	/////////////////////////////////////////////////////////
	//////////////////// Draw the axes //////////////////////
	/////////////////////////////////////////////////////////

	//Create the straight lines radiating outward from the center
	var axis = axisGrid.selectAll(".axis").data(allAxis).enter().append("g").attr("class", "axis");
	//Append the lines
	axis.append("line").attr("x1", 0).attr("y1", 0).attr("x2", function (d, i) {
		return rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2);
	}).attr("y2", function (d, i) {
		return rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2);
	}).attr("class", "line").style("stroke", "white").style("stroke-width", "2px");

	//Append the labels at each axis
	axis.append("text").attr("class", "legend").style("font-size", "11px").attr("text-anchor", "middle").attr("dy", "0.35em").attr("x", function (d, i) {
		return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice * i - Math.PI / 2);
	}).attr("y", function (d, i) {
		return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice * i - Math.PI / 2);
	}).text(function (d) {
		return d;
	}).call(wrap, cfg.wrapWidth);

	/////////////////////////////////////////////////////////
	///////////// Draw the radar chart blobs ////////////////
	/////////////////////////////////////////////////////////

	//The radial line function
	var radarLine = d3.svg.line.radial().interpolate("linear-closed").radius(function (d) {
		return rScale(d.value);
	}).angle(function (d, i) {
		return i * angleSlice;
	});

	if (cfg.roundStrokes) {
		radarLine.interpolate("cardinal-closed");
	}

	//Create a wrapper for the blobs
	var blobWrapper = g.selectAll(".radarWrapper").data(data).enter().append("g").attr("class", "radarWrapper");

	//Append the backgrounds
	blobWrapper.append("path").attr("class", "radarArea").attr("d", function (d, i) {
		return radarLine(d);
	}).style("fill", function (d, i) {
		return cfg.color(i);
	}).style("fill-opacity", cfg.opacityArea).on('mouseover', function (d, i) {
		//Dim all blobs
		d3.selectAll(".radarArea").transition().duration(200).style("fill-opacity", 0.1);
		//Bring back the hovered over blob
		d3.select(this).transition().duration(200).style("fill-opacity", 0.7);
	}).on('mouseout', function () {
		//Bring back all blobs
		d3.selectAll(".radarArea").transition().duration(200).style("fill-opacity", cfg.opacityArea);
	});

	//Create the outlines
	blobWrapper.append("path").attr("class", "radarStroke").attr("d", function (d, i) {
		return radarLine(d);
	}).style("stroke-width", cfg.strokeWidth + "px").style("stroke", function (d, i) {
		return cfg.color(i);
	}).style("fill", "none").style("filter", "url(#glow)");

	//Append the circles
	blobWrapper.selectAll(".radarCircle").data(function (d, i) {
		return d;
	}).enter().append("circle").attr("class", "radarCircle").attr("r", cfg.dotRadius).attr("cx", function (d, i) {
		return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2);
	}).attr("cy", function (d, i) {
		return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2);
	}).style("fill", function (d, i, j) {
		return cfg.color(j);
	}).style("fill-opacity", 0.8);

	/////////////////////////////////////////////////////////
	//////// Append invisible circles for tooltip ///////////
	/////////////////////////////////////////////////////////

	//Wrapper for the invisible circles on top
	var blobCircleWrapper = g.selectAll(".radarCircleWrapper").data(data).enter().append("g").attr("class", "radarCircleWrapper");

	//Append a set of invisible circles on top for the mouseover pop-up
	blobCircleWrapper.selectAll(".radarInvisibleCircle").data(function (d, i) {
		return d;
	}).enter().append("circle").attr("class", "radarInvisibleCircle").attr("r", cfg.dotRadius * 1.5).attr("cx", function (d, i) {
		return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2);
	}).attr("cy", function (d, i) {
		return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2);
	}).style("fill", "none").style("pointer-events", "all").each(function (d, i) {
		//add tooltip for each cicles...

		var newX = parseFloat(d3.select(this).attr('cx')) - 10;
		var newY = parseFloat(d3.select(this).attr('cy')) - 10;

		var tooltip = g.append("text").attr("class", "tooltip").style("opacity", 1);
		tooltip.attr('x', newX).attr('y', newY).text(Format(d.value));
	}).on("mouseover", function (d, i) {
		//add modal info
		var newX = parseFloat(d3.select(this).attr('cx')) - 30;
		var newY = parseFloat(d3.select(this).attr('cy')) - 30;

		infoC.attr('x', newX).attr('y', newY).text(Format(d.value)).transition().duration(200).style('opacity', 1);
		//open modal info...?
		console.log(d);
	}).on("mouseout", function () {
		infoC.transition().duration(200).style("opacity", 0);
	});

	//Set up the small tooltip for when you hover over a circle
	var infoC = g.append("text").attr("class", "infoC").style("opacity", 1);

	/////////////////////////////////////////////////////////
	/////////////////// Helper Function /////////////////////
	/////////////////////////////////////////////////////////

	//Taken from http://bl.ocks.org/mbostock/7555321
	//Wraps SVG text
	function wrap(text, width) {
		text.each(function () {
			var text = d3.select(this),
			    words = text.text().split(/\s+/).reverse(),
			    word,
			    line = [],
			    lineNumber = 0,
			    lineHeight = 1.4,
			    // ems
			y = text.attr("y"),
			    x = text.attr("x"),
			    dy = parseFloat(text.attr("dy")),
			    tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

			while (word = words.pop()) {
				line.push(word);
				tspan.text(line.join(" "));
				if (tspan.node().getComputedTextLength() > width) {
					line.pop();
					tspan.text(line.join(" "));
					line = [word];
					tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
				}
			}
		});
	} //wrap
} //RadarChart

exports.RadarChart = RadarChart;
},{}],25:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

/* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */

//////////////////////////////////////////////////////////////
//////////////////////// Set-Up //////////////////////////////
//////////////////////////////////////////////////////////////

var margin = { top: 80, right: 100, bottom: 80, left: 100 },
    width = Math.min(550, window.innerWidth - 10) - margin.left - margin.right,
    height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

//////////////////////////////////////////////////////////////
////////////////////////// Data //////////////////////////////
//////////////////////////////////////////////////////////////

var data = exports.data = [[//3C
{ axis: "Connaissances", value: 0.85 }, { axis: "Compréhension", value: 0.56 }, { axis: "Comportement", value: 0.20 }, { axis: "Connaissances2", value: 0.52 }, { axis: "Compréhension2", value: 0.75 }, { axis: "Comportement2", value: 0.45 }]];
//////////////////////////////////////////////////////////////
//////////////////// Draw the Chart //////////////////////////
//////////////////////////////////////////////////////////////

var color = d3.scale.ordinal().range(["#EDC951"]);

var radarChartOptions = exports.radarChartOptions = {
	w: width,
	h: height,
	margin: margin,
	maxValue: 1,
	levels: 5,
	roundStrokes: true,
	color: color
};
},{}],20:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadResult = undefined;

var _RadarChart = require('./components/RadarChart');

var _RadarData = require('./fixtures/RadarData');

function loadResult(pageResult) {
  var header, content, title, lead, badgeBox, badge, diagBox, diag, btnSite, anchor;
  //clean body...
  removeAllChild(pageResult);

  //Creat Content RESULT => BADGE & DIAGRADAR
  //diag radar
  diag = document.createElement('div');
  diag.className = "radarChart";
  diagBox = document.createElement('div');
  diagBox.className = "diag_box";
  diagBox.appendChild(diag);

  //badge
  badge = document.createElement('p');
  badge.className = "badge";
  //temp => add result pt
  badge.innerHTML = "63% de bonnes réponses";
  //badgeBox
  badgeBox = document.createElement('div');
  badgeBox.className = "badge_box";
  badgeBox.appendChild(badge);

  //add CONTENT
  content = document.createElement('div');
  content.className = "content_result";
  content.appendChild(badgeBox);
  content.appendChild(diagBox);

  //create HEADER content TITLE & LEAD
  //creat title
  title = document.createElement('h1');
  title.className = "title_result";
  title.innerHTML = "Résultats";
  //creat lead
  lead = document.createElement('p');
  lead.className = "lead_result";
  lead.innerHTML = "Bravo, vous avez réussi à répondre à toutes les questions dans les temps !";
  //creat header & add contents
  header = document.createElement('header');
  header.className = "head_result";
  header.appendChild(title);
  header.appendChild(lead);

  // add BTN return site
  anchor = document.createElement('a');
  anchor.href = "http://easy-driver-test.webflow.io/";
  anchor.innerHTML = "retour au site";
  btnSite = document.createElement('button');
  btnSite.className = 'btn_site';
  btnSite.type = "button";
  btnSite.appendChild(anchor);
  btnSite.addEventListener("click", function () {
    location.replace("http://easy-driver-test.webflow.io/");
  });

  //ADD ALL in PAGERESULT
  pageResult.appendChild(header);
  pageResult.appendChild(content);
  pageResult.appendChild(btnSite);
  pageResult.className = "page_result";

  //Call function to draw the Radar chart
  (0, _RadarChart.RadarChart)(".radarChart", _RadarData.data, _RadarData.radarChartOptions); //! dessin diag suivant windows..->creat & add node before draw!!!
} //end loadResult

function removeAllChild(parentBox) {
  //empty content_box_quiz (tantque a enfant => suppr)
  while (parentBox.hasChildNodes()) {
    parentBox.removeChild(parentBox.firstChild);
  }
}

exports.loadResult = loadResult;
},{"./components/RadarChart":24,"./fixtures/RadarData":25}],23:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************** fct° TIMER ******************/
//init chrono
var m = 0;
var s = 0;

function startTimer(chrono) {

  var timer = setInterval(function () {
    myChrono();
  }, 1000);

  function myChrono() {
    s++;
    if (s > 59) {
      m++;
      s = 0;
    }
    //add style
    if (m > 6) {
      chrono.style.color = "crimson";
    }
    var mm = checkTime(m);
    var ss = checkTime(s);
    chrono.innerHTML = mm + " : " + ss;

    // arret du timer
    if (m == 10) {
      clearInterval(timer);
      alert('Temps écoulé..');
    }
  }
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }; // add zero in front of numbers < 10
  return i;
}

exports.startTimer = startTimer;
},{}],14:[function(require,module,exports) {
'use strict';

var _q_demo_export = require('./fixtures/q_demo_export');

var _qCorpusAleat = require('./qCorpusAleat');

var _loadQ = require('./loadQ');

var _loadResult = require('./loadResult');

var _startTimer = require('./components/startTimer');

/********* Recupération des elmts du DOM *********/

//CONTENT LOAD RESULTS
var qBox = document.getElementsByClassName('main_quiz')[0];
// content quiz elmts


//TIMER

//CONTENT LOAD question
//getData demoCorpus
var contentQuiz = qBox.getElementsByClassName('content_box_quiz')[0];
//input Valid => Add event load new question
var validInput = qBox.getElementsByTagName('input')[0];
// barre de progression
var progBox = document.getElementsByClassName('progress')[0];

/* TIMER */
var chrono = document.getElementById('timer').getElementsByTagName('p')[0];
(0, _startTimer.startTimer)(chrono);

/********* Récupération des data JSON *********/
getCorpus(_q_demo_export.demoCorpus);

/********* Fct° JS de traitement des data *********/
function getCorpus(dataObj) {
  //recup object questions => corpus test
  var qObj = dataObj.questions;
  //recup object gameplay => intitulés suivant code gamplay
  var gameObj = dataObj.gameplays;

  //recup gameplays
  var gpId = gameObj.map(function (gp) {
    return gp.id;
  });

  //fct° return q -  array questions aleatoires du corpus
  var qCorpus = (0, _qCorpusAleat.qCorpusAleat)(qObj.length);

  //init Index & chrg 1ere Q
  var x = 0;

  //recup data question
  var q = qObj.find(function (q) {
    return q.id === qCorpus[x];
  });
  //q=qObj[6];

  //recup data gameplay correspondant
  var gp = gameObj.find(function (gp) {
    return gp.id === q.gameplay;
  });

  //empty content_box_quiz (tantque a enfant => suppr)
  while (contentQuiz.hasChildNodes()) {
    contentQuiz.removeChild(contentQuiz.firstChild);
  }

  (0, _loadQ.loadQ)(q, gp, qBox, x + 1, qObj.length);

  validInput.onclick = function () {
    //add control si rep..
    x++;
    q = qObj.find(function (q) {
      return q.id === qCorpus[x];
    });
    gp = gameObj.find(function (gp) {
      return gp.id === q.gameplay;
    });
    //empty content_box_quiz (tantque a enfant => suppr)
    while (contentQuiz.hasChildNodes()) {
      contentQuiz.removeChild(contentQuiz.firstChild);
    }

    //tant que question & temps sinon endQuiz
    x < qCorpus.length - 1 ? (0, _loadQ.loadQ)(q, gp, qBox, x + 1, qObj.length) : (0, _loadResult.loadResult)(qBox);
  };
}
},{"./fixtures/q_demo_export":22,"./qCorpusAleat":18,"./loadQ":19,"./loadResult":20,"./components/startTimer":23}],47:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '50802' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[47,14], null)
//# sourceMappingURL=/src.bed03ff9.map