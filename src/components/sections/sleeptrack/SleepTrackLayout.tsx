import { useTranslation } from '../../../hooks/useTranslation'
import DoctorsTab from './tabs/DoctorsTab'
import EquipmentsTab from './tabs/EquipmentsTab'
import ServicesTab from './tabs/ServicesTab'
import BenefitsTab from './tabs/BenefitsTab'

export type SleepTrackTab = 'doctors' | 'equipments' | 'services' | 'benefits'

const TAB_KEYS: SleepTrackTab[] = ['doctors', 'equipments', 'services', 'benefits']

const TAB_COMPONENTS: Record<SleepTrackTab, React.ComponentType> = {
  doctors: DoctorsTab,
  equipments: EquipmentsTab,
  services: ServicesTab,
  benefits: BenefitsTab,
}

interface Props {
  activeTab: SleepTrackTab
  setActiveTab: (tab: SleepTrackTab) => void
}

export default function SleepTrackLayout({ activeTab, setActiveTab }: Props) {
  const t = useTranslation()
  const ActiveComponent = TAB_COMPONENTS[activeTab]

  return (
    <section className="bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar — horizontal scroll on mobile, vertical stack on desktop */}
          <aside className="md:w-56 shrink-0">
            <div className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
              {TAB_KEYS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 px-5 py-3 rounded-xl text-sm font-semibold text-left transition-colors ${
                    activeTab === tab
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'bg-white text-brand-dark hover:bg-brand-secondary border border-gray-100'
                  }`}
                >
                  {t.sleeptrack.tabs[tab]}
                </button>
              ))}
            </div>
          </aside>

          {/* Main panel */}
          <div className="flex-1 min-w-0">
            <ActiveComponent />
          </div>
        </div>
      </div>
    </section>
  )
}
