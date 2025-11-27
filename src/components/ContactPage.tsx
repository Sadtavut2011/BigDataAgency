import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import imgContact from "figma:asset/d2504c6b459dccc8f022035f57664fd523cff9c1.png";

export function ContactPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Success message
    toast.success("Thank you for contacting us! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative min-h-screen">
      {/* Background Image from Figma */}
      <img 
        alt="" 
        className="absolute inset-0 max-w-none object-cover object-center pointer-events-none size-full" 
        src={imgContact} 
      />
      
      {/* Form Section with White Box */}
      <div className="relative flex items-center justify-center py-20">
        <div className="relative z-10 w-full max-w-5xl mx-auto px-8">
          <motion.div
            className="bg-white rounded-[30px] p-12 md:p-16 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[#2e3c52] text-5xl md:text-[64px] mb-8">
              LET'S TALK
            </h1>

            <p className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-black mb-12 leading-normal">
              We welcome inquiries about our digital solutions, opportunities for collaboration, or career prospects. Our experts are on standby to offer complimentary consultation and guidance on long-term digital business expansion. Get in touch today and receive tailored advice from our specialists.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email - Two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block font-['Inter:Regular',sans-serif] text-[16px] text-black mb-2">
                    Name (Required)
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-gray-50 border border-[#99a1af] rounded px-[30px] py-[15px] font-['Inter:Regular',sans-serif] text-[16px] text-black placeholder:text-[#99a1af] focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block font-['Inter:Regular',sans-serif] text-[16px] text-black mb-2">
                    Email (Required)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    className="w-full bg-gray-50 border border-[#99a1af] rounded px-[30px] py-[15px] font-['Inter:Regular',sans-serif] text-[16px] text-black placeholder:text-[#99a1af] focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </motion.div>
              </div>

              {/* Phone and Company Name - Two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label className="block font-['Inter:Regular',sans-serif] text-[16px] text-black mb-2">
                    Phone (Required)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full bg-gray-50 border border-[#99a1af] rounded px-[30px] py-[15px] font-['Inter:Regular',sans-serif] text-[16px] text-black placeholder:text-[#99a1af] focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </motion.div>

                {/* Company Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label className="block font-['Inter:Regular',sans-serif] text-[16px] text-black mb-2">
                    Company Name (Required)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="w-full bg-gray-50 border border-[#99a1af] rounded px-[30px] py-[15px] font-['Inter:Regular',sans-serif] text-[16px] text-black placeholder:text-[#99a1af] focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </motion.div>
              </div>

              {/* Message Field - Full width */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label className="block font-['Inter:Regular',sans-serif] text-[16px] text-black mb-2">
                  Message (Required)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full bg-gray-50 border border-[#99a1af] rounded px-[30px] py-[15px] font-['Inter:Regular',sans-serif] text-[16px] text-black placeholder:text-[#99a1af] focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  required
                />
              </motion.div>

              {/* Privacy Policy Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-['Inter:Regular',sans-serif] text-[16px] text-black space-y-4"
              >
                <p>
                  Big Data Agency requires this information to follow up on your inquiry and to provide you with relevant news and updates about our services.
                </p>
                <p>
                  By submitting this form, you consent to receive marketing communications via email from our team. You may unsubscribe at any time by following the instructions provided in our emails.
                </p>
                <p>
                  For more information, please refer to our{" "}
                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate("privacy policy")}
                    className="text-blue-600 hover:text-blue-800 underline cursor-pointer transition-colors"
                  >
                    Privacy Policy
                  </button>.
                </p>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-[#2e3c52] text-white rounded-lg hover:bg-[#1e2c42] transition-colors font-['Inter:Bold',sans-serif] text-[18px]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Google Map Section - Full Width */}
      <motion.div
        className="relative w-full bg-white z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-8 py-12">
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] text-[#2e3c52] mb-8">
            Our Location
          </h2>
        </div>
        
        <div className="w-full h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.0866584668677!2d99.0348072!3d18.759246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2f94f2ca4773%3A0x47e2cb04918084ab!2sBIG%20DATA%20AGENCY%20CO.%2CLTD.!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BIG DATA AGENCY CO., LTD. Location"
          />
        </div>
      </motion.div>
    </section>
  );
}