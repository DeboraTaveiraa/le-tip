# Le/Tip

👉 [Demo](https://DeboraTaveiraa.github.io/le-tip)

**Calculadora de gorjeta** com:

- Divisão da conta por pessoas
- Opção dos valores serem em USD(Dólar) ou EUR(Euro)
- Conversão do valor total para BRL(R$) via chamada (REST) utilizando a API [Currency Layer](https://currencylayer.com/)

### Instalação

1. Clone o projeto localmente
2. Instale as dependências com o comando:

```
yarn install
```

3. Rode o projeto com o comando:

```
yarn serve
```

#### Importante:

Para realizar a requisição na API externa ([Currency Layer](https://currencylayer.com/)) é necessário a utilização de uma chave de acesso gerada ao se cadastrar no site. Com a chave em mãos, basta adicioná-la no arquivo *.env* do projeto em VUE_APP_API_KEY_CURRENCY_LAYER=SUA_CHAVE_DE_ACESSO_AQUI
