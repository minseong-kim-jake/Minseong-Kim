export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 px-8 md:px-12 py-3 md:py-4 bg-white/80 backdrop-blur-sm border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col text-[10px] font-medium text-neutral-600 tracking-widest space-y-1 text-center">
          <p>010 5872 8933 · cubeast@naver.com</p>
          <p className="opacity-40">© 2026 KIM MIN SEONG. ALL RIGHTS RESERVED.</p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex flex-col text-xs font-medium text-neutral-600 tracking-widest space-y-1 text-left">
            <p>010 5872 8933</p>
            <p>cubeast@naver.com</p>
          </div>
          <div className="flex flex-col text-xs tracking-widest opacity-40 space-y-1 text-right">
            <p>© 2026 KIM MIN SEONG.</p>
            <p>ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
