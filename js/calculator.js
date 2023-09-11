calculateFreight = function(total, product) 
{
        const freight = total.freightValue * (product.value / total.totalValue);
        return Math.round(freight * 100) / 100; // Arredonda para 2 casas decimais
        
}

calculateSeg = function(total, product) 
{
        const seg = total.segValue * (product.value / total.totalValue);
        console.log('seguro calculado:', seg);
        return Math.round(seg * 100) / 100; // Arredonda para 2 casas decimais
}

calculateOthers = function(total, product) 
{
        const others = total.othersValue * (product.value / total.totalValue);
        console.log('despesas calculado:', others);
        return Math.round(others * 100) / 100; // Arredonda para 2 casas decimais
}


calculateCost = function(product){

    const selectElement = document.getElementById('regimeType');

    const selectedValue = selectElement.value;

  switch (selectedValue) {
    case '0':
        product.icms = 0;
        product.pis = 0;
        product.cofins = 0;
        result = (product.value + product.ipi + product.icmsST + product.fcpST + product.freightValue + product.othersValue + product.segValue + product.difal - product.icmsDes - product.discount) / product.quantity;

        // precoCusto = (valorProduto + valorIPI + valorST + FCPST + frete + despesas + seguro + difal - icmsDesonerado) / produto.prod.qTrib;
        return Math.round(result * 100) / 100;
      break;

    case '1':
        product.pis = 0;
        product.cofins = 0;
      if (product.icmsST > 0)
      {
        product.icms = 0;
        result = (product.value + product.ipi + product.icmsST + product.fcpST + product.freightValue + product.othersValue + product.segValue + product.difal - product.icmsDes - product.discount - product.icms) / product.quantity;
        return Math.round(result * 100) / 100;

      } else
      {
        result = (product.value + product.ipi + product.icmsST + product.fcpST + product.freightValue + product.othersValue + product.segValue + product.difal - product.icmsDes - product.discount - product.icms) / product.quantity;
        return Math.round(result * 100) / 100;
      }




    case '2':
      product.pis = 0;
      product.cofins = 0;
    if (product.icmsST > 0)
    {
      product.icms = 0;
      result = (product.value + product.ipi + product.icmsST + product.fcpST + product.freightValue + product.othersValue + product.segValue + product.difal - product.icmsDes - product.discount - product.icms) / product.quantity;
      return Math.round(result * 100) / 100;

    } else
    {
      result = (product.value + product.ipi + product.icmsST + product.fcpST + product.freightValue + product.othersValue + product.segValue + product.difal - product.icmsDes - product.discount - product.icms) / product.quantity;
      return Math.round(result * 100) / 100;
    }


    case '3':

    if (product.icmsST > 0)
    {
      product.icms = 0;
      result = (product.value + product.ipi + product.icmsST + product.fcpST + product.freightValue + product.othersValue + product.segValue + product.difal - product.icmsDes - product.discount - product.icms - product.pis - product.cofins) / product.quantity;
      return Math.round(result * 100) / 100;

    } else
    {
      result = (product.value + product.ipi + product.icmsST + product.fcpST + product.freightValue + product.othersValue + product.segValue + product.difal - product.icmsDes - product.discount - product.icms - product.pis - product.cofins) / product.quantity;
      return Math.round(result * 100) / 100;
    }

    default:
      console.log('quebrou! regime', selectedValue);
      break;
  };
}

calculate = function(Datalist)
{

    
    Datalist.products.forEach(productData => 
      {
        //faz os calculos de frete, despesas, seguro
        productData.freightValue = calculateFreight(Datalist.total, productData);
        productData.othersValue = calculateOthers(Datalist.total, productData);
        productData.segValue = calculateSeg(Datalist.total, productData);

        //calcula preço de custo
        productData.result = calculateCost (productData);
      })
    //console.log('valor total seg', productData.result);
}


