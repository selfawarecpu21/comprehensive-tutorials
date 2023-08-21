<template>
  <div class="marquee" @mouseover="pauseMarquee" @mouseout="startMarquee">
    <div class="marquee-content" :style="{ 'animation-play-state': playState }">
      <div v-for="i in 2" :key="i" class="marquee-copy">
        <div
          v-for="(item, index) in marqueeItems"
          :key="index"
          class="marquee-item"
          @mouseover="pauseMarquee"
          @mouseout="startMarquee"
        >
          <div class="tooltip" v-if="item.tooltip === bannerText">
            {{ item.tooltip }}
          </div>
          <transition
            name="scale"
            :css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
          >
            <v-icon :style="{ transform: 'scale(' + scaleFactor + ')' }">{{ item.icon }}</v-icon>
          </transition>
        </div>
        <div class="marquee-item gap"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      playState: 'running',
      scaleFactor: 1,
      bannerText: '',
      marqueeItems: [
        { icon: 'mdi-format-title', tooltip: 'Title' },
        { icon: 'mdi-text-short', tooltip: 'Introduction' },
        { icon: 'mdi-lightbulb-on-outline', tooltip: 'Prerequisites' },
        { icon: 'mdi-tools', tooltip: 'Materials/Tools Needed' },
        { icon: 'mdi-alert-circle', tooltip: 'Tips and Warnings' },
        { icon: 'mdi-checkbox-marked-circle-outline', tooltip: 'Conclusion/Summary' },
        { icon: 'mdi-comment-question', tooltip: 'Comments/Questions' },
        { icon: 'mdi-progress-check', tooltip: 'Progress Tracking' },
        { icon: 'mdi-magnify', tooltip: 'Search Functionality' },
        { icon: 'mdi-numeric', tooltip: 'Step-by-Step Instructions' },
        { icon: 'mdi-format-text', tooltip: 'Text Instructions' },
        { icon: 'mdi-image', tooltip: 'Images' },
        { icon: 'mdi-video', tooltip: 'Videos' },
        { icon: 'mdi-code-tags', tooltip: 'Code Snippets' },
      ],
    };
  },
  methods: {
    pauseMarquee() {
      this.playState = 'paused';
    },
    startMarquee() {
      this.playState = 'running';
    },
    randomlyScaleIcon(tooltip) {
      this.scaleFactor = Math.random() * 0.5 + 1; // Random scale between 1 and 1.5
      this.bannerText = tooltip; // Display the tooltip text in the banner
    },
    beforeEnter(el) {
      el.style.transform = 'scale(1)';
    },
    enter(el, done) {
      setTimeout(() => {
        el.style.transform = 'scale(' + this.scaleFactor + ')';
        done();
      }, 300);
    },
    leave(el, done) {
      el.style.transform = 'scale(1)';
      done();
    },
  },
};
</script>

<style scoped>
.marquee {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%; /* Take up the full width */
  height: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* Add a box-shadow for shading */
}

.marquee-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  animation: marquee 30s linear infinite;
}

.marquee-copy {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}


.marquee-item {
  display: inline-flex; /* Change to inline-flex to allow centering with align-items */
  justify-content: center; /* Center the icon and tooltip horizontally */
  align-items: center; /* Center the icon and tooltip vertically */
  flex-direction: column; /* Stack the icon and tooltip vertically */
  margin-right: 10rem;
  position: relative; /* Position relative for absolute positioning of tooltip */
}

.tooltip {
  position: absolute;
  bottom: calc(100% + 10px); /* Adjust this value to control tooltip distance from the icon */
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0.8;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}

@keyframes marquee {
  0% { transform: translate(0, 0); }
  50% { transform: translate(-50%, 0); } /* Move to -50% at the halfway point */
  100% { transform: translate(-100%, 0); }
}
</style>
