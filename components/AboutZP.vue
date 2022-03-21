<template>
<div>
    <div class="hidden md:block  max-w-7xl mx-auto px-2">
    <div class=" px-10 flex flex-row justify-between">
      <div class="w-45 h-45">
        <img :src="require(`~/assets/resources/profile/zp-logo.png`)" class="profileimage" />
      </div>
      <div class="w-2/3 pl-10 ">
        <div class=" text-black font-semibold text-lg my-14 keepall"> ◾ 1991년부터 시작된 소프트웨어학부 학술동아리 <br><br>◾ IT 전반에 걸친 다양한 활동과 자유로운 스터디와 프로젝트 <br><br>◾ 새싹교실/새싹톤, 데블스캠프, 엔젤스캠프, 지금그때, 기년회 </div>
      </div>
    </div>
  </div>
  <div class="block md:hidden">
    <div class="my-10 px-5  flex flex-col items-center">
      <div class="w-44 h-44 mb-10 ">
        <img :src="require(`~/assets/resources/profile/zp-logo.png`)" class="smprofileimage" />
      </div>
      <div class="w-4/5 md:w-2/3 mb-10 font-semibold text-sm">
        <div class="mt-5 text-black prose text-base keepall"> ◾ 1991년부터 시작된 소프트웨어학부 학술동아리 <br><br>◾ IT 전반에 걸친 다양한 활동과 자유로운 스터디와 프로젝트 <br><br>◾ 새싹교실/새싹톤, 데블스캠프, 엔젤스캠프, 지금그때, 기년회 </div>
      </div>
  </div>
  </div>
</div>
</template>

<style scoped>
.ibox {
    border-radius: 20%;
}
.profileimage {
    
    width: 300px;
    height: 300px;
    object-fit: cover;
}
.smprofileimage {
    
    width: 200px;
    height: 200px;
    object-fit: cover;
}
.keepall {
    word-break: keep-all;
}
</style>