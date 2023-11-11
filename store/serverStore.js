// serverStore.js
import { defineStore } from "pinia";

export const useServerStore = defineStore({
  id: "server",
  state: () => ({
    servers: [],
  }),
  getters: {
    getAllServers() {
      if (this.servers.length) {
        return this.servers;
      } else {
        this.loadFromLocalStorage();
        return this.servers;
      }
    },
  },
  actions: {
    // Add Server
    addServer(serverName, serverImageUrl) {
      this.loadFromLocalStorage();
      const newSlug = this.getServerSlug(serverName);

      const serverExists = this.servers.some(
        (server) => server.serverSlug === newSlug
      );

      if (!serverExists) {
        const newId = this.generateId(10);
        this.servers.push({
          serverId: newId,
          serverName: serverName,
          serverSlug: newSlug,
          serverImageUrl: serverImageUrl,
        });
        this.saveToLocalStorage();
      } else {
        console.error("Server Already Exist");
      }
    },

    // Get Server Details
    getServerDetails(slug) {
      let serverDetail = null;
      const serverExists = this.servers.some((server) => {
        if (server.serverSlug === slug) {
          serverDetail = server;
        } else {
          return null;
        }
      });
      return serverDetail;
    },

    // Remove Server
    removeServer(serverId) {
      this.servers = this.servers.filter(
        (server) => server.serverId !== serverId
      );
      this.saveToLocalStorage();
    },

    // Save & Fetch from Local
    saveToLocalStorage() {
      localStorage.setItem("servers", JSON.stringify(this.servers));
    },
    loadFromLocalStorage() {
      const savedServers = localStorage.getItem("servers");
      if (savedServers) {
        this.servers = JSON.parse(savedServers);
      }
    },

    // get Server Slug
    getServerSlug(inputText) {
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
