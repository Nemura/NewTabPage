// Fetches current crypto prices on Kraken
function krakenCryptoPrices() {
var currency = 'EUR';
var krakenTradePairs = 'xbteur,etheur,eoseth,xdgxbt'
var apiurl = 'https://api.kraken.com/0/public/Ticker?pair=' + krakenTradePairs;
 
$.getJSON(apiurl,function(result){
    console.log(result);
    var bitcoinPrice = parseFloat(result.result.XXBTZEUR.c[0]);
    var ethereumPrice = parseFloat(result.result.XETHZEUR.c[0]);
    var dogecoinPrice = parseFloat(result.result.XXDGXXBT.c[0]);
    var eosPrice = parseFloat(result.result.EOSETH.c[0]);

    $('#bitcoinprice').empty().append(bitcoinPrice.toFixed(2) + ' ' + currency);
    $('#ethereumprice').empty().append(ethereumPrice.toFixed(2) + ' ' + currency);
    $('#dogeprice').empty().append((dogecoinPrice*bitcoinPrice).toFixed(3) + ' ' + currency);
    $('#eosprice').empty().append((eosPrice*ethereumPrice).toFixed(2) + ' ' + currency);
  });   
}

function forexPrices() {
var baseCurrency = 'EUR';
var currencies = ['USD', 'GBP', 'JPY', 'THB'];
var apiurl = 'https://api.fixer.io/latest?base=' + baseCurrency;
 
$.getJSON(apiurl,function(result){
    console.log(result);
    var currency0 = result.rates[eval('currencies[0]')];
    var currency1 = result.rates[eval('currencies[1]')];
    var currency2 = result.rates[eval('currencies[2]')];
    var currency3 = result.rates[eval('currencies[3]')];

    $('#usdAmt').empty().append(currency0.toFixed(2) + ' =1EUR');
    $('#gbpAmt').empty().append(currency1.toFixed(2) + ' =1EUR');
    $('#jpyAmt').empty().append(currency2.toFixed(2) + ' =1EUR');
    $('#thbAmt').empty().append(currency3.toFixed(2) + ' =1EUR');
  });   
}
krakenCryptoPrices();	
forexPrices();