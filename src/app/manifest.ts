import {MetadataRoute} from 'next';
import {getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
    const t = await getTranslations({
        locale: routing.defaultLocale,
        namespace: 'Manifest'
    });

    return {
        name: t('name'),
        short_name: t('name'),
        description: t("description"),
        start_url: '/',
        display: "standalone",
        theme_color: '#101E33',
        icons: [
            {
                src: "/favicon.ico",
                sizes: "400x400",
                type: "image/png"
            }
        ]
    };
}