<template>

    <!-- 모달창 만들기 -->

  <div class = "black-bg" v-if = "모달창열림 == true">
    <!-- v-if 조건식 ! 조건이 참일때에만 모달창 보여주기 -->
    <div class = "white-bg">
      <h4>상세페이지</h4>
      <p>내용</p>
    <button @click="모달창열림 = false">닫기</button>
    </div>
  </div>


  <div class = "menu">
    <!-- <a v-for ="atags in 3" :key = "atags" href="#">Home</a> -->
    <!-- 반복문 만들기 : <태그 v-for="이름 in "반복 횟수" :key ="이름" -->
    <a v-for ="a in menu" :key = "a" href="#">{{a}}</a>
    <!-- <태그 v-for="이름 in "반복 횟수" :key ="이름">{{이름}}</> -->
    <!-- 보관함에 있는 배열 데이터의 갯수만큼 a태그 생성 -->
  </div>



    <!-- 속성은 :속성 = ""
        컨텐츠는 {{}} -->
  <div>
    <img :src="원룸들[0].image" alt="room1" class="room">
    <h4 @click ="모달창열림 = true">{{products[0]}},{{원룸들[0].title}}</h4>
    <!-- 매물 이름을 누르면 true가 되어 모달창이 열리는 코드 짜기!  -->
    <p>{{원룸들[0].price}}원</p>
    <!-- 버튼을 누를때마다 신고 수가 1씩 증가하게 만드는 코드 짜보기 -->
    <button @click="report[0]++">허위매물신고</button> <span>신고 수 : {{report[0]}}</span> 
    <!-- @click 말고도 사용할 수 있는 이벤트
    @mouseover, @change ,@drag , @input 등등... ctr + space로 확인
      -->
  </div>
  <div>
    <img :src="원룸들[2].image" alt="room1" class="room">
    <h4 @click ="모달창열림 = true">{{원룸들[2].title}}</h4>
    <p>{{원룸들[2].price}}원</p>
    <button @click="report[2]++">허위매물신고</button> <span>신고 수 : {{report[2]}}</span> 
  </div>
  <div>
    <img :src="원룸들[3].image" alt="room1" class="room">
    <h4 @click ="모달창열림 = true">{{원룸들[3].title}}</h4>
    <p>{{원룸들[3].price}}원</p>
    <button @click="report[3]++">허위매물신고</button> <span>신고 수 : {{report[3]}}</span> 
  </div>
  <div>
    <img :src="원룸들[4].image" alt="room1" class="room">
    <h4 @click ="모달창열림 = true">{{원룸들[4].title}}</h4>
    <p>{{원룸들[4].price}}원</p>
    <button @click="report[1]++">허위매물신고</button> <span>신고 수 : {{report[1]}}</span> 
  </div>
  <div>
    <img :src="원룸들[5].image" alt="room1" class="room">
    <h4 @click ="모달창열림 = true">{{원룸들[5].title}}</h4>
    <p>{{원룸들[5].price}}원</p>
    <button @click="report[1]++">허위매물신고</button> <span>신고 수 : {{report[1]}}</span> 
  </div>
</template>
<script>
//  코드가 길어지면 함수로 만들어서 템플릿에서 호출해줌

  import data from './assets/data.js'


  export default {
    name: 'App',
    data(){
      // 데이터를 저장하는 공간
      return {
        menu : ['Home','Products','About'],
        products : ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
        report : [0,0,0],
        모달창열림 : false,
        원룸들 : data,
      }
    },
    // 함수를 저장하는 공간
    methods : {
      increase(){
        this.report++
      },
    },
    components: {
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: #44444495;
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
}

.menu {
  background: rgb(84, 78, 114);
}

.menu a { 
  color: #fff;
  padding: 16px;
  text-decoration: none;
}

.room {
  margin-top: 40px;
  width: 300px;
}



</style>
