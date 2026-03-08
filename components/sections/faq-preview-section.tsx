interface FaqItem {
  question: string
  answer: string
}

interface Props {
  items: FaqItem[]
}

export function FaqPreviewSection({ items }: Props) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.question} className="rounded-lg border border-border bg-card p-5">
          <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
        </div>
      ))}
    </div>
  )
}
