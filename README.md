# Projeto de Funções prontas - Olos Studio

## Descrição do Projeto

Este projeto tem como objetivo criar um conjunto de funções prontas para serem utilizadas no `olos-studio`. As funções serão desenvolvidas utilizando a linguagem de programação JavaScript e serão organizadas em um repositório no GitHub para fácil acesso e colaboração.

## Critérios de Aceitação

1. As funções devem ser escritas em JavaScript e seguir as melhores práticas de codificação.
2. As funções devem ser testadas para garantir que estão funcionando corretamente (seguindo a nomenclatura de arquivos de teste `.spec.js`)
3. As funções não devem conter variáveis não utilizadas ou código morto.
4. Os parâmetros e variáveis `studio_` não podem ter o mesmo nome para evitar conflitos no `olos-studio`.

## Convenções de Código Aceitas

### Notação `@studio`

- No projeto `olos-studio`, foi criada uma convenção de código utilizando a seguinte sintaxe:

```javascript
/**
 *
 * @Studio
 * @property {string} studio_nomeVariavel - placeholder para a variável
 */
```

- Observação 1: O nome da variável deve seguir a convenção `studio_nomeVariavel` para garantir consistência e clareza no código.
- Observação 2: Os tipos aceitos atualmente são `string`, `number`, `boolean`. Caso seja necessária a utilização de outros tipos, pode-se criar uma função complementar no `olos-studio` para lidar com esses tipos específicos, antes de usar o código da função do github.

### Uso de parâmetros

- As funções devem ser projetadas para aceitar parâmetros de entrada, permitindo flexibilidade e reutilização.

Exemplo de função com parâmetros:

```javascript
export function exemploFuncao(parametroExemplo) {
  // Lógica da função utilizando o parâmetro
  console.log(parametroExemplo);
}
```

## Exemplo de criação de função pronta

1. Em `functions`, crie um arquivo javaScript para a função, por exemplo `exemploFuncao.js`:

```javascript
/**
 *
 * @Studio
 * @property {string} studio_nomeVariavel - placeholder para a variável
 */
export function exemploFuncao(outraVariavel) {
  // Lógica da função utilizando o parâmetro
  console.log({
    studio_nomeVariavel: 'Valor da variável de estúdio',
    outraVariavel: outraVariavel,
  });
}
```

2. Em `tests`, crie um arquivo de teste para a função, por exemplo `exemploFuncao.spec.js`:

```javascript
import { exemploFuncao } from '../functions/exemploFuncao';

describe('Teste para exemploFuncao', () => {
  it('Deve imprimir o valor do parâmetro', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    exemploFuncao('Teste de função pronta');
    expect(consoleSpy).toHaveBeenCalledWith('Teste de função pronta');
    consoleSpy.mockRestore();
  });
});
```

3. Certifique-se de que os testes estejam passando antes de fazer o commit e push para o repositório no GitHub rodando o comando:

```bash
npm test
```

## Customização dos Testes

- Em `config`, estão disponíveis arquivos de configuração para personalizar os testes. Para criar sua própria customização, basta criar um arquivo de configuração seguindo o padrão dos arquivos existentes: `nomeCustomizacao-transformer.js`.

## FAQ

1. **Posso usar outras linguagens de programação além de JavaScript?**
   - Não, as funções devem ser escritas exclusivamente em JavaScript para garantir compatibilidade com o `olos-studio`.
2. **Se eu não escrever testes para as funções, elas serão aceitas?**
   - Não, todas as funções devem ser testadas para garantir que estão funcionando corretamente. A ausência de testes resultará na falha do upload do commit ao repositório.
3. **É permitido misturar as convenções de código mencionadas?**
   - Sim, contanto que todas as variáveis e parâmetros sejam utilizados em alguma parte do código. A mistura de convenções é permitida, mas é importante garantir que o código seja claro e fácil de entender. Variáveis não utilizadas ou código morto resultarão em erros no `olos-studio`.
4. **Os parâmetros e as variáveis `studio_` podem ter o mesmo nome?**
   - Não. Isso resultará em um erro no `olos-studio`, pois o sistema não conseguirá diferenciar entre os dois. É importante garantir que os nomes sejam únicos para evitar conflitos e garantir a clareza do código.
5. **O que devo fazer se precisar de um tipo de dado que não seja `string`, `number` ou `boolean`?**
   - Você pode criar uma função complementar no `olos-studio` para lidar com o tipo específico que você precisa. Isso permitirá que você utilize o código da função do GitHub sem problemas, garantindo a compatibilidade e a funcionalidade desejada.
   - Exemplo: Se você precisar de um tipo de dado `array`, pode criar uma função complementar para lidar com arrays antes de usar a função do GitHub que depende desse tipo.
   - ```javascript
     export function processarArray(studio_array) {
       // Lógica para processar o array
       console.log(studio_array);
     }
     ```
6. **É permitido pular a etapa de criação de testes para as funções?**
   - Não, a criação de testes é uma parte essencial do processo de desenvolvimento. Os testes garantem que as funções estão funcionando corretamente e ajudam a identificar possíveis erros ou falhas. A ausência de testes resultará na falha do upload do commit ao repositório, portanto, é obrigatório criar testes para todas as funções desenvolvidas.
   -
7. **Ao executar os testes, recebi o erro `Error: Existem arquivos de função sem testes correspondentes: ...`, o que devo fazer?**
   - Esse erro indica que existem arquivos de função que não possuem testes correspondentes. Para resolver esse problema, você deve criar arquivos de teste para cada função que não possui um teste correspondente. Certifique-se de seguir a nomenclatura correta para os arquivos de teste, utilizando a extensão `.spec.js` e garantindo que os testes estejam cobrindo as funcionalidades das funções adequadamente. Após criar os testes, execute novamente o comando `npm test` para verificar se todos os testes estão passando corretamente.
