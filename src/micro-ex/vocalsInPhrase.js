/* 
Escribe un programa que pida una frase y escriba las vocales que aparecen
*/
export function searchVocals(phrase){
    phrase = phrase.match(/[aeiou]/gi);
    let string = [];
    for (const iterator of phrase) {
        if(!string.includes(iterator)){
            string.push(iterator)
        }
    }
    return string.toString();
}
