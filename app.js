const app = Vue.createApp({
  //data, functions
  data() {
    return {
      mobile_header: true,
      skill_highlight_color: true,
      devSkills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "JQuery",
        "Shopify CMS",
        "Api Integration",
        "React",
        "Vue",
      ],
      desSkills: [
        "Photoshop",
        "Illustrator",
        "After Effects",
        "Premiere Pro",
        "XD",
        "Animation",
        "Audio Design",
      ],
      wrkSkills: [
        "Google Ads",
        "Google Analytics",
        "Microsoft Office",
        "Slack",
        "Zoom",
        "Basecamp",
        "Github",
      ],
    };
  },
  computed: {},
  methods: {
    handleMenu(mobile_header) {
      this.mobile_header = !mobile_header;
    },
  },
});

app.mount("#app");
