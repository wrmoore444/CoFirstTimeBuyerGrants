import Image from 'next/image'

interface Props {
  backgroundImage?: string
  overlay?: string
  minHeight?: string
  children: React.ReactNode
}

export function HeroSection({
  backgroundImage = '/images/hero.jpg',
  overlay = 'bg-foreground/60',
  minHeight = 'min-h-[520px]',
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>
      <div
        className={`relative mx-auto flex ${minHeight} max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8`}
      >
        {children}
      </div>
    </section>
  )
}
