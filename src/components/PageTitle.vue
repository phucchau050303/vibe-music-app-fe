<script setup lang="ts">
    import { useRouter } from 'vue-router';
</script>

<template>
        <div @click="useRouter().push('/')" class = "text-center page-title"> 
            <span>Vibe Music Finder</span>
        </div>
</template>

<style>
    .page-title{
        font-size: 1.7rem;
        color: #8b28a4;
        font-weight: 500;
    }
    .page-title:hover{
        cursor: pointer;
    }
</style>