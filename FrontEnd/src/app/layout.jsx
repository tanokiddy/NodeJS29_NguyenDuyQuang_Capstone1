
import Header from '@/components/Header'
import './globals.css'
import Head from './head'
import { getListImage } from '@/api/fetchApi'
import { QueryProvider } from './libs/query-tanstack'
import ImageHydrate from '@/components/molecules/ImageList'
import { AuthenticationProvider } from './libs/authentication'

export default async function RootLayout({ children }) {
  const listImage = await getListImage()
  return (
    <html lang="en">
      <Head/>
      <body>
        <QueryProvider>
          <ImageHydrate state={{listImage}}>
            <AuthenticationProvider>
              <Header/>
              {children}
            </AuthenticationProvider>
          </ImageHydrate>
        </QueryProvider>
      </body>
    </html>
  )
}
