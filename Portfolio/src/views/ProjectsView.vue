<template>
  <div id="border">
    <div id="scroll">
      <div v-for="project in this.projects">
        <div class="card">
          <div class="topCard">
            <img
              src="https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png"
              alt=""
              class="cardImg"
            />
            <div>
              <h3>{{ project.name }}</h3>
              <ul>
                <li>{{ project.filter }}</li>
              </ul>
            </div>
          </div>
          <button class="btnCard">Learn more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProjectStore } from "@/stores/Project";
export default {
  setup() {
    const projectStore = useProjectStore();

    return { projectStore };
  },

  data() {
    return {
      projects: [],
    };
  },

  async created() {
    if (this.projects == undefined || this.projects == "") {
      this.projects = this.projectStore.getProjects;
    }
  },
};
</script>

<style>
@import "../assets/projects.css";
</style>
