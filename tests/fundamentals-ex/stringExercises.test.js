import { concatenateStrings, giveOneLetter, returnAString, returnHello } from "../../src/fundamentals-ex/stringExercises";

describe('Variables can be a string', () => {
    test.skip('should say Hello', () => {
        /* agrega la línea que falta */
        const word = "Hello";
        const result = returnHello(word);
        expect(result).toBe('Hello');
    });

    test.skip('should return Hello World', () => {
        /* Modifica la function returnAString del archivo stringExercises */
        const result = returnAString();
        expect(result).toBe('Hello World');
    });

    test.skip('should be return I Love JS', () => {
        /* Añade las líneas necesarias al test / Modifica la function concatenateStrings */
        const Thirdword = "JS"
        const result = concatenateStrings(Thirdword);
        expect(result).toBe('I Love JS');
    });

    test.skip('should return letter', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveOneLetter para que devuelva la letra g de la variable configurada */
/*         const dog = ["anselmo","o"]; */
        const dog = "dog";
        const letra = "o";
        const result = giveOneLetter(dog,letra);
        expect(result).toBe("o");
    });

    test.skip('should return -1', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveTheIndexOfWord */

        expect(giveTheIndexOfWord()).toEqual(-1);
    });

    test.skip('should return "Give a Man a Pussy Cat" ', () => {
        /* Añade las líneas necesarias al test / Modifica la function replaceFishWords */

        expect().toBe('Give a Man a Pussy Cat');
    });

    test.skip('should return "RIDE HIM, COWBOY!"', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveAllLettersInUppercase */
        
        expect().toBe('RIDE HIM, COWBOY');
    });

    test.skip('should return "Hands Down"', () => {
        /* Añade las líneas necesarias al test y modifica la function removeWhiteSpace */

        expect().toBe('Hands Down');
    });
});