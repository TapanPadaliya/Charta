// channelStore.js
import { defineStore } from "pinia";

export const useChannelStore = defineStore({
  id: "channel",
  state: () => ({
    channels: [],
  }),
  getters: {
    getAllChannels() {
      if (this.channels.length) {
        return this.channels;
      } else {
        this.loadFromLocalStorage();
        return this.channels;
      }
    },
  },
  actions: {
    // Add Channel
    addChannel(channelName, channelImageUrl) {
      this.loadFromLocalStorage();
      const newSlug = this.getChannelSlug(channelName);

      const channelExists = this.channels.some(
        (channel) => channel.channelSlug === newSlug
      );

      if (!channelExists) {
        const newId = this.generateId(10);
        this.channels.push({
          channelId: newId,
          channelName: channelName,
          channelSlug: newSlug,
          channelImageUrl: channelImageUrl,
        });
        this.saveToLocalStorage();
      } else {
        console.error("Channel Already Exist");
      }
    },

    // Get Channel Details
    getChannelDetails(slug) {
      let channelDetail = null;
      const channelExists = this.channels.some((channel) => {
        if (channel.channelSlug === slug) {
          channelDetail = channel;
        } else {
          return null;
        }
      });
      return channelDetail;
    },

    // Remove Channel
    removeChannel(channelId) {
      this.channels = this.channels.filter(
        (channel) => channel.channelId !== channelId
      );
      this.saveToLocalStorage();
    },

    // Save & Fetch from Local
    saveToLocalStorage() {
      localStorage.setItem("channels", JSON.stringify(this.channels));
    },
    loadFromLocalStorage() {
      const savedChannels = localStorage.getItem("channels");
      if (savedChannels) {
        this.channels = JSON.parse(savedChannels);
      }
    },

    // get Channel Slug
    getChannelSlug(inputText) {
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
