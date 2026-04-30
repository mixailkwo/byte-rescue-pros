import { MonitorCog, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground shadow-soft">
            <MonitorCog className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-foreground">Компьютерщик</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Услуги</a>
          <a href="#guarantees" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Гарантии</a>
          <a href="#contacts" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Контакты</a>
        </nav>
        <a
          href="tel:+375296994505"
          className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-glow sm:flex"
        >
          <Phone className="h-4 w-4" />
          Позвонить
        </a>
      </div>
    </header>
  );
};

export default Header;