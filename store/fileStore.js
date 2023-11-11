// fileStore.js
import { defineStore } from "pinia";

export const useFileStore = defineStore({
  id: "file",
  state: () => ({
    files: {},
  }),
  getters: {
    getAllFiles() {
      this.loadFromLocalStorage();
      return this.files;
    },
  },
  actions: {
    // Add File
    addFile(pageId, value = null) {
      this.loadFromLocalStorage();
      // Make a record with the key as pageId and value as either the passed value or null
      this.files[pageId] = value;
      this.saveToLocalStorage();
    },

    // Get File Details
    getFileDetails(pageId) {
      this.loadFromLocalStorage();
      // Return file value based on pageId
      return this.files[pageId];
    },

    // Update File
    updateFile(pageId, value) {
      this.loadFromLocalStorage();
      // Update the file with the new value
      this.files[pageId] = value;
      this.saveToLocalStorage();
    },

    // Remove File
    removeFile(pageId) {
      // Fetch & delete where key pageId == pageId
      delete this.files[pageId];
      this.saveToLocalStorage();
    },

    // Save & Fetch from Local
    saveToLocalStorage() {
      localStorage.setItem("files", JSON.stringify(this.files));
    },
    loadFromLocalStorage() {
      const savedFiles = localStorage.getItem("files");
      if (savedFiles) {
        this.files = JSON.parse(savedFiles);
      }
    },
  },
});
