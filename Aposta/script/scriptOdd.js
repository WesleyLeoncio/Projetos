// Calcular ODD
let tab;
document.getElementById("calcOdd").onclick = function () {
  const aposta1 = new Aposta();
  aposta1.setValorAposta(parseFloat(document.getElementById("aposta1").value));
  aposta1.setOddAposta(parseFloat(document.getElementById("odd1").value));
  document.getElementById("aposta1").value = null;
  carregarTabela(aposta1);
};

document.getElementById("limparOdd").onclick = function () {
  limparOdds();
}


function carregarTabela(aposta1) {
  tabela1(aposta1);
}

function tabela1(obj) {
  tab = document.getElementById("tableOdd");
  let qtdLinhas = tab.rows.length;
  let linha = tab.insertRow(qtdLinhas);

  let cellValorAposta = linha.insertCell(0);
  let cellValorOdd = linha.insertCell(1);
  let cellValorPrevisto = linha.insertCell(2);
  let cellValorLucro = linha.insertCell(3);

  obj.calcularLucro();
  cellValorAposta.innerHTML = "R$: " + obj.getValorAposta();
  cellValorOdd.innerHTML = obj.getOddAposta();
  cellValorPrevisto.innerHTML = "R$: " + obj.getLucro().toFixed(2);
  cellValorLucro.innerHTML = "R$: " + obj.valorLucro().toFixed(2);
}

function limparOdds() {
  tab.deleteRow(tab.rows.length - 1);
}


/////////////////////////////////////////////////////////////////////////////////
// Calcular Intervalo
document.getElementById("calcOddIntervalo").onclick = function () {
  let inicial = parseFloat(document.getElementById("inputValorInicial").value);
  let final = parseFloat(document.getElementById("inputValorFinal").value);
  let odd = parseFloat(document.getElementById("inputvalorOdd").value);
  calcularIntervalo(inicial, final, odd);
};

function calcularIntervalo(inicial, final, odd) {
  for (let i = inicial; i <= final; i++) {
    const aposta = new Aposta(i, odd);
    tabela2(aposta);
  }
  console.log(inicial + " " + final + " " + odd);
}

function tabela2(obj) {
  let tab = document.getElementById("tableOddIntervalo");
  let qtdLinhas = tab.rows.length;
  let linha = tab.insertRow(qtdLinhas);

  let cellValorAposta = linha.insertCell(0);
  let cellValorOdd = linha.insertCell(1);
  let cellValorPrevisto = linha.insertCell(2);
  let cellValorLucro = linha.insertCell(3);

  obj.calcularLucro();
  cellValorAposta.innerHTML = "R$: " + obj.getValorAposta();
  cellValorOdd.innerHTML = obj.getOddAposta();
  cellValorPrevisto.innerHTML = "R$: " + obj.getLucro().toFixed(2);
  cellValorLucro.innerHTML = "R$: " + obj.valorLucro().toFixed(2);
}

/////////////////////////////////////////////////////////////////////////////////
// CLASS
class Aposta {
  _valorAposta;
  _oddAposta;

  constructor(valor, odd) {
    this._valorAposta = valor;
    this._oddAposta = odd;
  }

  setValorAposta(valor) {
    this._valorAposta = valor;
  }
  getValorAposta() {
    return this._valorAposta;
  }

  setOddAposta(odd) {
    this._oddAposta = odd;
  }
  getOddAposta() {
    return this._oddAposta;
  }

  getLucro() {
    return this._lucro;
  }

  calcularLucro() {
    this._lucro = this._valorAposta * this._oddAposta;
  }

  valorLucro() {
    return this._lucro - this._valorAposta;
  }
}
