import CommentDataService from './Comment.service';
import React from 'react';
import {ProductsModel} from './model';
import * as Type from './types';

export function crateCommentAc(data) {
  return CommentDataService.crateComment(data);
}
export function getCommentIdAc(data) {
  return CommentDataService.getComment(data);
}

