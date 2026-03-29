import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface AccordionItemProps {
  title: string;
  category: string;
  period: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  key?: React.Key;
}

interface AccordionItemProps {
  title: string;
  category: string;
  period: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  key?: React.Key;
  titleSize?: string;
}

function AccordionItem({ title, category, period, children, isOpen, onClick, titleSize = "text-2xl md:text-3xl" }: AccordionItemProps) {
  return (
    <div className={`border-b border-neutral-200 transition-colors duration-300 ${isOpen ? 'bg-neutral-50' : 'hover:bg-neutral-50/50'}`}>
      <button
        onClick={onClick}
        className="w-full flex flex-col md:flex-row md:justify-between md:items-center group text-left py-8 px-2 md:px-6"
      >
        <div className="flex flex-col items-start w-full mb-4 md:mb-0">
          <h3 className={`${titleSize} font-bold transition-colors duration-300 ${isOpen ? 'text-black' : 'text-neutral-400 group-hover:text-black'} mb-2`}>
            {title}
          </h3>
          <div className="flex items-center space-x-3">
            <span className={`text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border transition-colors duration-300 ${isOpen ? 'border-neutral-800 text-neutral-800' : 'border-neutral-300 text-neutral-400 group-hover:border-neutral-500 group-hover:text-neutral-500'}`}>
              {category}
            </span>
            {period && (
              <span className={`text-[10px] md:text-sm font-medium transition-colors duration-300 ${isOpen ? 'text-neutral-500' : 'text-neutral-300 group-hover:text-neutral-400'}`}>
                {period}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end w-full md:w-auto">
          <span className={`text-3xl transform transition-transform duration-300 ${isOpen ? 'rotate-45 text-black' : 'rotate-0 text-neutral-300 group-hover:text-black'}`}>
            +
          </span>
        </div>
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
            <div className="pt-4 pb-10 px-4 md:px-6">
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
      category: "Beauty",
      items: [
        {
          id: "loccitane",
          title: "록시땅 시어캠퍼스 서포터즈",
          period: "2018.06 - 2018.08",
          award: "개인 최우수 콘텐츠",
          content: "It’s not all, It’s Loccitane",
          desc: [
            "인스타그램 채널 특성인 스와이프 활용, 표지와 마지막 이미지의 연결성 강조",
            "‘록시땅=핸드크림이 전부’라는 인식에서 벗어나, 브랜드 키워드를 가볍게 소개하는 이미지 콘텐츠"
          ],
          role: "단독 기획/제작 (100%)"
        },
        {
          id: "innisfree",
          title: "이니스프리 그린어스 서포터즈",
          period: "2017.09 - 2018.02",
          award: "종합 팀 1위, 우수 콘텐츠",
          content: "그린라이프 캠페인 ‘Green Planting’",
          desc: [
            "오프라인 캠페인 및 온라인 바이럴 콘텐츠 제작",
            "그린라이프 실천을 위한 브랜드 가치 전달 캠페인 기획"
          ],
          role: "바이럴 콘텐츠 제작, 오프라인 캠페인 진행, 발표 자료 제작 (70%)"
        }
      ]
    },
    {
      category: "F&B",
      items: [
        {
          id: "ottogi",
          title: "오뚜기 진앤지니 진라면 서포터즈",
          period: "2018.07 - 2018.08",
          award: "공식 채널 단독 게재",
          content: "진라면, 과거와 현재를 잇다",
          desc: [
            "진라면 30주년 기념 CF 컨셉 영상 기획/제작",
            "뉴트로 감성을 담은 브랜드 스토리텔링 영상 콘텐츠"
          ],
          role: "콘텐츠 기획, 영상 촬영, 편집 (100%)"
        },
        {
          id: "bingrae",
          title: "빙그레 끌레도르 마케팅 공모전",
          period: "2020.01",
          award: "최종 4위",
          content: "‘청각’적 오감 마케팅 제안",
          desc: [
            "재즈 음악과 끌레도르를 접목한 IMC 제안",
            "브랜드 프리미엄 이미지 강화를 위한 감성 마케팅 전략"
          ],
          role: "기획 및 제안"
        }
      ]
    },
    {
      category: "In-school",
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
      className="page-transition"
    >
      <header className="bg-black text-white pt-24 md:pt-32 pb-12 md:pb-24 px-8 md:px-24 mb-12 md:mb-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="serif text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">ACTIVITIES</h1>
          <p className="text-neutral-400 text-lg">Diverse Projects & Achievements</p>
        </div>
      </header>

      <div className="px-8 md:px-24 max-w-7xl mx-auto pb-16 md:pb-32">
        <div className="flex flex-col">
        {activities.map((section) => (
          <React.Fragment key={section.category}>
            <div className="flex flex-col">
              {section.items.map((item) => (
                  <AccordionItem
                  key={item.id}
                  title={item.title}
                  category={section.category}
                  period={item.period}
                  isOpen={!!openItems[item.id]}
                  onClick={() => toggleItem(item.id)}
                  titleSize="text-xl md:text-2xl"
                >
                  <div className="space-y-8 max-w-5xl">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex-1">
                        {item.award && (
                          <span className="inline-block bg-neutral-900 text-white px-3 py-1 text-[10px] font-bold tracking-tighter mb-4">
                            {item.award}
                          </span>
                        )}
                        <p className="text-2xl md:text-3xl font-medium text-neutral-800 leading-tight">
                          {item.content}
                        </p>
                      </div>
                      <div className="w-full md:w-48 pt-1">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Role</p>
                        <p className="text-sm text-neutral-600 font-medium leading-relaxed">{item.role}</p>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-neutral-100">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Project Details</p>
                      <ul className="space-y-3">
                        {(Array.isArray(item.desc) ? item.desc : [item.desc]).map((d, i) => (
                          <li key={i} className="text-base md:text-lg text-neutral-600 leading-relaxed flex items-start">
                            <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-neutral-300 rounded-full shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image Placeholder */}
                    <div className="pt-4">
                      <div className="aspect-[16/9] bg-neutral-50 flex items-center justify-center border border-dashed border-neutral-200 rounded-sm">
                        <p className="text-neutral-400 text-xs italic tracking-widest uppercase">Image to be inserted</p>
                      </div>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </div>
          </React.Fragment>
        ))}
        </div>
      </div>
    </motion.div>
  );
}
