export const metadata = {
  title: 'For-wheels',
  description: 'Car Parking App',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
