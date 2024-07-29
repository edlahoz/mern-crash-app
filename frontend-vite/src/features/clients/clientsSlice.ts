// src/slices/clientsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "@/data/types";
import { GET_CLIENTS } from "@/data/graphql";
import { client } from "@/data/client";
import { useAppSelector, useAppDispatch } from "@/storehooks";
import { useEffect } from "react";

export interface ClientsState {
  data: Client[];
  loading: boolean;
  error: string | null;
}

const initialState: ClientsState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchClients: any = createAsyncThunk<Client[]>(
  "clients/fetchClients",
  async () => {
    const response = await client.query(GET_CLIENTS, {}).toPromise();
    if (response.error) {
      throw new Error(response.error.message);
    }
    return response.data.clients;
  }
);

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export const useFetchClients = () => {
  const dispatch = useAppDispatch();
  const clients = useAppSelector((state) => state.clients.data);

  useEffect(() => {
    if (clients.length === 0) {
      dispatch(fetchClients());
    }
  }, [dispatch, clients.length]);

  return clients;
};

export default clientsSlice.reducer;
