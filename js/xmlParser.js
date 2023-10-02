// Função para fazer o parse dos dados gerais da nota fiscal
function parseGeneralData(xmlDoc) {
  const totalElement = xmlDoc.querySelector('total');
  
  const freightValue = totalElement.querySelector('vFrete').textContent || 0;
  const segValue = totalElement.querySelector('vSeg').textContent|| 0;
  const othersValue = totalElement.querySelector('vOutro').textContent || 0;
  const discountValue = totalElement.querySelector('vDesc').textContent || 0;
  const totalValue = totalElement.querySelector('vProd').textContent || 0;

  return {
    freightValue,
    segValue,
    othersValue,
    discountValue,
    totalValue,
  };
}

// Função para fazer o parse dos produtos da nota fiscal
function parseProducts(xmlDoc) {
  const products = xmlDoc.querySelectorAll('det');
  
  const parsedProducts = [];

  products.forEach(productNode => {
    const product = {
      name: productNode.querySelector('xProd')?.textContent || 'Sem nome',
      code: productNode.querySelector('cProd')?.textContent || '0',
      price: parseFloat(productNode.querySelector('vUnCom')?.textContent || 0),
      quantity: parseFloat(productNode.querySelector('qCom')?.textContent || 0),
      value: parseFloat(productNode.querySelector('vProd')?.textContent || 0),
      ipi: parseFloat(productNode.querySelector('vIPI')?.textContent || 0),
      icmsST: parseFloat(productNode.querySelector('vICMSST')?.textContent || 0),
      segValue: 0,
      othersValue: 0,
      freightValue: 0,
      fcpST: parseFloat(productNode.querySelector('vFCPST')?.textContent || 0),
      difal: parseFloat(productNode.querySelector('vICMSUFDest')?.textContent || 0),
      icmsDes: parseFloat(productNode.querySelector('vICMSDeson')?.textContent || 0),
      icms: parseFloat(productNode.querySelector('vICMS')?.textContent || 0),
      pis: parseFloat(productNode.querySelector('vPIS')?.textContent || 0),
      cofins: parseFloat(productNode.querySelector('vCOFINS')?.textContent || 0),
      discount: parseFloat(productNode.querySelector('vDesc')?.textContent || 0),
      result: 0,
    };
    
    parsedProducts.push(product);
  });

  return parsedProducts;
}

// Função para fazer o parse do XML da nota fiscal
window.parseNFeXml = function(xml) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, 'text/xml');

  const parsedData = {
    total: parseGeneralData(xmlDoc),
    products: parseProducts(xmlDoc),
  };

  return parsedData;
};
