const ValidatePassword = require("../services/validate-pass")
const request = require("supertest")
const app = require("../index")

describe("Validando método validate password", ()=>{

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


describe("Validando rota validate-password", ()=>{
    test("deve retornar statuscode 200 e senha forte", async()=>{
        const response = await request(app).post("/validate-password").send({
            password : "Guilherme1$"
        })
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
            "Senha forte": "Guilherme1$"
        })
    })


    test("deve retornar statuscode 400 e senha fraca", async()=>{
        const response = await request(app).post("/validate-password").send({
            password : "Guilherme"
        })
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual({
            error: "A senha deve conter no mínimo uma caracter especial(#,$,%,@) e um número",
        })
    })


}) 