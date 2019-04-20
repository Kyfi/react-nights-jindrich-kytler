import qs from 'qs'
import { api } from './apiClient'
import { formatProduct } from './utils/format-product'

export const getProducts = async urlQuery => {
  const { data, meta, included } = await api(
    `/api/skus?p${qs.stringify({ include: 'prices', ...urlQuery })}`
  )

  return {
    data: data.map(product => formatProduct(product, included)),
    meta,
  }
}