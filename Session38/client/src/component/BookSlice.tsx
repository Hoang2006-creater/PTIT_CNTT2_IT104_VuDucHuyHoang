import { createSlice, createAsyncThunk, type PayloadAction} from "@reduxjs/toolkit";

import axios from "axios";
import type { Book } from "../component/type";

const API_URL = "http://localhost:3000/books";

export const fetchBooks = createAsyncThunk("books/fetch", async () => {
  const res = await axios.get<Book[]>(API_URL);
  return res.data;
});
export const addBook = createAsyncThunk("books/add", async (book: Omit<Book, "id">) => {
  const res = await axios.post<Book>(API_URL, { ...book, id: Date.now().toString() });
  return res.data;
});
export const deleteBook = createAsyncThunk("books/delete", async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});
export const updateBook = createAsyncThunk("books/update", async (book: Book) => {
  const res = await axios.put<Book>(`${API_URL}/${book.id}`, book);
  return res.data;
});

interface BookState {
  items: Book[];
  loading: boolean;
  error?: string;
}

const initialState: BookState = {
  items: [],
  loading: false,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addBook.fulfilled, (state, action: PayloadAction<Book>) => {
        state.items.unshift(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((b) => b.id !== action.payload);
      })
      .addCase(updateBook.fulfilled, (state, action: PayloadAction<Book>) => {
        state.items = state.items.map((b) =>
          b.id === action.payload.id ? action.payload : b
        );
      });
  },
});

export default bookSlice.reducer;
