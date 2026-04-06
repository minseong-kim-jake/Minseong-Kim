import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Instagram, Youtube, ExternalLink, X } from 'lucide-react';

const bravoLifeContents = [
  {
    id: 1,
    title: "콘텐츠 1",
    cover: "https://i.imgur.com/t44KiDM.jpeg",
    images: [
      "https://i.imgur.com/t44KiDM.jpeg",
      "https://i.imgur.com/sZRlLx1.jpeg",
      "https://i.imgur.com/cvjycPV.jpeg",
      "https://i.imgur.com/7g7A39e.jpeg",
      "https://i.imgur.com/iWLZLry.jpeg"
    ]
  },
  {
    id: 2,
    title: "콘텐츠 2",
    cover: "https://i.imgur.com/hzZVEtZ.jpeg",
    images: [
      "https://i.imgur.com/hzZVEtZ.jpeg",
      "https://i.imgur.com/3cRgSHr.jpeg",
      "https://i.imgur.com/vwLPRVa.jpeg",
      "https://i.imgur.com/LWgTOJw.jpeg",
      "https://i.imgur.com/6n9JkeA.jpeg"
    ]
  }
];

const roasData = [
  { date: "24.05", roas: 422 },
  { date: "24.07", roas: 462 },
  { date: "24.09", roas: 662 },
  { date: "24.11", roas: 1123 },
  { date: "25.01", roas: 962 },
  { date: "25.02", roas: 821 },
];

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className={`border-b border-neutral-200 transition-colors duration-300 ${isOpen ? 'bg-neutral-50' : 'hover:bg-neutral-50/50'}`}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center group text-left py-2.5 md:py-3 px-4 md:px-6"
      >
        <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
          <h4 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-black' : 'text-neutral-400 group-hover:text-black'}`}>
            {title}
          </h4>
        </div>
        <div className="flex items-center gap-4">
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
            <div className="pt-0 pb-10 px-4 md:px-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Career() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [selectedGallery, setSelectedGallery] = useState<typeof bravoLifeContents[0] | null>(null);

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      <header className="bg-black text-white pt-24 md:pt-32 pb-12 md:pb-24 px-8 md:px-24 mb-12 md:mb-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="serif text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">CAREER</h1>
          <p className="text-neutral-400 text-lg tracking-[0.2em]">What I Execute</p>
        </div>
      </header>

      <div className="px-8 md:px-24 max-w-7xl mx-auto">
        {/* RMTC Section */}
        <section className="mb-16 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 border-b-2 border-black pb-4">
          <div className="w-full">
            <div className="flex justify-between items-baseline mb-1 md:mb-2">
              <h2 className="text-xl md:text-4xl font-bold">알엠티씨 로맨틱크라운 마케팅</h2>
              <p className="text-[11px] md:text-base font-medium text-neutral-500 whitespace-nowrap">22.03 - 25.11</p>
            </div>
            <p className="text-sm md:text-lg text-neutral-600">패션 브랜드 IMC 마케팅 단독 운영</p>
          </div>
        </div>

        <div className="space-y-16">
          {/* Owned Media */}
          <div>
            <h3 className="font-sans text-lg md:text-xl tracking-normal md:tracking-widest font-bold mb-4 flex items-center text-neutral-800">
              OWNED MEDIA & CONTENTS
            </h3>
            <div className="flex flex-col">
              <AccordionItem
                title="SNS 운영 / 콘텐츠 기획 제작"
                isOpen={!!openItems['sns']}
                onClick={() => toggleItem('sns')}
              >
                <div className="space-y-6">
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-3xl">
                    브랜드와 시즌 컨셉을 반영한 콘텐츠를 기획하여 채널을 운영하였습니다.<br />
                    인스타그램 특성에 알맞는 러프한 스타일로 촬영하였습니다.
                  </p>
                  <div className="flex flex-col space-y-6">
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">진행업무</p>
                      <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2">
                        <li>SNS 채널 운영 관리</li>
                        <li>SNS 이벤트 기획 및 실행</li>
                        <li>이미지/영상 콘텐츠 기획, 촬영, 편집</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">콘텐츠 예시</p>
                      <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2 mb-6">
                        <li>룩북과 디테일컷 외적으로 제품과 무드를 가볍게 풀 수 있는 콘텐츠</li>
                        <li>프레피 → 스트릿 스타일로 변화한 과정에 적합한 브랜딩 요소</li>
                      </ul>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
                        {[
                          "https://i.imgur.com/RdRi7YP.png",
                          "https://i.imgur.com/B4CSnXD.png",
                          "https://i.imgur.com/du1rApC.png",
                          "https://i.imgur.com/LAys5wa.png"
                        ].map((src, i) => (
                          <div key={i} className="bg-neutral-50 overflow-hidden border border-neutral-100 flex items-center justify-center">
                            <img 
                              src={src} 
                              alt={`SNS Content Example ${i + 1}`} 
                              className="w-full h-auto block hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">내부 브랜드 촬영 지원</p>
                      <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2 mb-6">
                        <li>브랜드 <a href="https://www.instagram.com/niier_nor_official/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline font-bold">niiernor</a> SNS 콘텐츠 촬영</li>
                        <li>컨셉에 맞는 러프한 이미지, 백스테이지 컷</li>
                      </ul>
                      <div className="mt-8 border border-neutral-100 overflow-hidden bg-neutral-50 shadow-sm">
                        <img 
                          src="https://i.imgur.com/ZSYMulu.png" 
                          alt="Internal Brand Shooting Support" 
                          className="w-3/4 h-auto block mx-auto"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                title="자사몰 리뉴얼"
                isOpen={!!openItems['mall']}
                onClick={() => toggleItem('mall')}
              >
                <div className="space-y-6">
                  <div className="flex flex-col space-y-6">
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">진행업무</p>
                      <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2">
                        <li>상황 분석 및 레퍼런스/벤치마킹</li>
                        <li>고객 구매 여정에 따른 메뉴 구조도 기획</li>
                        <li>내부 파트별 필요 기능 취합</li>
                        <li>배너 및 위젯 이미지 가이드 제작</li>
                        <li>CAFE24 기본 HTML 배리에이션</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">결과</p>
                      <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2 mb-8">
                        <li>기획전 페이지를 통한 자사몰 프로모션 운영</li>
                        <li>가시성 높은 카테고라이징</li>
                        <li>스냅 이미지 콘텐츠 활용</li>
                      </ul>
                      
                      <div className="pt-8 border-t border-neutral-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="relative">
                            <div className="absolute top-0 left-0 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 z-10">
                              Before
                            </div>
                            <div className="border border-neutral-100 overflow-hidden bg-neutral-50">
                              <img 
                                src="https://i.imgur.com/pB2Gq7G.png" 
                                alt="Mall Renewal Before" 
                                className="w-full h-auto block"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </div>
                          <div className="relative">
                            <div className="absolute top-0 left-0 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 z-10">
                              After
                            </div>
                            <div className="border border-neutral-100 overflow-hidden bg-neutral-50">
                              <img 
                                src="https://i.imgur.com/LYvZTq8.png" 
                                alt="Mall Renewal After" 
                                className="w-full h-auto block"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </div>

          {/* Performance Marketing */}
          <div>
            <h3 className="font-sans text-lg md:text-xl tracking-normal md:tracking-widest font-bold mb-4 flex items-center text-neutral-800">
              PERFORMANCE MARKETING
            </h3>
            <div className="flex flex-col">
              <AccordionItem
                title="META (MUSINSA)"
                isOpen={!!openItems['meta']}
                onClick={() => toggleItem('meta')}
              >
                <div className="space-y-6">
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-3xl">
                    프로모션에 상응하는 메타 광고 프로세스를 최적화 하였습니다.<br />
                    데이터 분석과 테스트를 거쳐 최종 <span className="font-bold text-neutral-900">ROAS 800%대</span>를 유지 하였습니다.
                  </p>
                  <div className="flex flex-col space-y-6">
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">진행업무</p>
                      <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2">
                        <li>무신사 기획전 연계 광고 소재 기획</li>
                        <li>광고 유형, 소재, 캠페인 별 테스트</li>
                        <li>라이브 매뉴얼 제작 및 제품 세트 구성</li>
                        <li>데이터 분석을 통한 NEXT STEP 도출</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-neutral-200 shadow-sm p-4 md:p-8">
                      <p className="font-bold text-lg mb-4">결과</p>
                      <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2 mb-8">
                        <li>평균 <span className="font-bold text-neutral-900">ROAS 800%</span> 유지</li>
                        <li>최고 <span className="font-bold text-neutral-900">ROAS 1,123%</span> 달성 (2024.11)</li>
                        <li>무신사 협력광고 우수 브랜드 선정</li>
                      </ul>
                      
                      <div className="h-[300px] w-full mt-8 pb-12">
                        <p className="text-sm font-bold text-neutral-500 mb-4 pl-3">ROAS (100%)</p>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={roasData} margin={{ top: 5, right: 10, left: -10, bottom: 25 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis 
                              dataKey="date" 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{ fontSize: 12, fill: '#888' }} 
                              dy={10}
                              padding={{ left: 10, right: 10 }}
                            />
                            <YAxis 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{ fontSize: 12, fill: '#888' }}
                              width={40}
                              domain={[0, 1200]}
                              ticks={[0, 300, 600, 900, 1200]}
                              tickFormatter={(value) => `${value / 100}`}
                            />
                            <Tooltip 
                              contentStyle={{ 
                                borderRadius: '8px', 
                                border: 'none', 
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                fontSize: '11px',
                                padding: '8px 12px'
                              }}
                              itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                              formatter={(value: number) => [`${value}%`, 'ROAS']}
                            />
                            <Line 
                              type="monotone" 
                              dataKey="roas" 
                              stroke="#000" 
                              strokeWidth={3} 
                              dot={{ r: 6, fill: '#000', strokeWidth: 2, stroke: '#fff' }} 
                              activeDot={{ r: 8, fill: '#000', strokeWidth: 0 }}
                              animationDuration={2000}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                title="CRM MARKETING"
                isOpen={!!openItems['kakao']}
                onClick={() => toggleItem('kakao')}
              >
                <div className="space-y-6">
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-3xl">
                    자사몰 멤버십을 재정비하고 기획전 연계 혜택을 활용하였습니다.<br />
                    카카오톡 메시지를 테스트 운영하여 전환율을 증대하였습니다.
                  </p>
                  <div className="flex flex-col space-y-6">
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">진행업무</p>
                      <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2">
                        <li>메시지 유형/광고 소재 테스트</li>
                        <li>광고 라이브 및 데이터 분석</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">결과</p>
                      <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2">
                        <li>메시지 평균 <span className="font-bold text-neutral-900">CTR 8%</span> 상승</li>
                        <li>프로모션 별 소재 구성 매뉴얼화</li>
                        <li>쿠폰 클릭율 및 발급율 <span className="font-bold text-neutral-900">7-10%</span> 상승</li>
                      </ul>
                      <div className="mt-8 border border-neutral-100 overflow-hidden bg-neutral-50 shadow-sm">
                        <img 
                          src="https://i.imgur.com/woUqtUA.png" 
                          alt="Kakao CRM Performance" 
                          className="w-3/4 h-auto block mx-auto"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </div>

          {/* Celeb Collabo */}
          <div>
            <h3 className="font-sans text-lg md:text-xl tracking-normal md:tracking-widest font-bold mb-4 flex items-center text-neutral-800">
              CELEB COLLABO & SEEDING
            </h3>
            <div className="flex flex-col">
              <AccordionItem
                title="제로베이스원 (23FW - 24SP)"
                isOpen={!!openItems['zb1']}
                onClick={() => toggleItem('zb1')}
              >
                <div className="space-y-6">
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-3xl">
                    협업 캠페인 관련 마케팅을 총괄하였습니다.<br />
                    모델 및 기획 상품을 제안하여 무신사 랭킹 1위를 달성하였습니다.
                  </p>
                  <div className="flex flex-col space-y-6">
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">진행업무</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="space-y-2">
                          <p className="font-bold text-neutral-800 text-sm">마케팅 총괄</p>
                          <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-1">
                            <li>캠페인 타임라인 플래닝</li>
                            <li>촬영 현장 마케팅 핸들링</li>
                            <li>콘텐츠 기획 및 온라인 매체 플래닝/릴리즈</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-neutral-800 text-sm">브랜드 모델 제안</p>
                          <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-1">
                            <li>브랜드 성숙기 극복</li>
                            <li>영타깃 확장 및 변화한 브랜드 컨셉 재고</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-neutral-800 text-sm">상품 기획</p>
                          <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-1">
                            <li>모델 및 팬덤 상징 요소 활용 그래픽 제품 제안</li>
                            <li>브랜드 스테디 디자인과의 연결성</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-neutral-800 text-sm">GWP 기획(포토카드)</p>
                          <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-1">
                            <li>이전 진행 이력 피드백 반영</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-neutral-800 text-sm">연계 프로모션 진행</p>
                          <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-1">
                            <li>매출 증대를 위한 구매 인증 이벤트 진행</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">결과</p>
                      <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2 mb-8">
                        <li>매출 9억 달성 (발매 후 7일 기준)</li>
                        <li>기획 제품 완판 및 리오더 진행</li>
                        <li>무신사 브랜드 랭킹 1위 및 상품 랭킹 상위권 달성</li>
                        <li>국내 트위터 실시간 트렌드 달성</li>
                      </ul>

                      <div className="flex flex-wrap gap-3 mb-8">
                        <a 
                          href="https://romanticcrown.com/page/24_SPRING_01.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                        >
                          Lookbook <ExternalLink className="ml-2 w-3 h-3" />
                        </a>
                        <a 
                          href="https://www.youtube.com/watch?v=xHsL9OtpHFs" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                        >
                          Main Video <ExternalLink className="ml-2 w-3 h-3" />
                        </a>
                        <a 
                          href="https://www.starnewsk.com/news/articleView.html?idxno=40161" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                        >
                          News <ExternalLink className="ml-2 w-3 h-3" />
                        </a>
                      </div>

                      <div className="border border-neutral-100 overflow-hidden bg-neutral-50">
                        <img 
                          src="https://i.imgur.com/KAEJRoB.png" 
                          alt="ZB1 Collaboration" 
                          className="w-3/4 h-auto block mx-auto"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                title="세븐틴 우지 (22FW - 23SS)"
                isOpen={!!openItems['woozi']}
                onClick={() => toggleItem('woozi')}
              >
                <div className="space-y-6">
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-3xl">
                    협업 캠페인 관련 마케팅을 총괄하였습니다.<br />
                    셀럽의 특성(세계관)을 반영한 컨셉을 제안하였습니다.
                  </p>
                  <div className="flex flex-col space-y-6">
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">진행업무</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="space-y-2">
                          <p className="font-bold text-neutral-800 text-sm">마케팅 총괄</p>
                          <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-1">
                            <li>캠페인 타임라인 플래닝</li>
                            <li>촬영 현장 마케팅 핸들링</li>
                            <li>콘텐츠 기획 및 온라인 매체 플래닝/릴리즈</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-neutral-800 text-sm">컨셉 제안</p>
                          <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-1">
                            <li>셀럽의 특성(세계관)을 적용할 수 있는 컨셉 제안</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-neutral-800 text-sm">연계 프로모션 진행</p>
                          <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-1">
                            <li>카카오톡 채널 활성화를 위한 이벤트 진행</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">결과</p>
                      <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2 mb-8">
                        <li>매출 12억 달성 (발매 후 7일 기준)</li>
                        <li>무신사 브랜드 랭킹 1위 및 상품 랭킹 상위권 달성</li>
                        <li>국내 트위터 실시간 트렌드 달성</li>
                        <li>무신사 옥외광고 구좌 획득 (파트너사 이벤트)</li>
                        <li>카카오톡 채널 친구 수 약 500명 증가 (이벤트)</li>
                      </ul>

                      <div className="flex flex-wrap gap-3 mb-8">
                        <a 
                          href="https://romanticcrown.com/page/22_FALL_WINTER_01.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                        >
                          Lookbook <ExternalLink className="ml-2 w-3 h-3" />
                        </a>
                        <a 
                          href="https://www.youtube.com/watch?v=WcbOHDq9ChM" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                        >
                          Main Video <ExternalLink className="ml-2 w-3 h-3" />
                        </a>
                        <a 
                          href="https://www.interview365.com/news/articleView.html?idxno=105375" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                        >
                          News <ExternalLink className="ml-2 w-3 h-3" />
                        </a>
                      </div>

                      <div className="border border-neutral-100 overflow-hidden bg-neutral-50">
                        <img 
                          src="https://i.imgur.com/CeuxQYN.png" 
                          alt="Woozi Collaboration" 
                          className="w-3/4 h-auto block mx-auto"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                title="인플루언서 시딩 활용"
                isOpen={!!openItems['seeding']}
                onClick={() => toggleItem('seeding')}
              >
                <div className="space-y-6">
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-3xl">
                    인플루언서 리스트업, 시딩 및 협찬을 진행하였습니다.<br />
                    다양한 채널에 2차 활용하여 높은 전환이 발생하였습니다.
                  </p>
                  <div className="flex flex-col space-y-6">
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">진행업무</p>
                      <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2">
                        <li>톤앤매너를 고려한 인플루언서 리스트업</li>
                        <li>협찬, 시딩 커뮤니케이션</li>
                        <li>2차 활용 추가 제안 : 광고 소재, 썸네일, 스냅 위젯 등</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">주요 캠페인</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="space-y-2">
                          <p className="font-bold text-neutral-800 text-sm">팬 인플루언서 시딩 (손민수 콘텐츠)</p>
                          <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-1">
                            <li>셀럽 착용과 연계한 2차 바이럴</li>
                            <li>유명 팬 크리에이터 리스트업</li>
                            <li>제품 제공 및 콘텐츠 발행</li>
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <a 
                              href="https://www.instagram.com/reel/DK67BXUTxLv/" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 text-[11px] font-medium rounded-full transition-colors"
                            >
                              <Instagram size={12} /> 콘텐츠 1
                            </a>
                            <a 
                              href="https://www.instagram.com/p/DLMPBv_R9S-/" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 text-[11px] font-medium rounded-full transition-colors"
                            >
                              <Instagram size={12} /> 콘텐츠 2
                            </a>
                            <a 
                              href="https://www.instagram.com/reel/DLPXYY3ypRh/" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 text-[11px] font-medium rounded-full transition-colors"
                            >
                              <Instagram size={12} /> 콘텐츠 3
                            </a>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-neutral-800 text-sm">썸네일 교체 제안</p>
                          <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-1">
                            <li>무신사 내 제품 클릭율 부진</li>
                            <li>스타일링 이미지에 대한 선호 트렌드 반영</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">결과</p>
                      <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2">
                        <li>팬 인플루언서 시딩 : 콘텐츠 3건 조회수 33만 / 구매전환수 약 80건 발생 (1개월)</li>
                        <li>무신사 제품 클릭율 최대 <span className="font-bold text-neutral-900">50%</span> 증가</li>
                        <li>무신사 브랜드 스냅 활성화 (좋아요 증가, 랭킹 1위 다수 기록)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      {/* Round Media Section */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 border-b-2 border-black pb-4">
          <div className="w-full">
            <div className="flex justify-between items-baseline mb-1 md:mb-2">
              <h2 className="text-xl md:text-4xl font-bold">라운드미디어 소셜콘텐츠팀</h2>
              <p className="text-[11px] md:text-base font-medium text-neutral-500 whitespace-nowrap">20.01 - 21.01</p>
            </div>
            <p className="text-sm md:text-lg text-neutral-600">뷰티패션 매거진 에디터 / 광고주 채널 운영 기획</p>
          </div>
        </div>

        <div className="flex flex-col">
          <AccordionItem
            title="네이버 포스트 : 뷰라보라이프"
            isOpen={!!openItems['naver']}
            onClick={() => toggleItem('naver')}
          >
            <div className="space-y-6">
              <div className="flex flex-col space-y-6">
                <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                  <p className="font-bold text-lg mb-4">진행업무</p>
                  <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2">
                    <li>채널 운영, 콘텐츠 기획, 에디팅</li>
                    <li>PPL/브랜디드 콘텐츠 작업 및 커뮤니케이션</li>
                    <li>채널 소개서 제작 및 아웃바운드</li>
                    <li>주간/월간 게재 보고 및 결과 분석</li>
                    <li>간단한 디자인/영상 작업</li>
                  </ul>
                </div>
                <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                  <p className="font-bold text-lg mb-4">결과</p>
                  <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2">
                    <li>팔로워 230% 증가 (누적 5천명)</li>
                    <li>일방문횟수 275% 증가 (30만회)</li>
                    <li>네이버 패션뷰티판 메인 노출 월 5-15회</li>
                    <li>목표 검색 키워드 상위 노출 90% 달성</li>
                  </ul>
                </div>
                <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                  <p className="font-bold text-lg mb-4">콘텐츠 예시</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl">
                    {bravoLifeContents.map((content) => (
                      <div 
                        key={content.id} 
                        className="group cursor-pointer relative"
                        onClick={() => setSelectedGallery(content)}
                      >
                        <div className="aspect-[3/4] overflow-hidden bg-neutral-100 border border-neutral-200">
                          <img 
                            src={content.cover} 
                            alt={content.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-sm font-bold text-neutral-900">{content.title}</span>
                          <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">View</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem
            title="유튜브 : 리뷰맛집 RTV"
            isOpen={!!openItems['youtube']}
            onClick={() => toggleItem('youtube')}
          >
            <div className="space-y-6">
              <div className="flex flex-col space-y-6">
                <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                  <p className="font-bold text-lg mb-4">진행업무</p>
                  <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2">
                    <li>콘텐츠 기획, 제작 및 출연</li>
                    <li>스토리보드/스크립트 작성 및 디렉팅</li>
                  </ul>
                </div>
                <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                  <p className="font-bold text-lg mb-4">결과</p>
                  <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2">
                    <li>평균 조회수 160% 증가 (시즌2)</li>
                    <li>네이버 포스트 연계로 추가 수익 창출</li>
                  </ul>
                </div>
                <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                  <p className="font-bold text-lg mb-4">콘텐츠 예시</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-neutral-800 text-sm">뷰리핑 (시즌1)</p>
                        <a 
                          href="https://www.youtube.com/watch?v=TfZuAjQT_ek&t=1s" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 hover:bg-red-100 text-red-600 text-[10px] font-bold rounded transition-colors"
                        >
                          <Youtube size={10} /> WATCH
                        </a>
                      </div>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        뷰티를 브리핑하듯 소개하는 언박싱 콘텐츠
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-neutral-800 text-sm">뷰식가 (시즌2)</p>
                        <a 
                          href="https://www.youtube.com/watch?v=AwEY60hOH9M" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 hover:bg-red-100 text-red-600 text-[10px] font-bold rounded transition-colors"
                        >
                          <Youtube size={10} /> WATCH
                        </a>
                      </div>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        미식가가 맛보는 듯 제품을 음식에 비유한 콘텐츠
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem
            title="GS리테일 달리살다"
            isOpen={!!openItems['gs']}
            onClick={() => toggleItem('gs')}
          >
            <div className="space-y-6">
              <div className="flex flex-col space-y-6">
                <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                  <p className="font-bold text-lg mb-4">진행 업무</p>
                  <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2">
                    <li>채널 오픈 제안 (기본 톤앤매너 작업) 및 운영 관리</li>
                    <li>콘텐츠 기획 및 에디팅</li>
                    <li>게재보고/월간보고서 작성</li>
                    <li>광고주 커뮤니케이션</li>
                  </ul>
                </div>
                <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                  <p className="font-bold text-lg mb-4">결과</p>
                  <ul className="list-custom text-sm md:text-base text-neutral-600 space-y-2 mb-8">
                    <li>브랜드 온드미디어 확장</li>
                    <li>콘텐츠 톤 앤 매너 확립</li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://www.instagram.com/p/CHPQB4mJr5o/?img_index=1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                    >
                      콘텐츠 1 <ExternalLink className="ml-2 w-3 h-3" />
                    </a>
                    <a 
                      href="https://www.instagram.com/p/COHJN1Yp5F5/?img_index=4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                    >
                      콘텐츠 2 <ExternalLink className="ml-2 w-3 h-3" />
                    </a>
                    <a 
                      href="https://www.instagram.com/p/CPhaLOqhCer/?img_index=4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                    >
                      콘텐츠 3 <ExternalLink className="ml-2 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedGallery(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[2.5rem] relative shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedGallery(null)}
                className="absolute top-6 right-6 md:top-10 md:right-10 p-2 hover:opacity-60 transition-opacity z-50"
              >
                <X className="w-6 h-6 md:w-8 md:h-8 text-neutral-900" />
              </button>
              
              <div className="overflow-y-auto p-8 md:p-20 custom-scrollbar flex items-center min-h-[60vh]">
                <div className="flex overflow-x-auto gap-6 pb-10 snap-x custom-scrollbar -mx-4 px-4 w-full">
                  {selectedGallery.images.map((img, idx) => (
                    <div key={idx} className="flex-none w-[75%] md:w-[28%] aspect-[3/4] overflow-hidden snap-center bg-neutral-100 shadow-xl">
                      <img 
                        src={img} 
                        alt={`${selectedGallery.title} - ${idx + 1}`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);
}
