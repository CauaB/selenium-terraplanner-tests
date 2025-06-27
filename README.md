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









     <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h1 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">Resultados dos Testes de Aceitação do TerraPlanner</h1>
  <p>Aqui estão os resultados detalhados dos testes de aceitação executados para o TerraPlanner.</p>

  <br>

  <h2 style="color: #34495e; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Teste de Aceitação de Pesquisa de Mapa do TerraPlanner</h2>
  <p><strong>Status:</strong> Concluído</p>
  <ul>
    <li>
      <strong>Teste:</strong> Pesquisa de endereço válido e completo.
      <ul>
        <li><strong>Resultado:</strong> &#10004; Deve pesquisar um endereço completo e válido e centralizar o ponto exato (9085ms)</li>
      </ul>
    </li>
    <li>
      <strong>Teste:</strong> Exibir notificação de erro para um endereço inexistente.
      <ul>
        <li><strong>Resultado:</strong> 1) Deve exibir notificação de erro para um endereço inexistente</li>
      </ul>
    </li>
    <li>
      <strong>Teste:</strong> Pesquisa com campo vazio.
      <ul>
        <li><strong>Resultado:</strong> &#10004; Deve exibir a notificação de erro da API ao pesquisar com o campo vazio (557ms)</li>
      </ul>
    </li>
    <li>
      <strong>Teste:</strong> Selecionou a primeira sugestão.
      <ul>
        <li><strong>Resultado:</strong> &#10004; Deve pesquisar um endereço e selecionar a primeira sugestão (1868ms)</li>
      </ul>
    </li>
    <li>
      <strong>Teste:</strong> Pesquisa de somente (cidade, estado).
      <ul>
        <li><strong>Resultado:</strong> &#10004; Deve pesquisar apenas com cidade e estado e centralizar o ponto exato (5243ms)</li>
      </ul>
    </li>
  </ul>

  <br>

  <h2 style="color: #34495e; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Teste de Rota com Tipo de Estrada "Mais rápida"</h2>
  <p><strong>Status:</strong> Concluído</p>
  <p><strong>Passos Executados:</strong></p>
  <ul>
    <li>Menu lateral aberto.</li>
    <li>Clicou em Rotas.</li>
    <li>Origem selecionada.</li>
    <li>Destino selecionado.</li>
    <li>Rota adicionada.</li>
    <li>Aba de Parâmetros aberta.</li>
    <li>Seção de "Tipos de estradas" aberta.</li>
    <li>Tipo de estrada "Mais rápida" selecionado.</li>
  </ul>
  <ul>
    <li><strong>Resultado:</strong> &#10004; Deve planejar uma rota e definir o tipo de estrada como mais rápida (11893ms)</li>
  </ul>
</div>
