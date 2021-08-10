function __snapCrackle__(__maxValue__){

    let impar = "Snap"
    let multipleFive = "Crackle"
    let ambos = "SnapCrackle"
    let separator //__vírgula e espaço
    let __string__ = ""
    let max = __maxValue__

    for(let i = 1; i<= max; i++){
        if(i === 1){
            __string__ = "Snap"
        }
        else if(i % 2 !== 0 && i % 5 === 0){

         __string__ = __string__ + ", " + ambos
            
            
        }
        else if(i % 2 !== 0){

                __string__ = __string__ +", "+impar

        }
            
        else if(i % 5 === 0){
            
                __string__ = __string__ +", "+multipleFive

        }else{

          __string__ = __string__+", "+i
              
        }
    }
    
    return __string__
}

console.log(__snapCrackle__(12))






// Bônus: Avançando...
// Escreva uma segunda função chamada snapCracklePrime que 
// também recebe um parâmetro maxValue com 1 regra adicional:

// Se o número for primo, no lugar dele, concatenar "Prime" no final da string

// snapCracklePrime(15) deve retornar a string:

// Snap, Prime, SnapPrime, 4, SnapCracklePrime, 6, 
// SnapPrime, 8, Snap, Crackle, SnapPrime, 12, SnapPrime, 14, SnapCrackle



function snapCracklePrime(__maxValue__){

    let impar = "Snap"
    let multipleFive = "Crackle"
    let ambos = "SnapCrackle"
    let separator //__vírgula e espaço
    let __string__ = ""
    let max = __maxValue__
    let primo = 0

    for(let i = 1; i<= max; i++){
        if(i === 1){
            __string__ = "Snap"
         }
    
        
        else if(i % 2 !== 0 && i % 5 === 0){

         __string__ = __string__ + ", " + ambos
         for(let numero = 3; numero <= i ; numero++){
            if(i % numero === 0){
                    primo +=1
            }
                    
            if(numero === i && primo === 1){
        
                        __string__ = __string__ + "" + "Prime"
                        primo = 0
            }else if(numero === i && primo > 1){
                primo = 0
            }
            
            
          }    
            
        }
        else if(i % 2 !== 0){

                __string__ = __string__ +", "+impar
                for(let numero = 3; numero <= i ; numero++){
                    if(i % numero === 0){
                            primo +=1
                    }
                            
                    if(numero === i && primo === 1){
                
                                __string__ = __string__ + "" + "Prime"
                                primo = 0
                    }else if(numero === i && primo > 1){
                        primo = 0
                    }
                    
                  }  

        }
            
        else if(i % 5 === 0){
            
                __string__ = __string__ +", "+multipleFive

        }else if(i === 2){

          __string__ = __string__+", "+"Prime"
              
        }else{
            __string__ = __string__+", "+i
        }
    }
    
    return __string__
}

console.log(snapCracklePrime(15))