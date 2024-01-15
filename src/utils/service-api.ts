import axios from 'axios'
import { apiurl } from '@/utils/config-url'

export const apiservice = axios.create({
  baseURL: apiurl
})
