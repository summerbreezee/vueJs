<template>
  <div id="app">
    <h3>book list</h3>

<!--
    <ul>
      <li v-for="item in books" v-bind:key="item.id"> {{item.title}} </li>
    </ul>
-->
  <table>
    <thead>
      <tr>
        <th>도서번호</th>
        <th>도서이름</th>
        <th>출판사</th>
        <th>저자</th>
        <th>재고량</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in books" v-bind:key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.title}}</td>
        <td>{{item.publisher}}</td>
        <td>{{item.author}}</td>
        <td>{{item.stock}}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      books : [
        {id:1, title:'정의란 무엇인가', publisher:'비즈니스북스', author:'존 맥스웰',  stock:2},
        {id:2, title:'인간실격', publisher:'비즈니스북스', author:'다자이 오사무',  stock:15},
        {id:3, title:'우리가 빛의 속도로 갈 수 없다면', publisher:'비즈니스북스', author:'김초엽',  stock:1},
        {id:4, title:'말그릇', publisher:'비즈니스북스', author:'김윤나',  stock:8},
      ]
    }
  }
}
</script>
<style media="screen">
  table {
    width:100%;
    border-collapse: collapse;
  }
  tr:nth-of-type(odd) {
    background: #eee;
  }
  th {
    background: #333;
    color: white;
    font-weight: bold;
  }
  td, th {
    padding: 6px;
    border: 1px solid #ccc;
    text-align: left;
  }
</style>
