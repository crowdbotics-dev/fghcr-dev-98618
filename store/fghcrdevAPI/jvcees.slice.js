import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_jvcee_list = createAsyncThunk(
  "jvcees/api_v1_jvcee_list",
  async payload => {
    const response = await apiService.api_v1_jvcee_list(payload)
    return response.data
  }
)
export const api_v1_jvcee_create = createAsyncThunk(
  "jvcees/api_v1_jvcee_create",
  async payload => {
    const response = await apiService.api_v1_jvcee_create(payload)
    return response.data
  }
)
export const api_v1_jvcee_retrieve = createAsyncThunk(
  "jvcees/api_v1_jvcee_retrieve",
  async payload => {
    const response = await apiService.api_v1_jvcee_retrieve(payload)
    return response.data
  }
)
export const api_v1_jvcee_update = createAsyncThunk(
  "jvcees/api_v1_jvcee_update",
  async payload => {
    const response = await apiService.api_v1_jvcee_update(payload)
    return response.data
  }
)
export const api_v1_jvcee_partial_update = createAsyncThunk(
  "jvcees/api_v1_jvcee_partial_update",
  async payload => {
    const response = await apiService.api_v1_jvcee_partial_update(payload)
    return response.data
  }
)
export const api_v1_jvcee_destroy = createAsyncThunk(
  "jvcees/api_v1_jvcee_destroy",
  async payload => {
    const response = await apiService.api_v1_jvcee_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const jvceesSlice = createSlice({
  name: "jvcees",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_jvcee_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_jvcee_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_jvcee_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_jvcee_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_jvcee_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_jvcee_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_jvcee_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_jvcee_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_jvcee_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_jvcee_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_jvcee_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_jvcee_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_jvcee_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_jvcee_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_jvcee_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_jvcee_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_jvcee_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_jvcee_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_jvcee_list,
  api_v1_jvcee_create,
  api_v1_jvcee_retrieve,
  api_v1_jvcee_update,
  api_v1_jvcee_partial_update,
  api_v1_jvcee_destroy,
  slice: jvceesSlice
}
