import { useWalletLogout } from "@lens-protocol/react-web";

export default function LogoutButton() {
  const { execute: logout, isPending } = useWalletLogout();

  return (
    <button disabled={isPending} onClick={logout}>
      Log out
    </button>
  );
}
