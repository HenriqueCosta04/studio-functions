/**
* @Studio
* @property {string} studio_cpf - CPF a ser validado
 */
function ValidarCPF(cpf_param, cnpj_param) {
    const cpf = cpf_param.replace(/\D/g, '');
    function validar(cpf) {
        if (cpf.length !== 11) return false;
        if (/^(\d)\1+$/.test(cpf)) return false; // bloqueia repetidos
        let soma = 0;
        // 1º dígito
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i), 10) * (10 - i);
        }
        let d1 = (soma * 10) % 11;
        if (d1 === 10) d1 = 0;
        if (d1 !== parseInt(cpf.charAt(9), 10)) return false;
        soma = 0;
        // 2º dígito
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i), 10) * (11 - i);
        }
        let d2 = (soma * 10) % 11;
        if (d2 === 10) d2 = 0;
        return d2 === parseInt(cpf.charAt(10), 10);
    }
  function validarCNPJ() {
      const cnpj = cnpj_param.replace(/\D/g, '');
        if (cnpj.length !== 14) return false;
        if (/^(\d)\1+$/.test(cnpj)) return false;
    }
    if (cpf.length === 11) {
        if (!validar(cpf)) throw 'CPF inválido';
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (cnpj_param) {
        const cnpj = cnpj_param.replace(/\D/g, '');
        if (!validarCNPJ(cnpj)) throw 'CNPJ inválido';
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else {
        console.log('CPF ou CNPJ inválido');
        return studio_cpf
    }
}
