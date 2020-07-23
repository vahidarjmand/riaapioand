export default (enText = {}) => {
  var persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  var persianMap = persianDigits.split('');

  return enText.replace(/\d/g, function(m) {
    return persianMap[parseInt(m)];
  });
};
