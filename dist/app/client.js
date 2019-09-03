"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const qs = require("qs");
const https_1 = require("https");
const http_status_codes_1 = require("http-status-codes");
class StreetManagerPartyClient {
    constructor(config) {
        this.config = config;
        let axiosRequestConfig = {
            baseURL: this.config.baseURL,
            timeout: this.config.timeout
        };
        if (this.config.disableCertificateVerification) {
            axiosRequestConfig.httpsAgent = new https_1.Agent({
                rejectUnauthorized: false
            });
        }
        this.axios = axios_1.default.create(axiosRequestConfig);
    }
    isAvailable() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.axios.get('/status');
                return response.status === http_status_codes_1.OK;
            }
            catch (err) {
                return false;
            }
        });
    }
    refreshTokens(requestConfig, tokenRefreshRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/refresh', tokenRefreshRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    logout(requestConfig, logoutRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/logout', logoutRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    getWorkstream(requestConfig, organisationReference, workstreamId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/organisations/${organisationReference}/workstreams/${workstreamId}`, this.generateRequestConfig(requestConfig)));
        });
    }
    getWorkstreams(requestConfig, organisationReference) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/organisations/${organisationReference}/workstreams`, this.generateRequestConfig(requestConfig)));
        });
    }
    createWorkstream(requestConfig, organisationReference, workstreamCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/organisations/${organisationReference}/workstreams`, workstreamCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateWorkstream(requestConfig, organisationReference, workstreamPrefix, workstreamUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/organisations/${organisationReference}/workstreams/${workstreamPrefix}`, workstreamUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    getOrganisation(requestConfig, organisationReference) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/organisations/${organisationReference}`, this.generateRequestConfig(requestConfig)));
        });
    }
    getOrganisations(requestConfig, request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/organisations`, this.generateRequestConfig(requestConfig, request)));
        });
    }
    updateOrganisation(requestConfig, organisationReference, organisationUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/organisations/${organisationReference}`, organisationUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createOrganisationContracts(requestConfig, organisationReference, organisationContractsCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/organisations/${organisationReference}/contractors`, organisationContractsCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createUser(requestConfig, userCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/users`, userCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    getUser(requestConfig, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/users/${email}`, this.generateRequestConfig(requestConfig)));
        });
    }
    forgotPassword(requestConfig, userForgotPasswordRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/forgot-password`, userForgotPasswordRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    resetPassword(requestConfig, userResetPasswordRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/reset-password`, userResetPasswordRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    deleteOrganisationContract(requestConfig, organisationReference, contractorOrganisationReference) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.delete(`organisations/${organisationReference}/contractors/${contractorOrganisationReference}`, this.generateRequestConfig(requestConfig)));
        });
    }
    inviteUser(requestConfig, inviteUserRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/invite-user`, inviteUserRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    setPassword(requestConfig, setPasswordRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/set-password', setPasswordRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    httpHandler(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield request();
                if (response.data) {
                    return response.data;
                }
            }
            catch (err) {
                return this.handleError(err);
            }
        });
    }
    handleError(err) {
        err.status = err.response ? err.response.status : http_status_codes_1.INTERNAL_SERVER_ERROR;
        return Promise.reject(err);
    }
    generateRequestConfig(config, request) {
        let requestConfig = {
            headers: {
                'x-request-id': config.requestId
            }
        };
        if (config.token) {
            requestConfig.headers.token = config.token;
        }
        if (!request) {
            requestConfig.params = {};
        }
        else {
            requestConfig.params = request;
            requestConfig.paramsSerializer = (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' });
            };
        }
        return requestConfig;
    }
}
exports.StreetManagerPartyClient = StreetManagerPartyClient;
