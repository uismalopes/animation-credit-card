import { FaCcMastercard, FaCcVisa, FaCcAmex, FaCcDiscover, FaCcJcb } from 'react-icons/fa'
import { IconType } from 'react-icons/lib';

export const flagCard = (value: string) => {
  value = value?.replace(/\D/g, '')
  const list: {[key:string]: {regex: RegExp, icon: IconType }} = {
    visa: {
      regex: /^4\d{12}(\d{3})?$/,
      icon: FaCcVisa,
    },
    mastercard: {
      regex: /^(5[1-5]\d{4}|677189)\d{10}$/,
      icon: FaCcMastercard
    },
    discover: {
      regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      icon: FaCcDiscover
    },
    amex: {
      regex: /^3[47]\d{13}$/,
      icon: FaCcAmex
    },
    jcb: {
      regex: /^(?:2131|1800|35\d{3})\d{11}$/,
      icon: FaCcJcb
    }
  }

  for(let i in list) {
    const current = list[i]
    if(current.regex.test(value)) {
      return current
    }
  }
  return false
}