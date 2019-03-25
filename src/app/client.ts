import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios'
import {INTERNAL_SERVER_ERROR, OK} from 'http-status-codes'
import {RequestConfig} from '../interfaces/requestConfig'
import {WorkstreamCreateRequest} from '../interfaces/workstreamCreateRequest'
import {WorkstreamCreateResponse} from '../interfaces/workstreamCreateResponse'

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

  public async createWorkstream(requestConfig: RequestConfig, workstreamCreateRequest: WorkstreamCreateRequest): Promise<WorkstreamCreateResponse> {
    return this.httpHandler<WorkstreamCreateResponse>(() => this.axios.post(`/workstreams`, workstreamCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      let response: AxiosResponse<T> = await request()
      if (response.data) {
        return response.data
      }
    } catch (err) {
      return this.handleError(err)
    }
  }

  private handleError(err) {
    err.status = err.response ? err.response.status : INTERNAL_SERVER_ERROR
    return Promise.reject(err)
  }

  private generateRequestConfig(config: RequestConfig, request?: any): AxiosRequestConfig {
    let requestConfig: AxiosRequestConfig = {
      headers: {
        'x-request-id': config.requestId
      }
    }

    if (config.token) {
      requestConfig.headers.token = config.token
    }

    if (!request) {
      requestConfig.params = {}
    } else {
      requestConfig.params = request
    }

    return requestConfig
  }
}
