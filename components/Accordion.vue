<template>
    <div class="accordion " id="accordionExample">
        <div class="accordion-item bg-gray-800">
            <h2 class="accordion-header mb-0" id="headingOne">
                <button class="
                    accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-white text-left
                    bg-gray-800
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne">
                    동아리 가입은 어떻게 하나요?
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-5 text-white">
                    <a class="underline" href="https://zeropage.org/">메인 사이트</a>
                    에 접속하셔서 회원가입 후 인사게시판에 '준회원 신청합니다'라는 제목으로 양식에 맞춰 글을 올리시면 회장단이 1-3일 내에 확인하고, 카카오톡 채팅방에 초대해드리고 있습니다.
                </div>
            </div>
        </div>
        <div class="accordion-item bg-gray-800">
            <h2 class="accordion-header mb-0" id="headingTwo">
                <button class="
                    accordion-button
                    collapsed
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-white text-left
                    bg-gray-800
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">
                    프로그래밍 경험이 없어도 동아리 내에서 활동할 수 있나요?
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-5 text-white">
                    스터디마다 스터디원들에게 요구하는 최소 수준이 있긴 하지만, 다양한 스터디가 존재하니 괜찮습니다. 처음부터 잘하는 사람은 없으니까요.
                    혹은 원하는 스터디나, 본인에게 맞는 스터디가 '없다!'면 축하드립니다. 그 분야에 대해서 가장 잘 아는 사람이군요! 직접 스터디를 만들어보시는 건 어떨까요?
                </div>
            </div>
        </div>
        <div class="accordion-item bg-gray-800">
            <h2 class="accordion-header mb-0" id="headingThree">
                <button class="
                    accordion-button
                    collapsed
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-white text-left
                    bg-gray-800
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">
                    동아리에선 뭘 하나요?
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-5 text-white">
                    제로페이지에서는 매주 수요일마다 정기 모임을 가집니다. 정기 모임에서는 동아리 주요 행사들(데블스캠프, 새싹교실 등)에 대한 공지, 진행상황 보고를 하고 OMS도 같이 진행합니다.
                    OMS는 제로페이지 회원들이 본인의 관심사에 대해 작은 세미나를 여는 것으로 흥미로운 주제들에 대해 10-30분 정도 발표하는 것입니다.
                    <a class="underline" href="https://wiki.zeropage.org/wiki.php">제로페이지 위키</a>에 'oms'라고 검색하시면 자세한 설명이 나오니 한번 읽어보세요!
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.accordion-button:not(.collapsed) {
    color: #ffffff;
    background-color: #1F2937; 
    box-shadow: inset 0 -1px 0 #e5e7eb;
}
</style>
