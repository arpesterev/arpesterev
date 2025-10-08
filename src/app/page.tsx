import Page from "@/app/[locale]/page";
import {routing} from "@/i18n/routing";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
    return <><Page params={{locale: routing.defaultLocale}}/></>
}
