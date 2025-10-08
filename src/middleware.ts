import createMiddleware from "next-intl/middleware";
import {routing} from "@/i18n/routing";

export default createMiddleware({
    // Use this locale when we can't match
    // another with our user's preferred locales
    // and when no locale is explicitly set.
    defaultLocale: routing.defaultLocale,

    // List all supported locales (en-us, ar-eg).
    locales: routing.locales,
});