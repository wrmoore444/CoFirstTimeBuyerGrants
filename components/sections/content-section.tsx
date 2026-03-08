type Background = 'white' | 'light' | 'dark' | 'primary' | 'card'

const bgMap: Record<Background, string> = {
  white: 'bg-background',
  light: 'bg-muted',
  dark: 'bg-foreground',
  primary: 'bg-primary',
  card: 'bg-card',
}

interface Props {
  id?: string
  background?: Background
  narrow?: boolean
  className?: string
  children: React.ReactNode
}

export function ContentSection({
  id,
  background = 'white',
  narrow = false,
  className = '',
  children,
}: Props) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${bgMap[background]}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${narrow ? 'max-w-3xl' : 'max-w-7xl'} ${className}`}>
        {children}
      </div>
    </section>
  )
}
