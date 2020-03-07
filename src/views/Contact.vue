<template>
  <div class="w-full px-8p xs:px-12 md:px-20 lg:px-32 py-24 mx-auto">
    <div class="mt-20 flex xs:flex-col lg:flex-row">
      <div class="flex flex-col xs:w-full lg:w-1/2 h-full justify-center md:mb-10 xs:mb-4">
        <h1 class="mb-8">Связаться с нами</h1>
        <div class="flex sm:flex-row xl:flex-row mb-4 xs:flex-col">
          <div class="sm:mr-12 md:mr-16 lg:mr-8 xl:mr-12 mb-6">
            <h5 class="text-2xl mb-2 font-medium">Адрес</h5>
            <p class="text-xl">Бишкек, Кыргызстан</p>
          </div>
          <div class="flex flex-col">
            <h5 class="text-2xl mb-1 font-medium">Контакты</h5>
            <div>
              <p class="text-xl leading-loose">
                +996 708 033 501
                <br />+7 701 887 7545
              </p>
              <a
                href="mailto:office@andro.media"
                class="text-xl text-blue-700 hover:text-indigo-900 leading-loose"
              >office@andro.media</a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 lg:w-1/2 xs:w-full lg:pl-4">
        <!-- h-75% -->

        <form action="#" id="contact_us">
          <input
            class="input  border-2 mb-6"
            id="grid-first-name"
            type="text"
            placeholder="Имя и фамилия"
          />
          <!-- if error occurs -->
          <!-- <p class="text-red-700 text-xs italic mb-3">Please fill out this field.</p> -->

          <!-- email  border-red-500-->

          <input
            class="input border-2  mb-6"
            id="grid-email"
            type="email"
            placeholder="E-mail"
          />

          <!-- textarea -->

          <textarea
            class="mb-5 border-2 input"
            rows="7"
            cols="50"
            name="comment"
            form="contact_us"
            placeholder="Немного текста"
          ></textarea>

          <input class="text-gray-300" type="checkbox" name="lol" id="agreement" />
          &nbsp;
          <span
            class="text-black"
          >Нажимая «Отправить», я подтверждаю, что лично ознакомился с Политикой конфиденциальности «Andromedia»</span>&nbsp;
          <!-- if error occurs -->
          <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
        </form>
        <div class="flex justify-end mt-10">
          <button class="submit-btn text-black py-2 px-4 rounded mb-2">Отправить</button>
        </div>
      </div>
    </div>
  </div>
</template>