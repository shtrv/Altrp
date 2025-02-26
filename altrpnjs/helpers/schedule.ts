import nodeSchedule from 'node-schedule'

const jobs = {}

export const addSchedule = (
  id: number,
  date: Date,
  periodUnit: string,
  period: number,
  callback: () => void
) => {
  if (jobs[id]) {
    jobs[id].cancel()
  }

  let rule = ''
  const periodValue = Math.max(period, 1)
  const seconds = date.getSeconds(),
    minutes = date.getMinutes(),
    hours = date.getHours(),
    days = date.getDate(),
    month = date.getMonth();

  switch (periodUnit) {
    case 'minute':
      rule = `${seconds} */${periodValue} * * * *`
      break
    case 'hour':
      rule = `${seconds} ${minutes} */${periodValue} * * *`
      break
    case 'day':
      rule = `${seconds} ${minutes} ${hours} */${periodValue} * *`
      break
    case 'month':
      rule = `${seconds} ${minutes} ${hours} ${days} */${periodValue} *`
      break
    case 'year':
      rule = `${seconds} ${minutes} ${hours} ${days} */${periodValue * 12} *`
      break
    case 'week':
      rule = `${seconds} ${minutes} ${hours} */${periodValue * 7} * *`
      break
    default:
      rule = `${seconds} ${minutes} ${hours} ${days} ${month} *`
  }

  jobs[id] = nodeSchedule.scheduleJob({ start: date, rule }, callback)
}

export const removeSchedule = id => {
  if (jobs[id]) {
    jobs[id].cancel()
  }
}

export const nextInvocation = id => {
  if (jobs[id]) {
    return jobs[id].nextInvocation()
  }

  return null
}
