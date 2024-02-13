'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (!user) {
    router.push('/signup');
  }

  return (
    <main>
      <title>Kikirikat</title>
      <button onClick={() => signOut(auth)}>
        Log Out
      </button>
      <div>
        Kikirikat
      </div>
    </main>
  );
}
