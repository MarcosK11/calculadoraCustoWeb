
const products = [
  { name: 'Produto 1', code: '001', price: 'R$19.99', quantity: '10' },
  { name: 'Product 2', code: '002', price: '$29.99', quantity: '5' },
  // Add more product objects here
];

const productTable = document.getElementById('productTable').querySelector('tbody');

products.forEach(product => {
  const productRow = `
    <tr class="toggle-details">
      <td>${product.name}</td>
      <td>${product.code}</td>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
    </tr>
    <tr class="details">
      <td colspan="4">
      <div class="col align-items-center">
        <div class="row align-items-center justify-content-center">
            <label class="form-label fixed-label-width">Valor produto</label>
            <input type="text" id="Valor" class="form-control form-control-sm" placeholder="R$0,00" disabled>
        </div>
        <div class="row align-items-center justify-content-center">
            <label class="form-label fixed-label-width">+ IPI </label>
            <input type="text" id="IPI" class="form-control form-control-sm" placeholder="R$0,00" disabled>
        </div>
        <div class="row align-items-center justify-content-center">
            <label class="form-label fixed-label-width">+ ICMS ST</label>
            <input type="text" id="IPI" class="form-control form-control-sm" placeholder="R$0,00" disabled>
        </div>
        <div class="row align-items-center justify-content-center">
            <label class="form-label fixed-label-width">+ Valor Seguro </label>
            <input type="text" id="IPI" class="form-control form-control-sm" placeholder="R$0,00" disabled>
        </div>
        <div class="row align-items-center justify-content-center">
            <label class="form-label fixed-label-width">+ Valor Despesas </label>
            <input type="text" id="IPI" class="form-control form-control-sm" placeholder="R$0,00" disabled>
        </div>
        <div class="row align-items-center justify-content-center">
            <label class="form-label fixed-label-width">+ Frete </label>
            <input type="text" id="IPI" class="form-control form-control-sm" placeholder="R$0,00" disabled>
        </div>
        <div class="row align-items-center justify-content-center">
            <label class="form-label fixed-label-width">+ FCP ST </label>
            <input type="text" id="IPI" class="form-control form-control-sm" placeholder="R$0,00" disabled>
        </div>
        <div class="row align-items-center justify-content-center">
            <label class="form-label fixed-label-width">+ Difal </label>
            <input type="text" id="IPI" class="form-control form-control-sm" placeholder="R$0,00" disabled>
        </div>
        <div class="row align-items-center justify-content-center">
            <label class="form-label fixed-label-width">- ICMS desonerado </label>
            <input type="text" id="IPI" class="form-control form-control-sm" placeholder="R$0,00" disabled>
        </div>
        <div class="row align-items-center justify-content-center">
            <label class="form-label fixed-label-width">-  ICMS </label>
            <input type="text" id="IPI" class="form-control form-control-sm" placeholder="R$0,00" disabled>
        </div>
        <div class="row align-items-center justify-content-center">
            <label class="form-label fixed-label-width">- PIS </label>
            <input type="text" id="IPI" class="form-control form-control-sm" placeholder="R$0,00" disabled>
        </div>
        <div class="row align-items-center justify-content-center">
            <label class="form-label fixed-label-width">- COFINS </label>
            <input type="text" id="IPI" class="form-control form-control-sm" placeholder="R$0,00" disabled>
        </div>
    </div>
  </td>
</tr>
  `;
  productTable.insertAdjacentHTML('beforeend', productRow);
});

toggleDetails.forEach(row => {
  row.addEventListener('click', () => {
    const detailsRow = row.nextElementSibling;
    detailsRow.classList.toggle('expanded');
  });
});
