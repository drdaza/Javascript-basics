/* 
## Opposites Attract

Timmy y Sarah piensan que están enamorados, pero alrededor de donde viven, solo lo sabrán una vez que elijan una flor cada uno. Si una de las flores tiene un número par de pétalos y la otra tiene un número impar de pétalos, significa que están enamorados.

Escribe una función que tome el número de pétalos de cada flor y devuelva verdadero si están enamorados y falso si no lo están.
*/

export function isLove(petalsFlower1, petalsFlower2)
{
    if(petalsFlower1 % 2 === 0 && petalsFlower2 % 2 > 0){
        return true
    }
    if(petalsFlower2 % 2 === 0 && petalsFlower1 % 2 > 0){
        return true;
    }
    else{
        return false
    }
   
}