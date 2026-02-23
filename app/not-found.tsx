import { Container } from '@/components/ui/section'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 min-h-[60vh] flex items-center">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <p className="font-heading text-6xl font-bold text-brand-gold/30">404</p>
          <h1 className="mt-4 font-heading text-2xl font-semibold text-brand-warm-white">
            Page Not Found
          </h1>
          <p className="mt-3 text-brand-steel-light">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button href="/" variant="primary">
              Back to Home
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
