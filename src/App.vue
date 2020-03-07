<template>
  <div id="app" class="relative">
    <!-- nav buttons -->
    <div class="p-8 flex fixed nav-icons justify-between w-screen">
      <a @click="goHome()" class="select-none">
        <button
          id="logo"
          class="rounded-full h-12 w-12 focus:outline-none focus:shadow-outline flex justify-center items-center border border-gray-200 bg-gray-100 shadow-lg"
        >
          <img src="@/assets/logo.svg" width="36" alt />
        </button>
      </a>
      <button
        id="logo"
        @click="changeLocale()"
        class="overflow-hidden rounded-full h-12 focus:outline-none focus:shadow-outline w-12 shadow-lg flex items-center justify-center"
      >
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#000" />
        </svg>-->
  
        <svg
          v-if="!flag"
          class="w-full"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background:new 0 0 512 512;"
          xml:space="preserve"
        >
          <rect style="fill:#0052B4;" width="512" height="512" />
          <rect style="fill:#F0F0F0;" width="512" height="170.663" />
          <rect y="341.337" style="fill:#D80027;" width="512" height="170.663" />
        </svg>
        <svg
          v-if="flag"
          class="w-full"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background:new 0 0 512 512;"
          xml:space="preserve"
        >
          <rect style="fill:#F0F0F0;" width="512" height="512" />
          <polygon
            style="fill:#D80027;"
            points="0,304 208,304 208,512 304,512 304,304 512,304 512,208 304,208 304,0 208,0 208,208 0,208 
	"
          />
          <g>
            <polygon style="fill:#0052B4;" points="406.92,333.913 512,438.993 512,333.913 	" />
            <polygon
              style="fill:#0052B4;"
              points="333.913,333.913 512,512 512,461.64 384.273,333.913 	"
            />
            <polygon style="fill:#0052B4;" points="464.564,512 333.913,381.336 333.913,512 	" />
          </g>
          <polygon
            style="fill:#F0F0F0;"
            points="333.913,333.913 512,512 512,461.64 384.273,333.913 "
          />
          <polygon
            style="fill:#D80027;"
            points="333.913,333.913 512,512 512,461.64 384.273,333.913 "
          />
          <g>
            <polygon style="fill:#0052B4;" points="80.302,333.913 0,414.215 0,333.913 	" />
            <polygon
              style="fill:#0052B4;"
              points="178.084,356.559 178.084,511.997 22.658,511.997 	"
            />
          </g>
          <polygon
            style="fill:#D80027;"
            points="127.724,333.916 0,461.641 0,512 0,512 178.084,333.916 "
          />
          <g>
            <polygon style="fill:#0052B4;" points="105.08,178.087 0,73.007 0,178.087 	" />
            <polygon style="fill:#0052B4;" points="178.087,178.087 0,0 0,50.36 127.727,178.087 	" />
            <polygon style="fill:#0052B4;" points="47.436,0 178.087,130.663 178.087,0 	" />
          </g>
          <polygon style="fill:#F0F0F0;" points="178.087,178.087 0,0 0,50.36 127.727,178.087 " />
          <polygon style="fill:#D80027;" points="178.087,178.087 0,0 0,50.36 127.727,178.087 " />
          <g>
            <polygon style="fill:#0052B4;" points="431.698,178.087 512,97.785 512,178.087 	" />
            <polygon style="fill:#0052B4;" points="333.916,155.441 333.916,0.003 489.342,0.003 	" />
          </g>
          <polygon
            style="fill:#D80027;"
            points="384.276,178.084 512,50.359 512,0 512,0 333.916,178.084 "
          />
        </svg>
      </button>
    </div>
    <!-- view -->

    <vue-page-transition name="fade-in-left">
      <router-view />
    </vue-page-transition>

    <!-- footer -->
    <footer class="sm:px-10 lg:px-10 pt-8 pb-4 border-footer border-paris_daisy bg-black">
      <div class="flex flex-col justify-between">
        <div
          class="flex xs:flex-col lg:flex-row justify-between items-stretch md:pb-5 xs:pb-4 md:pb-20 my-5"
        >
          <div class="flex xs:flex-col sm:flex-row xs:items-center justify-between md:pb-5">
            <!-- logo -->
            <a @click="goHome" class="text-white text-4xl cursor-pointer">Andromedia</a>
            <!-- links -->
            <div class="flex sm:mx-2 mx-8 lg:ml-8">
              <router-link
                :to="'/' + $i18n.locale + '/#portfolio'"
                class="footer-link hover-daisy"
                v-scroll-to="{el: '#portfolio',
         duration: 1100,
         easing: 'ease-in-out'}"
              >{{ $t('links.linkPortfolio') }}</router-link>
              <router-link
                :to="'/' + $i18n.locale + '/#services'"
                class="footer-link hover-daisy"
                v-scroll-to="{el: '#services',
         duration: 1100,
         easing: 'ease-in-out'}"
              >{{ $t('links.linkServices') }}</router-link>

              <router-link
                :to="'/' + $i18n.locale + '/'+ 'contact'"
                class="footer-link hover-daisy"
              >{{ $t('links.linkContacts') }}</router-link>
            </div>
          </div>
          <!-- social -->
          <ul class="list-none xs:mt-2 sm:mx-2 flex xs:self-center sm:self-end">
            <!-- ig -->
            <li class="icons">
              <a href="https://www.instagram.com/andromedia.agency/" target="_blank">
                <svg style="width:28px;height:28px" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                  />
                </svg>
              </a>
            </li>
            <!-- fb -->
            <li class="icons">
              <a href="https://www.facebook.com/andromediakg" target="_blank">
                <svg style="width:28px;height:28px" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                  />target="_blank"
                </svg>
              </a>
            </li>
            <!-- behance -->
            <li class="icons">
              <a href="#" target="_blank">
                <svg style="width:28px;height:28px" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M19.58,12.27C19.54,11.65 19.33,11.18 18.96,10.86C18.59,10.54 18.13,10.38 17.58,10.38C17,10.38 16.5,10.55 16.19,10.89C15.86,11.23 15.65,11.69 15.57,12.27M21.92,12.04C22,12.45 22,13.04 22,13.81H15.5C15.55,14.71 15.85,15.33 16.44,15.69C16.79,15.92 17.22,16.03 17.73,16.03C18.26,16.03 18.69,15.89 19,15.62C19.2,15.47 19.36,15.27 19.5,15H21.88C21.82,15.54 21.53,16.07 21,16.62C20.22,17.5 19.1,17.92 17.66,17.92C16.47,17.92 15.43,17.55 14.5,16.82C13.62,16.09 13.16,14.9 13.16,13.25C13.16,11.7 13.57,10.5 14.39,9.7C15.21,8.87 16.27,8.46 17.58,8.46C18.35,8.46 19.05,8.6 19.67,8.88C20.29,9.16 20.81,9.59 21.21,10.2C21.58,10.73 21.81,11.34 21.92,12.04M9.58,14.07C9.58,13.42 9.31,12.97 8.79,12.73C8.5,12.6 8.08,12.53 7.54,12.5H4.87V15.84H7.5C8.04,15.84 8.46,15.77 8.76,15.62C9.31,15.35 9.58,14.83 9.58,14.07M4.87,10.46H7.5C8.04,10.46 8.5,10.36 8.82,10.15C9.16,9.95 9.32,9.58 9.32,9.06C9.32,8.5 9.1,8.1 8.66,7.91C8.27,7.78 7.78,7.72 7.19,7.72H4.87M11.72,12.42C12.04,12.92 12.2,13.53 12.2,14.24C12.2,15 12,15.64 11.65,16.23C11.41,16.62 11.12,16.94 10.77,17.21C10.37,17.5 9.9,17.72 9.36,17.83C8.82,17.94 8.24,18 7.61,18H2V5.55H8C9.53,5.58 10.6,6 11.23,6.88C11.61,7.41 11.8,8.04 11.8,8.78C11.8,9.54 11.61,10.15 11.23,10.61C11,10.87 10.7,11.11 10.28,11.32C10.91,11.55 11.39,11.92 11.72,12.42M20.06,7.32H15.05V6.07H20.06V7.32Z"
                  />
                </svg>
              </a>
            </li>
            <!-- linkedin -->
            <li class="icons">
              <a href="https://www.linkedin.com/company/andromedia-agency" target="_blank">
                <svg style="width:28px;height:28px" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="flex justify-start">
          <p class="text-sm">© 2019 Andromedia S.L. Reservados todos los derechos.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style >
.nav-icons {
  z-index: 90;
}
body {
  margin: 0;
}
</style>

<script>
export default {
  name: "app",
  computed: {
    flag() {
      return this.$i18n.locale === "ru";
    }
  },
  methods: {
    goHome() {
      if (this.$route.name === "home") {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      } else {
        this.$router.push("/" + this.$i18n.locale + "/");
      }
    },
    changeLocale() {
     
       window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      
      if (this.$i18n.locale === "ru") {
       this.$i18n.locale = 'en';
       console.log(this.$route.path);
       this.$router.replace(this.$route.path.replace(/ru/i, "en"));
        
      } else {
        this.$i18n.locale = 'ru';
       console.log(this.$route.path);
        this.$router.replace(this.$route.path.replace(/en/i, "ru"));

      }
     
    }
  }
};
</script>