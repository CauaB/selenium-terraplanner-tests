# selenium-terraplanner-tests
# Teste de Aceitação Front-End no software SIG 
( https://www.terraplanner.org/ )

PS C:\Users\caua\Desktop\selenium-terraplanner-tests> npm test

> selenium-terraplanner-tests@1.0.0 test
> mocha terraplanner.test.mjs

  Teste de Aceitação de Pesquisa de Mapa do TerraPlanner
Teste concluído: pesquisa de endereço válido e completo.
    ✔ deve pesquisar um endereço completo e válido e centralizar o ponto exato (9085ms)
    1) deve exibir notificação de erro para um endereço inexistente
Teste concluído: Pesquisa com campo vazio.
    ✔ deve exibir a notificação de erro da API ao pesquisar com o campo vazio (557ms)
Teste concluído: Selecionou a primeira sugestão.
    ✔ deve pesquisar um endereço e selecionar a primeira sugestão (1868ms)
Menu lateral aberto.
Clicou em Rotas.
Origem selecionada.
Destino selecionado.
Rota adicionada.
Aba de Parâmetros aberta.
Seção de "Tipos de estradas" aberta.
Tipo de estrada "Mais rápida" selecionado.
Teste concluído. Rota com tipo de estrada "Mais rápida".
    ✔ deve planejar uma rota e definir o tipo de estrada como mais rápida (11893ms)
Teste concluído: pesquisa de somente (cidade, estado).
    ✔ deve pesquisar apenas com cidade e estado e centralizar o ponto exato (5243ms)


  5 passing (38s)
  1 failing

  1) Teste de Aceitação de Pesquisa de Mapa do TerraPlanner
       deve exibir notificação de erro para um endereço inexistente:
     AssertionError: O teste falhou pois a aplicação ainda não exibe erro para endereço inexistente. Detalhe: A notificação de erro para endereço inexistente não foi encontrada.
Wait timed out after 5214ms
      at Context.<anonymous> (file:///C:/Users/caua/Desktop/selenium-terraplanner-tests/terraplanner.test.mjs:73:20)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
