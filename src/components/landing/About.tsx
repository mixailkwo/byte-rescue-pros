import { useState } from "react";
import { Award, Users, Wrench, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import masterPortrait from "@/assets/master-portrait.jpg";

const stats = [
  { icon: Wrench, value: "10+", label: "лет опыта" },
  { icon: Users, value: "1000+", label: "клиентов" },
  { icon: Award, value: "100%", label: "гарантия" },
];

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="bg-background py-20 lg:py-28 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main About Row */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-hero opacity-20 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
              <img
                src={masterPortrait}
                alt="Михаил — мастер по ремонту компьютеров"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card px-5 py-2 shadow-soft">
              <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
              <span className="text-sm font-medium text-foreground">На связи</span>
            </div>
          </div>
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Обо мне
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Михаил — ваш частный компьютерный мастер
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Занимаюсь ремонтом и настройкой компьютеров и ноутбуков более 10 лет.
              Решаю задачи любой сложности — от чистки и переустановки Windows
              до восстановления данных и сложного аппаратного ремонта.
            </p>
            <p className="mt-4 text-muted-foreground">
              Работаю честно: сначала диагностика и согласование цены, потом — работа.
              На все услуги выдаю чек и предоставляю гарантию.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-card p-4 text-center shadow-card"
                >
                  <Icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Article Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-border bg-card/50 p-6 md:p-10 backdrop-blur-sm shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Компьютерные будни: заметки мастера
              </h3>
            </div>

            <div className={`prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-4 text-sm md:text-base leading-relaxed transition-all duration-300 ${!isExpanded ? 'max-h-[320px] overflow-hidden relative' : ''}`}>
              <p>
                Если после тяжелого рабочего дня, ты хочешь приходить домой, садиться за свой любимый компьютер и наслаждаться: - <span className="font-semibold text-primary">компьютерщик.бел</span> - поможет тебе. Очень часто происходит так, что из-за жизненных приоритетов, на поддержание своего компьютера в надлежащем рабочем состоянии - у тебя просто не хватает времени и средств, и тебе приходится махнуть рукой со словами: - «ну что, пока же всё ещё работает». И ты говоришь себе: - «ну и ладно что у меня гудит сильно вентилятор, он же пока ещё работает и мне не мешает, я же в наушниках играю». Шутки шутками, но <span className="font-semibold text-primary">компьютерщик.бел</span> – поможет тебе сэкономить в будущем на валерьянке.
              </p>

              <p>
                Медленно грузиться компьютер и издаёт подозрительные звуки – <span className="font-semibold text-primary">компьютерщик.бел</span> – это решение. Если приходя домой, ты его включаешь и ждешь, ждешь, ещё ждешь, пока он загружается, медленно загружается, и на экране рабочего стола ты видишь сообщения об отсутствующих библиотеках или DLL файла. То о каком наслаждении и о каком отдыхе за любимой counter-strike (CS2), или dota, может идти речь? Это уже не отдых. Конечно, существуют мнения что человек счастлив во время преодоление, каких либо трудностей. Но зачем рисковать. Преодолеть эти трудности поможет <span className="font-semibold text-primary">компьютерщик.бел</span>.
              </p>

              <div className={!isExpanded ? "hidden" : "space-y-4"}>
                <p>
                  Даже если случай совсем тяжелый, если при загрузке ОС, появляется сообщение об ошибке «BOOTMGR is missing» (отсутствует загрузчик), «Boot Configuration Data missing or corrupted» (повреждены данные загрузки), «Operating System Missing» (система не обнаружена), «Invalid Boot Disk» (неверный загрузочный диск), а также «Inaccessible Boot Device» (недоступен загрузочный диск) – на всё это есть решение: - <span className="font-semibold text-primary">компьютерщик.бел</span>, это бесплатная консультация и оперативный выезд специалиста на дом. 
                </p>
                <p>
                  Так же часто windows, не загружается сама, появляется сообщение «Press F1 to continue» и для того что бы загрузка продолжилась, вам необходимо нажать F1, при этом настройки даты и времени не сохраняются – и в этой проблеме есть решения – <span className="font-semibold text-primary">компьютерщик.бел</span>, поможет решить вопрос раз и навсегда. 
                </p>
                <p>
                  Если после загрузки рабочего стола в Windows могут возникать различные ошибки, связанные с системным сбоем, конфликтами ПО, проблемами с оборудованием или обновлениями или у Вас чёрный экран вместо рабочего стола. Или синий экран смерти. Может ошибка появляться после входа в учётную запись или сразу после загрузки системы. Причины бывают разные, но <span className="font-semibold text-primary">компьютерщик.бел</span>, поможет и в этом. Если некорректная работа драйвера видеокарты, повреждение файла explorer.exe, конфликт программ, агрессивное поведение антивирусной системы, неправильные настройки отображения – всё это можно решить тут. 
                </p>
                <p>
                  Бывает что циклический перезапуск рабочего стола (explorer.exe). Процесс explorer.exe, отвечающий за отображение рабочего стола и панели задач, постоянно перезапускается. Это может быть вызвано конфликтами с расширениями проводника, повреждением системных файлов или ошибками в сторонних службах. Бывает так что мешает работе рабочий стол, который загружается как всегда, но на нём отсутствуют ярлыки, панель задач или кнопка «Пуск». Причинами могут быть сбой системы, вирусное поражение, некорректная работа чистильщиков реестра или повреждение параметров в реестре (например, в ветке HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon). 
                </p>
                <p>
                  А зависание рабочего стола после загрузки – это классика. Система зависает через несколько секунд после появления рабочего стола, при этом курсор может двигаться, но взаимодействие с элементами интерфейса невозможно – это связано с конфликтами программ, с проблеми оперативной памятью, и некорректные обновления Windows – опять таки, с этим смело обращайся в <span className="font-semibold text-primary">компьютерщик.бел</span>. А если ошибки при запуске системных служб или приложений в автозагрузке. Программы, которые автоматически запускаются при загрузке системы, могут конфликтовать друг с другом или с системными компонентами, вызывая сбои рабочего стола или при повреждение системных файлов. Это может произойти из-за неудачного обновления Windows, действий вредоносного ПО или ошибок при работе с реестром. Повреждённые файлы могут привести к нестабильной работе системы и проблемам с отображением рабочего стола – <span className="font-semibold text-primary">компьютерщик.бел</span>, точно поможет в этом разобраться.
                </p>
                <p>
                  Если у тебя проблемы с профилем пользователя. Повреждение пользовательского профиля может вызвать сбои при загрузке рабочего стола. В таких случаях создание нового профиля иногда помогает решить проблему, но это тоже временное решение – <span className="font-semibold text-primary">компьютерщик.бел</span> решит вопрос. 
                </p>
                <p>
                  А бывает, что конфликты обновления Windows, или неудачная установка обновлений или несовместимость новых компонентов с существующими файлами системы, драйверами или настройками могут привести к ошибкам загрузки рабочего стола или другие неисправности оборудования - проблема с видеокартой (например, неисправный или устаревший драйвер), оперативной памятью, блоком питания или подключение монитора могут вызывать сбой при отображении рабочего стола – например звук появляется только после того как ты вынимаешь кабель HDMI, а потом опять вставляешь обратно в разъём, тогда только звук транслируется через телевизор – такая ситуация часто наблюдается в minipc DELL. Бывает вместо логотипа Dell – видны цифры. В этом режиме работы материнской платы стабильная работа звука через HDMI – не достижима – и даже в этом <span className="font-semibold text-primary">компьютерщик.бел</span> сможет Вам помочь.
                </p>
              </div>

              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent pointer-events-none" />
              )}
            </div>

            <div className="mt-6 flex justify-center border-t border-border pt-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-background hover:bg-muted text-sm font-medium transition-colors text-foreground"
              >
                {isExpanded ? (
                  <>
                    Свернуть статью <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Читать далее <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
