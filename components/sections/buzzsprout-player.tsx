const HEADING: Record<string, string> = {
  en: 'Listen to the Episode',
  es: 'Escucha el Episodio',
}

interface Props {
  src: string
  lang: string
}

export function BuzzsproutPlayer({ src, lang }: Props) {
  const heading = HEADING[lang] ?? HEADING.en
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl mb-4">{heading}</h2>
      <iframe
        src={src}
        width="100%"
        height={200}
        frameBorder={0}
        scrolling="no"
        title={heading}
      />
    </div>
  )
}
