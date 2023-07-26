function calculatepH() {
    const acidSelect = document.getElementById("acidSelect");
    const acidName = acidSelect.value;
    const coefficientInput = document.getElementById("coefficientInput");
    const coefficient = parseFloat(coefficientInput.value);
    const concentrationInput = document.getElementById("concentrationInput");
    const concentration = parseFloat(concentrationInput.value);
  
    let ka;
    switch (acidName) {
      case "acetic":
        ka = 1.8e-5;
        break;
      case "fluoridric":
        ka = 3.5e-4;
        break;
      case "cyanidric":
        ka = 4.9e-10;
        break;
      case "nitrous":
        ka = 4.3e-4;
        break;
      case "carbonic":
        ka = 4.4e-7;
        break;
      default:
        return;
    }
  
    const hPlusConcentration = Math.sqrt((ka * coefficient * concentration) / (1 + coefficient));
    const ph = -Math.log10(hPlusConcentration);
    document.getElementById("result").innerText = `O pH do ácido é: ${ph.toFixed(2)}`;
  }