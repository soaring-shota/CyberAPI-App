import { createI18n } from "vue-i18n";
import { enUS, zhCN } from "naive-ui";

import en from "./en";
import zh from "./zh";

export enum LANG {
  en = "en",
  zh = "zh",
}

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    zh,
  },
});
export default i18n;

export function getLocale() {
  if (i18n.global.locale === LANG.zh) {
    return zhCN;
  }
  return enUS;
}

export function changeI18nLocale(locale: string) {
  if (locale === LANG.zh || locale === LANG.en) {
    i18n.global.locale = locale;
  }
}

export function i18nGet(
  key: string,
  named: Record<string, unknown> = {}
): string {
  return i18n.global.t(key, named);
}

export function newI18nGet(prefix: string) {
  if (prefix[prefix.length - 1] !== ".") {
    prefix += ".";
  }
  return function (key: string, named: Record<string, unknown> = {}): string {
    return i18n.global.t(prefix + key, named);
  };
}

export const i18nCollection = newI18nGet("collection");
export const i18nCommon = newI18nGet("common");
export const i18nDashboard = newI18nGet("dashboard");
export const i18nSetting = newI18nGet("setting");
export const i18nCookie = newI18nGet("cookie");
export const i18nEnvironment = newI18nGet("environment");
export const i18nStore = newI18nGet("store");
