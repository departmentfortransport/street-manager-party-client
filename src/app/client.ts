import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'
import { INTERNAL_SERVER_ERROR, OK } from 'http-status-codes'
import { RequestConfig } from '../interfaces/requestConfig'
import { WorkstreamCreateRequest } from '../interfaces/workstreamCreateRequest'
import { WorkstreamCreateResponse } from '../interfaces/workstreamCreateResponse'
import { WorkstreamResponse } from '../interfaces/workstreamResponse'
import { OrganisationResponse } from '../interfaces/organisationResponse'
import { OrganisationUpdateRequest } from '../interfaces/organisationUpdateRequest'

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

  public async getWorkstream(requestConfig: RequestConfig, swaCode: string, workstreamId: number): Promise<WorkstreamResponse> {
    return this.httpHandler<WorkstreamResponse>(() => this.axios.get(`/organisations/${swaCode}/workstreams/${workstreamId}`, this.generateRequestConfig(requestConfig)))
  }

  public async getOrganisation(requestConfig: RequestConfig, swaCode: string): Promise<OrganisationResponse> {
    return this.httpHandler<OrganisationResponse>(() => this.axios.get(`/organisations/${swaCode}`, this.generateRequestConfig(requestConfig)))
  }

  public async getWorkstreams(requestConfig: RequestConfig, swaCode: string): Promise<WorkstreamResponse[]> {
    return this.httpHandler<WorkstreamResponse[]>(() => this.axios.get(`/organisations/${swaCode}/workstreams`, this.generateRequestConfig(requestConfig)))
  }

  public async createWorkstream(requestConfig: RequestConfig, swaCode: string, workstreamCreateRequest: WorkstreamCreateRequest): Promise<WorkstreamCreateResponse> {
    return this.httpHandler<WorkstreamCreateResponse>(() => this.axios.post(`/organisations/${swaCode}/workstreams`, workstreamCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateOrganisation(requestConfig: RequestConfig, swaCode: string, organisationUpdateRequest: OrganisationUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/organisations/${swaCode}`, organisationUpdateRequest, this.generateRequestConfig(requestConfig)))
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
