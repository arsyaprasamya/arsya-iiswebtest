let index = 1;

let randomNum = () => 20 + Math.floor(80 * Math.random());

function getInitialData() {
  let numItems = 10;
  let data = [];
  for (let i = 0; i < numItems; i++) {
    data = getAppendedData(data);
  }
  return data;
}

function getAppendedData(data) {
  let ret = data.map(d => d);
  ret.push({
    id: "id-" + index,
    value: randomNum(),
    name: "Bulan " + index
  });
  index++;
  return ret;
}

export { getInitialData, getAppendedData };
