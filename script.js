document.getElementById('calculateButton').addEventListener('click', function() {
    const baseRatio = parseFloat(document.getElementById('baseRatio').value);
    const hardenerRatio = parseFloat(document.getElementById('hardenerRatio').value);
    const baseAmount = parseFloat(document.getElementById('baseAmount').value);
    const dilutionRate = parseFloat(document.getElementById('dilutionRate').value) || 0; // 希釈率が未入力の場合は0を設定

    if (isNaN(baseAmount) || baseAmount <= 0) {
        document.getElementById('result').innerHTML = 'ベース容量を正しく入力してください。';
        return;
    }

    const hardenerAmount = (baseAmount / baseRatio) * hardenerRatio;
    const totalAmount = baseAmount + hardenerAmount;
    const dilutionAmount = (totalAmount * dilutionRate) / 100;

    const result = `
        <p>硬化剤の容量: ${hardenerAmount.toFixed(2)} g</p>
        <p>希釈材の容量: ${dilutionAmount.toFixed(2)} g</p>
    `;

    document.getElementById('result').innerHTML = result;
});
