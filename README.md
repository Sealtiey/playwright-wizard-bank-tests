# Playwright · Wizard Bank (área do cliente)

Testes automatizados de interface com **Playwright + JavaScript** para o **[XYZ Bank](https://www.globalsqa.com/angularJs-protractor/BankingProject/)**, um app bancário de demonstração em AngularJS.

O exercício é do módulo *Playwright Test Automation Core* da Mate Academy: escrever do zero os testes da área do cliente.

> Este repositório registra meus **estudos de automação**. Meu foco profissional hoje é QA manual (web, mobile e API). Veja o portfólio completo em **[sealtiey.github.io](https://sealtiey.github.io)**.

## Casos de teste

| Arquivo | Cenário |
|---|---|
| [`assertCustomerAccountData`](tests/assertCustomerAccountData.spec.js) | Cliente vê os dados corretos da conta (número, saldo, moeda) |
| [`assertCustomerCorrectLogout`](tests/assertCustomerCorrectLogout.spec.js) | Logout leva de volta à tela de seleção de cliente |
| [`assertDepositCanBeOpened`](tests/assertDepositCanBeOpened.spec.js) | Formulário de depósito abre corretamente |
| [`assertEmptyTransactionsLIst`](tests/assertEmptyTransactionsLIst.spec.js) | Lista de transações vazia para conta sem movimentação |
| [`assertErrorWithdrawWhenEmptyBalance`](tests/assertErrorWithdrawWhenEmptyBalance.spec.js) | Saque com saldo zero exibe mensagem de erro |

## Como ver o que eu fiz

O primeiro commit é o template da Mate Academy, só com os nomes dos testes. O commit **"Solução: 5 testes do Wizard Bank"** traz o código que escrevi.

## Como rodar

```bash
npm ci
npx playwright install
npx playwright test
```

**Ferramentas:** Playwright · JavaScript · Node.js · Git
