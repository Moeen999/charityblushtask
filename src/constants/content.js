import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiOutlineCreditCard, HiOutlineShieldCheck } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export const landingPageContent = [
  {
    id: 1,
    title: "Make a Difference in Qatar",
    para: "Join thousands of donors helping communities across Qatar through verified, RACA-approved charities.",
    buttonText: "View Campaigns",
  },
  {
    id: 2,
    title: "Confidence in every contribution",
    para: "Every donation is tracked and verified. Complete transparency in real-time reporting and RACA oversight.",
    buttonText: "Support a Cause",
  },
  {
    id: 3,
    title: "Transparent Charitable Giving",
    para: "Qatar's first transparent donation platform with blockchain tracking from donor to beneficiary.",
    buttonText: "Donate Now",
  },
];

export const processList = [
  {
    id: 1,
    icon: BsFillCheckCircleFill,
    description: "Integrated with Sandi to prevent duplicate aid distribution",
  },
  {
    id: 2,
    icon: BsFillCheckCircleFill,
    description: "RACA approved and monitored campaigns with full oversight",
  },
  {
    id: 3,
    icon: BsFillCheckCircleFill,
    description:
      "Regular impact reports with photos, videos, and beneficiary stories",
  },
  {
    id: 4,
    icon: BsFillCheckCircleFill,
    description:
      "Blockchain-verified transaction records for complete auditability",
  },
];

export const processSteps = [
  {
    id: 1,
    icon: FaMagnifyingGlass,
    title: "Choose a Verified Campaign",
    description:
      "Browse RACA-approved campaigns from trusted charities in Qatar",
  },
  {
    id: 2,
    icon: HiOutlineCreditCard,
    title: "Donate Securely",
    description:
      "Give easily via card, bank transfer, or digital wallet with encryption",
  },
  {
    id: 3,
    icon: HiOutlineShieldCheck,
    title: "Track Your Impact",
    description: "Receive real-time updates on how your donation is being used",
  },
];

export const featuredCampaigns = [
  {
    id: 1,
    category: "Health",
    img: "https://media.gettyimages.com/id/2120554524/photo/hospital-holding-hands-and-kid-in-bed-with-love-support-and-care-in-clinic-after-surgery.jpg?s=612x612&w=0&k=20&c=VSnDhLLZI1j4UdxTbGlyZOzMGCSo3w2Yj1CvaJsLmUA=",
    organization: "Qatar Red Crescent",
    title: "Medical Support for Families",
    description:
      "Provide essential medical care and medication for low-income families across Qatar",
    fundedPercentage: 60,
    raisedAmount: 450000,
    goalAmount: 750000,
    currency: "QAR",
    badgeText: "Integrated with Sandi to prevent duplication",
    isVerified: true,
  },

  {
    id: 2,
    category: "Education",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    organization: "Education Above All",
    title: "Digital Learning for Students",
    description:
      "Supply tablets and internet access for students in need to continue their education",
    fundedPercentage: 57,
    raisedAmount: 285000,
    goalAmount: 500000,
    currency: "QAR",
    badgeText: "Integrated with Sandi to prevent duplication",
    isVerified: true,
  },

  {
    id: 3,
    category: "Relief",
    img: "https://media.gettyimages.com/id/530930529/photo/little-girl-trying-on-coat-at-winter-clothing-donation-drive.jpg?s=612x612&w=0&k=20&c=bFskyDKmdlt2JLs7uZ6m2rss4VZRkijhdkUs_CFVn-s=",
    organization: "Qatar Charity",
    title: "Winter Aid Package Distribution",
    description:
      "Provide warm clothing, blankets and heating equipment for families during winter months",
    fundedPercentage: 78,
    raisedAmount: 620000,
    goalAmount: 800000,
    currency: "QAR",
    badgeText: "Integrated with Sandi to prevent duplication",
    isVerified: true,
  },
];

export const platformStakeholders = [
  {
    id: 1,
    role: "Donors",
    description: "Individuals and corporates united to make a difference.",
    icon: HiOutlineUsers,
    features: [
      "Give with confidence through transparent tracking",
      "Flexible payment options: bank transfer, QR code",
      "Receive instant confirmations and real-time impact updates",
      "Choose from health, education, relief campaigns",
    ],
    ctaText: "Start Donating",
  },

  {
    id: 2,
    role: "Charities",
    description: "Organizations managing campaigns and donations",
    icon: HiOutlineShieldCheck,
    features: [
      "Create and manage donation campaigns efficiently",
      "Upload legal documents and licenses for verification",
      "Track donations and distribution to beneficiaries",
      "Generate automated reports for RACA compliance",
    ],
    ctaText: "Register Your Charity",
  },

  {
    id: 3,
    role: "Authority (RACA)",
    description: "Regulatory body with oversight and compliance tools",
    icon: HiOutlineBuildingOffice,
    features: [
      "Approve or reject charity campaigns",
      "View all donations and campaigns in real-time",
      "Receive automated compliance and financial reports",
      "Track performance through KPI dashboards",
    ],
    ctaText: "Learn About Oversight",
  },
];

export const contactInfo = [
  {
    id: 1,
    icon: IoMail,
    title: "Email",
    titleInfo: "support@charity.org",
    availability: "Typically replies within 24 hours",
  },
  {
    id: 2,
    icon: FaPhone,
    title: "Phone",
    titleInfo: "+123 456 7890",
    availability: "WhatsApp Available (9AM - 5PM)",
  },
  {
    id: 3,
    icon: MdLocationOn,
    title: "Office",
    titleInfo: "123 Charity Street, City, Country",
    availability: "Visit by appointment only",
  },
];
