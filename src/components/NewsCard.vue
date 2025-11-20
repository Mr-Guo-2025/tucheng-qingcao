<script setup>
defineProps({
  title: String,
  date: String,
  category: String,
  summary: String
})
</script>

<template>
  <div class="card h-100 news-card border-0 bg-white shadow-sm">
    <div class="card-body p-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="badge bg-light text-primary border border-primary rounded-pill px-3 fw-normal">{{ category }}</span>
        <small class="text-muted font-monospace">{{ date }}</small>
      </div>
      <h5 class="card-title fw-bold mb-3" style="font-family: 'Noto Serif TC', serif;">{{ title }}</h5>
      <p class="card-text text-secondary mb-4">{{ summary }}</p>
      <a href="#" class="stretched-link text-decoration-none text-primary small fw-bold letter-spacing-1">閱讀更多 <i class="bi bi-arrow-right ms-1"></i></a>
    </div>
  </div>
</template>

<style scoped>
.news-card {
  transition: all 0.3s ease;
}
.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
}
.letter-spacing-1 {
  letter-spacing: 0.1em;
}
</style>
