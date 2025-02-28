import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { MarqueeInterface, ImgMarquee } from "@/types/landing-page/user-opinions";

const reviews: MarqueeInterface[] = [
  {
    name: "Santiago Marín",
    body: "Esta app me ayudó a organizarme y mejorar mis notas. ¡Es increíble",
    img: ImgMarquee.male,
  },
  {
    name: "Viviana Sánchez",
    body: "Aprendí a gestionar mis tareas sin estrés. ¡Ahora soy más productivo!",
    img: ImgMarquee.female,
  },
  {
    name: "Kevin Contreras",
    body: "Dejé de procrastinar y empecé a priorizar lo importante. ¡Gran cambio!",
    img: ImgMarquee.male,
  },
  {
    name: "Nicole Vargas",
    body: "Con esta app nunca más me pierdo una fecha importante. ¡Me encanta!",
    img: ImgMarquee.female,
  },
  {
    name: "Gabriel Mena",
    body: "La app me ayudó a mejorar mi enfoque y ser más organizada. ¡Muy útil!",
    img: ImgMarquee.male,
  },
  {
    name: "Sofía Cascante",
    body: "Interfaz sumamente intuitiva, ¡me ayuda día a día!.",
    img: ImgMarquee.female,
  },
  {
    name: "Sergio Sánchez",
    body: "Con stellar ya no tengo problemas con los plazos de entrega",
    img: ImgMarquee.male
  },
  {
    name: "Lucía Villarreal",
    body: "Stellar ha ayudado a mi vida estudiantil de una manera sin igual",
    img: ImgMarquee.female 
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: MarqueeInterface) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="36" height="34" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-[16px] font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}