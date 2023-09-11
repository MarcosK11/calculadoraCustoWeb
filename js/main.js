document.addEventListener('DOMContentLoaded', async function () {
  let dataFront;
  let parsedData;

  const selectXmlButton = document.getElementById('selectXmlButton');
  selectXmlButton.addEventListener('click', async function () {
    try {
      selectedFile = await selectXmlFile();
      console.log('arquivo selecionado 2:', selectedFile);

      console.log('Dados da NFe Inicio:', parsedData);
      console.log('Dados da NFe Inicio:', dataFront);

      parsedData = await parseXmlFile(selectedFile);

      dataFront = _.cloneDeep(parsedData);


      console.log('Dados da NFe Inicio:', parsedData);
      console.log('Dados da NFe Inicio:', dataFront);

        //Remover atributo disabled
        const inputsToDisable = document.querySelectorAll('.form-control');
        inputsToDisable.forEach(input => {
          input.removeAttribute('disabled');
        });

        //Função para atualizar valores(frete,despesas,seguro)
        updateValues(parsedData);

        calculate(dataFront);

        //Função para atualizar tabela
        updateTableWithProducts(dataFront, parsedData);

        //Função para expandir os produtos
        addToggleListeners();

      } catch (error) 
      {
        console.error('Erro ao carregar e analisar o XML:', error);
      }
    });




  const reCalculateButton = document.getElementById('reCalculate');
  reCalculateButton.addEventListener('click', function() {
    if (dataFront) {
        
        dataFront = _.cloneDeep(parsedData);

        /*const segInput = document.getElementById('Seguro');
        segInput.addEventListener('input', function(event) {
          dataFront.total.segValue = parseFloat(event.target.value.replace(',', '.'));
            console.log('frete:', parsedData.total.freightValue);
          });
        
        const othersInput = document.getElementById('Desp');
          othersInput.addEventListener('input', function(event) {
            dataFront.total.othersValue = parseFloat(event.target.value.replace(',', '.'));
          });
        
          const freightInput = document.getElementById('Frete');
          freightInput.addEventListener('input', function(event) {
            dataFront.total.freightValue= parseFloat(event.target.value.replace(',', '.'));
          });*/
          
          //Função para atualizar valores(frete,despesas,seguro)
          updateValues(parsedData);

          console.log('Dados da NFe R:', parsedData);
          console.log('Dados da NFe R:', dataFront);
          updateValues(dataFront);

          calculate(dataFront);
          updateTableWithProducts(dataFront, parsedData);
          addToggleListeners();

    } else {
      console.log('Nenhum arquivo XML foi carregado ainda.');
    }
});


});





