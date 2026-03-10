function validarCartaoCredito(numero, formatar = true) {
  const limpo = numero.replace(/\D/g, '');
  const bandeiras = [
    { nome: 'Visa',       regex: /^4/ },
    { nome: 'Mastercard', regex: /^5[1-5]|^2(2[2-9]|[3-6]\d|7[01])/ },
    { nome: 'Amex',       regex: /^3[47]/ },
    { nome: 'Elo',        regex: /^(4011|4312|4389|6362|6363|650485|6516|6550)/ },
    { nome: 'Hipercard',  regex: /^(606282|3841)/ },
  ];
  let soma = 0;
  for (let i = limpo.length - 1; i >= 0; i--) {
    let d = parseInt(limpo[i]);
    if ((limpo.length - 1 - i) % 2 === 1) { d *= 2; if (d > 9) d -= 9; }
    soma += d;
  }
  const valido = soma % 10 === 0 && limpo.length >= 13;
  const bandeira = bandeiras.find(b => b.regex.test(limpo))?.nome ?? null;
  const grupos = bandeira === 'Amex' ? [4, 6, 5] : [4, 4, 4, 4];
  let pos = 0;
  const formatado = formatar
    ? grupos.map(g => limpo.slice(pos, pos += g)).filter(Boolean).join(' ')
    : null;
  return { valido, bandeira, formatado };
}
