<template>
    <div id="app">
        <Header/>
        <TitleStep/>
        <router-view/>
    </div>
</template>
<script>
import Header from "@/components/Header";
import TitleStep from "@/components/TitleStep";

export default {
    components: {TitleStep, Header}
}
</script>
