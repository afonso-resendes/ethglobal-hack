import { useWalletLogout } from "@lens-protocol/react-web";
import styles from "./Logout.module.css";

export default function LogoutButton() {
  const { execute: logout, isPending } = useWalletLogout();

  return (
    <button className={styles.logout} disabled={isPending} onClick={logout}>
      Log out
    </button>
  );
}
