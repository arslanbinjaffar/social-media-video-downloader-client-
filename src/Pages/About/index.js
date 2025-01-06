"use client";
import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Page = () => {
  const { t } = useTranslation(); // Get the t function for translation

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[var(--background-color)]">
      <main className="flex flex-col items-start w-full px-4 sm:px-12 md:px-20 lg:px-32 max-w-4xl">
        <header className="w-full py-8 bg-[var(--header-background-color)] text-center">
          <h1 className="text-4xl font-extrabold text-[var(--h1-font-color)]">
            {t("welcome_message")} {/* Add translation key */}
          </h1>
          <p className="mt-4 text-lg text-[var(--p-font-color)]">
            {t("site_description")} {/* Add translation key */}
          </p>
        </header>
        <section className="w-full my-5">
          <h2 className="text-2xl font-semibold text-[var(--h1-font-color)]">
            {t("our_mission")} {/* Add translation key */}
          </h2>
          <p className="mt-4 text-[var(--p-font-color)]">
            {t("our_mission_description")} {/* Add translation key */}
          </p>
        </section>

        <section className="w-full my-5">
          <h2 className="text-2xl font-semibold text-[var(--h1-font-color)]">
            {t("what_we_offer")} {/* Add translation key */}
          </h2>
          <ul className="mt-6 list-disc list-inside text-[var(--p-font-color)]">
            <li>{t("social_media_download")}</li> {/* Add translation key */}
            <li>{t("fast_free_download")}</li> {/* Add translation key */}
            <li>{t("no_watermarks")}</li> {/* Add translation key */}
          </ul>
        </section>

        <section className="w-full my-5">
          <h2 className="text-2xl font-semibold text-[var(--h1-font-color)]">
            {t("how_it_works")} {/* Add translation key */}
          </h2>
          <ol className="mt-6 list-decimal list-inside text-[var(--p-font-color)]">
            <li>{t("select_platform")}</li> {/* Add translation key */}
            <li>{t("copy_video_url")}</li> {/* Add translation key */}
            <li>{t("paste_url")}</li> {/* Add translation key */}
            <li>{t("download_and_enjoy")}</li> {/* Add translation key */}
          </ol>
        </section>
      </main>
    </div>
  );
};

export default Page;
