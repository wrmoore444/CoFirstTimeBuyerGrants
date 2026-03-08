import { CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface BenefitItem {
  title: string
  description: string
  Icon?: LucideIcon
}

const colsMap: Record<2 | 3 | 4, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
}

interface Props {
  items: BenefitItem[]
  columns?: 2 | 3 | 4
  variant?: 'card' | 'check'
}

export function BenefitsGrid({ items, columns = 3, variant = 'card' }: Props) {
  return (
    <div className={`grid grid-cols-1 gap-6 ${colsMap[columns]}`}>
      {items.map((item) => {
        const Icon = item.Icon ?? CheckCircle2
        return (
          <div
            key={item.title}
            className={
              variant === 'card'
                ? 'rounded-xl border border-border bg-card p-6 shadow-sm'
                : 'flex items-start gap-3'
            }
          >
            {variant === 'check' && (
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            )}
            <div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
