exports.indexes = ['AQI', 'PM2.5', 'PM10', 'O3', 'CO', 'SO2', 'NO2'];

// 0-50 Good Air pollution risk is low.
// 51-100 Moderate Air quality is acceptable.
// 101-150 Unhealthy for high-risk group High-risk group may have health effects. General public is not affected.
// 151-200 Unhealthy High-risk group may have more serious health effects. Some of the general public may have health effects.
// 201-300 Very Unhealthy General public have health effects.
// 301-500 Hazardous Some of the general public may have more serious health effects.
exports.indexRanges = {
  AQI: [{
    key: 0,
    status: '良好',
    color: '#009866',
    min: 0,
    max: 50,
  }, {
    key: 1,
    status: '普通',
    color: '#FEDE33',
    min: 51,
    max: 100,
  }, {
    key: 2,
    status: '對敏感族群不良',
    color: '#FE9833',
    min: 101,
    max: 150,
  }, {
    key: 3,
    status: '對所有族群不良',
    color: '#CC0033',
    min: 151,
    max: 200,
  }, {
    key: 4,
    status: '非常不良',
    color: '#660098',
    min: 201,
    max: 300,
  }, {
    key: 5,
    status: '有害',
    color: '#7E2200',
    min: 301,
    max: 500,
  }],

  'PM2.5': [{
    key: 0,
    status: '良好',
    color: '#009866',
    min: 0.0,
    max: 15.4,
  }, {
    key: 1,
    status: '普通',
    color: '#FEDE33',
    min: 15.5,
    max: 35.4,
  }, {
    key: 2,
    status: '對敏感族群不良',
    color: '#FE9833',
    min: 35.5,
    max: 54.4,
  }, {
    key: 3,
    status: '對所有族群不良',
    color: '#CC0033',
    min: 54.5,
    max: 150.4,
  }, {
    key: 4,
    status: '非常不良',
    color: '#660098',
    min: 150.5,
    max: 250.4,
  }, {
    key: 5,
    status: '有害',
    color: '#7E2200',
    min: 250.5,
    max: 500.4,
  }],

  PM10: [{
    key: 0,
    status: '良好',
    color: '#009866',
    min: 0,
    max: 54,
  }, {
    key: 1,
    status: '普通',
    color: '#FEDE33',
    min: 55,
    max: 125,
  }, {
    key: 2,
    status: '對敏感族群不良',
    color: '#FE9833',
    min: 126,
    max: 254,
  }, {
    key: 3,
    status: '對所有族群不良',
    color: '#CC0033',
    min: 255,
    max: 354,
  }, {
    key: 4,
    status: '非常不良',
    color: '#660098',
    min: 355,
    max: 424,
  }, {
    key: 5,
    status: '有害',
    color: '#7E2200',
    min: 425,
    max: 604,
  }],

  O3: [{
    key: 0,
    status: '良好',
    color: '#009866',
    min: 0,
    max: 54,
  }, {
    key: 1,
    status: '普通',
    color: '#FEDE33',
    min: 55,
    max: 125,
  }, {
    key: 2,
    status: '對敏感族群不良',
    color: '#FE9833',
    min: 125,
    max: 164,
  }, {
    key: 3,
    status: '對所有族群不良',
    color: '#CC0033',
    min: 165,
    max: 204,
  }, {
    key: 4,
    status: '非常不良',
    color: '#660098',
    min: 205,
    max: 404,
  }, {
    key: 5,
    status: '有害',
    color: '#7E2200',
    min: 405,
    max: 604,
  }],

  CO: [{
    key: 0,
    status: '良好',
    color: '#009866',
    min: 0,
    max: 4.4,
  }, {
    key: 1,
    status: '普通',
    color: '#FEDE33',
    min: 4.5,
    max: 9.4,
  }, {
    key: 2,
    status: '對敏感族群不良',
    color: '#FE9833',
    min: 9.5,
    max: 12.4,
  }, {
    key: 3,
    status: '對所有族群不良',
    color: '#CC0033',
    min: 12.5,
    max: 15.4,
  }, {
    key: 4,
    status: '非常不良',
    color: '#660098',
    min: 15.5,
    max: 30.4,
  }, {
    key: 5,
    status: '有害',
    color: '#7E2200',
    min: 30.5,
    max: 50.4,
  }],

  SO2: [{
    key: 0,
    status: '良好',
    color: '#009866',
    min: 0,
    max: 35,
  }, {
    key: 1,
    status: '普通',
    color: '#FEDE33',
    min: 36,
    max: 75,
  }, {
    key: 2,
    status: '對敏感族群不良',
    color: '#FE9833',
    min: 76,
    max: 185,
  }, {
    key: 3,
    status: '對所有族群不良',
    color: '#CC0033',
    min: 186,
    max: 304,
  }, {
    key: 4,
    status: '非常不良',
    color: '#660098',
    min: 305,
    max: 604,
  }, {
    key: 5,
    status: '有害',
    color: '#7E2200',
    min: 605,
    max: 1004,
  }],

  NO2: [{
    key: 0,
    status: '良好',
    color: '#009866',
    min: 0,
    max: 53,
  }, {
    key: 1,
    status: '普通',
    color: '#FEDE33',
    min: 54,
    max: 100,
  }, {
    key: 2,
    status: '對敏感族群不良',
    color: '#FE9833',
    min: 101,
    max: 360,
  }, {
    key: 3,
    status: '對所有族群不良',
    color: '#CC0033',
    min: 361,
    max: 649,
  }, {
    key: 4,
    status: '非常不良',
    color: '#660098',
    min: 650,
    max: 1249,
  }, {
    key: 5,
    status: '有害',
    color: '#7E2200',
    min: 1250,
    max: 2049,
  }],
};
