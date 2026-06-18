import logoBlue from '../../assets/logo-blue.png'
import logoWhite from '../../assets/logo-white.png'

interface LogoProps {
  variant?: 'blue' | 'white'
  className?: string
}

export default function Logo({ variant = 'blue', className = '' }: LogoProps) {
  const src = variant === 'white' ? logoWhite : logoBlue

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src={src} alt="Sokin Uyqu logo" className="h-8 w-auto" />
      <span className={`text-xl font-bold tracking-tight ${variant === 'white' ? 'text-white' : 'text-brand-dark'}`}>
        Sokin <span className={variant === 'white' ? 'text-white/80' : 'text-brand-primary'}>Uyqu</span>
      </span>
    </div>
  )
}
