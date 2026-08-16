import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'Sharad Jha | Data Engineer',
  description: 'Data Engineer specializing in Snowflake, dbt, SQL, Python, AWS, ETL/ELT, data modeling, and modern cloud data engineering.',
  openGraph: {
    title: 'Sharad Jha | Data Engineer',
    description: 'Data Engineer specializing in Snowflake, dbt, SQL, Python, AWS, ETL/ELT, data modeling, and modern cloud data engineering.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  )
}
