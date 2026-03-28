export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 px-8 md:px-12 py-6 md:py-8 bg-white/80 backdrop-blur-sm border-t border-neutral-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex space-x-8 text-xs md:text-sm font-medium text-neutral-600">
          <p>cubeast@naver.com</p>
          <p>010-5872-8933</p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer"
            className="italic opacity-50 hover:opacity-100 transition-opacity"
          >
            Instagram
          </a>
        </div>
        <p className="text-[10px] md:text-xs tracking-widest opacity-40">
          © 2026 KIM MIN SEONG. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
