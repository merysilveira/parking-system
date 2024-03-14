import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { List, X } from '@phosphor-icons/react';
import styles from './Menu.module.css';

export function Menu() {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
          <List size={36} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal asChild>
        <DropdownMenu.Content className={styles.DropdownMenuContent} side="top" align="end" >
          <DropdownMenu.Item className={styles.DropdownMenuItem} href="http://google.com.br">Entrada</DropdownMenu.Item>
          <DropdownMenu.Item className={styles.DropdownMenuItem}>Saída</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}