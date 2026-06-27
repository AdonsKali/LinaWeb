import { useTranslation } from "react-i18next"

export default function Footer(){
  const { t } = useTranslation();
    return(
      <footer className="2xl:text-[14px] lg:text-[12px] md:text-[10px] text-[10px] md:pl-30 md:pr-30 pl-8 text-gray-600 w-full text-center bg-pink-100 place-content-center lg:h-20 h-[12vh] lg:mt-6 md:h-16 md:mt-3 mt-10">
        <div className="flex md:text-center text-left justify-around w-full">
          <div className="flex-col">
            <a className="flex md:justify-self-center">{t("footer.col_1.description")}</a>
            <a href="https://t.me/chibiLinaAI" className="flex gap-1 hover:underline hover:text-blue-500">{t("footer.col_1.contacts")}</a>
          </div>
        <p className="flex place-self-end">© 2024 - {new Date().getFullYear()}{t("footer.col_2.rights")}</p>
          <div className="flex-col">
            <a href="" className="flex hover:underline hover:text-blue-500">{t("footer.col_3.privacy_policy")}</a>
            <a href="" className="flex hover:underline hover:text-blue-500">{t("footer.col_3.web_site_policy")}</a>
          </div>
        </div>
      </footer>
    )
}