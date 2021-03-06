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
        const axiosRequestConfig = {
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
                const response = yield this.axios.get('/status');
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
    getWorkstream(requestConfig, organisationReference, workstreamPrefix) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/organisations/${organisationReference}/workstreams/${workstreamPrefix}`, this.generateRequestConfig(requestConfig)));
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
    getUser(requestConfig, email, swaCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.generateRequestConfig(requestConfig, { swaCode: swaCode });
            return this.httpHandler(() => this.axios.get(`/users/${email}`, config));
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
    onboardUser(requestConfig, onboardUserRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/onboard-user`, onboardUserRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    reOnboardUser(requestConfig, reOnboardUserRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/re-onboard-user`, reOnboardUserRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    adminUpdateUserRoles(requestConfig, email, adminUpdateUserRolesRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/admin-change-roles/${email}`, adminUpdateUserRolesRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    internalUpdateUserRoles(requestConfig, email, internalUpdateUserRolesRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/users/${email}/roles`, internalUpdateUserRolesRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateUserDetails(requestConfig, email, updateUserDetailsRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/users/${email}`, updateUserDetailsRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    setPassword(requestConfig, setPasswordRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/set-password', setPasswordRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    removeUser(requestConfig, removeUserRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/remove-user`, removeUserRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateUserWorkstreamAccess(requestConfig, email, updateUserWorkstreamAccessRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/users/${email}/workstreams`, updateUserWorkstreamAccessRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    httpHandler(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield request();
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
        const requestConfig = {
            headers: {
                'x-request-id': config.requestId
            }
        };
        if (config.token) {
            requestConfig.headers.token = config.token;
        }
        if (config.frontendToken) {
            requestConfig.headers.frontendToken = config.frontendToken;
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
