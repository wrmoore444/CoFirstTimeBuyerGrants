export const inputClass =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent'

export const selectClass =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent'

export const textareaClass =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none'

interface FieldProps {
  label: string
  children: React.ReactNode
  required?: boolean
}

export function FormField({ label, children, required }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>
      {children}
    </div>
  )
}

interface FormSectionProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export function FormSection({ title, subtitle, children, className = '' }: FormSectionProps) {
  return (
    <div className={`rounded-xl border border-border bg-card p-6 shadow-sm ${className}`}>
      {title && <h2 className="text-xl font-semibold text-foreground mb-1">{title}</h2>}
      {subtitle && <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>}
      {children}
    </div>
  )
}
