import {routing} from '@/i18n/routing';
import {NextIntlClientProvider} from "next-intl";

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

export async function generateStaticParams() {
    return routing
        .locales
        .map(
            (locale) => ({
                locale: locale,
                params: {
                    locale: locale
                }
            }));
}

export default async function LocaleLayout({children, params}: Props) {
    // const {locale} = await params;

    // Enable static rendering
    // setRequestLocale(locale);

    return (
        <>
            <NextIntlClientProvider locale={params.locale}>
                {children}
            </NextIntlClientProvider>
        </>
    );
}