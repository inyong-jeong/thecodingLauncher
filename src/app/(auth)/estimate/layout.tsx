import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="px-8">{children}</div>
      <Footer />
    </>
  )
}
