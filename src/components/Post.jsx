import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React from 'react';

import { Avatar } from './Avata';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, content, publishAt }) {
  const [comments, setComments] = React.useState(['Post muito bacana, heni!']);

  const [newCommentText, setNewCommentText] = React.useState('');

  const publishDateFormatted = format(publishAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishDateRelativeToNow = formatDistanceToNow(publishAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const isNewcommentEmpty = newCommentText.length === 0;

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfor}>
            <strong>{author.nome}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishDateFormatted} dateTime={publishAt.toISOString()}>
          {publishDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === 'link') {
            return (
              <p key={item.content}>
                <a href="">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        ></textarea>
        <footer>
          <button type="submit" disabled={isNewcommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.comentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
