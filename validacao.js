const validarCPF = (cpf) => {
    //removendo todos os caracteres que nao forem numericos, 
    //deixando apenas os valores numericos 
    cpf = cpf.replace(/\D/g, "")

    //verificando se o numero informado possui 11 digitos
    if(cpf.length !== 11){
        console.error("CPF invalido. Documento nao possui 11 caracteres.")
        return
    }

    //verificando se o CPF é composto apenas por numeros iguais
    if(cpf.length === "00000000000" ||
        cpf.length === "11111111111" || 
        cpf.length === "22222222222" || 
        cpf.length === "33333333333" || 
        cpf.length === "44444444444" || 
        cpf.length === "55555555555" ||
        cpf.length === "66666666666" || 
        cpf.length === "77777777777" || 
        cpf.length === "88888888888" || 
        cpf.length === "99999999999"){
        console.error("CPF invalido. Documento nao pode ter caracteres iguais.")
        return
    }

    //obtendo o primeiro digito verificador
    const proximoDigitoVerificador = (cpfIncompleto) => {
        let somatoria = 0

        //vamos percorrer todos os numeros e multiplicar cada
        // um deles pelas constantes 

        for(let i = 0; i < cpfIncompleto.length; i++){
            let digitoAtual = cpfIncompleto.charAt(i)
            console.log(digitoAtual);

            //obtendo cada constante que sera multiplicada por cada digito do CPF
            let constante = cpfIncompleto.length + 1 - i
            console.log(constante)

            //Multiplando cada constante por cada digito do CPF
            somatoria += Number(digitoAtual) * constante
            console.log(somatoria)
        }
        const resto = somatoria % 11
        console.log(resto);
        return resto < 2 ? "0" : (11 - resto).toString()
    }

    let primeiroDigitoVerificador = proximoDigitoVerificador(cpf.substring(0,9))
    console.log(primeiroDigitoVerificador);

    let segundoDigitoVerificador = proximoDigitoVerificador(cpf.substring(0,9) + primeiroDigitoVerificador)
    console.log(segundoDigitoVerificador);

    let cpfCorreto = cpf.substring(0,9) + primeiroDigitoVerificador + segundoDigitoVerificador

    //compara o CPF informado com o padrao correto
    if(cpf !== cpfCorreto){
        console.log("CPF invalido! Digitos verificadores nao conferem")
        return false
    }

    console.log("CPF valido!")
    return true
}

const cpfValidado = validarCPF(cpf)
// return cpfValidado
