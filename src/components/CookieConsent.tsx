import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

interface CookieConsentProps {
  onNavigate?: (page: string) => void;
}

export function CookieConsent({ onNavigate }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    // Save consent to localStorage
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleClose = () => {
    // Close banner without saving consent (will show again on next visit)
    setShowBanner(false);
  };

  const handlePrivacyPolicyClick = () => {
    if (onNavigate) {
      onNavigate("privacy policy");
      setShowBanner(false);
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            className="fixed inset-0 bg-black/20 z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Cookie Banner */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="max-w-5xl mx-auto relative">
              {/* Close Button - Outside the white box */}
              <motion.button
                onClick={handleClose}
                className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#2e3c52] hover:bg-[#1e2c42] text-white transition-colors shadow-lg z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close cookie banner"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  {/* Cookie Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2e3c52] rounded-full flex items-center justify-center">
                      <Cookie className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[24px] text-[#2e3c52] mb-2">
                      Cookie Consent
                    </h3>
                    <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
                      We use cookies to improve your user experience and analyze site traffic. Click 'Accept' to consent to our use of cookies.{" "}
                      <button
                        onClick={handlePrivacyPolicyClick}
                        className="text-[#2e3c52] font-['Inter:Bold',sans-serif] font-bold underline hover:text-blue-600 transition-colors"
                      >
                        Privacy Policy
                      </button>
                    </p>
                  </div>

                  {/* Accept Button */}
                  <div className="flex-shrink-0 w-full md:w-auto">
                    <motion.button
                      onClick={handleAccept}
                      className="w-full md:w-auto px-8 py-3 bg-[#2e3c52] text-white rounded-lg font-['Inter:Bold',sans-serif] text-[16px] hover:bg-[#1e2c42] transition-colors shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Accept All
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}