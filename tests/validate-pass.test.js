const ValidatePassword = require("../services/validate-pass")

describe("Validate password", ()=>{

    test("deve possuir ao menos 8 caracteres", ()=>{
        expect(ValidatePassword("gui")).toStrictEqual({
            status: false,
            error:"A senha deve conter no mínimo 8 dígitos!"
        })
    })


    test("deve possuir ao menos uma letra maiúscula e uma minúscula", ()=>{
        expect(ValidatePassword("guilherme")).toStrictEqual({
            status: false,
            error:"A senha deve conter no mínimo uma letra maiúscula e uma minúscula!"
        })
    })

    test("deve possuir ao menos um número e um caracter especial", ()=>{
        expect(ValidatePassword("Guilherme")).toStrictEqual({
            status: false,
            error:"A senha deve conter no mínimo uma caracter especial(#,$,%,@) e um número"
        })
    })

})