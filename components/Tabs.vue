<template>
    <div class="flex items-start">
        <ul class="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4 " id="tabs-tabVertical" role="tablist">
            <li class="nav-item flex-grow text-center " role="presentation">
                <a href="#tabs-1" class="
                    w-32
                    nav-link
                    block
                    font-medium
                    text-base
                    leading-tight
                    uppercase
                    border-x-0 border-t-0 border-b-2 border-transparent
                    px-6
                    py-3
                    my-2
                    hover:border-transparent hover:bg-gray-800
                    focus:border-transparent
                    active
                    " id="tabs-1-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-1" role="tab"
                    aria-controls="tabs-1" aria-selected="true">새싹교실 & 새싹톤</a>
            </li>
            <li class="nav-item flex-grow text-center" role="presentation">
                <a href="#tabs-2" class="
                    nav-link
                    block
                    font-medium
                    text-base
                    leading-tight
                    uppercase
                    border-x-0 border-t-0 border-b-2 border-transparent
                    px-6
                    py-3
                    my-2
                    hover:border-transparent hover:bg-gray-800
                    focus:border-transparent
                    " id="tabs-2-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-2" role="tab"
                    aria-controls="tabs-2" aria-selected="false">데블스캠프</a>
            </li>
            <li class="nav-item flex-grow text-center" role="presentation">
                <a href="#tabs-3" class="
                    nav-link
                    block
                    font-medium
                    text-base
                    leading-tight
                    uppercase
                    border-x-0 border-t-0 border-b-2 border-transparent
                    px-6
                    py-3
                    my-2
                    hover:border-transparent hover:bg-gray-800
                    focus:border-transparent
                    " id="tabs-3-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-3" role="tab"
                    aria-controls="tabs-3" aria-selected="false">엔젤스캠프</a>
            </li>
            <li class="nav-item flex-grow text-center" role="presentation">
                <a href="#tabs-4" class="
                    nav-link
                    block
                    font-medium
                    text-base
                    leading-tight
                    uppercase
                    border-x-0 border-t-0 border-b-2 border-transparent
                    px-6
                    py-3
                    my-2
                    hover:border-transparent hover:bg-gray-800
                    focus:border-transparent
                    " id="tabs-4-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-4" role="tab"
                    aria-controls="tabs-4" aria-selected="false">지금그때</a>
            </li>
            <li class="nav-item flex-grow text-center" role="presentation">
                <a href="#tabs-5" class="
                    nav-link
                    block
                    font-medium
                    text-base
                    leading-tight
                    uppercase
                    border-x-0 border-t-0 border-b-2 border-transparent
                    px-6
                    py-3
                    my-2
                    hover:border-transparent hover:bg-gray-800
                    focus:border-transparent
                    " id="tabs-5-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-5" role="tab"
                    aria-controls="tabs-5" aria-selected="false">기년회</a>
            </li>
        </ul>
        <div class="tab-content text-white" id="tabs-tabContentVertical">
            <div class="tab-pane fade show active " id="tabs-1" role="tabpanel" aria-labelledby="tabs-1-tabVertical">
                새싹교실은 2005년부터 시작했으며, 선후배간의 학술 교류 및 친목 도모의 행사입니다. 새싹교실 기록의 필수 툴로 자체 Wiki를 사용하며, 기록 회고를 통해 처음 프로그래밍을 접하는 새내기뿐 아니라 새싹 교실의 강사분들도 배움을 얻어가는 자리입니다.   
                보통 「기초컴퓨터프로그래밍」을 수강하는 시기(1학년 1학기)에 실시합니다.   
                새싹교실 이후 기말고사가 끝나면 후속 대회인 새싹톤을 개최하여 그간 배운 내용을 뽐내는 시간을 가집니다.   
            </div>
            <div class="tab-pane fade" id="tabs-2" role="tabpanel" aria-labelledby="tabs-2-tabVertical">
                2002년을 시작으로 매년 여름방학 초에 3~5일간 진행하는 컨퍼런스입니다. ZP회원이 아니어도 참여할 수 있으며, 컴퓨터공학의 기초적인 주제부터 현재 트렌드까지를 강의 내용으로 공유하는 자리입니다.   
                발표자는 ZP에서 현재 활동하는 재학생뿐만 아니라 1기 선배님부터 참석하여 진행해주십니다.
            </div>
            <div class="tab-pane fade" id="tabs-3" role="tabpanel" aria-labelledby="tabs-3-tabVertical">
                ZeroPage 회원이 모여 하루동안 밤새면서 진행하는 해커톤입니다.   
                하룻밤 사이에 완성품을 내는것이 목적이 아니며, 서로 팀플을 해보거나 하고 싶은 것을 밤새도록 해보는 행사입니다.   
                평소 아이디어가 있었으나 바쁘거나, 혹은 어렵다고 미뤄둔 것을 많은 사람들의 도움 아래에서 만들어 볼 수 있습니다.
            </div>
            <div class="tab-pane fade" id="tabs-4" role="tabpanel" aria-labelledby="tabs-4-tabVertical">
                전통을 자랑하는 선후배 이야기 자리인 지금과 그때(지금그때)입니다. 여기서 선후배는 학벌이 아닙니다.   
                신입생 여러분에겐 "1학년"이 지금입니다. 여러분의 지금이 우리의 그때보다 낫기를 바랍니다. 곧 여러분의 지금은 그때가 될 것입니다. 그러면 여러분이 후배의 지금을 위해 자신의 그때 이야기를 나눌 수 있길 바랍니다.   
                지금그때는 단지 고학년이 저학년에게 경험을 나누어주는 행사가 아니라고 생각합니다. 개구리 올챙이적 시절 기억못하듯이, 저학년의 시선을 통해 고학년들도 신선한 질문을 다시 받을 수 있는 자리라고 생각합니다.   
            </div>
            <div class="tab-pane fade" id="tabs-5" role="tabpanel" aria-labelledby="tabs-5-tabVertical">
                한 해를 기억한다는 뜻의 기(記)년회입니다.   
                저녁에 술 약속을 잡는 송년회, 망년회와는 다르게 밝을 때 조용한 곳에서 한 해를 돌아보는 시간을 가집니다.   
            </div>
        </div>
    </div>
</template>
<style scoped>
.nav-tabs .nav-link {
    color: #ffffff;
}

</style>
