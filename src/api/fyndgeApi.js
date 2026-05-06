import {
  courses,
  exchanges,
  featureCards,
  featuredOptions,
  products,
} from '../data/demoContent'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

async function request(path) {
  if (!API_BASE_URL) {
    return null
  }

  const response = await fetch(`${API_BASE_URL}${path}`)
  if (!response.ok) {
    throw new Error(`Fyndge API request failed: ${response.status}`)
  }

  return response.json()
}

export async function getHomepageData() {
  try {
    const data = await request('/api/homepage')
    if (data) {
      return data
    }
  } catch (error) {
    console.warn(error)
  }

  return {
    exchanges,
    products,
    featuredOptions,
    featureCards,
    courses,
    updatedAtLabel: '示例数据',
  }
}
