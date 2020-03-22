import Cookies from "js-cookie";

export const setSessionCookie = uuid => {
  Cookies.remove("session");
  Cookies.set("session", uuid, { expires: 1 });
};

export const getSessionCookie = () => {
  const sessionCookie = Cookies.get("session");
  if (sessionCookie === undefined) {
    return undefined;
  } else {
    return sessionCookie;
  }
};
