export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="flex items-center justify-between px-8 sm:px-16 py-8 text-xs text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Kun Gao</span>
        <span>Stuttgart, Germany</span>
      </div>
    </footer>
  );
}
