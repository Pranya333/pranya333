import { VALID_SYBOLS, ACTIONS } from "./constants";

export class Calculator {
    #firstNumber = '';
    #secondNumber = '';
    #action = '';

    setSign(symbol) {
        const sybolStr = String(symbol);

        if(!VALID_SYBOLS.test(symbolStr)){ 
        
        return;
        }
        if(ACTIONS.test(sybol) && !this.#secondNuber){
        this.#action = symbol;
        return;
        }
        if()
    }
}

