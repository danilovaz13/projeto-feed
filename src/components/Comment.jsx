import { Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr';
import { Avatar } from './Avata';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernando Vaz</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={15} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
