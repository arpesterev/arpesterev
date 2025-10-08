const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin()

const nextConfig = withNextIntl({
    /* config options here */
    reactStrictMode: true,
    distDir: 'build',
    output: 'export'
});

module.exports = {
    ...nextConfig,
};
