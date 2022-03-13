import type { NextPage } from "next";
import styles from "../styles/Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

type ModalProps = {
  isShowing: boolean;
  hide: () => void;
};

const Modal: NextPage<ModalProps> = (props) => {
  const { isShowing, hide } = props;

  return isShowing
    ? ReactDOM.createPortal(
        <Fragment>
          <div className={styles.overlay} />
          <div
            className={styles.container}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={styles.modal}>
              <div className={styles.header}>
                <button
                  type="button"
                  className={styles.close}
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>Hello, Im a modal.</p>
            </div>
          </div>
        </Fragment>,
        document.body
      )
    : null;
};

export default Modal;
