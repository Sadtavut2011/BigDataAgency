import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { PortfolioItem } from "./PortfolioItem";
import { ProjectShowcase } from "./ProjectShowcase";
import { StackedPortfolioCarousel } from "./StackedPortfolioCarousel";
import imgFrame2 from "figma:asset/800ea2d2bba4ecb7a2084f7a196d3fdc9639c12e.png";
import imgSmartEMS from "figma:asset/ba5ed7dcc4df98adcb4526b6a5c8aca6de482040.png";
import imgStandardTour from "figma:asset/7566423c486aae3e014f7db6f3546ef08aa48dd5.png";
import imgPEAService from "figma:asset/f32c048d3baf531b7428fe619d8f641a9e8c2337.png";
import imgPEAServiceWOM from "figma:asset/a5b2b2b19aca1481ff0f9a77b773dbf3ebe49afe.png";
import imgPEAServiceMAMO from "figma:asset/8d32e0ab0002142da8e6a0288a8060198a4510ca.png";
import imgTVOPBI from "figma:asset/dda8a1f1cc661af92915e994c6af49dc12169bcf.png";
import imgTVOPWorkflow from "figma:asset/5abcc0f4fd48f52208abf980439b34087589c4fc.png";
import imgSCGLogistics from "figma:asset/9e66c824bf50aaea1cc124ffa4cdb5dd71fa5a2e.png";
import imgSCMC from "figma:asset/367cd00ee29321b2c0852acdca97a74a1873b01e.png";
import imgCMUMove from "figma:asset/7e63b4b78372c541014f45e219cba5951beae7e5.png";
import imgHomeAirPlus from "figma:asset/1e50348bc525d0cb1a7b21831b02a4211236bb1a.png";
import imgEGATOM from "figma:asset/c9dd154e76f5f0f0d3fdfa254481938aee58b3ec.png";
import imgEGATiMO from "figma:asset/159d3858c0b4e90dffc851bec4c9217b26924090.png";
import imgPoliceLPR from "figma:asset/8b7099822442608da5791d251b86d00b9f4cbf16.png";
import imgSCMCDigitalTwin from "figma:asset/6999bab882f817d1ce1511a8624cb26536590c73.png";
import imgKTBUniversity from "figma:asset/5300c42dbac6366d1365b7020e51a35b765b440a.png";
import imgCMUMarathon from "figma:asset/a10a1694f5ad1236f7ecc180fad802b8a32dce4f.png";
import imgCMUTransit from "figma:asset/2700e4d30c25e3bacde346284b3b6f6c296bbace.png";
import imgThailandPostChatbot from "figma:asset/446d471ae20cc3bdba96ad80b95b16644d2e29b0.png";
import imgCMUSmartGate from "figma:asset/23960b93573dfea47721f9828b739d1bb828394e.png";
import imgCrushedStone from "figma:asset/9ff4feef8e10d3887bd65c1fbafacf567adea4e7.png";
import imgTeenion from "figma:asset/f0b1637685f63ad9b71a87ae7090c74b6b8697e3.png";
import imgWirelessInfra from "figma:asset/8190d6f7716c74c8b250c013c37eabbee3f34b63.png";
import imgPPSSiteWalk from "figma:asset/a2c9b909472e40ec068b03d8774186661ab91d8f.png";
import imgBankVIP from "figma:asset/da305133eccc894a6b9e675cd81b2a154f530b92.png";
import imgMythopoeia from "figma:asset/b1ddc4c7d7f41a970f225975bf4473d4e355d7a1.png";
import imgECUShop from "figma:asset/94f22dd3e59f21228b5e38d1dc48297352b08eac.png";
import imgCMUSmartCity from "figma:asset/d9520498c54ef81e8a35ff1439164f9d314b894c.png";
import imgSriphatStaff from "figma:asset/48688d82f62c92f6a6dac06b4f9a08b45268f31b.png";
import imgLannaGastronomy from "figma:asset/2a229be5e0d8f675c1afc895663a52682836d4a4.png";
import imgDOAEWebsite from "figma:asset/e93b51b31741b43cb889c8f5394c8be873e522f1.png";
import imgDOAESignature from "figma:asset/4d3684862a347dd0cc6b2e14804b382636da33cb.png";
import imgPortfolioHeroBg from "figma:asset/ef482feb82f6b9ea6a0fdec9ae9ee1a04993d247.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Portfolio {
  title: string;
  description: string;
  timeline: string;
  image: string;
  number: string;
  category: string;
}

export function PortfolioPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All Case");
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const textRef = useRef(null);

  // Scroll progress for horizontal effect
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to horizontal translation
  // 0% = fully off-screen right, 100% = fully on screen
  const xTransform = useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "0%", "0%"]);
  
  // Transform scroll progress to blur effect for background
  const blurTransform = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(8px)"]);
  
  // Parallax effect for the text - เลื่อนลงช้ากว่า scroll ปกติ
  const { scrollYProgress: textScrollProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"]
  });
  const textY = useTransform(textScrollProgress, [0, 1], [-100, 300]);

  const portfolios: Portfolio[] = [
    {
      number: "01",
      title: "Doctorkeng Pain Monitoring",
      description: "A comprehensive digital platform for managing the fund for indigent patients, which connects three core components: a public-facing website for public relations and receiving donations, a case management system for staff to track patient assistance, and an executive dashboard for viewing the fund's overall statistics, such as donation totals and the number of patients under care. This solution helps to increase transparency and efficiency in fundraising, case management, and the systematic administration of the fund.",
      timeline: "2025",
      image: imgFrame2,
      category: "Dashboard"
    },
    {
      number: "02",
      title: "Smart EMS",
      description: "An all-in-one digital healthcare and clinic management platform that unifies the workflows for patients, doctors, and administrators. The patient-facing application allows users to view their health records, book appointments, and track treatments. In parallel, healthcare professionals use the system to manage patient data and record clinical information (EHR), while administrators monitor the clinic's overall performance via a central dashboard. This solution elevates the standard of medical services, enhances data management efficiency, and creates a seamless healthcare experience.",
      timeline: "2024",
      image: imgSmartEMS,
      category: "Dashboard"
    },
    {
      number: "03",
      title: "Standard Tour",
      description: "An all-in-one management platform for tour operators and travel agencies, integrating a back-office system for the company with a customer-facing mobile application. It allows the agency to manage product data (hotels, tour packages, airlines) and handle all bookings and revenue through a central dashboard, while tourists can conveniently search and book services on their mobile devices. This solution digitizes traditional workflows, expands sales channels, and provides a professional, elevated booking experience for customers.",
      timeline: "2024",
      image: imgStandardTour,
      category: "Application"
    },
    {
      number: "04",
      title: "PEA Service D (ICS)",
      description: "An integrated back-office management platform for businesses that combines essential systems in one place. It allows users to manage employee data, record financial information such as income and expenses, and comprehensively track business performance. The platform includes a Business Intelligence (BI) and reporting system that visualizes sales overviews and other key metrics in graphical formats. This solution enables business owners to systematically manage internal operations, reduce redundancy, and access crucial data for fast and accurate decision-making.",
      timeline: "2024",
      image: imgPEAService,
      category: "Dashboard"
    },
    {
      number: "05",
      title: "PEA Service D (WOM)",
      description: "An all-in-one management platform for service-based businesses that combines essential tools in one place. It enables business owners to manage customer appointments via a calendar, analyze key business data like revenue and popular services through a BI (Business Intelligence) dashboard, and manage customer data (CRM) to view service histories. This solution streamlines complex workflows, increases operational efficiency, and leverages data for professional business growth.",
      timeline: "2024",
      image: imgPEAServiceWOM,
      category: "Dashboard"
    },
    {
      number: "06",
      title: "PEA Service D (MAMO)",
      description: "A digital application for managing and performing electricity meter readings, designed to enhance the efficiency of field staff. Personnel can receive their assigned meter routes, record readings, and capture photographic evidence for verification directly on their mobile devices. All data is synchronized with the central system in real-time. This solution reduces paper-based work, minimizes data entry errors, accelerates the billing cycle, and enables supervisors to effectively track staff performance.",
      timeline: "2024",
      image: imgPEAServiceMAMO,
      category: "Application"
    },
    {
      number: "07",
      title: "TVOP IDA BI DASHBOARD",
      description: "A Business Intelligence (BI) dashboard solution designed to transform complex raw data into easy-to-understand, interactive visual reports. It allows users to track Key Performance Indicators (KPIs), analyze trends, and quickly discover insights. Customizable for various objectives, from monitoring operational data to performing strategic analysis, this platform empowers organizations to make precise and timely data-driven decisions.",
      timeline: "2024",
      image: imgTVOPBI,
      category: "Dashboard"
    },
    {
      number: "08",
      title: "TVOP Digital Workflow",
      description: "A platform for workflow management and tracking the status of all export jobs, designed as a central operational hub specifically for the export business. Users can create and monitor the status of various job types in real-time from start to finish. A key feature is its template system, which allows for the standardization and flexible customization of procedures for each job. This solution helps reduce process complexity, increases accuracy, and enables teams to collaborate more effectively and systematically.",
      timeline: "2024",
      image: imgTVOPWorkflow,
      category: "IT Solution"
    },
    {
      number: "09",
      title: "SCG Logistics Management Platform",
      description: "A comprehensive, intelligent logistics and supply chain management platform for SCG, designed to serve as a central hub for controlling and monitoring all operations in real-time. Users can track the status of deliveries and vehicle locations on a map, manage job queues, and analyze overview data through a Business Intelligence (BI) dashboard that displays key information in graphical formats. This solution enables highly efficient transportation management, reduces delays, and leverages data for strategic decision-making to enhance business competitiveness.",
      timeline: "2022",
      image: imgSCGLogistics,
      category: "IT Solution"
    },
    {
      number: "10",
      title: "SCMC (Smart Campus Management Center)",
      description: "An all-in-one smart command center for comprehensive surveillance and security management across the entire university. This system uses AI technology to analyze footage from CCTV cameras in conjunction with various sensors to automatically detect incidents-ranging from alerts for suspicious persons or vehicles, accidents, and heavy traffic, to environmental monitoring of factors like PM 2.5 dust and water levels. Upon detection, it instantly sends an alert with the location and corresponding images to the security team via the LINE application. This is done to enhance incident response efficiency and create a safer, smarter environment within the university.",
      timeline: "2018",
      image: imgSCMC,
      category: "IT Solution"
    },
    {
      number: "11",
      title: "CMU Move",
      description: "An all-in-one mobile platform designed to connect and engage the Chiang Mai University community. It serves as a central hub for important news and events while promoting an active lifestyle through gamified challenges, such as university-wide step competitions. Users can track their progress in real-time, compete on a leaderboard for rewards, and stay engaged with all campus activities, fostering stronger relationships and a more vibrant university atmosphere.",
      timeline: "2024",
      image: imgCMUMove,
      category: "Application"
    },
    {
      number: "12",
      title: "Home air plus",
      description: "An all-in-one smart dashboard solution for comprehensive building management and control. It allows administrators to monitor and manage various systems in real-time from a single platform, including HVAC control, solar energy production monitoring, CCTV surveillance, and in-depth data analytics for metrics like temperature, humidity, air quality (PM 2.5), and total energy consumption. This system is designed to optimize building management efficiency, reduce energy usage, and maximize security.",
      timeline: "2018",
      image: imgHomeAirPlus,
      category: "Business"
    },
    {
      number: "13",
      title: "EGAT O&M Platform",
      description: "An Enterprise Asset Management (EAM) platform that integrates multiple systems into a single solution. It covers everything from real-time monitoring of machinery and equipment on digital floor plans, a Computerized Maintenance Management System (CMMS), and spare parts inventory management, to a Business Intelligence (BI) dashboard for performance analysis. This solution enables organizations to plan preventive maintenance, increase asset reliability, reduce costs, and maximize overall operational efficiency.",
      timeline: "2023",
      image: imgEGATOM,
      category: "IT Solution"
    },
    {
      number: "14",
      title: "EGAT iMO APP",
      description: "An application for technicians and field staff for managing service and maintenance jobs. It allows users to receive work orders, check details, and fill out safety checklists or work permits directly via mobile. Upon job completion, they can instantly submit a report back to the system with photo attachments as proof of work. This solution digitizes paper-based workflows, improves operational efficiency and safety, and enables real-time tracking of job progress.",
      timeline: "2023",
      image: imgEGATiMO,
      category: "Application"
    },
    {
      number: "15",
      title: "Police LPR Phrae",
      description: "An all-in-one solution for vehicle tracking and fleet management that integrates a web-based dashboard with a mobile application. Administrators can monitor the real-time location of all vehicles in their fleet, view vehicle statuses (e.g., parked, moving), and retrieve historical travel routes along with speed data. This system is designed to increase transportation efficiency, enhance asset security, and help operators plan and control vehicle usage with precision.",
      timeline: "2020",
      image: imgPoliceLPR,
      category: "Application"
    },
    {
      number: "16",
      title: "SCMC Dashboard (Digital Twin)",
      description: "A centralized Digital Twin dashboard for the Smart Campus Management Center (SCMC) that consolidates and displays key data from across the university in real-time on realistic 3D and 2D maps. Administrators can monitor comprehensive insights on a single screen, from utility data for each building (electricity/water consumption) and environmental conditions (PM 2.5/temperature) to the number of personnel in an area and the status of security systems. This solution provides management with a complete overview for data-driven decision-making and maximizes the efficiency of the university's resource management.",
      timeline: "2020",
      image: imgSCMCDigitalTwin,
      category: "Dashboard"
    },
    {
      number: "17",
      title: "KTB University App",
      description: "An all-in-one booking and appointment management system for service-based businesses, featuring a customer-facing application and a dashboard for business owners. Customers can search for services, check available time slots, and instantly book appointments with online payment. Meanwhile, business owners can centrally manage service information, staff schedules, and get a complete overview of all bookings. This solution streamlines operations, increases customer convenience, and enables businesses to manage appointments systematically and efficiently.",
      timeline: "2023",
      image: imgKTBUniversity,
      category: "Application"
    },
    {
      number: "18",
      title: "CMU Marathon",
      description: "Our RFID solution to collect real time speed, location, and rank for all the runners. Auto location checkpoint sharing for rank status context and update on their social network. Dashboard screen for rank status with relevant online audience.",
      timeline: "2020",
      image: imgCMUMarathon,
      category: "Business"
    },
    {
      number: "19",
      title: "CMU Transit",
      description: "Using big data analytics for improved the Chiang Mai University's free transportation. You can watch the buses move around the map in realtime. We show predicted arrival times on bus stop departure boards and adjusts route based on demand.",
      timeline: "2018",
      image: imgCMUTransit,
      category: "IT Solution"
    },
    {
      number: "20",
      title: "Thailand Post's Chatbot",
      description: "Chatbot on Thailand Post's Facebook page.This Chatbot is an assistant designed to respond automatically to customers in order to ask information about product, service, postoffice finder and track item delivery",
      timeline: "2018",
      image: imgThailandPostChatbot,
      category: "Business"
    },
    {
      number: "21",
      title: "CMU Smart Gate",
      description: "Chiang Mai University's barrier gates can open automatically when they detect the car plate has right to access the place, and count up when they let the vehicles in by using the Automatic License Plate Recognition tecnology",
      timeline: "2017",
      image: imgCMUSmartGate,
      category: "IT Solution"
    },
    {
      number: "22",
      title: "Crushed Stone Classification for Quarry Industry",
      description: "Use image processing classification adaptation to crushed stone image predictor based on deep learning and intelligently selected features for quarry industry.",
      timeline: "2017",
      image: imgCrushedStone,
      category: "Business"
    },
    {
      number: "23",
      title: "Teenion: Sell Bots",
      description: "Sell bots platform by Panya.Ai is a quick and easy tool to build Facebook Messenger bot for shop's Facebook page without coding",
      timeline: "2017",
      image: imgTeenion,
      category: "Business"
    },
    {
      number: "24",
      title: "Wireless Infrastructure",
      description: "We provide the outstanding technical staffs which experienced in designing, planning, implementing and managing Wireless IT infrastructure for the new Northern Science Park Building.",
      timeline: "2017",
      image: imgWirelessInfra,
      category: "Business"
    },
    {
      number: "25",
      title: "PPS Site Walk",
      description: "Site tracking application for manage project and report progress or any work around project.",
      timeline: "2017",
      image: imgPPSSiteWalk,
      category: "Business"
    },
    {
      number: "26",
      title: "BANK VIP SERVICE",
      description: "> Queue management for banking staff\n> User experience feedback\n> Online queuing service and postpone a queue feature",
      timeline: "2017",
      image: imgBankVIP,
      category: "Business"
    },
    {
      number: "27",
      title: "Mythopoeia",
      description: "Game Character Design inspiration from world of Middle-Earth that well known around the world.We have evolution system and dress up monster including player avatars. Gameplay is use the Monster for fighting with other gamer in the \"Tirn Base Board Game\" by toss the dice. In addition to training the monster with \"AR Technology\" by the magic card.",
      timeline: "2014",
      image: imgMythopoeia,
      category: "Game"
    },
    {
      number: "28",
      title: "ECU=SHOP",
      description: "Drag Diesel simulation Game with your real car. Try to find the right balance between power and grip and install part and accessory while staying in your class.Turn your ECU=BOX and accelerate your way to victory. Go head-to-head against your friends or random racers, beat them while driving their own cars. Furthemore you can paint color or attach stikers to your car.",
      timeline: "2013",
      image: imgECUShop,
      category: "Business"
    },
    {
      number: "29",
      title: "CMU Smart City",
      description: "An all-in-one platform for smart city management, integrating various systems for urban planning, traffic management, and public services. It provides real-time data analytics, predictive maintenance, and efficient resource allocation to enhance the quality of life for residents and improve city operations.",
      timeline: "2024",
      image: imgCMUSmartCity,
      category: "IT Solution"
    },
    {
      number: "30",
      title: "Sriphat Staff Management",
      description: "A comprehensive staff management system for the Sriphat Hospital, designed to streamline HR processes, improve employee productivity, and enhance overall hospital operations. It includes features for employee records, scheduling, performance evaluation, and training management.",
      timeline: "2023",
      image: imgSriphatStaff,
      category: "Application"
    },
    {
      number: "31",
      title: "LANNA GASTRONOMY",
      description: "A digital ecosystem that connects the entire food supply chain—from upstream (farmers) to midstream (restaurants) and downstream (tourists). The platform features ingredient-to-menu matching (Gastronomy Menu), an interactive restaurant mapping system, and a QR code–based loyalty program for point collection, all designed to promote tourism and stimulate the local economy.",
      timeline: "2021",
      image: imgLannaGastronomy,
      category: "Business"
    },
    {
      number: "32",
      title: "DOAE-Website",
      description: "Enhance government organizational communication with a fully integrated Internet and Intranet website system, developed on the WordPress platform and powered by a high-performance cloud server with auto-scaling capabilities. The solution features a modern, responsive design that works seamlessly across all devices and complies with the Government Website Standard 2.0 and WCAG 2.0 AA accessibility standards, along with advanced security mechanisms.",
      timeline: "2021",
      image: imgDOAEWebsite,
      category: "IT Solution"
    },
    {
      number: "33",
      title: "DOAE_e-Signature",
      description: "Elevate the digital transformation of the Department of Agricultural Extension with the development of two core information systems: A modern organizational website (Internet & Intranet) compliant with WCAG 2.0 AA standards and built on a highly reliable AWS Cloud Server infrastructure. An electronic signature (e-Signature) system that streamlines document workflows, integrates with hardware devices and the internal document management system, and fully supports a paperless work environment.",
      timeline: "2021",
      image: imgDOAESignature,
      category: "IT Solution"
    }
  ];

  const categories = ["All Case", "Business", "IT Solution", "Game", "Dashboard", "Application"];
  
  // Filter portfolios based on selected category
  const filteredPortfolios = selectedCategory === "All Case" 
    ? portfolios 
    : portfolios.filter(p => p.category === selectedCategory);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredPortfolios.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const displayedPortfolios = filteredPortfolios.slice(startIndex, startIndex + itemsPerPage);

  // Reset to page 0 when category changes
  useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory]);

  return (
    <div className="relative bg-white">
      {/* Project Showcase Section - Fixed background */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-screen z-0"
        style={{ filter: blurTransform }}
      >
        <ProjectShowcase />
      </motion.div>

      {/* Spacer to create scroll space */}
      <div className="h-screen w-full" />

      {/* Scrollable content container */}
      <div ref={scrollContainerRef} className="relative min-h-[500vh]">
        {/* Content that slides in from right */}
        <motion.div 
          className="sticky top-0 h-screen w-full overflow-hidden"
          style={{ x: xTransform }}
        >
          {/* Header Section with Background Image */}
          <motion.div
            ref={ref}
            className="absolute inset-0 z-20 text-center overflow-hidden py-32 px-8 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={imgPortfolioHeroBg} 
                alt="Portfolio Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            
            {/* Content */}
            <div ref={textRef} className="relative z-10">
              <motion.h1 
                className="text-4xl md:text-6xl text-white mb-6 max-w-5xl mx-auto leading-tight drop-shadow-lg"
                style={{ y: textY }}
              >
                10 years dedicated to perfection, ensuring guaranteed success for every partner we empower.
              </motion.h1>
              <div className="h-1 w-32 bg-white mx-auto mt-8" />
              
              {/* Scroll Hint */}
              <motion.div 
                className="mt-12 text-white/80 flex items-center justify-center gap-3"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <span className="text-lg">เลื่อนลงเพื่อดูผลงาน</span>
                <span className="text-2xl">↓</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Portfolio Items Section - Regular scroll */}
      <div className="relative z-30 bg-gradient-to-b from-gray-50 to-white w-full px-8 py-20">
        {/* Header with Title */}
        <div className="max-w-[1600px] mx-auto mb-12">
          <div className="flex items-center justify-between mb-8">
            <motion.h2 
              className="text-5xl md:text-6xl text-gray-900"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Something we are proud of
            </motion.h2>
          </div>

          {/* Category Filter Tabs */}
          <motion.div 
            className="flex gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Stacked Portfolio Carousel */}
        <StackedPortfolioCarousel portfolios={filteredPortfolios} />
      </div>
    </div>
  );
}