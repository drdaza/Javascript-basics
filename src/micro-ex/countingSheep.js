/* 
## Counting Sheeps

Los "true" son ovejas, los "false" son lobos ... Cuantas ovejas hay?

*/

export function countSheeps(list)
{
    if(list.includes(true)){
        list = list.filter(sheep => sheep==true).length;
        return `There are ${list} sheep in total`;
    }
    else{
        return `UPS!!! Wolfs eaten Sheeps`
    }
}