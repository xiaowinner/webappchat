import type { FC } from 'react'
import React from 'react'

import type { IMainProps } from '@/app/components'
import Main from '@/app/components'

import Script from 'next/script'

const App: FC<IMainProps> = ({
  params,
}: any) => {
  return (
    <div>
      <Main params={params} />
      <Script src="/live2dcubismcore.min.js"></Script>
    </div>

  )
}

export default React.memo(App)
