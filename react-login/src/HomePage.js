import { useMsal } from "@azure/msal-react";

export default function HomePage() {
  const { instance } = useMsal();

  function handleLogout(logoutType) {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  return <>
  Welcome to HomePage
  <br />
  <button onClick={() => handleLogout()} >Sign Out</button>
  </>
}