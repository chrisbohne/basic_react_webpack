import { useState, useEffect } from "react";

let localCache = {};

export default function useBreedImages(breed) {
  const [breedImages, setBreedImages] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!breed) setBreedImages([]);
    if (localCache[breed]) setBreedImages(localCache[breed]);
    else fetchBreedImages();

    async function fetchBreedImages() {
      setBreedImages([]);
      setStatus("loading");

      const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      const json = await res.json();

      localCache[breed] = json.message;
      setBreedImages(localCache[breed]);
      setStatus("loaded");
    }
  }, [breed]);

  return [breedImages, status];
}
