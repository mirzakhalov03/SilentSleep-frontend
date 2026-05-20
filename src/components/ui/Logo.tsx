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
      <img src={src} alt="SilentSleep logo" className="h-8 w-auto" />
      <span className={`text-xl font-bold tracking-tight ${variant === 'white' ? 'text-white' : 'text-brand-dark'}`}>
        Silent<span className={variant === 'white' ? 'text-white/80' : 'text-brand-primary'}>Sleep</span>
      </span>
    </div>
  )
}
