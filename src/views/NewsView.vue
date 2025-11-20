<script setup>
import NewsCard from '../components/NewsCard.vue'

const newsList = [
  { id: 1, title: '114年度重陽敬老禮金發放通知', date: '2025-10-01', category: '公告', summary: '本年度重陽敬老禮金將於10月15日起開始發放，請符合資格之長輩攜帶身分證及印章至里辦公處領取。' },
  { id: 2, title: '社區環境清潔日活動', date: '2025-09-20', category: '活動', summary: '為維護社區環境整潔，將於本週六舉辦環境清潔日，歡迎各位里民踴躍參加，共同打造美好家園。' },
  { id: 3, title: '免費流感疫苗施打', date: '2025-09-10', category: '衛教', summary: '衛生所將於9月25日上午9點至12點在活動中心提供免費流感疫苗施打服務，請攜帶健保卡。' },
  { id: 4, title: '停水通知', date: '2025-08-30', category: '公告', summary: '自來水公司通知，因管線維修，本里將於9月5日上午8點至下午5點停水，請里民提早儲水備用。' },
]
</script>

<template>
  <div class="container py-5">
    <h2 class="mb-4 text-center fw-bold">最新公告與新聞</h2>
    
    <div class="row mb-4">
      <div class="col-md-8 mx-auto">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="搜尋公告...">
          <button class="btn btn-primary" type="button"><i class="bi bi-search"></i></button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-4" v-for="news in newsList" :key="news.id">
        <NewsCard 
          :title="news.title" 
          :date="news.date" 
          :category="news.category" 
          :summary="news.summary"
          :id="news.id"
        />
      </div>
    </div>

    <nav aria-label="Page navigation" class="mt-4">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">上一頁</a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">下一頁</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
