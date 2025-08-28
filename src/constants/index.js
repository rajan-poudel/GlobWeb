import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage1,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notification5,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#",
  },
  {
    id: "1",
    title: "Our Clients",
    url: "#clients",
  },
  {
    id: "2",
    title: "Services",
    url: "#features",
  },
  {
    id: "3",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [ notification4, notification3, notification2];

export const companyLogos = [notification5, notification4, notification3, notification2];

export const brainwaveServices = [
  "Mobile-optimized designs that convert visitors",
  "Built-in SEO to attract more customers",
  "Easy content updates with no tech skills needed",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
title: "News Arpan",
text: "News Arpan is a news website delivering timely and reliable updates across various topics.",
date: "Jan 2024",
status: "done",
imageUrl: roadmap1,
colorful: true,

  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
"Our solutions are hosted on a cutting-edge infrastructure, ensuring 24/7 uptime for unmatched reliability and performance.";

export const collabContent = [
  {
    id: "0",
    title: "99.99% Uptime",
  },
  {
    id: "1",
    title: "High-Performance Solutions",
    
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
  {
    id: "3",
    title: "Scalable Architecture",
    
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Starter Website",
    description: "Perfect for small businesses getting online",
    price: "9999",
    features: [
      "Responsive single-page design",
      "Basic animations & interactions",
      "Free business email (1 account)",
      "Social media integration (3 platforms)",
      "Hosting on domain (1 year)",
      "Basic SEO setup"
    ],
  },
  {
    id: "1",
    title: "Business Website",
    description: "For growing businesses needing more impact",
    price: "24999",
    features: [
      "Custom multi-page website",
      "Advanced animations & micro-interactions",
      " Business emails (5 accounts)",
      "Full social media integration (5 platforms)",
      "Custom domain (2 year included)",
      "Advanced SEO optimization",
      "Basic analytics dashboard"

    ],
  },
  {
    id: "2",
    title: "Enterprise Digital Suite",
    description: "End-to-end digital transformation",
    price: null,
    features: [
      "Custom mobile app (iOS/Android)",
      "Monthly social media management",
      "Complete branding package (logo, banners)",
      "Tech solutions",
      "Priority 24/7 support",
      "Advanced analytics portal",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Website Development",
    text: "Custom, responsive, and high performing website that suits your business needs—all at budget friendly rates.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage1,
  },
  {
    id: "1",
    title: "Mobile App Development",
    text: "We design and develop feature-rich, user-friendly mobile applications for iOS and Android.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Graphics Designing Services",
    text: "Eye-catching logos, banners, and brand visuals that leave a lasting impression and enhance brand recognition.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage3,
  },
  {
    id: "3",
    title: "Social Media Management",
    text: "Strategic content, targeted advertising, and audience engagement to maximize reach and conversions.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage4,
    light: true,
  },
  {
    id: "4",
    title: "Tech Solutions",
    text: "Smart, efficient systems for seamless inventory, payroll, invoicing, learning management and more —optimized for business growth",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage5,
  },
  {
    id: "5",
    title: "Search Engine Optimization (SEO)",
    text: "Optimized SEO strategies to improve search rankings, drive traffic, and enhance visibility.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage6,
  },
];

export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: discordBlack,
    url: "https://www.linkedin.com/company/globsoft",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/glob_soft",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/globsoft/",
  },
  {
    id: "3",
    title: "YouTube",
    iconUrl: telegram,
    url: "https://www.youtube.com/@globsoft",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/globsoft/",
  },
];
