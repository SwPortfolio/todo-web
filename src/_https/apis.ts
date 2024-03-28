import axios from 'axios'
import { HTTPS_API } from './index'
import * as process from 'process'

//
/// baseUrl
export const API = axios.create({
    baseURL: HTTPS_API,
})

export const TODO_API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TODO_API_URL,
})
