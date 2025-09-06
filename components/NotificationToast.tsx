// components/NotificationToast.tsx
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NotificationToastProps {
  title: string;
  body: string;
  action?: string | null;
  icon?: string;
  onClose: () => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({
  title,
  body,
  action,
  icon,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 10000); // بسته شدن خودکار بعد از ۱۰ ثانیه
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -80, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-[9999]"
        onClick={() => {
          
          onClose();
        }}
      >
        <div className="flex items-center justify-between gap-3 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl px-4 py-3 cursor-pointer hover:bg-white/90 transition">
          {/* متن سمت چپ */}
          <div className="flex-1 overflow-hidden">
            <h3 className="font-semibold text-gray-900 truncate">{title}</h3>
            <p className="text-sm text-gray-600 truncate">{body}</p>
          </div>

          {/* تصویر سمت راست */}
          {icon && (
            <img
              src={icon}
              alt="icon"
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NotificationToast;

