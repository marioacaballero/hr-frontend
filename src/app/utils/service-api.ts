import axios from 'axios'
import { apiurl } from '@/app/utils/config-url'

export const apiservice = axios.create({
  baseURL: apiurl
})
