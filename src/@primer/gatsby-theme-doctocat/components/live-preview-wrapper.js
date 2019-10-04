import { BaseStyles, Box } from '@primer/components'
import React from 'react'

// Users can shadow this file to wrap live previews.
// This is useful for applying global styles.
function LivePreviewWrapper({children}) {
  return (
    <BaseStyles>
      <link rel="stylesheet" href="http://127.0.0.1:8081/css/arezzo.css"/>
      <Box p={3}>{children}</Box>
    </BaseStyles>
  )
}

export default LivePreviewWrapper
