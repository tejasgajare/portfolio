<template>
    <div id="hero" class="hero" :class="{ 'pt-40': large, 'pt-12': mobile || small || medium }">
        <div class="flex flex-col font-semibold"
            :class="{ 'text-9xl': large, 'text-8xl leading-medium': medium, 'text-7xl leading-small': small || mobile }">
            <div class="flex gap-8 items-center" :class="{ 'flex-wrap justify-center': mobile || small || medium }">
                <h1 class="hey" :class="{ 'w-full text-center': mobile || small || medium }">Hey!</h1>
                <h1 class="im" :class="{ 'w-full text-center': mobile || small || medium }"> I’m </h1>
                <div class="picture flex relative min-w-[160px] w-40 -mx-3" :class="{ 'my-4': mobile || small || medium }">
                    <img src="../assets/images/hero-image.png" class="rounded-full " />
                    <img src="../assets/images/highlight.svg" class="eyelash absolute -left-5 -top-5 w-12" />
                </div>
                <h1 class="tejas" :class="{ 'w-full text-center': mobile || small || medium }">Tejas.</h1>
            </div>
        </div>

    </div>
    <div class="max-lg:mx-auto sub-hero">
        <p class="about w-full splt font-medium leading-snug max-md: my-12"
            :class="{ 'text-4xl': large, 'text-2xl text-center': mobile || small || medium }">
            Software developer with a passion for crafting scalable applications and
            designing user-friendly interfaces. I specialize in creating robust backend
            systems and have experience in building full stack applications.

        <p class="text-yellow writer py-10 font-medium" :class="{ 'text-5xl': large || medium, 'text-3xl': small || mobile }">
            I can help you bring your vision to reality.</p>
        </p>
    </div>
    <div class="social">
        <div class="flex max-lg:flex-wrap text-3xl justify-between max-lg:justify-center">
            <div class="flex py-5 gap-5 max-lg:w-full max-lg:justify-center">
                <a class="link" target="_blank" href="https://www.linkedin.com/in/tejasgajare">LinkedIn</a>
                <a class="link" target="_blank" href="https://github.com/tejasgajare">GitHub</a>
                <a class="link" target="_blank" href="https://www.instagram.com/tejas_gajare">Instagram</a>
            </div>
            <div class="link py-5">
                <!-- <button class="bg-yellow text-black font-semibold px-8 pt-2 rounded-full">
                    <div>
                        Let's Talk
                        <img class="mx-3 mt-1" src="../assets/images/arrow.svg" alt="">
                    </div>
                </button> -->
                <a target="_blank" href="mailto:tejasgajare24@gmail.com">hello@tejas.com</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { Back } from 'gsap';
import { Power2, Power4 } from 'gsap';
import { onMounted } from 'vue'

const props = defineProps<{
    mobile: Boolean,
    small: Boolean,
    medium: Boolean,
    large: Boolean
}>()



onMounted(() => {
    console.log(props)
    const timeline = gsap.timeline()
    timeline
        .set('.hey', { autoAlpha: 1, delay: 1 })
        .from('.hey', { duration: 0.6, y: -60, ease: 'bounce' })

    if (props.large) {
        console.log("applying large")
        timeline
            .to('.im',      { duration: 0.5, autoAlpha: 1 },2)
            .to('.tejas',   { duration: 0.5, autoAlpha: 1 },2)
            .from('.im',    { duration: 0.8, x: 80, ease: Back.easeInOut })
            .from('.tejas', { duration: 0.8, x: -80, ease: Back.easeInOut })
    } else {
        console.log("applying small")
        timeline
            .to('.im',      { duration: 0.5, autoAlpha: 1 },2)
            .to('.tejas',   { duration: 0.5, autoAlpha: 1 },2)
            .from('.im',    { duration: 0.8, y: 100, ease: Back.easeInOut })
            .from('.tejas', { duration: 0.8, y: -120, ease: Back.easeInOut })
    }
    timeline
        .from('.picture', { duration: 0.6, autoAlpha: 0, ease: 'linear' })
        .from('.eyelash', { duration: 0.6, autoAlpha: 0, ease: 'linear' })
        .to('.about', { duration: 1, autoAlpha: 1, ease: Power4.easeInOut})

    gsap.to('.social .link', { scrollTrigger: { trigger: ".social", start: "top bottom-=200px" }, duration: 1, autoAlpha: 1, ease: 'power3.inOut', stagger: 0.3 })
})

</script>

<style lang="scss">
@import '../assets/main.scss';

button img {
    float: right;
    width: 20px;
    height: 20px;
}

.hero {
    font-family: 'Clash Display', sans-serif;

    h1,
    .picture {
        visibility: hidden;
    }
}

.about {
    position: relative;
    overflow: hidden;
    visibility: hidden;
    .overlay {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: $black;
        bottom: 0;
        left: 0;
    }
}

.social .link {
    visibility: hidden;
}

.sub-hero {
    font-family: 'General Sans', sans-serif;

    .writer {
        background: linear-gradient(to right, #ff00b3,   #0022ff);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
}

.leading-medium {
    line-height: 75px;
}

.leading-small {
    line-height: 50px;
}
</style>