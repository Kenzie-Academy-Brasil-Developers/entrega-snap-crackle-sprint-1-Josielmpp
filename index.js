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

