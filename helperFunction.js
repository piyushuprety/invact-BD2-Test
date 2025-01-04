const sortedProducts = (data, category, sort) => {
  let sortedData = [];
  switch (sort) {
    case 'low':
      sortedData = data.sort((a, b) => a[category] - b[category]);
      return sortedData;
    case 'high':
      sortedData = data.sort((a, b) => b[category] - a[category]);
      return sortedData;
    default:
      return sortedData;
  }
};

const filterProducts = (data, category, target) => {
  let filteredData = data.filter((mobile) => {
    if (typeof mobile[category] === 'string') {
      return mobile[category].toLowerCase() === String(target).toLowerCase();
    } else {
      return mobile[category] === target;
    }
  });
  return filteredData;
};

module.exports = {
  sortedProducts,
  filterProducts,
};
