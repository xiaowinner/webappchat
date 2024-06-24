// import type { FC } from 'react'
import React, { useEffect } from 'react'
import '../public/live2dcubismcore.min.js'

// import type { IMainProps } from '@/app/components'
import Main from '@/app/components'

import useLive2D from '@/hooks/useLive2d'


const App = ({
  params,
}) => {

  useEffect(() => {
    useLive2D()
  });
  return (
    <Main params={params} />
  )
}

export default React.memo(App)
