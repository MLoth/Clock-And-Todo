import { createI18n } from 'vue-i18n';

const i18n = new (createI18n as any)({
    locale: 'en',
    messages: {},
    availableLocales: ['en', 'nl', 'ru', 'zh']
});

/**
 * @param {String} locale
 */

export async function loadMessages(locale: string) {
    const messages = await import(/* webpackChunkName: "lang-[request]" */ `@/locales/${locale}`); // Dynamically get a locale
    i18n.global.setLocaleMessage(locale, messages);

    if (i18n.locale !== locale) {
        i18n.locale = locale;
    }
}

(async function () {
  await loadMessages('en');
})();

export default i18n;
