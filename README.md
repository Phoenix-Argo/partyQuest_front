# partyQuest_front

party quest VUE클라이언트
## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### 정적공통에셋 = public에 
```
1.조회시 <img src="/img/sample.png"/>
2. vue프로젝트 이용할때 전역 css파일은 전역설정이 필요하지 않은 이상 
작성 하지 않는다. scoped style태그 내에서 처리해야함 -> body{margin-top:20px;}
3. App.vue파일에 직접 
4. components/moleculs/common/newFile.js => 와 같이 컴파일 에러 해결하고 커밋할것
5. components는 Vue file만 모으고 필요한 스크립트는 짧으면 script태그내에서 하거나
    긴 경우 utils에 정의할 것
6. Number type 넘겨 줄 때에는 v-bind나 :prop으로 넘겨 주어야한다.
7. asset quest logo 사진 핏하게 해주기
8. 폰트 bold별로 가져오기
```
