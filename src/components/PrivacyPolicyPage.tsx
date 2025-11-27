import { motion } from "motion/react";
import imgBDALogo from "figma:asset/53adc7803dba0e7e5e757a41e14e3b74bc639393.png";

export function PrivacyPolicyPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title with Logo */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <motion.img
              src={imgBDALogo}
              alt="BDA Logo"
              className="h-24 md:h-32 w-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.h1
              className="font-['Inter:Bold',sans-serif] font-bold text-[#2e3c52] text-4xl md:text-[64px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Privacy Policy
            </motion.h1>
          </div>

          <div className="font-['Inter:Regular',sans-serif] text-[16px] text-black leading-relaxed space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="font-['Inter:Bold',sans-serif] font-bold mb-4">
                BIG DATA AGENCY CO., LTD.
              </p>
              <p>
                At BIG DATA AGENCY CO., LTD. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information, as well as your rights regarding your data.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-4"
            >
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>1.1 Personal Information: Name, email address, phone number, and physical address.</li>
                <li>1.2 Technical Information: Data such as IP address, device type, browser type, and cookies.</li>
                <li>1.3 Other Information: Any information you provide through communication, such as surveys or inquiries.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4"
            >
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] mb-3">
                2. Purpose of Data Collection
              </h2>
              <p className="mb-3">We use your personal information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>2.1 To provide and develop software solutions.</li>
                <li>2.2 To process your requests and manage your orders.</li>
                <li>2.3 To communicate marketing and promotional materials (with your consent).</li>
                <li>2.4 To improve our services and user experience.</li>
                <li>2.5 To comply with legal and regulatory obligations.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] mb-3">
                3. Data Disclosure
              </h2>
              <p className="mb-3">We will not share your personal data with third parties except in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>3.1 To comply with legal requirements.</li>
                <li>3.2 To share data with partners or service providers for service delivery.</li>
                <li>3.3 With your explicit consent.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4"
            >
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] mb-3">
                4. Data Protection
              </h2>
              <p>
                We implement appropriate technical and organizational measures to safeguard your personal information from unauthorized access, alteration, or destruction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] mb-3">
                5. Your Rights
              </h2>
              <p className="mb-3">You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>5.1 To access your personal information.</li>
                <li>5.2 To request corrections or updates.</li>
                <li>5.3 To request deletion of your data (subject to legal obligations).</li>
                <li>5.4 To withdraw your consent to data usage.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-4"
            >
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] mb-3">
                6. Cookies
              </h2>
              <p>
                Our website uses cookies to enhance user experience. You can manage cookie preferences through your browser settings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-4"
            >
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] mb-3">
                7. Policy Updates
              </h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be communicated through appropriate channels.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="pt-4"
            >
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] mb-3">
                8. Contact Us
              </h2>
              <p className="mb-3">If you have questions about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <p className="font-['Inter:Bold',sans-serif] font-bold mb-2">
                  BIG DATA AGENCY CO., LTD.
                </p>
                <p className="mb-1">
                  <strong>Address:</strong> 333 Moo 4 T.Tasala, A.Muang, Chiang Mai, Thailand 50000
                </p>
                <p className="mb-1">
                  <strong>Tel:</strong> (+66)89 866 7679, (+66)52 009 373
                </p>
                <p>
                  <strong>Email:</strong> admin@bda.co.th
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="pt-8 text-center text-gray-500 text-sm border-t border-gray-200 mt-12"
            >
              <p>Last updated: November 2024</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}