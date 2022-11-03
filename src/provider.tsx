import {createContext, PropsWithChildren, useState} from "react";

export interface ISettingsProvider {
    count: string
    values: string
    mode: string
}

type ICreateContext = [ISettingsProvider | null, (value: ISettingsProvider) => void]

export const SettingsContext = createContext<ICreateContext>([null,()=>{}])

export const SettingsProvider = ({children}:PropsWithChildren) => {
    const [state, setState] = useState<ISettingsProvider | null>(null)
    return (<SettingsContext.Provider value={[state, setState]}>
        {children}
    </SettingsContext.Provider>)
}