export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-ivory-faint md:flex-row">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} Abid Mohammed. Built from Addis Ababa.
        </p>
        <p className="font-mono text-xs">
          React · TypeScript · Python · FastAPI
        </p>
      </div>
    </footer>
  );
}
