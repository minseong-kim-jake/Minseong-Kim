import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface AccordionItemProps {
  title: string;
  period: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  key?: React.Key;
}

function AccordionItem({ title, period, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-neutral-200 py-8 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center group text-left"
      >
        <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
          <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isOpen ? 'text-black' : 'text-neutral-400 group-hover:text-black'}`}>
            {title}
          </h3>
          <span className="serif italic text-sm text-neutral-400 mt-1 md:mt-0">{period}</span>
        </div>
        <span className={`text-3xl transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-10 pb-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Activities() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const activities = [
    {
      category: "BEAUTY",
      items: [
        {
          id: "loccitane",
          title: "LOCCITANE - SHEA CAMPUS",
          period: "2018.06 - 2018.08",
          award: "개인 최우수 콘텐츠",
          content: "It’s not all, It’s Loccitane",
          desc: "인스타그램 스와이프 활용, 브랜드 키워드 소개 이미지 콘텐츠 제작",
          role: "단독 기획/제작 (100%)"
        },
        {
          id: "innisfree",
          title: "INNISFREE - GREENUS",
          period: "2017.09 - 2018.02",
          award: "종합 팀 1위, 우수 콘텐츠",
          content: "그린라이프 캠페인 ‘Green Planting’",
          desc: "오프라인 캠페인 및 온라인 바이럴 콘텐츠 제작",
          role: "바이럴 콘텐츠 제작, 오프라인 캠페인 진행, 발표 자료 제작 (70%)"
        }
      ]
    },
    {
      category: "F&B",
      items: [
        {
          id: "ottogi",
          title: "OTTOGI - JIN&JINNY",
          period: "2018.07 - 2018.08",
          award: "공식 채널 단독 게재",
          content: "진라면, 과거와 현재를 잇다",
          desc: "진라면 30주년 기념 CF 컨셉 영상 기획/제작",
          role: "콘텐츠 기획, 영상 촬영, 편집 (100%)"
        },
        {
          id: "bingrae",
          title: "BINGRAE - CLEDOR MARKETING CONTEST",
          period: "2020.01",
          award: "최종 4위",
          content: "‘청각’적 오감 마케팅 제안",
          desc: "재즈 음악과 끌레도르를 접목한 IMC 제안",
          role: "기획 및 제안"
        }
      ]
    },
    {
      category: "IN-SCHOOL",
      items: [
        {
          id: "dankook_wing",
          title: "단국대학교 공식 홍보대사 날개단대",
          period: "2019.01 - 2020.01",
          content: "기말고사 응원 컵홀더 이벤트",
          desc: "20대 타깃 컵홀더 활용 인증 이벤트, 소상공인 카페 협업",
          role: "이벤트 기획, 진행 (100%)"
        },
        {
          id: "dankook_ad",
          title: "단국대학교 동아리 광고친구 회장",
          period: "2019.01 - 2020.01",
          content: "TIK-TOK 틱톡 공모전 제안",
          desc: "틱톡 이미지 개선을 위한 공모전 기획 및 브랜드 커뮤니케이션",
          role: "공모전 기획, 제안서 작성, 브랜드 커뮤니케이션 (100%)"
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition px-8 md:px-24 py-24 md:py-32 max-w-7xl mx-auto"
    >
      <header className="mb-24">
        <h1 className="serif text-6xl md:text-8xl font-bold mb-4">ACTIVITIES</h1>
        <p className="text-neutral-500 text-lg">Diverse Projects & Achievements</p>
      </header>

      <div className="space-y-32">
        {activities.map((section) => (
          <section key={section.category}>
            <h2 className="serif text-4xl md:text-5xl mb-12 border-b border-neutral-200 pb-4">
              {section.category}
            </h2>
            <div className="flex flex-col">
              {section.items.map((item) => (
                <AccordionItem
                  key={item.id}
                  title={item.title}
                  period={item.period}
                  isOpen={!!openItems[item.id]}
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="space-y-8 max-w-4xl">
                    <div>
                      {item.award && (
                        <span className="inline-block bg-neutral-900 text-white px-4 py-1.5 text-sm font-bold mb-6">
                          {item.award}
                        </span>
                      )}
                      <p className="text-2xl md:text-3xl font-medium text-neutral-800 leading-snug">
                        “{item.content}”
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xl text-neutral-600 leading-relaxed">
                        {item.desc}
                      </p>
                      <p className="text-sm text-neutral-400 font-medium">
                        Role: {item.role}
                      </p>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </div>
          </section>
        ))}
      </div>
    </motion.div>
  );
}
