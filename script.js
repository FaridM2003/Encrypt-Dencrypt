function actualizarTexto() {
    const texto = document.getElementById("texto").value;
    const desplazamiento = parseInt(document.getElementById("desplazamiento").value) || 0;

    const textoCifrado = encriptarTexto(texto, desplazamiento);
    const textoDescifrado = encriptarTexto(texto, -desplazamiento); // Usar el desplazamiento negativo para descifrar

    // Mostrar los resultados
    document.getElementById("textoCifrado").textContent = textoCifrado;
    document.getElementById("textoDescifrado").textContent = textoDescifrado;
}

function encriptarTexto(texto, desplazamiento) {
    let resultado = "";
    const mod = 26;

    for (const char of texto) {
        let codigo = char.charCodeAt(0);

        if (char >= 'A' && char <= 'Z') {
            resultado += String.fromCharCode((codigo - 65 + desplazamiento + mod) % mod + 65);
        } else if (char >= 'a' && char <= 'z') {
            resultado += String.fromCharCode((codigo - 97 + desplazamiento + mod) % mod + 97);
        } else {
            resultado += char; // Mantener otros caracteres sin cambios
        }
    }

    return resultado;
}