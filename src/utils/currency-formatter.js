import currencyFormatter from 'currency-formatter';

export default (value, currency, options = {}) => {

  var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  var persianMap = persianDigits.split("");

  if (value) {
    var mm = currencyFormatter.format(value, {
      code: currency,
      decimal: '0',
      precision: 0,
    });
    return mm.replace(/\d/g,function(m){
      return persianMap[parseInt(m)];
    });
  }
  return `۰`;
};
