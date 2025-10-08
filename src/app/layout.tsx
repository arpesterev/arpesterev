import {ThemeProvider} from "@/components/theme-provider";
import {TooltipProvider} from "@/components/ui/tooltip";
import {cn} from "@/lib/utils";
import {Inter as FontSans} from "next/font/google";
import "./globals.css";
import {routing} from "@/i18n/routing";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
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

export default async function RootLayout({
                                             children,
                                             params
                                         }: Props) {
    // const {locale} = await params;

    // Enable static rendering
    // setRequestLocale(locale);

    return (
        <html suppressHydrationWarning>
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased max-w-2xl min-w-min mx-auto py-12 sm:py-24 px-6",
                fontSans.variable
            )}
        >
        <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={0}>
                {children}
            </TooltipProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
