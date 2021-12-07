import Content from "../components/Content";
import Header from "../components/Header";
import LeftNavbar from "../components/LeftNavbar";
import firebase from "../service/firebase";
//Import the useAuthStateHook
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  // Destructure user, loading, and error out of the hook.
  const [user, loading, error] = useAuthState(firebase.auth());
  // console.log the current user and loading status
  console.log("Loading:", loading, "|", "Current user:", user);

  return (
    <div>
      <LeftNavbar />
      <Header />
      <Content />
    </div>
  );
}
