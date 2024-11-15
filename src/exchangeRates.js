// Fetches current crypto prices on Kraken
function krakenCryptoPrices() {
var currency = 'EUR';
var krakenTradePairs = 'xbteur,etheur,xdgxbt'
var apiurl = 'https://api.kraken.com/0/public/Ticker?pair=' + krakenTradePairs;
 
$.getJSON(apiurl,function(result){
    console.log(result);
    var bitcoinPrice = parseFloat(result.result.XXBTZEUR.c[0]);
    var ethereumPrice = parseFloat(result.result.XETHZEUR.c[0]);
    var dogecoinPrice = parseFloat(result.result.XXDGXXBT.c[0]);

    $('#bitcoinprice').empty().append(bitcoinPrice.toFixed(2) + ' ' + currency);
    $('#ethereumprice').empty().append(ethereumPrice.toFixed(2) + ' ' + currency);
    $('#dogeprice').empty().append((dogecoinPrice*bitcoinPrice).toFixed(3) + ' ' + currency);
  });   
}

function forexPrices() {
var baseCurrency = 'EUR';
var currencies = 'PYUSDEUR,EURGBP,EURJPY'
var apiurl = 'https://api.kraken.com/0/public/Ticker?pair=' + currencies;
 
$.getJSON(apiurl,function(result){
    console.log(result);
    var usdprice = parseFloat(result.result.PYUSDEUR.c[0]);
    var gbpprice = parseFloat(result.result.EURGBP.c[0]);
    var jpyprice = parseFloat(result.result.EURJPY.c[0]);

    //invert price
    var usdprice = 1 / usdprice;

    $('#usdAmt').empty().append(usdprice.toFixed(2) + ' =1EUR');
    $('#gbpAmt').empty().append(gbpprice.toFixed(2) + ' =1EUR');
    $('#jpyAmt').empty().append(jpyprice.toFixed(2) + ' =1EUR');
  });   
}
krakenCryptoPrices();	
forexPrices();
