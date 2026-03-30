import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

export default function Introduce() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showMobile, setShowMobile] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const coreValues = [
    { title: "ALIGNMENT", desc: "방향을 맞춥니다" },
    { title: "BALANCE", desc: "균형을 설계합니다" },
    { title: "CONNECTION", desc: "연결을 만듭니다" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition px-8 md:px-24 pt-24 pb-12 md:py-32 max-w-7xl mx-auto"
    >
      {/* Hero Section */}
      <section className="mb-12 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-32">
          {/* Title */}
          <div className="md:col-span-12">
            <h1 className="text-[16vw] md:text-[10vw] font-bold leading-[0.95] tracking-tighter uppercase text-black">
              큰 그릇<br />대기민성
            </h1>
          </div>

          {/* Subtitles & Description */}
          <div className="md:col-span-5 self-start pt-1 md:pt-2">
            <div className="text-lg md:text-xl font-medium text-neutral-400 space-y-1">
              <p>깨지지 않는 디테일</p>
              <p>무엇이든 담는 단단함</p>
            </div>
          </div>
          <div className="md:col-span-7 self-start flex justify-end">
            <p className="text-lg md:text-2xl font-medium leading-tight text-right">
              안녕하세요. 브랜드를 섬세하게 이해하고<br />
              그에 맞는 방식으로 적용하고 확장하는<br />
              <span className="font-sans">IMC</span> 마케터 김민성입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-black text-white py-12 md:py-16 px-8 md:px-24 -mx-8 md:-mx-24 mb-12 md:mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {coreValues.map((item, index) => (
              <div key={item.title} className="group border-t border-neutral-800 pt-6 md:pt-8 flex flex-row items-center md:flex-col md:items-start">
                <span className="text-neutral-600 font-mono text-sm mr-4 md:mb-4 md:block">0{index + 1}</span>
                <h3 className="serif text-xl md:text-4xl text-white tracking-tighter mr-auto md:mr-0 md:mb-4 md:w-full">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed text-right md:text-left">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-12 md:mb-24">
        <div className="aspect-[3/4] bg-neutral-100 overflow-hidden w-full max-w-[480px]">
          <img 
            src="https://i.imgur.com/8n9XW8F.jpeg" 
            alt="Profile" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
            crossOrigin="anonymous" 
          />
        </div>
        
        <div className="space-y-8 md:space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 flex items-baseline gap-2 md:gap-4">
              김민성 <span className="text-xl md:text-[28px] font-medium text-neutral-500 whitespace-nowrap">Kim Min-seong</span>
            </h2>
            <div className="mt-8 md:mt-12 space-y-2 text-lg text-neutral-600">
              <div className="flex flex-col space-y-0.5">
                <div className="flex gap-3 items-center">
                  <button 
                    onClick={() => setShowMobile(!showMobile)}
                    className={`px-3 py-1 text-sm rounded-md border transition-all duration-300 ${
                      showMobile 
                      ? 'bg-neutral-200 border-neutral-400 text-neutral-900 font-medium' 
                      : 'text-neutral-500 border-neutral-200 hover:border-neutral-300 hover:text-neutral-600'
                    }`}
                  >
                    Mobile
                  </button>
                  <button 
                    onClick={() => setShowEmail(!showEmail)}
                    className={`px-3 py-1 text-sm rounded-md border transition-all duration-300 ${
                      showEmail 
                      ? 'bg-neutral-200 border-neutral-400 text-neutral-900 font-medium' 
                      : 'text-neutral-500 border-neutral-200 hover:border-neutral-300 hover:text-neutral-600'
                    }`}
                  >
                    E-mail
                  </button>
                  <a 
                    href="https://instagram.com/bravery___" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-sm rounded-md border border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-600 transition-all duration-300"
                  >
                    Instagram
                  </a>
                </div>

                <AnimatePresence>
                  {showMobile && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-neutral-900 font-bold py-1">010-5872-8933</p>
                    </motion.div>
                  )}
                  {showEmail && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-neutral-900 font-bold py-1">cubeast@naver.com</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div>
              <h4 className="serif text-xl font-bold mb-4 border-b border-neutral-200 pb-2 flex justify-between items-center">
                CAREER
                <Link to="/career" className="text-neutral-400 hover:text-black transition-colors">
                  <Plus size={20} />
                </Link>
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex items-baseline gap-2">
                    <p className="font-bold leading-tight">알엠티씨 로맨틱크라운 마케팅</p>
                    <p className="text-[11px] text-neutral-500">22.03 - 25.11</p>
                  </div>
                  <p className="text-neutral-700 leading-tight text-base">패션 브랜드 IMC 마케팅 단독 운영</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <p className="font-bold leading-tight">라운드미디어 소셜콘텐츠팀</p>
                    <p className="text-[11px] text-neutral-500">20.01 - 21.01</p>
                  </div>
                  <p className="text-neutral-700 leading-tight text-base">뷰티패션 매거진 에디터 / 광고주 채널 운영 기획</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="serif text-xl font-bold mb-4 border-b border-neutral-200 pb-2">EDUCATION</h4>
              <ul className="space-y-1 text-neutral-700">
                <li className="flex items-baseline gap-2">
                  <span className="leading-tight">단국대학교 경영학전공</span>
                  <span className="text-[11px] text-neutral-500">17.01 - 22.08</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="leading-tight">단국대학교 광고홍보부전공</span>
                  <span className="text-[11px] text-neutral-500">18.01 - 22.08</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="leading-tight">홍보대사 날개단대 기획팀</span>
                  <span className="text-[11px] text-neutral-500">19.01 - 20.01</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="leading-tight">동아리 광고친구 회장</span>
                  <span className="text-[11px] text-neutral-500">18.01 - 19.01</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-neutral-200 pt-16">
        <div>
          <h4 className="text-2xl font-bold mb-8">MARKETING & DATA</h4>
          <div className="flex flex-wrap gap-2">
            {["GA4", "Google Looker Studio", "Notion", "Slack"].map((skill) => (
              <span key={skill} className="px-2.5 py-1 border border-neutral-200 rounded-full text-[11px] font-medium text-neutral-600 hover:bg-black hover:text-white transition-colors duration-300 cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-8">OFFICE & DESIGN</h4>
          <div className="flex flex-wrap gap-2">
            {["MS Office", "Google Workspace", "Adobe Photoshop", "Adobe Premiere", "Figma"].map((skill) => (
              <span key={skill} className="px-2.5 py-1 border border-neutral-200 rounded-full text-[11px] font-medium text-neutral-600 hover:bg-black hover:text-white transition-colors duration-300 cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
