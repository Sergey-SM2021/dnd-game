import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {SettingsProvider} from "../src/provider";

export default function App({Component, pageProps}: AppProps) {
    return <SettingsProvider>
        <Component {...pageProps} />
    </SettingsProvider>
}
