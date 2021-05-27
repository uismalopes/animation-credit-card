import React from 'react'
import { flagCard } from '../../utils'

const Icon: React.FC<{ value: string }> = ({ value })=>{
  const icon = flagCard(value || '')
  return icon ? React.createElement(icon.icon, { size: 60 }) : <span style={{ height: 60, width: 60, display: 'block' }} />
}

export default Icon