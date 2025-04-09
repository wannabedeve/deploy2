import type { Metadata } from 'next'

import { cn } from 'src/utilities/cn'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/globals/Footer/Component'
// import { Header } from '@/globals/Header/Component'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { TypedLocale } from 'payload'

import './globals.css'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import localization from '@/i18n/localization'
// import Nav from '@/globals/Header/Header/navbar/navMenu/nav/nav'
// import { Header } from '@/globals/Header/Header/Component'
// import Navigation from '@/globals/Header/Navigation/Navi'
import { Header } from '@/globals/Header/Component'
import MediaGallery from '@/components/GalleryApp/Gallery'
import StickyNavigation from '@/components/StickySlider/StickySlider'
import FlexGallery from 'todo/FlexyGallery/FlexyGallery'
import HorizontalScrollSlider from '@/components/HoriSlider/Horizontal'
import ImageSlider from 'todo/test/Test'
import Artists from 'todo/test/test2/vue'
import MenuMenus from '@/blocks/WorkMediaBlock/MenuMenus/Menu'
import Slider from '@/heros/CustomImpact/NewHero/NewHero'
import Explore from 'todo/explore/Explore'
import InfographBlock from '@/components/Showss/Show'
import Carousel from '@/blocks/TestimonialBlock/test/Test'
import Trial from '@/components/Tests/Trial'
import SmoothScrollProvider from '@/providers/SmoothScrollProvider'
import { TestHero } from '@/heros/CustomImpact/TestHero/TestHero'
import { Round } from '@/components/Round/Round'
import { Seperator } from '@/blocks/CTASeperator/component/Seperator'
import Gallery from '@/blocks/WorkMediaBlock/tests2/Test2'
import Tabs from '@/blocks/WorkMediaBlock/tests2/Test2'
// import TabsSection from 'todo/test/testo/Testo'
// import Heroz from '@/components/Heroz/Heroz'
// import Slider from '@/components/NewHero/NewHero'

type Args = {
  children: React.ReactNode
  params: Promise<{
    locale: TypedLocale
  }>
}

export default async function RootLayout({ children, params }: Args) {
  const { locale } = await params
  const currentLocale = localization.locales.find((loc) => loc.code === locale)
  const direction = currentLocale?.rtl ? 'rtl' : 'ltr'

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }
  setRequestLocale(locale)

  const { isEnabled } = await draftMode()
  const messages = await getMessages()

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang={locale}
      dir={direction}
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <AdminBar
              adminBarProps={{
                preview: isEnabled,
              }}
            />
            <LivePreviewListener />
            <SmoothScrollProvider>

              <Header locale={locale} />
              {/* <Header locale={locale} /> */}
              {/* <Navigation /> */}
              {/* <Nav /> */}

              {children}
              {/* <Gallery /> */}
              {/* <StickyNavigation /> */}
              {/* <MediaGallery /> */}
              {/* <InfographBlock /> */}
              {/* <Slider /> */}
              {/* <FlexGallery /> */}
              {/* <MenuMenus /> */}
              {/* <HorizontalScrollSlider /> */}
              {/* <ImageSlider /> */}
              {/* <Artists /> */}
              {/* <Explore /> */}
              {/* <Carousel /> */}
              <Trial />
              <Round />
              {/* <Tabs /> */}
              {/* <Seperator /> */}
              {/* <Heroz /> */}
              {/* <TabsSection /> */}

              {/* <TestHero /> */}
              <Footer locale={locale} />
            </SmoothScrollProvider>

          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://khaledahmed.com'),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@khaledahmed',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
