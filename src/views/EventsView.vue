<script setup>
import { ref } from 'vue'

// 導入圖片
import moonFestivalImg from '@/assets/images/events/moon-festival.jpg'
import walkingImg from '@/assets/images/events/walking.jpg'
import newYearImg from '@/assets/images/events/new-year.jpg'
import mothersDayImg from '@/assets/images/albums/mothers-day.jpg'
import cleaningImg from '@/assets/images/albums/cleaning.jpg'
import healthImg from '@/assets/images/albums/health.jpg'

const events = ref([
  { id: 1, title: '中秋節聯歡晚會', date: '2025-09-17', location: '社區活動中心', image: moonFestivalImg },
  { id: 2, title: '社區健走活動', date: '2025-10-10', location: '社區公園', image: walkingImg },
  { id: 3, title: '春節寫春聯', date: '2026-01-20', location: '里辦公處', image: newYearImg },
])

const albums = ref([
  { id: 1, title: '114年母親節活動', count: 25, cover: mothersDayImg },
  { id: 2, title: '社區環境清潔日', count: 18, cover: cleaningImg },
  { id: 3, title: '長者健康講座', count: 30, cover: healthImg },
])
</script>

<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold display-5 mb-3" style="font-family: 'Noto Serif TC', serif;">社區活動</h2>
      <p class="text-muted">凝聚情感，共創美好回憶</p>
    </div>

    <!-- Upcoming Events -->
    <section class="mb-5 py-4">
      <div class="d-flex align-items-center mb-4">
        <h3 class="fw-bold mb-0" style="font-family: 'Noto Serif TC', serif;">近期活動</h3>
        <div class="ms-3 flex-grow-1 border-bottom"></div>
      </div>
      <div class="row g-4">
        <div class="col-md-4" v-for="event in events" :key="event.id">
          <div class="card h-100 border-0 bg-white shadow-sm event-card">
            <div class="position-relative overflow-hidden rounded-top">
              <img :src="event.image" class="card-img-top transition-transform" :alt="event.title">
              <div class="card-img-overlay d-flex align-items-end p-0">
                <div class="bg-white px-3 py-2 rounded-top-end ms-0 mb-0 shadow-sm">
                  <span class="fw-bold text-primary">{{ event.date }}</span>
                </div>
              </div>
            </div>
            <div class="card-body p-4">
              <h5 class="card-title fw-bold mb-3">{{ event.title }}</h5>
              <p class="card-text text-muted mb-3">
                <i class="bi bi-geo-alt me-2 text-primary"></i>{{ event.location }}
              </p>
              <a href="#" class="btn btn-outline-primary w-100 rounded-pill">活動詳情</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Albums -->
    <section class="py-4">
      <div class="d-flex align-items-center mb-4">
        <h3 class="fw-bold mb-0" style="font-family: 'Noto Serif TC', serif;">活動花絮</h3>
        <div class="ms-3 flex-grow-1 border-bottom"></div>
      </div>
      <div class="row g-4">
        <div class="col-md-4" v-for="album in albums" :key="album.id">
          <div class="card h-100 border-0 shadow-sm album-card overflow-hidden rounded-3">
            <div class="position-relative">
              <img :src="album.cover" class="card-img-top" :alt="album.title">
              <div class="album-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 transition-opacity">
                <span class="text-white border border-white px-4 py-2 rounded-pill">查看相簿</span>
              </div>
              <span class="position-absolute bottom-0 end-0 bg-dark text-white px-3 py-1 m-3 rounded-pill opacity-75 small">
                <i class="bi bi-images me-1"></i>{{ album.count }}
              </span>
            </div>
            <div class="card-body p-3 text-center bg-white">
              <h5 class="card-title mb-0 fw-bold text-dark">{{ album.title }}</h5>
              <a href="#" class="stretched-link"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.event-card:hover .card-img-top {
  transform: scale(1.05);
}
.transition-transform {
  transition: transform 0.5s ease;
}
.album-card:hover .album-overlay {
  opacity: 1;
  background-color: rgba(95, 113, 97, 0.8); /* Primary color with opacity */
}
.transition-opacity {
  transition: all 0.3s ease;
}
</style>
