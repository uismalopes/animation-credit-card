import React, { createContext, useContext, useState } from 'react'
import { IContextCreditCard, ICreditCard } from '../interfaces'

const CreditCardContext = createContext({} as IContextCreditCard)

export const CreditCardProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({} as ICreditCard)
  const [showBack, setShowBack] = useState(false)

  function update (updateData: ICreditCard) {
    setData({ ...data, ...updateData })
  }

  function updateShowBack (value: boolean) {
    setShowBack(value)
  }

  return (
    <CreditCardContext.Provider value={{ data, showBack, updateShowBack, update }}>
      { children }
    </CreditCardContext.Provider>
  )
}

export const useCreditCard = ()=> {
  const data = useContext(CreditCardContext)
  return data
}