document.getElementById('calculateButton').addEventListener('click', function() {
    const baseRatio = parseFloat(document.getElementById('baseRatio').value) || 0;
    const hardenerRatio = parseFloat(document.getElementById('hardenerRatio').value) || 0;
    const baseAmount = parseFloat(document.getElementById('baseAmount').value);
    const dilutionRate = parseFloat(document.getElementById('dilutionRate').value) || 0;

    let hardenerAmount = 0;
    let dilutionAmount = 0;

    if (baseAmount) {
        if (baseRatio && hardenerRatio) {
            hardenerAmount = (baseAmount / baseRatio) * hardenerRatio;
        }
        dilutionAmount = baseAmount * (dilutionRate / 100);
    }

    let resultText = `ベース: ${baseAmount} g\n`;
    if (hardenerRatio && baseRatio) {
        resultText += `硬化材: ${hardenerAmount.toFixed(2)} g\n`;
    }
    resultText += `希釈材: ${dilutionAmount.toFixed(2)} g`;

    document.getElementById('result').innerText = resultText;
});
