const consultarCPF = () => {
    const cpf = document.getElementById("cpf")

    const resultado = validarCPF(cpf)

    document.getElementById("resultado").innerText = resultado ? "CPF valido" : "CPF invalido"
}