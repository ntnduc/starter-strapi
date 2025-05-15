import { DateError } from '@/use-cases/error'
import { format } from 'date-fns/format'

export function formatDate(date: Date, formatString = 'dd/mm/yyyy') {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new DateError()
  }

  return format(date, formatString)
}
