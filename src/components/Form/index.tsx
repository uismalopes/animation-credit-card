import React from 'react'
import { useCreditCard } from '../../context/CreditCard'
import { FormGroup } from '../../styles/components'
import Inputmask from 'react-input-mask'

const Form: React.FC = ()=> {
  const listMonth = [1,2,3,4,5,6,7,8,9,10,11,12]
  const { data, update, updateShowBack } = useCreditCard()

  function listYears () {
    const min = new Date().getFullYear()
    const max = min + 9
    const list = []
    for(let i = min; i <= max; i++) {
      list.push(i)
    }
    return list
  }

  function changeElement (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) {
    const { value } = e.currentTarget 
    const name = e.currentTarget.getAttribute('data-model') || ''
    const current = {
      ...data,
      [name]: value
    }
    update(current)
  }
  
  return(
    <form>
      <FormGroup>
        <label htmlFor="name">
          Nome Completo
        </label>
        <input type="text" name="cc-name" id="name" autoComplete="cc-name" data-model="name" inputMode="text" onChange={changeElement} />
      </FormGroup>
      <FormGroup>
        <label htmlFor="card-number">
          Número do cartão
        </label>
        <Inputmask
          mask="9999 9999 9999 9999"
          maskChar={null}
          onChange={changeElement}
          type="tel"
          name="cc-number"
          id="card-number"
          autoComplete="cc-number"
          data-model="number"
          inputMode="numeric"
        />
      </FormGroup>
      <div className="row">
        <div className="column">
          <div className="row">
            <div className="column">
              <FormGroup>
                <label htmlFor="month">Mês</label>
                <select id="month" name="cc-exp-month" data-model="month" onChange={changeElement}>
                  <option hidden></option>
                  {
                    listMonth.map(opt => (<option value={opt} key={opt}>{String(opt).padStart(2, '0')}</option>))
                  }
                </select>
              </FormGroup>
            </div>
            <div className="column">
              <FormGroup>
                <label htmlFor="year">Ano</label>
                <select id="year" name="cc-exp-year" data-model="year" onChange={changeElement}>
                  <option hidden></option>
                  {
                    listYears().map(opt => (<option value={opt} key={opt}>{opt}</option>))
                  }
                </select>
              </FormGroup>
            </div>
          </div>
        </div>
        <div className="column">
          <FormGroup>
            <label htmlFor="cvv">CVV</label>
            <input
              type="tel"
              name="cc-csc"
              autoComplete="cc-csc"
              data-model="cvv"
              inputMode="numeric"
              id="cvv"
              onChange={changeElement}
              onFocus={()=> updateShowBack(true)}
              onBlur={()=> updateShowBack(false)}
              maxLength={3}
            />
          </FormGroup>     
        </div>
      </div>
    </form>
  )
}

export default Form