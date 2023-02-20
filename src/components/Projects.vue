<template>
    <div id="projects" class="projects pt-20">
        <h1 class="py-10 mb-20 font-bold text-center" :class="{'text-6xl': large||medium, 'text-5xl': small, 'text-4xl mb-2': mobile}">Selected Projects</h1>
        <div class="anim flex place-content-center" :class="{' flex-wrap': mobile||small}">
            <div  :class="{'basis-1/2': large||medium}">
                <div class="img-container anim-a py-5 mx-auto">
                    <a class="project-link" target="_blank" href="https://github.com/tejasgajare/caloriemanager">
                        <div class="overlay-a"/>
                        <div class="image bg-center bg-[url('../assets/images/calorie_400x450.jpg')]" />
                        <div class="img-content py-2">
                            <h1 class="text-3xl font-medium py-3">Calorie Manager</h1>
                            <p>Comprehensive meal tracking solution with an intuitive dashboard, macronutrient tracking, and a newsfeed for fitness inspiration.</p>
                        </div>
                    </a>
                </div>
                <div class="img-container anim-b py-5 mx-auto">
                    <a class="project-link" target="_blank" href="https://github.com/tejasgajare/Measure-It">
                        <div class="overlay-b"/>
                        <div class="image bg-center bg-[url('../assets/images/measureit_400x450.jpg')]" />
                        <div class="img-content py-2">
                            <h1 class="text-3xl font-medium py-3">Measure It</h1>
                            <p>Measure indoor dimensions using just your mobile camera. Use any standard object such as credit card as a template for reference.</p>
                        </div>
                    </a>
                </div>
            </div>
            <div  :class="{'basis-1/2': large||medium}">
                <div v-if="large||medium" class="h-32"></div>
                <div class="img-container anim-c py-5 mx-auto">
                    <a class="project-link" target="_blank" href="https://github.com/tejasgajare/RoadSignTranslator">
                        <div class="overlay-c"/>
                        <div class="image bg-center bg-[url('../assets/images/roadsign_400x450.jpg')]" />
                        <div class="img-content py-2">
                            <h1 class="text-3xl font-medium py-3">Road Sign Translator</h1>
                            <p>A Smart Road Sign Translator uses a dashboard camera to capture road signs, extract text, and narrate their messages in the driver's native language.</p>
                        </div>
                    </a>
                </div>
                <div class="img-container anim-d py-5 mx-auto">
                    <a class="project-link" target="_blank" href="https://github.com/tejasgajare/FeedbackSystem">
                        <div class="overlay-d"/>
                        <div class="image bg-center bg-[url('../assets/images/feedback_400x450.jpg')]" />
                        <div class="img-content py-2">
                            <h1 class="text-3xl font-medium py-3">Feedback System</h1>
                            <p>The feedback system enables admins to create forms for students to provide feedback, and offers a dashboard for teachers to track their performance.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { Power3 } from 'gsap';
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
    mobile: Boolean,
    small: Boolean,
    medium: Boolean,
    large: Boolean
}>()

onMounted(() => {
    gsap.to('.img-container .overlay-a', { scrollTrigger: { trigger: ".anim-a", start: "top bottom-=200px" }, duration: 2, height: '0%', ease: Power3.easeInOut })
    gsap.to('.img-container .overlay-b', { scrollTrigger: { trigger: ".anim-b", start: "top bottom-=200px" }, duration: 2, height: '0%', ease: Power3.easeInOut })
    gsap.to('.img-container .overlay-c', { scrollTrigger: { trigger: ".anim-c", start: "top bottom-=200px" }, duration: 2, height: '0%', ease: Power3.easeInOut, delay: 0.2 })
    gsap.to('.img-container .overlay-d', { scrollTrigger: { trigger: ".anim-d", start: "top bottom-=200px" }, duration: 2, height: '0%', ease: Power3.easeInOut, delay: 0.2 })
})

</script>

<style lang="scss">
@import '../assets/main.scss';

.projects {
    font-family: 'General Sans', sans-serif;
}

.img-container {
    max-width: 400px;
    position: relative;
    overflow: hidden;

    .overlay-a,.overlay-b,.overlay-c,.overlay-d {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: $yellow;
        bottom: 0;
        left: 0;
    }

    .image {
        height: 450px;
        margin: 0 auto;
        border-radius: 4px;
        background-clip: border-box;
    }
}
</style>