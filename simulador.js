document.getElementById('calculo').addEventListener('change', function() {
    const seleccion = this.value;
    const inputsDiv = document.getElementById('inputs');

    // Limpia los campos existentes
    inputsDiv.innerHTML = '';

    // Añadir campos de entrada según la selección
    if (seleccion === 'resistencia') {
        inputsDiv.innerHTML = `
            <label for="resistivity">Resistividad (ρ):</label>
            <input type="number" id="resistivity" name="resistivity" step="any" required>

            <label for="length">Longitud (L):</label>
            <input type="number" id="length" name="length" step="any" required>

            <label for="area">Área (A):</label>
            <input type="number" id="area" name="area" step="any" required>
        `;
    } else if (seleccion === 'resistividad') {
        inputsDiv.innerHTML = `
            <label for="resistance">Resistencia (R):</label>
            <input type="number" id="resistance" name="resistance" step="any" required>

            <label for="length">Longitud (L):</label>
            <input type="number" id="length" name="length" step="any" required>

            <label for="area">Área (A):</label>
            <input type="number" id="area" name="area" step="any" required>
        `;
    } else if (seleccion === 'longitud') {
        inputsDiv.innerHTML = `
            <label for="resistance">Resistencia (R):</label>
            <input type="number" id="resistance" name="resistance" step="any" required>

            <label for="resistivity">Resistividad (ρ):</label>
            <input type="number" id="resistivity" name="resistivity" step="any" required>

            <label for="area">Área (A):</label>
            <input type="number" id="area" name="area" step="any" required>
        `;
    } else if (seleccion === 'area') {
        inputsDiv.innerHTML = `
            <label for="resistance">Resistencia (R):</label>
            <input type="number" id="resistance" name="resistance" step="any" required>

            <label for="resistivity">Resistividad (ρ):</label>
            <input type="number" id="resistivity" name="resistivity" step="any" required>

            <label for="length">Longitud (L):</label>
            <input type="number" id="length" name="length" step="any" required>
        `;
    }
});

// Escuchar el evento submit del formulario
document.getElementById('resistivityForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que la página se recargue al enviar el formulario

    let resistance, resistivity, length, area;
    
    const calculationType = document.getElementById('calculo').value;

    if (calculationType === 'resistencia') {
        resistivity = parseFloat(document.getElementById('resistivity').value);
        length = parseFloat(document.getElementById('length').value);
        area = parseFloat(document.getElementById('area').value);
        
        // Fórmula: R = ρ * (L / A)
        resistance = resistivity * (length / area);
        document.getElementById('resultadoTexto').innerHTML = `<strong>Resultado:</strong> Resistencia: ${resistance.toExponential(2)} ohms`;
        
    } else if (calculationType === 'resistividad') {
        resistance = parseFloat(document.getElementById('resistance').value);
        length = parseFloat(document.getElementById('length').value);
        area = parseFloat(document.getElementById('area').value);
        
        // Fórmula: ρ = (R * A) / L
        resistivity = (resistance * area) / length;
        document.getElementById('resultadoTexto').innerHTML = `<strong>Resultado:</strong> Resistividad: ${resistivity.toExponential(2)} ohm·m`;
        
    } else if (calculationType === 'longitud') {
        resistance = parseFloat(document.getElementById('resistance').value);
        resistivity = parseFloat(document.getElementById('resistivity').value);
        area = parseFloat(document.getElementById('area').value);
        
        // Fórmula: L = (R * A) / ρ
        length = (resistance * area) / resistivity;
        document.getElementById('resultadoTexto').innerHTML = `<strong>Resultado:</strong> Longitud: ${length.toExponential(2)} m`;
        
    } else if (calculationType === 'area') {
        resistance = parseFloat(document.getElementById('resistance').value);
        resistivity = parseFloat(document.getElementById('resistivity').value);
        length = parseFloat(document.getElementById('length').value);
        
        // Fórmula: A = (ρ * L) / R
        area = (resistivity * length) / resistance;
        document.getElementById('resultadoTexto').innerHTML = `<strong>Resultado:</strong> Área: ${area.toExponential(2)} m²`;
    }
});





