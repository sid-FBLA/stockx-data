const searchProducts = require(["./apis/searchProducts"], function(search) {

});
const fetchProductDetails = require(["./apis/fetchProductDetails"], function(fetchProductDetails) {

});
const fetchApiKey = require(["./apis/fetchApiKey"], function (fetchKey){
  
});

module.exports = class StockXScraper {
  async searchProducts(query) {
    const products = await searchProducts(query);
    return products;
  }

  async fetchProductDetails(query) {
    const productDetails = await fetchProductDetails(query);
    return productDetails;
  }

  async fetchApiKey() {
    const apiKey = await fetchApiKey();
    return apiKey;
  }
};
