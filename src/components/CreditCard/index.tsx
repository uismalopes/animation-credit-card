import React, { useEffect, useState } from 'react'
import { ContainerCreditCard } from '../../styles/components'
import { FcSimCardChip, FcNfcSign } from 'react-icons/fc'
import { useCreditCard } from '../../context/CreditCard'
import { flagCard } from '../../utils'
import Icon from './Icon'

const CreditCard: React.FC = ()=> {
  const { data, showBack } = useCreditCard()
  const [icon, setIcon] = useState<boolean | {}>(false)
  const currentDate = new Date()

  useEffect(()=>{
    setIcon(flagCard(data.number || ''))
  },[data.number])

  return(
    <ContainerCreditCard>
      <div className="credit-card">
      <div className={`front ${showBack ? 'inactive' : ''}`}>
        <header>
          {
            <Icon value={data.number}/>
          }
        </header>
        <main>
          <div className={`icons ${!!icon ? 'active' : ''}`}>
            <FcSimCardChip size={80} />
            <FcNfcSign size={50} />
          </div>
          <div className="card-number">
            { data.number || '0000 0000 0000 0000' }
          </div>
        </main>
        <footer>
          <h2 className="text-uppercase">
            {
              data.name || 'NAME SURNAME'
            }
          </h2>
          <p>
            <small>valid thru</small>
            <strong>
              { data.month?.padStart(2, '0') || (currentDate.getMonth() + 1).toString().padStart(2, '0')}/{ data.year?.substr(2) || currentDate.getFullYear().toString().substr(2)}
            </strong>
          </p>
        </footer>
      </div>
        {
          showBack && (
            <div className="back">
              <header>
                <span>Created by Uisma Lopes</span>
                <span>Github <a href="https://github.com/uismalopes" target="_blank" rel="noreferrer">https://github.com/uismalopes</a></span>
              </header>
              <main>
                <strong>CVV</strong>
                <span className="cvv">
                  { data.cvv || '000'}
                </span>
              </main>
            </div>
          )
        }
      </div>
    </ContainerCreditCard>
  )
}

export default CreditCard