const stripHtml = require("string-strip-html");

exports.cleanUpVolumeInfo = (volumeInfo) => {
  return {
    ...volumeInfo,
    description: volumeInfo.description && stripHtml(volumeInfo.description),
  };
};

exports.generateRandomString = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
