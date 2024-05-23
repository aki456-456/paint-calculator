document.getElementById('calculateButton').addEventListener('click', function() {
    const baseRatio = parseFloat(document.getElementById('baseRatio').value);
    const hardenerRatio = parseFloat(document.getElementById('hardenerRatio').value);
    const baseAmount = parseFloat(document.getElementById('baseAmount').value);

    if (isNaN(baseAmount)) {
        document.getElementById('result').textContent = 'ベース容量を入力してください。';
        return;
    }

    const hardenerAmount = (baseAmount * hardenerRatio) / baseRatio;
    document.getElementById('result').textContent = `硬化剤の容量: ${hardenerAmount.toFixed(2)} g`;
});
