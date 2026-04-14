export interface NavItem {
  label: string
  href: string
}

export interface Service {
  icon: string
  title: string
  description: string
  tags: string[]
}

export interface Step {
  number: string
  title: string
  description: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
  consent: boolean
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'
