var _ = require('lodash');
var fs = require('fs');
var fsExtra = require('fs-extra');


var config = {
  listOfFiles: [
    {
      source: '',
      target: ''
    }
  ]
};

function renameFile(path, getNewName) {
  var lastSplashIndex = _.lastIndexOf(path, '/');
  var basePath = path.slice(0, lastSplashIndex);
  var oldName = path.slice(lastSplashIndex+1);
  console.log(basePath,'    ', oldName);
  console.log(getNewName(oldName));
  // fs.rename(path, getNewName(oldName), function (error) {
    // if ( error ) console.log('ERROR: ' + error);
  // });
}

function buildNewName(oldName){
  return oldName + new Date().getTime();
}

renameFile('first/second', buildNewName);