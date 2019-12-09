const isEmpty = (obj) => {
  if(obj === null || obj === undefined || Array.isArray(obj) || typeof obj !== 'object'){
    return true;
  }
  return Object.getOwnPropertyNames(obj).length === 0;
};

module.exports = {
  isEmpty: isEmpty
};