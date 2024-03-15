import * as AlertDialog from '@radix-ui/react-alert-dialog';
import styles from './PaymentModal.module.css';

export function PaymentModal() {
  return (
    <AlertDialog.Root>
      <div className={styles.wrapperButton}>
        <AlertDialog.Trigger asChild>
          <button className={`${styles.Button} ${styles.ButtonPayment}`}>Pagamento</button>
        </AlertDialog.Trigger>
      </div>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.AlertDialogOverlay} />
        <AlertDialog.Content className={styles.AlertDialogContent}>
          <AlertDialog.Title className={styles.AlertDialogTitle}>Confirma o pagamento da placa abaixo?</AlertDialog.Title>
          <AlertDialog.Description className={styles.AlertDialogDescription}>ABC-1234</AlertDialog.Description>
          <div className={styles.wrapperButtonColumn}>
            <AlertDialog.Action asChild>
              <button className={`${styles.Button} ${styles.ButtonConfirm}`}>Confirmar</button>
            </AlertDialog.Action>
          </div>
          <div className={styles.wrapperButton}>
            <AlertDialog.Cancel asChild>
              <a href="#" className={styles.Link}>Voltar</a>
            </AlertDialog.Cancel>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};