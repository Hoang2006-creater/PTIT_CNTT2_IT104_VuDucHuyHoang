import React, { useEffect, useMemo, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../src/hook";
import { fetchBooks, addBook, updateBook, deleteBook } from "./component/BookSlice";
import type { Book } from "./component/type";
import BookSearchSortFilter from "./component/BookSearchSortFilter";
import BookList from "./component/BookList";
import BookForm from "./component/BookFrom";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: books, loading } = useAppSelector((s) => s.books);

  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Book | undefined>();
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"title" | "year">("title");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const categories = useMemo(
    () => Array.from(new Set(books.map((b) => b.category))).sort(),
    [books]
  );

  const filteredSorted = useMemo(() => {
    let out = books.slice();
    if (search.trim()) {
      const q = search.toLowerCase();
      out = out.filter(
        (b) =>
          b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
      );
    }
    if (category !== "all") out = out.filter((b) => b.category === category);

    out.sort((a, b) => {
      if (sortBy === "title") {
        const r = a.title.localeCompare(b.title);
        return sortDir === "asc" ? r : -r;
      } else {
        const r = a.year - b.year;
        return sortDir === "asc" ? r : -r;
      }
    });
    return out;
  }, [books, search, category, sortBy, sortDir]);

  const handleSubmit = (data: Omit<Book, "id"> & { id?: string }) => {
    if (data.id) {
      dispatch(updateBook(data as Book));
    } else {
      dispatch(addBook(data));
    }
    setOpenForm(false);
  };

  const handleDelete = () => {
    if (confirmDelete) {
      dispatch(deleteBook(confirmDelete));
      setConfirmDelete(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📚 Book Library Manager</h1>

      <Button
        variant="contained"
        onClick={() => {
          setEditing(undefined);
          setOpenForm(true);
        }}
      >
        Add Book
      </Button>

      <div className="mt-4">
        <BookSearchSortFilter
          search={search}
          category={category}
          sortBy={sortBy}
          sortDir={sortDir}
          categories={categories}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onSortChange={(by, dir) => {
            setSortBy(by);
            setSortDir(dir);
          }}
          onClear={() => {
            setSearch("");
            setCategory("all");
            setSortBy("title");
            setSortDir("asc");
          }}
        />
      </div>

      <div className="mt-6">
        {loading ? (
          <p>Đang tải dữ liệu...</p>
        ) : (
          <BookList
            books={filteredSorted}
            onEdit={(b) => {
              setEditing(b);
              setOpenForm(true);
            }}
            onDelete={(id) => setConfirmDelete(id)}
          />
        )}
      </div>
      <BookForm
        open={openForm}
        initial={editing}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
      />
      <Dialog open={!!confirmDelete} onClose={() => setConfirmDelete(null)}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>Bạn có chắc muốn xóa quyển sách này?</DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDelete(null)}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
