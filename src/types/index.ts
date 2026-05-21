export interface Service {
  id: number
  slug: string
  nameAr: string
  descriptionAr: string
  icon: string
  color: string
}

export interface PortfolioItem {
  id: number
  image: string
  titleAr: string
  categoryAr: string
  category: PortfolioCategory
}

export type PortfolioCategory =
  | 'all'
  | 'brand'
  | 'social'
  | 'campaign'
  | 'photography'
  | 'design'

export interface Client {
  id: number
  nameAr: string
  logo?: string
}

export interface Stat {
  id: number
  value: number
  suffix: string
  labelAr: string
}

export interface Value {
  id: number
  nameAr: string
  nameEn: string
  descriptionAr: string
  icon: string
  color: string
}

export interface NavItem {
  label: string
  path: string
}
