import {createContext, useRef, useEffect, useState, Dispatch, SetStateAction, useLayoutEffect } from 'react';

type Theme = 'light' | 'dark'

const usePrevious = (value: Theme) => {
   
    const ref = useRef<Theme>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

//valida el thema del navegador

const useStorageTheme = (key: string):[Theme, Dispatch<SetStateAction<Theme>>] => {
    const usePreference = !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const [theme, setTheme] = useState<Theme>((window.localStorage.getItem('theme') as Theme ) || usePreference ? "dark" : "light");

    useEffect(() => {
        window.localStorage.setItem(key, theme);
    },[theme, key] );

    return [theme, setTheme];
}

//contexto
type ThemeContextProps = {
    theme: Theme,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => {
        console.log("toggleTheme")
    },
})

//proveedor

type PropsProvider = {
    children : React.ReactNode

}

export const ThemeProvider = ({children}: PropsProvider) => {
    const [theme, setTheme] = useStorageTheme ("theme");

    const oldTheme = usePrevious(theme);

    useLayoutEffect(() => {
        document.documentElement.classList.remove(oldTheme as string);
        document.documentElement.classList.add(theme);
    }, [theme, oldTheme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return(
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}

