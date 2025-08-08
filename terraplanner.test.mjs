// terraplanner.test.mjs

import { Builder, By, Key, until } from 'selenium-webdriver';
import { assert } from 'chai';

describe('Teste de Aceitação de Pesquisa de Mapa do TerraPlanner', function() {
    this.timeout(30000); // Define um tempo limite de 30 segundos para o teste
    let driver;

    // Inicializa o driver do navegador
    before(async function() {
        driver = await new Builder().forBrowser('firefox').build();
    });

    // Fecha o navegador
    after(async function() {
        await driver.quit();
    });

    it('deve pesquisar um endereço completo e válido e centralizar o ponto exato', async function() {
        await driver.get('https://www.terraplanner.org/'); // Navega para a URL da aplicação
        await driver.manage().window().maximize(); // Maximiza a janela

        const searchInputSelector = By.css('input[data-testid="input-field-search"]'); // Seletor da barra de pesquisa
        await driver.wait(until.elementLocated(searchInputSelector), 10000); // Espera até que o campo de busca esteja presente e visível
        const searchInput = await driver.findElement(searchInputSelector);

        const address = "Avenida Armando Fajardo, 80, João Monlevade, MG"; // Insere o endereço no campo de busca
        await searchInput.sendKeys(address, Key.RETURN);

        await driver.sleep(5000); // Aguarda um tempo para o mapa carregar e centralizar: Aguarda 5 segundos para a ação ser concluída visualmente.
        
        // Garante que nenhuma mensagem de erro seja exibida para um endereço válido.
        // Como não foi achado algum id ou classe o idel é usar o XPath para encontrar o elemento que contém o texto da mensagem de erro.
        const errorMessageExpectedText = 'Request failed with status code 400';
        const errorElementSelector = By.xpath(`//div[contains(text(), '${errorMessageExpectedText}')]`);
        const errorMessages = await driver.findElements(errorElementSelector);
        assert.equal(errorMessages.length, 0, 'Nenhuma mensagem de erro deve ser exibida após a pesquisa bem-sucedida.');

        console.log('Teste concluído: pesquisa de endereço válido e completo.');
    });

    it('deve exibir notificação de erro para um endereço inexistente', async function() {
        await driver.get('https://www.terraplanner.org/');
        await driver.manage().window().maximize();

        const searchInputSelector = By.css('input[data-testid="input-field-search"]');
        await driver.wait(until.elementLocated(searchInputSelector), 10000);
        const searchInput = await driver.findElement(searchInputSelector);

        // Endereço que não existe
        const nonExistentAddress = "rua star wars do brasil";
        await searchInput.sendKeys(nonExistentAddress, Key.RETURN);

        // A expectativa é que a notificação de erro apareça
        const notificationSelector = By.css('div[role="status"][data-state="open"]');

        try {
            // Espera que a notificação de erro apareça
            await driver.wait(until.elementLocated(notificationSelector), 5000, 'A notificação de erro para endereço inexistente não foi encontrada.');

            const notification = await driver.findElement(notificationSelector);
            
            assert.isTrue(await notification.isDisplayed(), 'A notificação de erro deveria estar visível.');

            const notificationText = await notification.getText();
            
            assert.include(notificationText, 'não encontrado', 'Deveria exibir uma mensagem de "endereço não encontrado".');

            console.log('Este log só aparecerá quando o bug for corrigido e o teste passar.');

        } catch (e) {
            // Se o wait falhar.
            assert.fail('O teste falhou pois a aplicação ainda não exibe erro para endereço inexistente. Detalhe: ' + e.message);
        }
    });

    it('deve exibir a notificação de erro da API ao pesquisar com o campo vazio', async function() {
        await driver.get('https://www.terraplanner.org/');
        await driver.manage().window().maximize();

        const searchInputSelector = By.css('input[data-testid="input-field-search"]');
        await driver.wait(until.elementLocated(searchInputSelector), 10000);
        const searchInput = await driver.findElement(searchInputSelector);

        await searchInput.sendKeys(Key.RETURN);

        // Seletor encontrado para a notificação de erro
        const notificationSelector = By.css('div[role="status"][data-state="open"]');

        try {
            // Espera que a notificação com data-state="open" apareça
            await driver.wait(until.elementLocated(notificationSelector), 5000, 'A notificação de erro (div[data-state="open"]) não foi encontrada.');

            const notification = await driver.findElement(notificationSelector);
            
            // Garante que a notificação está visível
            assert.isTrue(await notification.isDisplayed(), 'A notificação de erro deveria estar visível.');

            // Pega o texto de dentro da notificação
            const notificationText = await notification.getText();

            // Verifica se o texto contém as partes esperadas da mensagem
            assert.include(notificationText, 'Aviso!!', 'O título "Aviso!!" não foi encontrado na notificação.');
            assert.include(notificationText, 'Request failed with status code 400', 'O corpo do erro "Request failed..." não foi encontrado na notificação.');

            console.log('Teste concluído: Pesquisa com campo vazio.');

        } catch (e) {
            // Se o wait falhar.
            assert.fail('O teste falhou porque a notificação de erro esperada não apareceu a tempo. Detalhe: ' + e.message);
        }
    });

    it('deve pesquisar um endereço e selecionar a primeira sugestão', async function() {
        await driver.get('https://www.terraplanner.org/');
        await driver.manage().window().maximize();

        const searchInputSelector = By.css('input[data-testid="input-field-search"]');
        await driver.wait(until.elementLocated(searchInputSelector), 10000);
        const searchInput = await driver.findElement(searchInputSelector);

        // Digita um endereço parcial para acionar as sugestões
        const partialAddress = "Avenida Wilson Avarenga, MG";
        await searchInput.sendKeys(partialAddress);

        // Define o seletor para a primeira sugestão
        const firstSuggestionSelector = By.id('search-result-0-autocomplete');
        
        // Espera a primeira sugestão aparecer na tela
        await driver.wait(until.elementLocated(firstSuggestionSelector), 5000, 'A primeira sugestão não foi encontrada a tempo.');
        const firstSuggestion = await driver.findElement(firstSuggestionSelector);
        
        const suggestionElementToDisappear = firstSuggestion; // Antes de clicar, guarda a referência ao elemento para verificar se some depois
        await firstSuggestion.click(); // Clica na sugestão
        //  Verifica se a lista de sugestões desapareceu após o clique (o elemento se torna "velho" ou "stale")
        await driver.wait(until.stalenessOf(suggestionElementToDisappear), 5000, 'A lista de sugestões não desapareceu após o clique.');
        
        console.log('Teste concluído: Selecionou a primeira sugestão.');

        const notificationSelector = By.css('div[role="status"][data-state="open"]');
        const notifications = await driver.findElements(notificationSelector);
        assert.equal(notifications.length, 0, 'Nenhuma notificação de erro deveria ser exibida.');
    });

    it('deve planejar uma rota e definir o tipo de estrada como mais rápida', async function() {
        this.timeout(45000);
        
        await driver.get('https://www.terraplanner.org/');
        await driver.manage().window().maximize();
        const sidebarButtonSelector = By.css('[data-testid="button-controlhud"]');
        await driver.wait(until.elementLocated(sidebarButtonSelector), 10000);
        await driver.findElement(sidebarButtonSelector).click();
        console.log('Menu lateral aberto.');

        const routesMenuSelector = By.css('[data-testid="button-menu-routes"]');
        await driver.wait(until.elementLocated(routesMenuSelector), 10000);
        await driver.findElement(routesMenuSelector).click();
        console.log('Clicou em Rotas.');

        const originInputSelector = By.css('[data-testid="input-field-origin"]');
        await driver.wait(until.elementLocated(originInputSelector), 10000);
        const originInput = await driver.findElement(originInputSelector);
        await originInput.sendKeys("João Monlevade, MG");
        const firstOriginSuggestion = By.id('search-result-0-autocomplete'); 
        await driver.wait(until.elementLocated(firstOriginSuggestion), 10000);
        await driver.findElement(firstOriginSuggestion).click();
        console.log('Origem selecionada.');

        const destinationInputSelector = By.css('[data-testid="input-field-destiny"]');
        const destinationInput = await driver.findElement(destinationInputSelector);
        await destinationInput.sendKeys("Belo Horizonte, MG");
        const firstDestinationSuggestion = By.id('search-result-0-autocomplete'); 
        await driver.wait(until.elementLocated(firstDestinationSuggestion), 10000);
        await driver.findElement(firstDestinationSuggestion).click();
        console.log('Destino selecionado.');

        const addRouteButtonSelector = By.id('button-add-direction');
        await driver.wait(until.elementLocated(addRouteButtonSelector), 10000);
        await driver.findElement(addRouteButtonSelector).click();
        console.log('Rota adicionada.');

        await driver.sleep(3000);
        const parametersTabSelector = By.xpath("//span[text()='Parâmetros']/..");
        await driver.wait(until.elementLocated(parametersTabSelector), 10000);
        await driver.findElement(parametersTabSelector).click();
        console.log('Aba de Parâmetros aberta.');

        const roadTypesHeaderSelector = By.xpath("//span[text()='Tipos de estradas']/..");
        await driver.wait(until.elementLocated(roadTypesHeaderSelector), 10000);
        await driver.findElement(roadTypesHeaderSelector).click();
        console.log('Seção de "Tipos de estradas" aberta.');
        
        const fastestRoadSelector = By.css('[data-testid="radio-button-fastest-preferences-routes"]');
        await driver.wait(until.elementLocated(fastestRoadSelector), 10000, "Input 'Mais Rápida' não foi localizado.");
        const fastestRoadElement = await driver.findElement(fastestRoadSelector);
        
        // JavaScript para forçar o clique
        await driver.executeScript("arguments[0].click();", fastestRoadElement);
        console.log('Tipo de estrada "Mais rápida" selecionado.');

        console.log('Teste concluído. Rota com tipo de estrada "Mais rápida".');
        await driver.sleep(4000);
    });

        it('deve pesquisar apenas com cidade e estado e centralizar o ponto exato', async function() {
        await driver.get('https://www.terraplanner.org/');
        await driver.manage().window().maximize();

        const searchInputSelector = By.css('input[data-testid="input-field-search"]');
        await driver.wait(until.elementLocated(searchInputSelector), 10000); 
        const searchInput = await driver.findElement(searchInputSelector);

        const address = "Almenara, MG";
        await searchInput.sendKeys(address, Key.RETURN);
        await driver.sleep(5000); 

        const errorMessageExpectedText = 'Request failed with status code 400';
        const errorElementSelector = By.xpath(`//div[contains(text(), '${errorMessageExpectedText}')]`);
        const errorMessages = await driver.findElements(errorElementSelector);
        assert.equal(errorMessages.length, 0, 'Nenhuma mensagem de erro deve ser exibida após a pesquisa bem-sucedida.');

        console.log('Teste concluído: pesquisa de somente (cidade, estado).');
    });

});

