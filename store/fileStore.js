// fileStore.js
import { defineStore } from "pinia";

export const useFileStore = defineStore({
  id: "file",
  state: () => ({
    files: [], // Use an array instead of an object
  }),
  getters: {
    getAllFiles() {
      this.loadFromLocalStorage();
      return this.files;
    },
  },
  actions: {
    // Add File
    addFile(pageId, value = "Hello World !") {
      this.loadFromLocalStorage();
      // Make a record with the key as pageId and value as either the passed value or null
      this.files.push({ pageId, value });
      this.saveToLocalStorage();
    },

    // Get File Details
    getFileDetails(pageId) {
      this.loadFromLocalStorage();
      // Return file value based on pageId
      const file = this.files.find((file) => file.pageId === pageId);
      return file ? file.value : null;
    },

    // Update File
    updateFile(pageId, value) {
      this.loadFromLocalStorage();
      // Update the file with the new value
      const index = this.files.findIndex((file) => file.pageId === pageId);
      if (index !== -1) {
        this.files[index].value = value;
      }
      this.saveToLocalStorage();
    },

    // Remove File
    removeFile(pageId) {
      // Find and remove the file where pageId matches
      this.files = this.files.filter((file) => file.pageId !== pageId);
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
