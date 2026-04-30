import { MonitorCog, Phone, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground">
              <MonitorCog className="h-4 w-4" />
            </div>
            <span className="font-bold text-foreground">Компьютерщик</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>УНП: AC4678849</span>
            <a href="tel:+375296994505" className="flex items-center gap-1.5 hover:text-primary">
              <Phone className="h-4 w-4" /> +375 29 699-45-05
            </a>
            <a
              href="https://t.me/Mikhail_t87"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary"
            >
              <Send className="h-4 w-4" /> @Mikhail_t87
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Компьютерщик. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;