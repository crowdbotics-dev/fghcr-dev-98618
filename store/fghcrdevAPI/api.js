import axios from "axios"
const fghcrdevAPI = axios.create({
  baseURL: "https://fghcr-dev-98618.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return fghcrdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_cvcb_list(payload) {
  return fghcrdevAPI.get(`/api/v1/cvcb/`)
}
function api_v1_cvcb_create(payload) {
  return fghcrdevAPI.post(`/api/v1/cvcb/`, payload)
}
function api_v1_cvcb_retrieve(payload) {
  return fghcrdevAPI.get(`/api/v1/cvcb/${payload.id}/`)
}
function api_v1_cvcb_update(payload) {
  return fghcrdevAPI.put(`/api/v1/cvcb/${payload.id}/`, payload)
}
function api_v1_cvcb_partial_update(payload) {
  return fghcrdevAPI.patch(`/api/v1/cvcb/${payload.id}/`, payload)
}
function api_v1_cvcb_destroy(payload) {
  return fghcrdevAPI.delete(`/api/v1/cvcb/${payload.id}/`)
}
function api_v1_jvcee_list(payload) {
  return fghcrdevAPI.get(`/api/v1/jvcee/`)
}
function api_v1_jvcee_create(payload) {
  return fghcrdevAPI.post(`/api/v1/jvcee/`, payload)
}
function api_v1_jvcee_retrieve(payload) {
  return fghcrdevAPI.get(`/api/v1/jvcee/${payload.id}/`)
}
function api_v1_jvcee_update(payload) {
  return fghcrdevAPI.put(`/api/v1/jvcee/${payload.id}/`, payload)
}
function api_v1_jvcee_partial_update(payload) {
  return fghcrdevAPI.patch(`/api/v1/jvcee/${payload.id}/`, payload)
}
function api_v1_jvcee_destroy(payload) {
  return fghcrdevAPI.delete(`/api/v1/jvcee/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return fghcrdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return fghcrdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_vbb4_list(payload) {
  return fghcrdevAPI.get(`/api/v1/vbb4/`)
}
function api_v1_vbb4_create(payload) {
  return fghcrdevAPI.post(`/api/v1/vbb4/`, payload)
}
function api_v1_vbb4_retrieve(payload) {
  return fghcrdevAPI.get(`/api/v1/vbb4/${payload.id}/`)
}
function api_v1_vbb4_update(payload) {
  return fghcrdevAPI.put(`/api/v1/vbb4/${payload.id}/`, payload)
}
function api_v1_vbb4_partial_update(payload) {
  return fghcrdevAPI.patch(`/api/v1/vbb4/${payload.id}/`, payload)
}
function api_v1_vbb4_destroy(payload) {
  return fghcrdevAPI.delete(`/api/v1/vbb4/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return fghcrdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return fghcrdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return fghcrdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return fghcrdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return fghcrdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return fghcrdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return fghcrdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return fghcrdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return fghcrdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return fghcrdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return fghcrdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_cvcb_list,
  api_v1_cvcb_create,
  api_v1_cvcb_retrieve,
  api_v1_cvcb_update,
  api_v1_cvcb_partial_update,
  api_v1_cvcb_destroy,
  api_v1_jvcee_list,
  api_v1_jvcee_create,
  api_v1_jvcee_retrieve,
  api_v1_jvcee_update,
  api_v1_jvcee_partial_update,
  api_v1_jvcee_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_vbb4_list,
  api_v1_vbb4_create,
  api_v1_vbb4_retrieve,
  api_v1_vbb4_update,
  api_v1_vbb4_partial_update,
  api_v1_vbb4_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
