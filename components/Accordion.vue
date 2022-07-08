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
                    대답 1
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
                    대답 2
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
                    질문 3
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-5 text-white">
                    대답 3
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