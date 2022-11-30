# nextjs intro

[노마드코더 NextJS 시작하기](https://nomadcoders.co/nextjs-fundamentals/lobby) 강의를 보고 작성한 repo 입니다. </br>

### 배운 점
- Next.js redirects 와 rewrites 의 사용법 [Blog](https://lazygay.tistory.com/59)
- router 방법 : as 를 사용하여 사용자에게 노출 없이 데이터를 쿼리로 함께 보내기 가능
```javascript
const onClick = (id, title) => {
  router.push({ pathname: `/movies/${id}`, query: { title } }, `/movies/${id}`);
};
```
- getServerSideProps 를 활용하여 서버에서 페이지를 렌더링하는 방식에 대한 이해
```javascript
export function getServerSideProps({ params: { params } }) { // context 를 인자를 갖고 있는데 거기에 쿼리 파람 정보가 있음.
  console.log("params :>> ", params);
  return {
    props: {
      params,
    },
  };
```
