type Align = 'top' | 'center' | 'bottom'

interface Props {
  left: React.ReactNode
  right: React.ReactNode
  reverse?: boolean
  align?: Align
  gap?: string
}

const alignMap: Record<Align, string> = {
  top: 'items-start',
  center: 'items-center',
  bottom: 'items-end',
}

export function TwoColumnSection({ left, right, reverse = false, align = 'top', gap = 'gap-12' }: Props) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 ${gap} ${alignMap[align]}`}>
      <div className={reverse ? 'lg:order-2' : ''}>{left}</div>
      <div className={reverse ? 'lg:order-1' : ''}>{right}</div>
    </div>
  )
}
