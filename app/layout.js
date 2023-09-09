import React from 'react';
import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
  title: 'For-wheels',
  description: 'Car Parking App',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'>

          </div>
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
