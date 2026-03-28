import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Introduce() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const coreValues = [
    { title: "DETAIL", desc: "단독으로도 놓치지 않는 디테일" },
    { title: "CONNECT", desc: "브랜드 내부의 방향성" },
    { title: "FLEXIBILITY", desc: "트렌드를 읽는 유연함" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition px-8 md:px-24 py-24 md:py-32 max-w-7xl mx-auto"
    >
      {/* Hero Section */}
      <section className="mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-32">
          {/* Title */}
          <div className="md:col-span-12">
            <h1 className="text-[18vw] md:text-[12vw] font-bold leading-[0.95] tracking-tighter uppercase">
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
          <div className="md:col-span-7 self-start">
            <p className="text-xl md:text-3xl font-medium leading-tight md:max-w-xl ml-auto">
              안녕하세요. 브랜드를 섬세하게 이해하고<br />
              그에 맞는 방식으로 적용하고 확장하는<br />
              <span className="font-sans">IMC</span> 마케터 김민성입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-black text-white py-24 px-8 md:px-24 -mx-8 md:-mx-24 mb-48">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {coreValues.map((item) => (
            <div key={item.title} className="group">
              <h3 className="serif text-4xl md:text-5xl mb-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500 text-white">
                {item.title}
              </h3>
              <p className="text-lg font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Profile Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-48">
        <div className="aspect-[3/4] bg-neutral-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="space-y-12">
          <div>
            <h2 className="text-5xl font-bold mb-12">김민성 Kim Min-seong</h2>
            <div className="mt-12 space-y-2 text-lg text-neutral-600">
              <p>1998.06.03 (만 27세)</p>
              <p>cubeast@naver.com</p>
              <p>010-5872-8933</p>
              <p className="serif italic">Instagram</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="serif text-xl font-bold mb-4 border-b border-neutral-200 pb-2">CAREER</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline gap-2">
                    <p className="font-bold">RMTC - Romantic Crown Marketing</p>
                    <p className="text-[11px] text-neutral-500">22.03 - 25.11</p>
                  </div>
                  <p className="text-neutral-700">스트릿/캐주얼 패션 브랜드 IMC 마케팅</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <p className="font-bold">ROUND MEDIA Social Contents</p>
                    <p className="text-[11px] text-neutral-500">20.01 - 21.01</p>
                  </div>
                  <p className="text-neutral-700">뷰티패션 매거진 에디터 / 광고 대행 운영 기획</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="serif text-xl font-bold mb-4 border-b border-neutral-200 pb-2">EDUCATION</h4>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-baseline gap-2">
                  <span>단국대학교 경영학전공</span>
                  <span className="text-[11px] text-neutral-500">17.01 - 22.08</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span>단국대학교 광고홍보전공</span>
                  <span className="text-[11px] text-neutral-500">18.01 - 22.08</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span>홍보대사 날개단대 기획팀</span>
                  <span className="text-[11px] text-neutral-500">19.01 - 20.01</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span>동아리 광고친구 회장</span>
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
