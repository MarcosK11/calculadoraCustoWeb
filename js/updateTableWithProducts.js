updateTableWithProducts = function(DatalistFront, parsedData){
  const productTable = document.getElementById('productTable').querySelector('tbody');
  productTable.innerHTML = ''; // Limpa a tabela antes de inserir novos produtos
  

  DatalistFront.products.forEach(productData => {

    const productRow = `
    <tr class="toggle-details">
    <td id="nome">${productData.name}</td>
    <td>${productData.code}</td>
    <td>${productData.result}</td>
    <td>${productData.quantity}</td>
  </tr>
  <tr class="details">
    <td colspan="4">
    <div class="col align-items-center">
      <div class="row align-items-center justify-content-center">
          <label class="form-label fixed-label-width">Valor produto</label>
          <input type="text" id="Valor" class="form-control form-control-sm" placeholder="${productData.value}" disabled>
      </div>
      <div class="row align-items-center justify-content-center">
          <label class="form-label fixed-label-width">+ IPI </label>
          <input type="text" id="IPI" class="form-control form-control-sm" placeholder="${productData.ipi}" disabled>
      </div>
      <div class="row align-items-center justify-content-center">
          <label class="form-label fixed-label-width">+ ICMS ST</label>
          <input type="text" id="ICMS ST" class="form-control form-control-sm" placeholder="${productData.icmsST}" disabled>
      </div>
      <div class="row align-items-center justify-content-center">
          <label class="form-label fixed-label-width">+ Valor Seguro </label>
          <input type="text" id="Seguro" class="form-control form-control-sm" placeholder="${productData.segValue}" disabled>
      </div>
      <div class="row align-items-center justify-content-center">
          <label class="form-label fixed-label-width">+ Valor Despesas </label>
          <input type="text" id="Despesas" class="form-control form-control-sm" placeholder="${productData.othersValue}" disabled>
      </div>
      <div class="row align-items-center justify-content-center">
          <label class="form-label fixed-label-width">+ Frete </label>
          <input type="text" id="Frete" class="form-control form-control-sm" placeholder="${productData.freightValue}" disabled>
      </div>
      <div class="row align-items-center justify-content-center">
          <label class="form-label fixed-label-width">+ FCP ST </label>
          <input type="text" id="FCP ST" class="form-control form-control-sm" placeholder="${productData.fcpST}" disabled>
      </div>
      <div class="row align-items-center justify-content-center">
          <label class="form-label fixed-label-width">+ Difal </label>
          <input type="text" id="Difal" class="form-control form-control-sm" placeholder="${productData.difal}" disabled>
      </div>
      <div class="row align-items-center justify-content-center">
          <label class="form-label fixed-label-width">- ICMS desonerado </label>
          <input type="text" id="ICMS Des" class="form-control form-control-sm" placeholder="${productData.icmsDes}" disabled>
      </div>
      <div class="row align-items-center justify-content-center">
          <label class="form-label fixed-label-width">-  ICMS </label>
          <input type="text" id="ICMS" class="form-control form-control-sm" placeholder="${productData.icms}" disabled>
      </div>
      <div class="row align-items-center justify-content-center"> 
          <label class="form-label fixed-label-width">- PIS </label>
          <input type="text" id="PIS" class="form-control form-control-sm" placeholder="${productData.pis}" disabled>
      </div>
      <div class="row align-items-center justify-content-center">
          <label class="form-label fixed-label-width">- COFINS </label>
          <input type="text" id="COFINS" class="form-control form-control-sm" placeholder="${productData.cofins}" disabled>
      </div>
      <div class="row align-items-center justify-content-center">
        <label class="form-label fixed-label-width">- Desconto </label>
        <input type="text" class="form-control form-control-sm desconto" data-code="${productData.name}"  value="${productData.discount}">
      </div>
      <div id = "quantidadeD" class="row align-items-center justify-content-center">
        <label class="form-label fixed-label-width">% quantidade </label>
        <input type="text" class="form-control form-control-sm quantidade" data-code="${productData.name}" value="${productData.quantity}">
      </div>
      <div class="row align-items-center justify-content-center">
        <label class="form-label fixed-label-width">Resultado </label>
        <input type="text" id="resultado" class="form-control form-control-sm" placeholder="${productData.result}" disabled>
      </div>


  </div>
  </td>
  </tr>
  `;
    productTable.insertAdjacentHTML('beforeend', productRow);
  });

  parsedData.products.forEach(productData => {
    const quantityInput = document.querySelector(`.quantidade[data-code="${productData.name}"]`);
    const DiscountInput = document.querySelector(`.desconto[data-code="${productData.name}"]`);
  
    if (quantityInput) {
      quantityInput.addEventListener('input', function(event) {
        productData.quantity = parseFloat(event.target.value.replace(',', '.'));
  
        calculate(parsedData, productData);
      });
    }

    if (DiscountInput) {
      DiscountInput.addEventListener('input', function(event) {
        productData.discount = parseFloat(event.target.value.replace(',', '.'));
  
        calculate(parsedData, productData);
      });
    }

  });

}




updateValues = function(dataFront)
{
    /*const freightValue = parseFloat(ValueDataList.total.freightValue).toFixed(2); // Formata para duas casas decimais
    const freightElement = document.getElementById('Frete');
    freightElement.value  = `${freightValue}`;

    const segValue = parseFloat(ValueDataList.total.segValue).toFixed(2); // Formata para duas casas decimais
    const segElement = document.getElementById('Seguro');
    segElement.value  = `${segValue}`;

    const othersValue = parseFloat(ValueDataList.total.othersValue).toFixed(2); // Formata para duas casas decimais
    const orthersElement = document.getElementById('Desp');
    orthersElement.value  = `${othersValue}`;*/


    const segInput = document.getElementById('Seguro');
    segInput.addEventListener('input', function(event) {
      dataFront.total.segValue = parseFloat(event.target.value.replace(',', '.'));
      });
    
    const othersInput = document.getElementById('Desp');
      othersInput.addEventListener('input', function(event) {
        dataFront.total.othersValue = parseFloat(event.target.value.replace(',', '.'));
      });
    
      const freightInput = document.getElementById('Frete');
      freightInput.addEventListener('input', function(event) {
        dataFront.total.freightValue= parseFloat(event.target.value.replace(',', '.'));
      });
}

