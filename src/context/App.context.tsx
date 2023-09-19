import React, { useState } from "react";
import { useEffect } from "react";

interface AppContextI {
  token: string;
  user: user | null;
  theme: "light" | "dark";
  setToken: (value: string) => void;
  setUser: (value: user | null) => void;
  setTheme: (value: "light" | "dark") => void;
  toggleTheme: () => void;
}

interface user {
  name: string;
  email: string;
  role: string;
  status: boolean;
  google: boolean;
  uid: string;
}

export const AppContext = React.createContext({} as AppContextI);

export const Provider = ({ children }: any) => {
  //no inicializamos vacio, preguntamos  al localStore
  const [token, setToken] = useState<string>(localStorage.getItem("token") || "");
  const [user, setUser] = useState<user | null>(JSON.parse(localStorage.getItem("user") || "{}"));
  const [theme, setTheme] = useState<"light" | "dark">("light");

  //hook para aplicar el modo oscuro
  useEffect(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const values = {
    token,
    user,
    theme,
    setToken,
    setUser,
    setTheme,
    toggleTheme,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
