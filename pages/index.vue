<template>
    <div ref="introRef" class="intro">
      <div class="fw-container">
        <ThreeScene />
        <!-- Three.js canvas will be added here -->
      </div>
      <div class="circle-container">
        <div class="circle">
          <svg width="33vw" height="33vw" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" fill="#1C03E1"/>
          </svg>
        </div>
      </div>
      <div class="logo-container">
        <img src="/images/ahlogosig.svg" alt="Logo" class="logo">
      </div>
      <div ref="helperRef" class="helper">
        <div class="helper-links">
        <router-link to="/work">view selected projects</router-link>
        <a href="mailto:inquiries@alainahunt.com">let's connect</a>
        </div>
      </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import ThreeScene from '../components/ThreeScene.vue';

export default {
    components: {
        ThreeScene
    },
    mounted() {
        gsap.to(this.$refs.introRef, {
            opacity: 1,
            delay: 1,
            duration: 2,
            ease: 'expo.inOut'
        });

        gsap.from('.fw-container > *', {
            opacity: 1,
            duration: 2,
            stagger: 0.2,
            ease: 'expo.out',
            delay: 0.7
        });
        gsap.fromTo('.logo-container', 
            {
                opacity: 0,
                width: '10em',
                xPercent: -50,
                left: '50%',
                position: 'absolute'
            },
            {
                opacity: 1,
                duration: 1,
                ease: 'power1.inOut'
            }
        );

        gsap.to('.logo-container', {
            width: '14em',
            duration: 1,
            delay: 3.25,
            ease: 'expo.inOut'
        });
        gsap.to(this.$refs.helperRef.querySelector('.helper-links').querySelectorAll('a'), {
            opacity: 1,
            duration: 2,
            delay: 3.25,
            stagger: 0.2,
            ease: 'expo.inOut'
        });

    }
};
</script>

<style scoped>
.intro {
    display: block;
    position: relative;
    width: 98.5vw;
    height: 98vh;
    opacity: 0;
    z-index: 1;
    overflow: hidden!important;
    margin: auto;
    border-radius: 12px;
}

@media (max-width: 450px) {
    .intro {
        margin: auto;
        width: 96vw;
        height: 98vh;
    }
}

p {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: 300;
    letter-spacing: -0.04em;
}

canvas {
    display: block;
    position: relative;
    height: 98vh;
    width: 99vw;
    margin: auto;
    opacity: 1;
    overflow: hidden;
}

.circle-container {
    display: flex;
    position: fixed;
    width: 33vw;
    height: 33vw;
    align-items: center;
    justify-content: center;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.circle {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
@media (max-width: 450px) {
    .circle-container {
        width: 80vw;
        height: 80vw;
    }
    .circle svg{
        width: 80vw;
        height: 80vw;
    }
}

.logo-container {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    z-index: 11;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.logo-container img {
    width: 14em;
    height: auto;
}

@media (max-width: 450px) {
    .logo-container img {
        width: 12em;
    }
}

.helper {
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 20vh;
    z-index: 11;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media (max-width: 450px) {
    .helper {
        top: 60%;
        width: 80vw;
        height: 12vh;
    }
}

.helper-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: .96em;
    height: 100%;
}

.helper p {
    font-family: 'Neue Haas Grotesk Display Pro', Arial, Helvetica, sans-serif;
    font-size: .75em;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: #fff;
}

.helper-text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: .75em;
    margin-top: 1em;
}

.helper a {
    opacity: 0;
    font-family: 'Neue Haas Grotesk Display Pro', Arial, Helvetica, sans-serif;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
    font-size: .67em;
    transition: opacity 0.3s ease;
}

.helper a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: #fff;
    transition: width 0.3s ease;
}

.helper a:hover::after {
    width: 100%;
}


</style>
  