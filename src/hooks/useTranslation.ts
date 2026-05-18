import { useLanguage } from '../contexts/LanguageContext'
import uz from '../locales/uz'
import ru from '../locales/ru'

export function useTranslation() {
  const { lang } = useLanguage()
  return lang === 'uz' ? uz : ru
}
