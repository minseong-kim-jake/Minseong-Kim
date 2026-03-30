export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 px-8 md:px-12 py-3 md:py-4 bg-white/80 backdrop-blur-sm border-t border-neutral-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col text-[10px] md:text-xs font-medium text-neutral-600 tracking-widest space-y-1 text-center md:text-left">
          <p>010 5872 8933</p>
          <p>cubeast@naver.com</p>
        </div>
        <div className="flex flex-col text-[10px] md:text-xs tracking-widest opacity-40 space-y-1 text-center md:text-right">
          <p>© 2026 KIM MIN SEONG.</p>
          <p>ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
