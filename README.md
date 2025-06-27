# selenium-terraplanner-tests

## Teste de Aceitação Front-End no software SIG
( [https://www.terraplanner.org/](https://www.terraplanner.org/) )

---

### 01. Ferramentas

* `Node.js`
* `npm`
* `selenium-webdriver`
* `geckodriver`: driver para controlar o Mozilla Firefox.
* `mocha`: framework para rodar os testes.
* `chai`: biblioteca para as asserções (assert).
* **Instalar dependências:** `npm install`
#### Execução dos testes

```bash
PS C:\Users\caua\Desktop\selenium-terraplanner-tests> npm test
> selenium-terraplanner-tests@1.0.0 test
> mocha terraplanner.test.mjs
```

### 02. Testes

##### Teste concluído: pesquisa de endereço válido e completo. ✔ Deve pesquisar um endereço completo e válido e centralizar o ponto exato (9085ms). Seletor utilizado:By.css('input[data-testid="input-field-search"]');

##### Teste concluído: Pesquisa com campo vazio. ✔ Deve exibir a notificação de erro da API ao pesquisar com o campo vazio (557ms). Seletores utilizados: By.css('input[data-testid="input-field-search"]'); By.css('div[role="status"][data-state="open"]');

##### Teste concluído: Selecionou a primeira sugestão. ✔ Deve pesquisar um endereço e selecionar a primeira sugestão (1868ms). Seletores utilizados: By.css('input[data-testid="input-field-search"]'); By.id('search-result-0-autocomplete');

##### Teste concluído. ✔ Deve planejar uma rota e definir o tipo de estrada como mais rápida (11893ms). Seletores utilizados: By.css('[data-testid="button-controlhud"]'); By.css('[data-testid="input-field-origin"]'); By.id('search-result-0-autocomplete'); By.css('[data-testid="input-field-destiny"]'); By.id('button-add-direction'); By.xpath("//span[text()='Parâmetros']/.."); By.xpath("//span[text()='Tipos de estradas']/.."); By.css('[data-testid="radio-button-fastest-preferences-routes"]'); Obs: caso não clique por “scroll”, usar js para forçar o click, driver.executeScript("arguments[0].click();", fastestRoadElement);

##### 1) deve exibir notificação de erro para um endereço inexistente. ❌

```text
 Teste de Aceitação de Pesquisa de Mapa do TerraPlanner
        deve exibir notificação de erro para um endereço inexistente:
      AssertionError: O teste falhou pois a aplicação ainda não exibe erro para endereço inexistente. Detalhe: A notificação de erro para endereço inexistente não foi encontrada.
 Wait timed out after 5005ms 
      at Context.<anonymous> (file:///C:/Users/caua/Desktop/selenium-terraplanner-tests/terraplanner.test.mjs:73:20)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
```
##### Teste concluído: pesquisa de somente (cidade, estado). ✔ Deve pesquisar apenas com cidade e estado e centralizar o ponto exato (5243ms). Seletor utilizado: By.css('input[data-testid="input-field-search"]');

##### Obs: Seletor para notificação de aviso/erro como 'Request failed with status code 400': By.css('div[role="status"][data-state="open"]');

### 03. Conclusão

#####   Concluindo, dos 6 testes realizados, 5 foram concluídos com sucesso e 1 falhou. Sucesso (5 testes): As principais funções, como pesquisar endereços válidos, usar sugestões, planejar rotas e lidar com o campo de busca vazio, estão funcionando corretamente. Falha (1 teste): O sistema não avisa o usuário com uma mensagem de erro quando ele pesquisa por um endereço inexistente.
