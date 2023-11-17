function soma() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);
    document.getElementById('result').textContent = valor1 + valor2;
  }
  
  function sub() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);
    document.getElementById('result').textContent = valor1 - valor2;
  }

  function mult() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);
    document.getElementById('result').textContent = valor1 * valor2;
  }
  
  function divisao() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);
    if (valor2 !== 0) {
      document.getElementById('result').textContent = valor1 / valor2;
    } else {
      document.getElementById('result').textContent = "Não é possível dividir por zero";
    }
  }
  