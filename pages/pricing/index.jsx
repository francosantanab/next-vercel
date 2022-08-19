import Link from 'next/link'
import { MainLayout } from '../../components/layout/MainLayout'

export default function PricingPage() {
  return (
    <>
      <h1 className={'title'}>
      Ir a <Link href="/">Pricing</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing/index.jsx</code>
      </p>
    </>
  )
}

PricingPage.getLayout = function getLayout( page ) {
  return (
    <MainLayout>
        {page}
    </MainLayout>
  )
}