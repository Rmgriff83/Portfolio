const app = Vue.createApp({
  //data, functions
  data() {
    return {
      mobile_header: true,
      skill_highlight_color: true,
      skills: [
        {
          type: "Development",
          list: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "JQuery",
            "SEO",
            "Shopify Liquid",
            "Api Integration",
            "Bootstrap",
            "React",
            "Vue",
          ],
          icon: "fa-code",
        },
        {
          type: "Design",
          list: [
            "UX/UI",
            "Photoshop",
            "Illustrator",
            "After Effects",
            "Premiere Pro",
            "XD",
            "Animation",
            "Video Editing",
            "Graphic Design",
            "Audio Design",
          ],
          icon: "fa-object-ungroup",
        },
        {
          type: "Workflow",
          list: [
            "Google Ads",
            "Google Analytics",
            "UberSuggest",
            "Microsoft Office",
            "Slack",
            "Zoom",
            "Basecamp",
            "Github",
          ],
          icon: "fa-sitemap",
        },
      ],
      projects: [
        {
          title: "ELO Rebuild",
          img: "img/elo-thumbnail.png",
          url: "https://the-next.eliterature.org/",
          tag: "Develop",
          class: "dev",
          itemType: "http://schema.org/WebSite",
          specialties: ["HTML5", "SCSS", "JQuery", "JavaScript", "XD"],
          description:
            "Working together with a group of 5 other developers in the capstone senior semiar course, we developed low and high fidelity prototypes as well as a fully responsive web page for the ELO Organization.",
          video: false,
        },
        {
          title: "2084",
          img: "img/Hmedia-1.gif",
          url: "https://dtc-wsuv.org/rgriffus20/hypermedia_game/",
          tag: "Dev/Des",
          class: "design dev",
          itemType: "http://schema.org/WebSite",
          specialties: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "After Effects",
            "Illustrator",
            "Fresco",
          ],
          description:
            "This is a short point and click hypermedia narrative game I made over the course of a few weeks for Dtc 354 in the Summer of 2020.",
          video: false,
        },
        {
          title: "NW Topography Visualized",
          img: "img/p-map.jpg",
          url: "https://dtc-wsuv.org/rgriffus20/map",
          tag: "Develop",
          class: "dev",
          itemType: "http://schema.org/WebPage",
          specialties: ["Mapbox API", "HTML5", "CSS3", "JavaScript", "JQuery"],
          description:
            "Made for Advanced Multimedia Authoring. I used the Mapbox API to extrude the elevation information for a 3d effect.",
          video: false,
        },
        {
          title: "NBA Today",
          img: "img/nba-today-img.jpg",
          url: "https://nba-today.vercel.app/",
          tag: "Develop",
          class: "dev",
          itemType: "http://schema.org/WebApplication",
          specialties: [
            "React",
            "JavaScript",
            "HTML5",
            "CSS3",
            "BallDontLie API",
            "Material UI",
          ],
          description:
            "This is a responsive React app that tracks the day's NBA games and displays the scores. Powered with the BallDontLie free API. ",
          video: false,
        },
        {
          title: "Mamba",
          img: "img/mamba.GIF",
          url: "",
          tag: "Design",
          class: "design",
          itemType: "http://schema.org/VisualArtwork",
          specialties: ["After Effects", "Fresco"],
          description:
            "I made this short rotoscope animation in Spring 2020 for my 2d animation class. In total there were over a hundred separate drawings.",
          video: true,
          videoUrl: "vids/mamba.mp4",
        },
        {
          title: "Traversing Myst",
          img: "img/myst.jpg",
          url: "https://scalar.usc.edu/works/traversing-myst/index",
          tag: "Develop",
          class: "dev",
          itemType: "http://schema.org/WebPage",
          specialties: ["HTML5", "CSS3", "Scalar"],
          description:
            "With a team of other developers, we designed and set up the frameworkfor this hypertext work in my video games studies course.",
          video: false,
        },
        {
          title: "The Night",
          img: "img/Thenight.png",
          url: "https://dtc-wsuv.org/rgriffus20/lightbox_comic",
          tag: "Des/Dev",
          class: "design dev",
          itemType: "http://schema.org/WebPage",
          specialties: ["HTML5", "CSS3", "JavaScript", "Fresco", "Illustrator"],
          description:
            "This is a web based sequential comic made for my digital storytelling class. My intent was to use only pictures to tell a story.",
          video: false,
        },
        {
          title: "To-Do App",
          img: "img/p-todo.jpg",
          url: "https://my-app3.vercel.app/",
          tag: "Develop",
          class: "dev",
          itemType: "http://schema.org/WebApplication",
          specialties: [
            "React",
            "Dexie.js",
            "JavaScript",
            "CSS3",
            "Material UI",
          ],
          description:
            "Coordinating in Github with a group of two other people, we built and designed a simple to do app using indexedDB in the browser.",
          video: false,
        },
        {
          title: "Treeman Cometh",
          img: "img/treeman.PNG",
          url: "",
          tag: "Design",
          class: "design",
          itemType: "http://schema.org/VisualArtwork",
          specialties: [
            "After Effects",
            "Illustrator",
            "Animate",
            "Premiere Pro",
            "Fresco",
          ],
          description:
            "This is a short animation I did with lip-synching to audio for my 2d animation class.",
          video: true,
          videoUrl: "vids/treeman.mp4",
        },
        {
          title: "Second Step Housing PSA",
          img: "img/psa.jpg",
          url: "",
          tag: "Design",
          class: "design",
          itemType: "http://schema.org/VisualArtwork",
          specialties: ["After Effects", "Illustrator", "Premier Pro"],
          description:
            "This is a video public service announcement made for the Second Step Housing non-profit in Fall '19.",
          video: true,
          videoUrl: "vids/psa.mp4",
        },
      ],
    };
  },
  computed: {},
  methods: {
    handleMenu(mobile_header) {
      this.mobile_header = !mobile_header;
    },
    handleVids(src) {
      const lightbox = document.createElement("div");
      lightbox.id = "lightbox";
      document.body.appendChild(lightbox);
      lightbox.classList.add("active");

      const x = document.createElement("span");
      x.innerHTML = "&times;";
      x.classList.add("lightbox-x");
      lightbox.appendChild(x);

      let vidShow = document.createElement("video");
      vidShow.src = src;
      vidShow.controls = true;

      lightbox.appendChild(vidShow);
      vidShow.autoplay = "true";

      x.addEventListener("click", () => {
        lightbox.removeChild(x);
        lightbox.removeChild(vidShow);
        lightbox.style.display = "none";
      });
    },
  },
});

app.mount("#app");
