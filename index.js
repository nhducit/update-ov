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

function renameFile(path, cb) {
  var lastSplashIndex = _.lastIndexOf(path, '/');
  var basePath = path.slice(0, lastSplashIndex);
  var oldName = path.slice(lastSplashIndex+1);
  var newPath = basePath + appendTimestampToFileName(oldName);
  fs.rename(path, newPath, cb);
}

function backupOldFiles(listOfFiles){
  _.each(listOfFiles, function(file){
    renameFile(file.source, renameCallback);
  });
}

function renameCallback(error, file){
  if (error){
    console.log(error);
    file.isRenameSuccess = false;
  }else{
    file.isRenameSuccess = true;
  }
}

function appendTimestampToFileName(name){
  return name + new Date().getTime();
}

backupOldFiles();