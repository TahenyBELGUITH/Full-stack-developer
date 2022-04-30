import "./style.css";
import {
  personal,
  personalFolders,
  bio,
  bioDescriptionContainer,
} from "./variables";

personal.addEventListener("click", () => {
  personalFolders.classList.toggle("display-none");
});

bio.addEventListener("click", () => {
  bioDescriptionContainer.classList.toggle("display-none");
});
