document.addEventListener('DOMContentLoaded', async function () {
  let dataFront;
  let parsedData;

  const selectXmlButton = document.getElementById('selectXmlButton');
  selectXmlButton.addEventListener('click', async function () {
    try {
      selectedFile = await selectXmlFile();


      parsedData = await parseXmlFile(selectedFile);

      dataFront = _.cloneDeep(parsedData);

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
          
          //Função para atualizar valores(frete,despesas,seguro)
          updateValues(parsedData);
          updateValues(dataFront);

          calculate(dataFront);
          updateTableWithProducts(dataFront, parsedData);
          addToggleListeners();

    } else {
      alert('Nenhum arquivo XML foi carregado ainda.');
    }
});


});





