import * as Tabs from '@radix-ui/react-tabs';
import styles from './Content.module.css';
import { PaymentModal } from './PaymentModal';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export function Content() {
  const [data, setData] = useState({
    reservation: "",
    plate: "",
    entered_at: "",
  });

  const handleChange = (e) => {
    const valueInput = e.target.value;
    setData({
      ...data,
      [e.target.name]: valueInput
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const plateData = {
      reservation: 1,
      plate: data.numEntry,
      entered_at: new Date().toISOString()
    };
    console.log(plateData);
    axios.post('https://parking-lot-to-pfz.herokuapp.com/parking', plateData).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log("server responded");
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    });
  };
  
  return (
  <div className={styles.wrapper}>
  <Tabs.Root className={styles.TabsRoot} defaultValue="tab1">
    <Tabs.List className={styles.TabsList}>
      <Tabs.Trigger className={styles.TabsTrigger} value="tab1">Entrada</Tabs.Trigger>
      <Tabs.Trigger className={styles.TabsTrigger} value="tab2">Saída</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className={styles.TabsContent} value="tab1">
      <form onSubmit={handleSubmit}>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="numEntry">Número da placa:</label>
          <input className={styles.Input} id="numEntry" name="numEntry" placeholder="AAA-0000" onChange={handleChange} />
        </fieldset>
        <div className={styles.wrapperButton}>
          <button className={`${styles.Button} ${styles.ButtonEntry}`}>Confirmar Entrada</button>
        </div>
      </form>
    </Tabs.Content>
    <Tabs.Content className={styles.TabsContent} value="tab2">
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="numExit">Número da placa:</label>
        <input className={styles.Input} id="numExit" placeholder="AAA-0000" />
      </fieldset>

      <PaymentModal />

      <div className={styles.wrapperButton}>
        <button className={`${styles.Button} ${styles.ButtonExit}`}>Saída</button>
      </div>

      <div className={styles.wrapperButton}>
        <Link to={`/plate-page/:id`} className={styles.Link}>Ver Histórico</Link>
      </div>
    </Tabs.Content>
  </Tabs.Root>
  </div>
  )
};