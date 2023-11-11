// folderStore.js
import { defineStore } from "pinia";

export const useFolderStore = defineStore({
  id: "folder",
  state: () => ({
    folders: [],
  }),
  getters: {
    getAllFolders() {
      if (this.folders.length) {
        return this.folders;
      } else {
        this.loadFromLocalStorage();
        return this.folders;
      }
    },
  },
  actions: {
    // Add Folder
    addFolder(folderName, folderImageUrl) {
      this.loadFromLocalStorage();
      const newSlug = this.getFolderSlug(folderName);

      const folderExists = this.folders.some(
        (folder) => folder.folderSlug === newSlug
      );

      if (!folderExists) {
        const newId = this.generateId(10);
        this.folders.push({
          folderId: newId,
          folderName: folderName,
          folderSlug: newSlug,
          folderImageUrl: folderImageUrl,
        });
        this.saveToLocalStorage();
      } else {
        console.error("Folder Already Exist");
      }
    },

    // Get Folder Details
    getFolderDetails(slug) {
      let folderDetail = null;
      const folderExists = this.folders.some((folder) => {
        if (folder.folderSlug === slug) {
          folderDetail = folder;
        } else {
          return null;
        }
      });
      return folderDetail;
    },

    // Remove Folder
    removeFolder(folderId) {
      this.folders = this.folders.filter(
        (folder) => folder.folderId !== folderId
      );
      this.saveToLocalStorage();
    },

    // Save & Fetch from Local
    saveToLocalStorage() {
      localStorage.setItem("folders", JSON.stringify(this.folders));
    },
    loadFromLocalStorage() {
      const savedFolders = localStorage.getItem("folders");
      if (savedFolders) {
        this.folders = JSON.parse(savedFolders);
      }
    },

    // get Folder Slug
    getFolderSlug(inputText) {
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
