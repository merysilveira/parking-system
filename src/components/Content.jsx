import * as Tabs from '@radix-ui/react-tabs';
import styles from './Content.module.css';

export function Content() {
  return (
  <div className={styles.wrapper}>
  <Tabs.Root className={styles.TabsRoot} defaultValue="tab1">
    <Tabs.List className={styles.TabsList} aria-label="Manage your account">
      <Tabs.Trigger className={styles.TabsTrigger} value="tab1">
        Entrada
      </Tabs.Trigger>
      <Tabs.Trigger className={styles.TabsTrigger} value="tab2">
        Saída
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className={styles.TabsContent} value="tab1">
      <p className={styles.Text}>Make changes to your account here. Click save when you're done.</p>
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="name">
          Name
        </label>
        <input className={styles.Input} id="name" defaultValue="Pedro Duarte" />
      </fieldset>
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="username">
          Username
        </label>
        <input className={styles.Input} id="username" defaultValue="@peduarte" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className={styles.Button}>Save changes</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className={styles.TabsContent} value="tab2">
      <p className="Text">Change your password here. After saving, you'll be logged out.</p>
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="currentPassword">
          Current password
        </label>
        <input className={styles.Input} id="currentPassword" type="password" />
      </fieldset>
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="newPassword">
          New password
        </label>
        <input className={styles.Input} id="newPassword" type="password" />
      </fieldset>
      <fieldset className={styles.Fieldset}>
        <label className={styles.Label} htmlFor="confirmPassword">
          Confirm password
        </label>
        <input className={styles.Input} id="confirmPassword" type="password" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className={styles.Button}>Change password</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
  </div>
  )
};