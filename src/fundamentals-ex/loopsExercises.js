export function countdown()
{
    /* Completa */
    let count = 10;
    while(count > -1){
        count--;
        if(count == 0){
            return 'GO';
        }
    }
}

export function createNumberList()
{
    let arrNumbers = [];
    let cont = 0;
    do{
        cont++;
        arrNumbers.push(cont);
    }while(cont<10);
    return arrNumbers;
}

export function makePizza()
{
    /* Completa la function utilizando el bucle for*/
    let pizza = {
        ingredient1: '',
        ingredient2: '',
        ingredient3: '',
        ingredient4: '',
        ingredient5: '',
        ingredient6: ''
    };
    let ingredients = ['masa','tomate', 'mozzarella','cheddar','gorgonzola','parmesano'];
    for (let index = 0; index < ingredients.length; index++) {
        pizza[`ingredient${index+1}`] = ingredients[index];  
    }
    return pizza;

}

export function addSpanishInternationalPrefixes()
{
    /* Añade el prefijo internacional de españa a los números de teléfonos del array (+34-). Utiliza el bucle foreach */
    let phoneNumberList = ['054060719','029830776','159949736','663170151','513407584'];
    phoneNumberList.forEach(element => {
        let index = phoneNumberList.indexOf(element);
        
        phoneNumberList[index]= `+34-${element}`;
    });
    return phoneNumberList;
}