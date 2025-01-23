import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./searchbar/SearchBar";
import ImageGallery from "./imagegallery/ImageGallery";
import Loader from "./loader/Loader";
import ErrorMessage from "./errormessage/ErrorMessage";
import LoadMoreBtn from "./loadmorebtn/LoadMoreBtn";
import ImageModal from "./imagemodal/ImageModal";
import toast, { Toaster } from "react-hot-toast";
import s from "./App.module.css";
import { Image } from "./types";

interface AppState {
  images: Image[];
  query: string;
  page: number;
  loading: boolean;
  error: string | null;
  showModal: boolean;
  modalImage: Image | null;
}

const ACCESS_KEY = "_n-WbaYYa46dr_uXsPI1IKic8i9afKM0-wnW4vh-ACg";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query, page, per_page: 12 },
          headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
        }
      );
      setImages((prevImages) => [...prevImages, ...response.data.results]);
      setError(null);
    } catch (error: any) {
      setError(`Could not fetch images. Try again later. ${error.message}`);
    }
    setLoading(false);
  };

  const handleSearchSubmit = (inputQuery: string) => {
    if (!inputQuery.trim()) {
      toast.error("Please enter a search term!");
      return;
    }
    setQuery(inputQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const loadMoreImages = () => setPage((prevPage) => prevPage + 1);

  const openModal = (image: Image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className={s.box}>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {showModal && modalImage && (
        <ImageModal image={modalImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
