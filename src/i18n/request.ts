import {hasLocale} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale, requestLocale}) => {
    const requestedLocale = await requestLocale || locale
    // Typically corresponds to the `[locale]` segment
    const usedLocale = hasLocale(routing.locales, requestedLocale) ?
        requestedLocale
        : routing.defaultLocale;

    return {
        locale: usedLocale,
        messages: (await import(`../../messages/${usedLocale}.json`)).default
    };
});