

export const ValidatePassword = (password) => {

    let validatedPass;

    if(password.length >= 8){

        //Verificar se possui uma letra maíscula e minuscula 
        if(password !== password.toLowerCase()  && password != password.toUpperCase()){


            //Verificar se possui pelo menos um número e carater especial
            for(let p of password) {
                if(!isNaN(p) && password.includes("#" || "!" || "@" || "$" || "%")) {

                    validatedPass = {
                        status: true,
                       
                    }
        
                    return validatedPass

                }
                else{
                        validatedPass = {
                            status: false,
                            error:"A senha deve conter pelo menos um caracter especial e um número!"
                        }
            
                    return validatedPass
                    
                }
            }

        }
        else{
                validatedPass = {
                    status: false,
                    error:"A senha deve conter uma letra maiúscula e uma minúscula!"
            }

            return validatedPass
        }
    }
   else{ 
        validatedPass = {
                status: false,
                error:"A senha deve conter no mínimo 8 dígitos!"
        }

        return validatedPass
    }
    
}