
const StockXData = require(['./src/stockx'], function (data) {

});
const stockX = new StockXData();

stockX.searchProducts("Jordan 1 Clay Green").then((searchedProduct) => {
  console.log(searchedProduct)
});

module.exports = StockXData;
