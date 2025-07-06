import React from 'react'
import LayoutManager from './layout-manager'

function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <LayoutManager>{children}</LayoutManager>
}

export default Layout
