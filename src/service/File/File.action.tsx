import FileDataService from './File.service';
import React from 'react';

export function uploadFileAc(file) {
  return FileDataService.uploadFile(file);
}

