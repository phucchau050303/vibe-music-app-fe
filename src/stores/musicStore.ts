import { defineStore } from "pinia";
import api from "../services/api";

interface Playlist{
    title: string;
    playlistLink: string;
    imageUrl: string;
    platform: string;
    description: string;
}

export const useMusicStore = defineStore('musicSearch', {
    state: () => {
        return {
            prompt: "",
            playlists: [] as Playlist[],
            isLoading: false,
            fetchingStatus: "FAILED"
        }
    },

    actions: {
        setPromt(prompt: string) {
            this.prompt = prompt;
        },

        async submitRequest(){
            const promptData = {prompt: this.prompt};
            this.isLoading = true;
            this.playlists = [];

            try {
                const response = await api.getMusic(promptData);
                 console.log("📦 FULL RESPONSE:", response);
                if (response.data.status == "SUCCEEDED") {
                    this.fetchingStatus = "SUCCEEDED";
                    this.playlists = response.data;
                    this.prompt = "";
                } else {
                    this.fetchingStatus = "FAILED";
                }
  
            } catch (errorLog) {
                this.isLoading = false;
                console.error('Error fetching playlist:', errorLog);
                alert('An error occurred while fetching playlists. Please try again.');
            }
            finally {
                this.isLoading = false
            }
        } 
    }
})