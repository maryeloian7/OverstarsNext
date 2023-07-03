import Loader from '@/components/Loader'
import Layout from '@/components/Layout'
import MainPage from '@/components/MainPage'
import Page from '@/components/Page'


export default function Home() {
  return (
    <Page>
      <Layout>
        <MainPage />
      </Layout>
    </Page>
  )
}
