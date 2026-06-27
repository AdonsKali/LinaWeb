import { motion } from "framer-motion"
import type { FC } from "react"
import { useLockBodyScroll } from 'react-use';
import Button from "../ui/Button";
import MessageBubble from "./MessageBubble";
import { useTranslation } from "react-i18next";

type InterfaceModalWindow = {
  isOpen: boolean,
  onClose: () => void
}

const HelpWindow: FC<InterfaceModalWindow> = ({ isOpen, onClose }) => {
  const openPayPal = () => {
    window.open('https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID', '_blank');
  };

  const openYooMoney = () => {
    window.open('https://yoomoney.ru/to/4100119517921936', '_blank');
  };

  const handleClose = () => {
    onClose();
  };

  const { t } = useTranslation();

  useLockBodyScroll(isOpen);

  return isOpen === false ? null : (
    <>
      <div
        onClick={handleClose}
        className="z-20 inset-0 fixed bg-black/30"
      >
      </div>
      <motion.div
        className="text-center fixed flex items-center p-5 md:p-2 md:h-[50%] md:w-[50%] left-0 top-1/2 -translate-y-1/2 right-0  justify-center z-50 bg-pink-100 rounded-3xl mx-auto"
        initial={{ scale: 0.0 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <img 
            className="w-[55%] xl:w-[45%]" 
            src="chibis/modal_lina.png" 
            alt="modal_img" />
        <div className="flex-col gap-4  text-center w-[50%] flex place-items-center">
          <MessageBubble x={-40} position="left" className="scale-80 md:scale-100 ">
            {t("support_window.text")}
          </MessageBubble>
          
          <div className="flex gap-2 lg:gap-4 xl:gap-10 flex-wrap justify-center">
            {/* PayPal кнопка */}
            <Button onClick={openPayPal}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.137a.802.802 0 0 1 .792-.663h5.024c2.762 0 4.888.56 6.246 1.665 1.35 1.102 1.987 2.668 1.892 4.526-.106 2.086-.95 3.706-2.456 4.735-1.475 1.006-3.357 1.467-5.579 1.467h-2.34l-.834 5.024a.64.64 0 0 1-.632.546z"/>
              </svg>
              PayPal
            </Button>

            {/* ЮMoney кнопка */}
            <Button onClick={openYooMoney}>
              <svg width="16" height="12" viewBox="0 0 169 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M108.99 0C75.5725 0 48.9902 26.962 48.9902 60C48.9902 93.4177 75.9523 120 108.99 120C142.028 120 168.99 93.038 168.99 60C168.99 26.962 142.028 0 108.99 0ZM108.99 82.4051C96.8383 82.4051 86.5852 72.1519 86.5852 60C86.5852 47.8481 96.8383 37.5949 108.99 37.5949C121.142 37.5949 131.395 47.8481 131.395 60C131.016 72.1519 121.142 82.4051 108.99 82.4051Z"/>
                <path d="M48.6076 17.4684V104.81H27.3418L0 17.4684H48.6076V17.4684Z" />
              </svg>
              ЮMoney

            </Button>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default HelpWindow