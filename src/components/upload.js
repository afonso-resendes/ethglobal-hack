const ipfsClient = require("ipfs-http-client");

const ipfs = ipfsClient(); // Connect to the local IPFS API

exports.uploadJson = function (data) {
  const serialized = JSON.stringify(data);

  return new Promise(function (resolve, reject) {
    ipfs.add(serialized, function (err, result) {
      if (err) {
        reject(err);
      } else {
        const ipfsHash = result.cid.toString();
        const ipfsUrl = `https://ipfs.io/ipfs/${ipfsHash}`;
        resolve(ipfsUrl);
      }
    });
  });
};
