// Função para selecionar e carregar um arquivo XML
function selectXmlFile() {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xml';
    input.addEventListener('change', function (event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        console.log('Arquivo selecionado:', selectedFile.name);
        resolve(selectedFile);
      } else {
        console.log('Nenhum arquivo selecionado.');
        reject('Nenhum arquivo selecionado');
      }
    });

    input.click();
  });
}

// Função para fazer o parse de um arquivo XML
async function parseXmlFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async function (event) {
      const fileContent = event.target.result;

      // Chama a função para analisar o XML
      const parsedData = await parseNFeXml(fileContent);
      resolve(parsedData);
    };

    reader.readAsText(file);
  });
}

