# CRIPTADOR Y ENCRIPTADOR DE CESAR O VIGENERE
- Un Encriptador de varios codigos
- Hecho para fines educativos
- Ayudado por una explicaciond de una IA

## EXPLICACIONES
## CIFRADO CESAR

1. **El Alfabeto**: En el cifrado César, se utiliza el alfabeto en el que cada letra es desplazada por un número fijo de posiciones. Para este ejemplo, usaremos un desplazamiento de **3**.

   ```
   Alfabeto:  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
   Desplazado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
   ```

2. **Cifrado**:
   - Para cifrar, tomamos cada letra del texto original y la reemplazamos con la letra que se encuentra **3 posiciones** más adelante en el alfabeto.
   - Si llegamos al final del alfabeto, continuamos desde el principio.

3. **Ejemplo**:
   - Supongamos que queremos cifrar el texto **"HELLO"**.
   
   | Letra Original | Desplazamiento | Letra Cifrada |
   |----------------|----------------|----------------|
   | H              | +3             | K              |
   | E              | +3             | H              |
   | L              | +3             | O              |
   | L              | +3             | O              |
   | O              | +3             | R              |

   Por lo tanto, **"HELLO"** se cifra como **"KHOOR"**.

4. **Descifrado**:
   - Para descifrar, hacemos el proceso inverso: desplazamos cada letra **3 posiciones** hacia atrás.
   
   | Letra Cifrada | Desplazamiento | Letra Original |
   |----------------|----------------|-----------------|
   | K              | -3             | H               |
   | H              | -3             | E               |
   | O              | -3             | L               |
   | O              | -3             | L               |
   | R              | -3             | O               |

   Entonces, **"KHOOR"** se descifra como **"HELLO"**.

### Resumen

- **Cifrado**: Cada letra del texto original se reemplaza con otra letra un número fijo de posiciones más adelante en el alfabeto.
- **Descifrado**: Se invierte el proceso desplazando las letras hacia atrás el mismo número de posiciones.




## CIFRADO DE VIGENERE
veamos un ejemplo más visual para entender el cifrado de Vigenère.

Supongamos que tenemos el siguiente texto:

- **Texto**: `ATAQUE AL AMANECER`
- **Clave**: `SOL`

### Paso 1: Repetir la clave hasta cubrir todo el texto

Para que la clave tenga la misma longitud que el texto, repetimos `SOL` tantas veces como sea necesario:

```
Texto:  A T A Q U E   A L   A M A N E C E R
Clave:  S O L S O L   S O   L S O L S O L S
```

### Paso 2: Calcular el desplazamiento para cada letra

Convertimos cada letra a su posición en el alfabeto:
- A = 0, B = 1, C = 2, ..., Z = 25

Esto nos permitirá calcular los desplazamientos de cada letra del texto según la clave.

| Letra del texto | Letra de la clave | Posición del texto | Posición de la clave | Nueva posición `(texto + clave) % 26` | Letra cifrada |
|-----------------|-------------------|---------------------|-----------------------|---------------------------------------|---------------|
| A               | S                 | 0                   | 18                    | (0 + 18) % 26 = 18                    | S             |
| T               | O                 | 19                  | 14                    | (19 + 14) % 26 = 7                    | H             |
| A               | L                 | 0                   | 11                    | (0 + 11) % 26 = 11                    | L             |
| Q               | S                 | 16                  | 18                    | (16 + 18) % 26 = 8                    | I             |
| U               | O                 | 20                  | 14                    | (20 + 14) % 26 = 8                    | I             |
| E               | L                 | 4                   | 11                    | (4 + 11) % 26 = 15                    | P             |
| A               | S                 | 0                   | 18                    | (0 + 18) % 26 = 18                    | S             |
| L               | O                 | 11                  | 14                    | (11 + 14) % 26 = 25                   | Z             |
| A               | L                 | 0                   | 11                    | (0 + 11) % 26 = 11                    | L             |
| M               | S                 | 12                  | 18                    | (12 + 18) % 26 = 4                    | E             |
| A               | O                 | 0                   | 14                    | (0 + 14) % 26 = 14                    | O             |
| N               | L                 | 13                  | 11                    | (13 + 11) % 26 = 24                   | Y             |
| E               | S                 | 4                   | 18                    | (4 + 18) % 26 = 22                    | W             |
| C               | O                 | 2                   | 14                    | (2 + 14) % 26 = 16                    | Q             |
| E               | L                 | 4                   | 11                    | (4 + 11) % 26 = 15                    | P             |
| R               | S                 | 17                  | 18                    | (17 + 18) % 26 = 9                    | J             |

### Paso 3: Resultado final

Unimos todas las letras cifradas y obtenemos el texto encriptado:

- **Texto cifrado**: `SHLIIP SZ LE OY WQPJ`

Con el cifrado de Vigenère, el desplazamiento de cada letra depende de la clave, por lo que resulta mucho más difícil de descifrar que el cifrado César.