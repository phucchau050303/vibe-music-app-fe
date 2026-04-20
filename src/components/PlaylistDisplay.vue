<script setup lang="ts">
    const redirectToPlaylistPage = (playlistLink : string) => {
        window.open(playlistLink);
    }
    import { useMusicStore } from '../stores/musicStore';
    const store = useMusicStore();
</script>

<template>
    <div class="container">
        <div class="row mt-4">
            <div v-for = "playlist in store.playlists" class = "col-lg-3 col-md-4 col-sm-6 " >
                <div class = "card border border-0 card-shadow p-2" style="width: 14rem; " @click="redirectToPlaylistPage(playlist.playlistLink)">
                    <img :src="playlist.imageUrl" 
                    class = "card-img-top p-0">
                    <div class="card-body p-0">
                        <h5 class="card-title truncate">{{ playlist.title }}</h5>
                        <span class="card-text">Platform: {{ playlist.platform }}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
.truncate {
    display: -webkit-box;
    -webkit-line-clamp: 2;       
    -webkit-box-orient: vertical; 
    overflow: hidden;            /* Hide excess text */
    text-overflow: ellipsis;   
    line-height: 1em;
    height: 2em;  /* Add '...' */
}
</style>