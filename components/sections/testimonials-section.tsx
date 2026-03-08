import { Star } from 'lucide-react'

interface TestimonialItem {
  heading: string
  quote: string
  author: string
  location: string
}

interface Props {
  items: TestimonialItem[]
}

export function TestimonialsSection({ items }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.author} className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col">
          <div className="flex gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          <h3 className="font-semibold text-foreground mb-2">{item.heading}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground flex-1">&ldquo;{item.quote}&rdquo;</p>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm font-medium text-foreground">{item.author}</p>
            <p className="text-xs text-muted-foreground">{item.location}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
