import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vbb4_list = createAsyncThunk(
  "vbb4s/api_v1_vbb4_list",
  async payload => {
    const response = await apiService.api_v1_vbb4_list(payload)
    return response.data
  }
)
export const api_v1_vbb4_create = createAsyncThunk(
  "vbb4s/api_v1_vbb4_create",
  async payload => {
    const response = await apiService.api_v1_vbb4_create(payload)
    return response.data
  }
)
export const api_v1_vbb4_retrieve = createAsyncThunk(
  "vbb4s/api_v1_vbb4_retrieve",
  async payload => {
    const response = await apiService.api_v1_vbb4_retrieve(payload)
    return response.data
  }
)
export const api_v1_vbb4_update = createAsyncThunk(
  "vbb4s/api_v1_vbb4_update",
  async payload => {
    const response = await apiService.api_v1_vbb4_update(payload)
    return response.data
  }
)
export const api_v1_vbb4_partial_update = createAsyncThunk(
  "vbb4s/api_v1_vbb4_partial_update",
  async payload => {
    const response = await apiService.api_v1_vbb4_partial_update(payload)
    return response.data
  }
)
export const api_v1_vbb4_destroy = createAsyncThunk(
  "vbb4s/api_v1_vbb4_destroy",
  async payload => {
    const response = await apiService.api_v1_vbb4_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vbb4sSlice = createSlice({
  name: "vbb4s",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vbb4_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbb4_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vbb4_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbb4_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbb4_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vbb4_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbb4_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbb4_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vbb4_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbb4_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbb4_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbb4_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbb4_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbb4_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbb4_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbb4_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbb4_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbb4_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vbb4_list,
  api_v1_vbb4_create,
  api_v1_vbb4_retrieve,
  api_v1_vbb4_update,
  api_v1_vbb4_partial_update,
  api_v1_vbb4_destroy,
  slice: vbb4sSlice
}
