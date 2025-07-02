"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AdvanceToastProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
  className?: string;
}
/**
 * AdvanceToast component for displaying notifications.
 * @param {React.ReactNode} children - The children to display in the toast.
 * @param {boolean} isOpen - Whether the toast is open or not.
 * @param {function} onClose - Function to call when the toast is closed.
 * @param {number} duration - Duration in milliseconds before the toast closes automatically.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The AdvanceToast component.
 * @example
 * <AdvanceToast
 *   isOpen={isToastOpen}
 *   onClose={() => setToastOpen(false)}
 *   duration={3000}
 *   className="custom-toast-class"
 * >
 *   This is a toast message!
 * </AdvanceToast>
 * @description
 * The AdvanceToast component is used to display temporary notifications to the user.
 * The toast will automatically close after a specified duration, or it can be closed manually by calling the onClose function.
 */
export default function AdvanceToast({
  children,
  isOpen,
  onClose,
  duration = 3000,
  className = "",
}: AdvanceToastProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, duration]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className={cn(
            `fixed bg-gray-800 text-white bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg z-50`,
            className
          )}
          role="alert"
          aria-live="assertive"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
