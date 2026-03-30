import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export default function Activities() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      <header className="bg-black text-white pt-24 md:pt-32 pb-12 md:pb-24 px-8 md:px-24 mb-12 md:mb-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="serif text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">ACTIVITIES</h1>
          <p className="text-neutral-400 text-lg tracking-[0.2em]">What I Explored</p>
        </div>
      </header>

      <div className="px-8 md:px-24 max-w-7xl mx-auto mb-8 md:mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Selected Works</h2>
        <p className="text-neutral-500 text-xs md:text-sm leading-tight max-w-2xl">
          브랜드 콘텐츠를 직접 기획하고 제작하며<br />
          마케팅을 경험한 공식 활동입니다.
        </p>
      </div>

      <div className="px-8 md:px-24 max-w-7xl mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
          {[
            {
              id: "loccitane",
              displayTitle: "록시땅 코리아",
              displaySubtitle: "단독 기획, 제작 / 개인 최우수 콘텐츠",
              modalSubtitle: "개인 최우수 콘텐츠",
              displayDate: "2018.06",
              displayImage: "https://i.imgur.com/NRhiAWJ.png",
              modalTitle: "It's not all,\nIt's Loccitane",
              modalDesc: "'록시땅=핸드크림이 전부' 라는 인식에서 벗어나, 주요 제품 라인을 가볍게 소개하는 콘텐츠입니다. 인스타그램 스와이프 특성을 활용하여, 표지의 마지막 이미지의 연결성을 강조하였습니다.",
              role: "단독 기획, 제작",
              brand: "록시땅 코리아",
              period: "2018.06 - 2018.08",
              images: [
                "https://i.imgur.com/TaWbc6I.jpeg",
                "https://i.imgur.com/sMrcwOb.jpeg",
                "https://i.imgur.com/OeoW7Wm.jpeg",
                "https://i.imgur.com/Wr8QCTp.jpeg",
                "https://i.imgur.com/Mayvlsg.jpeg"
              ]
            },
            {
              id: "ottogi",
              displayTitle: "오뚜기",
              displaySubtitle: "기획, 촬영, 편집 (80%) / 공식 채널 게재",
              modalSubtitle: "공식 채널 게재",
              displayDate: "2018.07",
              displayImage: "https://i.imgur.com/juiegk0.png",
              modalTitle: "진라면,\n과거와 현재를 잇다",
              modalDesc: "진라면 30주년 목적성에 맞춰, 1988년과 2018년의 시대별 진라면 활용법을 담은 CF 컨셉의 영상 콘텐츠입니다. 각 영상의 인트로, 아웃트로에 라면을 주고 받게 설정하여, 오랫동안 사랑 받는 진라면의 의미를 강조하였습니다.",
              role: "기획, 촬영, 편집 (80%)",
              brand: "오뚜기",
              period: "2018.07 - 2018.08",
              videos: [
                "https://www.youtube.com/embed/xB5lof6vN7E?si=YTpfU1YkdwaDKIFJ",
                "https://www.youtube.com/embed/YUU8gzRd9qM?si=Yo9ght6RsWjuwVkf"
              ]
            },
            {
              id: "tiktok",
              displayTitle: "틱톡 코리아",
              displaySubtitle: "단독 기획, 제작 / 브랜드 협업 공모전 개최",
              modalSubtitle: "브랜드 협업",
              displayDate: "2019.09",
              displayImage: "https://i.imgur.com/vhsiV2W.png",
              modalTitle: "톡직구 공모전 제안",
              modalDesc: "20대 타깃의 부정적 이미지 제고를 목적으로 한 공모전을 제안하였습니다. 틱톡 코리아와 협업하여 동아리 내부 경쟁 PT와 브랜드 측 심사를 통해 공모전을 진행하였습니다.",
              role: "기획, 제작, 브랜드 커뮤니케이션 (100%)",
              brand: "틱톡 코리아",
              period: "2019.09 - 2019.12",
              images: [
                "https://i.imgur.com/74vQ30J.png",
                "https://i.imgur.com/NaxzzcJ.png",
                "https://i.imgur.com/TAnyRx5.png"
              ]
            }
          ].map((project, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] bg-neutral-100 mb-3 overflow-hidden relative">
                <img 
                  src={project.displayImage} 
                  alt={project.displayTitle}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-neutral-900">{project.displayTitle}</h3>
                <span className="text-xs font-medium text-neutral-400">{project.displayDate}</span>
              </div>
              <p className="text-neutral-500 text-xs md:text-sm">{project.displaySubtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[2.5rem] relative shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 md:top-10 md:right-10 p-2 hover:opacity-60 transition-opacity z-50"
              >
                <X className="w-6 h-6 md:w-8 md:h-8 text-neutral-900" />
              </button>

              <div className="overflow-y-auto p-8 md:p-20 no-scrollbar">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-8">
                  <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1] md:leading-[0.9] whitespace-pre-line">
                    {selectedProject.modalTitle}
                  </h2>
                  <p className="text-neutral-900 text-xs md:text-sm max-w-xs leading-relaxed font-medium">
                    {selectedProject.modalSubtitle}
                  </p>
                </div>

                {/* Meta Info Bar */}
                <div className="flex flex-wrap gap-x-12 gap-y-6 text-[10px] md:text-xs font-bold tracking-widest uppercase text-neutral-400 mb-10 md:mb-16 border-t border-neutral-100 pt-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-neutral-900">Role</span>
                    <span className="font-medium text-neutral-500">{selectedProject.role}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-neutral-900">Brand</span>
                    <span className="font-medium text-neutral-500">{selectedProject.brand}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-neutral-900">Period</span>
                    <span className="font-medium text-neutral-500">{selectedProject.period}</span>
                  </div>
                </div>

                {/* Visual Content */}
                <div className="mb-12 md:mb-16">
                  {selectedProject.videos ? (
                    <div className={`grid grid-cols-1 ${selectedProject.videos.length > 1 ? 'md:grid-cols-2' : ''} gap-8`}>
                      {selectedProject.videos.map((video, vIdx) => (
                        <div key={vIdx} className="aspect-video w-full overflow-hidden bg-neutral-100 shadow-lg">
                          <iframe 
                            src={video} 
                            className="w-full h-full" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen 
                            title={`${selectedProject.displayTitle}-video-${vIdx}`}
                          />
                        </div>
                      ))}
                    </div>
                  ) : selectedProject.id === "tiktok" ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
                      {selectedProject.images.map((img, iIdx) => (
                        <div key={iIdx} className="overflow-hidden shadow-md">
                          <img 
                            src={img} 
                            alt={`${selectedProject.displayTitle}-${iIdx}`} 
                            className="w-full h-auto block"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex overflow-x-auto gap-6 pb-10 snap-x custom-scrollbar -mx-4 px-4">
                      {selectedProject.images.map((img, iIdx) => (
                        <div key={iIdx} className="flex-none w-[65%] md:w-[50%] aspect-[4/3] overflow-hidden snap-center bg-neutral-100 shadow-md">
                          <img 
                            src={img} 
                            alt={`${selectedProject.displayTitle}-${iIdx}`} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Detail / Description Section */}
                <div className="max-w-4xl">
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-neutral-900">
                      Detail
                    </span>
                  </div>
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-normal whitespace-pre-line">
                    {selectedProject.modalDesc.replace(/니다\./g, "니다.\n")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="px-8 md:px-24 max-w-7xl mx-auto mb-24 md:mb-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              category: "Supporter",
              items: [
                { title: "뷰라보라이프 에디터 (1위)", period: "2019.07 - 2019.09" },
                { title: "프리메라 프리매니아", period: "2019.03 - 2019.07" },
                { title: "DTRT 맨그루머 (1위)", period: "2018.12 - 2019.02" },
                { title: "디디치킨 디디프렌즈 (1위)", period: "2018.10 - 2018.12" },
                { title: "오뚜기 진라면 진앤지니", period: "2018.07 - 2018.08" },
                { title: "록시땅 시어캠퍼스", period: "2018.06 - 2018.08" },
                { title: "이니스프리 그린어스 (팀 1위) (우수 콘텐츠)", period: "2017.09 - 2018.02" },
              ]
            },
            {
              category: "Contest",
              items: [
                { title: "스타벅스 X DKU (입선)", period: "2021.12" },
                { title: "빙그레 끌레도르 (4위)", period: "2020.01" },
              ]
            },
            {
              category: "In-School",
              items: [
                { title: "홍보대사 날개단대 기획팀", period: "2019.01 - 2020.01" },
                { title: "동아리 광고친구 회장", period: "2019.01 - 2020.01" },
              ]
            }
          ].map((group, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-6 border-b border-neutral-200 pb-2">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item, i) => {
                  const parts = item.title.split(/(\(.*?\))/);
                  return (
                    <li key={i} className="flex flex-col space-y-0.5">
                      <div className="flex items-center flex-wrap">
                        {parts.map((part, pIdx) => {
                          if (part.startsWith('(') && part.endsWith(')')) {
                            return (
                              <span key={pIdx} className="bg-black text-white text-[9px] md:text-[10px] px-1.5 py-0.5 font-bold ml-1.5 inline-block leading-none">
                                {part.slice(1, -1)}
                              </span>
                            );
                          }
                          return (
                            <span key={pIdx} className="text-[13px] md:text-[15px] font-medium text-neutral-900 leading-tight">
                              {part}
                            </span>
                          );
                        })}
                      </div>
                      <span className="text-[10px] md:text-xs text-neutral-400 font-medium">
                        {item.period}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
