// fileStore.js
import { defineStore } from "pinia";

export const useFileStore = defineStore({
  id: "file",
  state: () => ({
    files: [],
  }),
  getters: {
    getAllFiles() {
      if (this.files.length) {
        return this.files;
      } else {
        this.loadFromLocalStorage();
        return this.files;
      }
    },
  },
  actions: {
    // Add File
    addFile(fileName, fileImageUrl) {
      this.loadFromLocalStorage();
      const newSlug = this.getFileSlug(fileName);

      const fileExists = this.files.some(
        (file) => file.fileSlug === newSlug
      );

      if (!fileExists) {
        const newId = this.generateId(10);
        this.files.push({
          fileId: newId,
          fileName: fileName,
          fileSlug: newSlug,
          fileImageUrl: fileImageUrl,
        });
        this.saveToLocalStorage();
      } else {
        console.error("File Already Exist");
      }
    },

    // Get File Details
    getFileDetails(slug) {
      let fileDetail = null;
      const fileExists = this.files.some((file) => {
        if (file.fileSlug === slug) {
          fileDetail = file;
        } else {
          return null;
        }
      });
      return fileDetail;
    },

    // Remove File
    removeFile(fileId) {
      this.files = this.files.filter(
        (file) => file.fileId !== fileId
      );
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

    // get File Slug
    getFileSlug(inputText) {
      let lowercaseText = inputText.replace(/[A-Z]/g, (match) =>
        match.toLowerCase()
      );
      lowercaseText = lowercaseText.replace(/[^a-z0-9]+/g, "-");
      lowercaseText = lowercaseText.replace(/^-|-$/g, "");
      return lowercaseText;
    },

    // Generate Token
    generateId(length) {
      const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let token = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        token += charset.charAt(randomIndex);
      }
      return token;
    },
  },
});
