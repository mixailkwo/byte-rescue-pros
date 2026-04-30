import { Phone, Send, FileText } from "lucide-react";

const Contacts = () => {
  return (
    <section id="contacts" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl bg-gradient-hero p-8 shadow-glow sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                  Свяжитесь со мной
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/80">
                  Опишите проблему — отвечу в ближайшее время и подскажу решение.
                </p>
                <div className="mt-6 flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/90 backdrop-blur w-fit">
                  <FileText className="h-4 w-4" />
                  УНП: AC4678849
                </div>
              </div>
              <div className="space-y-3">
                <a
                  href="tel:+375296994505"
                  className="flex items-center gap-4 rounded-xl bg-card p-4 shadow-card transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Телефон</div>
                    <div className="text-lg font-semibold text-foreground">
                      +375 29 699-45-05
                    </div>
                  </div>
                </a>
                <a
                  href="https://t.me/Mikhail_t87"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-card p-4 shadow-card transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent-foreground">
                    <Send className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Telegram</div>
                    <div className="text-lg font-semibold text-foreground">
                      @Mikhail_t87
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;