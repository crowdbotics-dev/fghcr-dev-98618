import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cvcb_list = createAsyncThunk(
  "cvcbs/api_v1_cvcb_list",
  async payload => {
    const response = await apiService.api_v1_cvcb_list(payload)
    return response.data
  }
)
export const api_v1_cvcb_create = createAsyncThunk(
  "cvcbs/api_v1_cvcb_create",
  async payload => {
    const response = await apiService.api_v1_cvcb_create(payload)
    return response.data
  }
)
export const api_v1_cvcb_retrieve = createAsyncThunk(
  "cvcbs/api_v1_cvcb_retrieve",
  async payload => {
    const response = await apiService.api_v1_cvcb_retrieve(payload)
    return response.data
  }
)
export const api_v1_cvcb_update = createAsyncThunk(
  "cvcbs/api_v1_cvcb_update",
  async payload => {
    const response = await apiService.api_v1_cvcb_update(payload)
    return response.data
  }
)
export const api_v1_cvcb_partial_update = createAsyncThunk(
  "cvcbs/api_v1_cvcb_partial_update",
  async payload => {
    const response = await apiService.api_v1_cvcb_partial_update(payload)
    return response.data
  }
)
export const api_v1_cvcb_destroy = createAsyncThunk(
  "cvcbs/api_v1_cvcb_destroy",
  async payload => {
    const response = await apiService.api_v1_cvcb_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cvcbsSlice = createSlice({
  name: "cvcbs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_cvcb_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvcb_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcb_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcb_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvcb_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcb_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcb_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvcb_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcb_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcb_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvcb_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcb_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcb_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvcb_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcb_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcb_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvcb_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcb_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_cvcb_list,
  api_v1_cvcb_create,
  api_v1_cvcb_retrieve,
  api_v1_cvcb_update,
  api_v1_cvcb_partial_update,
  api_v1_cvcb_destroy,
  slice: cvcbsSlice
}
