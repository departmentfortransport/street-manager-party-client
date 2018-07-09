import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { OK } from 'http-status-codes'

export interface StreetManagerPartyClientConfig {
  baseURL: string,
  timeout?: number
}

export class StreetManagerPartyClient {
  private axios: AxiosInstance
  constructor(private config: StreetManagerPartyClientConfig) {
    this.axios = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout
    })
  }

  public async isAvailable(): Promise<boolean> {
    try {
      let response: AxiosResponse = await this.axios.get('/status')
      return response.status === OK
    } catch (err) {
      return false
    }
  }
}
