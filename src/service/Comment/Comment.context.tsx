import React, {createContext, ReactElement, useState} from 'react';
import * as Ac from './Comment.action';
import * as Type from './types';

interface ICommentContext {
  crateCommentFn: (data) => void;
  listComment: Array<any>;
  getAllCommentIdFn: (id) => void;
  isComments: boolean;
  sendComment: boolean;
  sendCommentLoading: boolean;
}
export const CommentContext = createContext<ICommentContext>(
  {} as ICommentContext,
);
export default function CommentContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [isComments, setComments] = useState(false);
  const [listComment, setListComment] = useState([]);
  const [sendComment, setSendComment] = useState(false);
  const [sendCommentLoading, setSendCommentLoading] = useState(false);

  // We can access navigation object via context
  function getAllCommentIdFn(CommentId: number) {
    Ac.getCommentIdAc(CommentId).then(res => {
      setListComment(res);
    });
  }
  function crateCommentFn(CommentId: Type.Comments) {
    setSendComment(false);
    setSendCommentLoading(true);
    Ac.crateCommentAc(CommentId).then(res => {
      setSendComment(res);
      setSendCommentLoading(false);
      setTimeout(() => {
        setSendComment(false);
      }, 2000);
    });
    setSendComment(false);
    setSendCommentLoading(false);
  }
  return (
    <CommentContext.Provider
      value={{
        getAllCommentIdFn,
        listComment,
        crateCommentFn,
        isComments,
        sendComment,
        sendCommentLoading,
      }}>
      {children}
    </CommentContext.Provider>
  );
}
