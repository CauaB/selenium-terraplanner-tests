// terraplanner.test.mjs
import { Builder, By, Key, until } from 'selenium-webdriver';
import { assert } from 'chai';

describe('Teste de Aceitação de Pesquisa de Mapa do TerraPlanner', function() {
    this.timeout(30000); // Define um tempo limite de 30 segundos para o teste
    let driver;

    // Antes de todos os testes, inicializa o driver do navegador
    before(async function() {
        driver = await new Builder().forBrowser('firefox').build();
    });

    // Depois de todos os testes, fecha o navegador
    after(async function() {
        await driver.quit();
    });

