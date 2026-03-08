interface Props {
  counties: string[]
  disclaimer?: string
  cta?: React.ReactNode
}

export function CountyPreviewSection({ counties, disclaimer, cta }: Props) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {counties.map((county) => (
          <div
            key={county}
            className="rounded-md border border-border bg-card px-3 py-2 text-sm text-center font-medium text-foreground"
          >
            {county}
          </div>
        ))}
      </div>
      {disclaimer && (
        <p className="mt-4 text-xs text-muted-foreground text-center">{disclaimer}</p>
      )}
      {cta && <div className="mt-6 text-center">{cta}</div>}
    </div>
  )
}
