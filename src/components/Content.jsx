import * as Tabs from '@radix-ui/react-tabs';
import styles from './Content.module.css';

export function Content() {
  return (
  <div className={styles.wrapper}>
  <Tabs.Root className={styles.TabsRoot} defaultValue="tab1">
    <Tabs.List className={styles.TabsList}>
      <Tabs.Trigger className={styles.TabsTrigger} value="tab1">Entrada</Tabs.Trigger>
      <Tabs.Trigger className={styles.TabsTrigger} value="tab2">Saída</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className={styles.TabsContent} value="tab1">
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="numEntry">Número da placa:</label>
        <input className={styles.Input} id="numEntry" placeholder="AAA-0000" />
      </fieldset>
      <div className={styles.wrapperButton}>
        <button className={`${styles.Button} ${styles.ButtonEntry}`}>Confirmar Entrada</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className={styles.TabsContent} value="tab2">
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="numExit">Número da placa:</label>
        <input className={styles.Input} id="numExit" placeholder="AAA-0000" />
      </fieldset>

      <div className={styles.wrapperButton}>
        <button className={`${styles.Button} ${styles.ButtonPayment}`}>Pagamento</button>
      </div>

      <div className={styles.wrapperButton}>
        <button className={`${styles.Button} ${styles.ButtonExit}`}>Saída</button>
      </div>

      <div className={styles.wrapperButton}>
        <a href="#" className={styles.Link}>Ver Histórico</a>
      </div>
    </Tabs.Content>
  </Tabs.Root>
  </div>
  )
};