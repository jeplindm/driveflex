import { CarProps, FilterProps } from '@/types'

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters

  const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY!,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST!
  }

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel=${fuel}`

  const response = await fetch(url, { headers })

  const result = await response.json()

  return result
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')

  const { make, year, model } = car

  url.searchParams.append('customer', 'hrjavascript-mastery')
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}

export const calculatCareRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50

  const mileageFactor = 0.1

  const ageFactor = 0.05

  const mileageRate = city_mpg * mileageFactor

  const ageRate = (new Date().getFullYear() - year) * ageFactor

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)

  searchParams.set(type, value)

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname
}
