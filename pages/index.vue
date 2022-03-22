<template>
  <div class="w-full z-0 bg-img section h-content" style="background-image: url(bg-img3.jpg)">
    <Header />
    <div class="mx-auto max-w-7xl px-6 md:px-10">
        <div class="text-black text-4xl md:text-6xl pt-40 md:pt-72 mb-4 font-semibold drop-shadow-md">This is ZeroPage</div>
        <div class="text-gray-500 font-semibold md:text-2xl mb-20 pb-20 md:mb-36 md:pb-16 drop-shadow">중앙대학교 소프트웨어학부 학술동아리</div>

        <div class="text-3xl md:text-4xl text-black md:pt-12 mb-5 md:mb-2 font-semibold">What is ZP ?</div>
        <div class="text-gray-600 font-semibold md:text-xl mb-20 md:mb-10 md:pb-2 drop-shadow">인력의 장 ZeroPage를 소개합니다.</div>
        <AboutZP />

        <div class="text-3xl md:text-4xl text-black md:pt-20 md:mt-8 mb-5 pt-10 md:mb-2 font-semibold">What does ZP do ?</div>
        <div class="text-gray-600 font-semibold md:text-xl mb-20 md:mb-10 md:pb-4 drop-shadow">ZeroPage의 활동들을 소개합니다.</div>
        <!-- Latest update -->
        <vue-timeline-update
          :date="Date('2021-11-22')"
          title="Test 1"
          description="ZeroPage Portal Page"
          thumbnail="TestImage.jpg"
          icon="code"
          color="black"
        />

        <!-- Another update -->
        <vue-timeline-update
          :date="Date('2021-11-22')"
          title="Test 2"
          description="ZeroPage Portal Page"
          thumbnail="TestImage.jpg"
          icon="code"
          color="black"
        />

        <!-- Yet another update -->
        <vue-timeline-update
          :date="Date('2021-11-22')"
          title="Test 3"
          description="ZeroPage Portal Page"
          thumbnail="TestImage.jpg"
          icon="code"
          color="black"
          is-last
        />
    </div>
    <Footer />
  </div>
</template>

<script>

</script>

<style scoped>
.bg-img {
        background-position: center;
        background-repeat:  no-repeat;
        background-size:  cover;
        background-color: #FFFFFF;
 }
 .section {
  position: relative;
}
</style>
