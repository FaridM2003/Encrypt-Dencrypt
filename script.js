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


function actualizarTexto1() {
    const texto = document.getElementById("texto1").value;
    const clave = document.getElementById("clave").value;

    const textoCifrado = cifrarVigenere(texto, clave);
    const textoDescifrado = descifrarVigenere(texto, clave);

    // Mostrar los resultados
    document.getElementById("textoCifrado3").textContent = textoCifrado;
    document.getElementById("textoDescifrado3").textContent = textoDescifrado;
}

function cifrarVigenere(texto, clave) {
    let resultado = "";
    const longitudClave = clave.length;
    let j = 0; // Índice para recorrer la clave

    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];

        // Verifica si el carácter es una letra mayúscula
        if (char >= 'A' && char <= 'Z') {
            const desplazamiento = clave[j % longitudClave].toUpperCase().charCodeAt(0) - 65; // Calcula el desplazamiento
            resultado += String.fromCharCode((char.charCodeAt(0) - 65 + desplazamiento) % 26 + 65); // Cifra
            j++; // Avanza en la clave
        } 
        // Verifica si el carácter es una letra minúscula
        else if (char >= 'a' && char <= 'z') {
            const desplazamiento = clave[j % longitudClave].toLowerCase().charCodeAt(0) - 97; // Calcula el desplazamiento
            resultado += String.fromCharCode((char.charCodeAt(0) - 97 + desplazamiento) % 26 + 97); // Cifra
            j++; // Avanza en la clave
        } 
        else {
            resultado += char; // Mantiene otros caracteres sin cambios
        }
    }

    return resultado;
}


function descifrarVigenere(textoCifrado, clave) {
    let resultado = "";
    const longitudClave = clave.length;
    let j = 0; // Índice para recorrer la clave

    for (let i = 0; i < textoCifrado.length; i++) {
        const char = textoCifrado[i];

        // Verifica si el carácter es una letra mayúscula
        if (char >= 'A' && char <= 'Z') {
            const desplazamiento = clave[j % longitudClave].toUpperCase().charCodeAt(0) - 65; // Calcula el desplazamiento
            resultado += String.fromCharCode((char.charCodeAt(0) - 65 - desplazamiento + 26) % 26 + 65); // Descifra
            j++; // Avanza en la clave
        } 
        // Verifica si el carácter es una letra minúscula
        else if (char >= 'a' && char <= 'z') {
            const desplazamiento = clave[j % longitudClave].toLowerCase().charCodeAt(0) - 97; // Calcula el desplazamiento
            resultado += String.fromCharCode((char.charCodeAt(0) - 97 - desplazamiento + 26) % 26 + 97); // Descifra
            j++; // Avanza en la clave
        } 
        else {
            resultado += char; // Mantiene otros caracteres sin cambios
        }
    }

    return resultado;
}
