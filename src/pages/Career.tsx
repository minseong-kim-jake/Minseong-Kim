import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
        className="w-full flex justify-between items-center group text-left py-5 px-4 md:px-6"
      >
        <h4 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-black' : 'text-neutral-400 group-hover:text-black'}`}>
          {title}
        </h4>
        <span className={`text-3xl transform transition-transform duration-300 ${isOpen ? 'rotate-45 text-black' : 'rotate-0 text-neutral-300 group-hover:text-black'}`}>
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
      <header className="bg-black text-white pt-32 pb-24 px-8 md:px-24 mb-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="serif text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">CAREER</h1>
          <p className="text-neutral-400 text-lg">Experience & Professional Journey</p>
        </div>
      </header>

      <div className="px-8 md:px-24 max-w-7xl mx-auto">
        {/* RMTC Section */}
        <section className="mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-black pb-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">RMTC - Romantic Crown Marketing</h2>
            <p className="text-lg text-neutral-600">브랜드 마케팅 총괄 운영</p>
          </div>
          <p className="serif text-xl font-medium text-neutral-600 mt-4 md:mt-0">2022.03 - 2025.11</p>
        </div>

        <div className="space-y-16">
          {/* Owned Media */}
          <div>
            <h3 className="font-sans text-xl tracking-widest font-bold mb-4 flex items-center text-neutral-800">
              OWNED MEDIA & CONTENTS
            </h3>
            <div className="flex flex-col">
              <AccordionItem
                title="SNS 운영 / 콘텐츠 기획 제작"
                isOpen={!!openItems['sns']}
                onClick={() => toggleItem('sns')}
              >
                <div className="space-y-6">
                  <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
                    브랜드/시즌 컨셉을 반영한 콘텐츠를 기획하여 SNS 채널을 운영하였습니다.<br />
                    인스타그램 채널 특성에 적합한 러프한 스타일로 촬영하였습니다.
                  </p>
                  <div className="flex flex-col space-y-6">
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">진행업무</p>
                      <ul className="list-disc list-inside text-base text-neutral-600 space-y-2">
                        <li>SNS 채널 운영 관리</li>
                        <li>SNS 이벤트 기획 및 실행</li>
                        <li>이미지/영상 콘텐츠 기획, 촬영, 편집</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">콘텐츠 예시</p>
                      <ul className="list-disc list-inside text-base text-neutral-600 space-y-2 mb-6">
                        <li>룩북과 디테일컷 외적으로 제품과 무드를 가볍게 풀 수 있는 콘텐츠</li>
                        <li>프레피 → 스트릿 스타일로 변화한 과정에 적합한 브랜딩 요소</li>
                      </ul>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {[
                          "https://storage.googleapis.com/static.aihub.com/as-a-service/316741158833/2yawhsgcpwj4q73mrdc7cd/0195da2a-9f5e-76f5-9386-3507119f443a.png",
                          "https://storage.googleapis.com/static.aihub.com/as-a-service/316741158833/2yawhsgcpwj4q73mrdc7cd/0195da2a-a03a-7a87-9556-33923a17e13d.png",
                          "https://storage.googleapis.com/static.aihub.com/as-a-service/316741158833/2yawhsgcpwj4q73mrdc7cd/0195da2a-a13f-7634-862d-2f982845353d.png",
                          "https://storage.googleapis.com/static.aihub.com/as-a-service/316741158833/2yawhsgcpwj4q73mrdc7cd/0195da2a-a238-7612-921d-79e76312483d.png"
                        ].map((src, i) => (
                          <div key={i} className="aspect-[3/4] bg-neutral-200 overflow-hidden">
                            <img 
                              src={src} 
                              alt={`SNS Content Example ${i + 1}`} 
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                              crossOrigin="anonymous"
                            />
                          </div>
                        ))}
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
                  <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
                    고객 편의성과 세일즈 목적의 자사몰 리뉴얼 작업을 기획하였습니다.<br />
                    기초 HTML 퍼블리셔를 학습하여 웹사이트를 유동적으로 배리에이션 하였습니다.
                  </p>
                  <div className="flex flex-col space-y-6">
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">진행업무</p>
                      <ul className="list-disc list-inside text-base text-neutral-600 space-y-2">
                        <li>상황 분석 및 레퍼런스/벤치마킹</li>
                        <li>고객 구매 여정에 따른 메뉴 구조도 기획</li>
                        <li>내부 파트별 필요 기능 취합</li>
                        <li>배너 및 위젯 이미지 가이드 제작</li>
                        <li>CAFE24 기본 HTML 활용을 통한 배리에이션</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8">
                      <p className="font-bold text-lg mb-4">결과</p>
                      <ul className="list-disc list-inside text-base text-neutral-600 space-y-2">
                        <li>기획전 페이지를 통한 자사몰 프로모션 운영</li>
                        <li>가시성 높은 카테고리 분류</li>
                        <li>스냅 이미지 활용을 통한 콘텐츠 활용</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </div>

          {/* Performance Marketing */}
          <div>
            <h3 className="font-sans text-xl tracking-widest font-bold mb-4 flex items-center text-neutral-800">
              PERFORMANCE MARKETING
            </h3>
            <div className="flex flex-col">
              <AccordionItem
                title="META (MUSINSA)"
                isOpen={!!openItems['meta']}
                onClick={() => toggleItem('meta')}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="bg-neutral-900 text-white p-8 md:p-10 rounded-sm shadow-md">
                    <p className="serif text-4xl md:text-5xl font-bold mb-2">ROAS 800%</p>
                    <p className="text-base opacity-70">최고 달성 1,123%</p>
                  </div>
                  <ul className="list-disc list-inside text-base text-neutral-600 space-y-4">
                    <li>무신사 기획전 연계 광고 소재 기획</li>
                    <li>데이터 분석을 통한 NEXT STEP 도출</li>
                    <li>무신사 협력광고 우수 브랜드 선정</li>
                  </ul>
                </div>
              </AccordionItem>

              <AccordionItem
                title="KAKAO CRM"
                isOpen={!!openItems['kakao']}
                onClick={() => toggleItem('kakao')}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="bg-yellow-400 text-black p-8 md:p-10 rounded-sm shadow-md">
                    <p className="serif text-4xl md:text-5xl font-bold mb-2">CTR +8%</p>
                    <p className="text-base opacity-70">쿠폰 클릭/발급율 7-10% 상승</p>
                  </div>
                  <ul className="list-disc list-inside text-base text-neutral-600 space-y-4">
                    <li>메시지 유형/광고 소재 테스트</li>
                    <li>카플친 메시지 할인율별 소재 구성 매뉴얼화</li>
                    <li>전환율 증대 (평균 15건)</li>
                  </ul>
                </div>
              </AccordionItem>
            </div>
          </div>

          {/* Celeb Collabo */}
          <div>
            <h3 className="font-sans text-xl tracking-widest font-bold mb-4 flex items-center text-neutral-800">
              CELEB COLLABO & SEEDING
            </h3>
            <div className="flex flex-col">
              <AccordionItem
                title="제로베이스원 (23FW - 24SP)"
                isOpen={!!openItems['zb1']}
                onClick={() => toggleItem('zb1')}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="p-6 border-l-4 border-black bg-white shadow-sm">
                      <p className="text-3xl font-bold">매출 9억</p>
                      <p className="text-xs text-neutral-500 mt-2">발매 후 7일 기준</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 text-base text-neutral-600 space-y-6">
                    <p>브랜딩과 세일즈 관점으로 모델을 제안하고, 팬덤 타깃 상품을 기획하여 완판하였습니다.</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>캠페인 타임라인 플래닝 및 마케팅 총괄</li>
                      <li>모델 상징 컬러와 팬덤명 그래픽 활용 제품 제안</li>
                      <li>무신사 브랜드 랭킹 1위 달성</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                title="세븐틴 우지 (22FW - 23SS)"
                isOpen={!!openItems['woozi']}
                onClick={() => toggleItem('woozi')}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="p-6 border-l-4 border-black bg-white shadow-sm">
                      <p className="text-3xl font-bold">매출 12억</p>
                      <p className="text-xs text-neutral-500 mt-2">발매 후 7일 기준</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 text-base text-neutral-600 space-y-6">
                    <p>셀럽의 특성(세계관)을 적용할 수 있는 컨셉을 제안하였습니다.</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>무신사 옥외광고 구좌 획득</li>
                      <li>카카오톡 채널 친구 수 약 500명 증가</li>
                      <li>국내 트위터 실시간 트렌드 달성</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      {/* Round Media Section */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-black pb-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">ROUND MEDIA - Social Contents</h2>
            <p className="text-lg text-neutral-600">채널 운영/기획 및 콘텐츠 제작</p>
          </div>
          <p className="serif text-xl font-medium text-neutral-600 mt-4 md:mt-0">2020.01 - 2021.01</p>
        </div>

        <div className="flex flex-col">
          <AccordionItem
            title="NAVER POST : BRAVO LIFE"
            isOpen={!!openItems['naver']}
            onClick={() => toggleItem('naver')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-green-50 border border-green-100 shadow-sm p-8 md:p-10 rounded-sm">
                <p className="font-bold text-2xl text-green-800">팔로워 230% 성장</p>
                <p className="text-base text-green-700 mt-2">1,500 → 5,000명</p>
              </div>
              <ul className="text-base text-neutral-600 space-y-4">
                <li>• 네이버 패션뷰티판 메인 노출 월 5-15회</li>
                <li>• 목표 키워드 상위 노출 90% 달성</li>
              </ul>
            </div>
          </AccordionItem>

          <AccordionItem
            title="YOUTUBE : RTV"
            isOpen={!!openItems['youtube']}
            onClick={() => toggleItem('youtube')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-red-50 border border-red-100 shadow-sm p-8 md:p-10 rounded-sm">
                <p className="font-bold text-2xl text-red-800">조회수 160% 상승</p>
                <p className="text-base text-red-700 mt-2">시즌2 평균 1,300회</p>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed">
                뷰리핑(시즌1), 뷰식가(시즌2) 등 독창적 컨셉 기획 및 영상 콘텐츠 제작 총괄
              </p>
            </div>
          </AccordionItem>

          <AccordionItem
            title="GS RETAIL DALISALDA"
            isOpen={!!openItems['gs']}
            onClick={() => toggleItem('gs')}
          >
            <div className="py-4">
              <p className="text-base text-neutral-600 leading-relaxed max-w-4xl">
                채널 오픈 제안 및 운영 관리. 브랜드 온드미디어 확장 및 콘텐츠 톤앤매너 확립을 통한 브랜드 인지도 제고.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem
            title="SNS CHANNEL (BLOG / INSTAGRAM)"
            isOpen={!!openItems['sns_round']}
            onClick={() => toggleItem('sns_round')}
          >
            <div className="py-4">
              <ul className="text-base text-neutral-600 space-y-4">
                <li>• 네이버블로그 일 평균 조회수 300회 달성</li>
                <li>• 인스타그램/페이스북 채널 톤앤매너 구축 및 콘텐츠 배포</li>
              </ul>
            </div>
          </AccordionItem>
        </div>
      </section>
    </div>
  </motion.div>
);
}
