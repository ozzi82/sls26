import { Hero } from '@/components/sections/hero'
import { ValueGrid } from '@/components/sections/value-grid'
import { HowItWorks } from '@/components/sections/how-it-works'
import { CategoryBlocks } from '@/components/sections/category-blocks'
import { KpiRow } from '@/components/sections/kpi-row'
import { FinalCTA } from '@/components/sections/final-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueGrid />
      <HowItWorks />
      <CategoryBlocks />
      <KpiRow />
      <FinalCTA />
    </>
  )
}
