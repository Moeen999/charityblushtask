import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiOutlineCreditCard, HiOutlineShieldCheck } from "react-icons/hi2";

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
    description:
      "Receive real-time updates on how your donation is being used",
  },
];
