document.getElementById('calculateButton').addEventListener('click', function() {
    var baseRatio = parseFloat(document.getElementById('baseRatio').value) || 0;
    var hardenerRatio = parseFloat(document.getElementById('hardenerRatio').value) || 0;
    var baseAmount = parseFloat(document.getElementById('baseAmount').value) || 0;
    var dilutionRate = parseFloat(document.getElementById('dilutionRate').value) || 0;

    // 硬化材の容量の計算
    var hardenerAmount = 0;
    if (baseRatio > 0 && hardenerRatio > 0) {
        hardenerAmount = (baseAmount / baseRatio) * hardenerRatio;
    }
    document.getElementById('hardenerAmount').textContent = isNaN(hardenerAmount) ? "N/A" : `${hardenerAmount.toFixed(2)} g`;

    // 希釈材の容量の計算
    var dilutionAmount = (baseAmount * (dilutionRate / 100));
    document.getElementById('dilutionAmount').textContent = isNaN(dilutionAmount) ? "N/A" : `${dilutionAmount.toFixed(2)} g`;
});
