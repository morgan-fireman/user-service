const fs = require('fs');
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);

const db = {
  getData: async (fileName) => {
    try {
      const data = await readFilePromise(`./data/${fileName}.json`);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },
};

module.exports = db;
