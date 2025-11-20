<script setup>
import { onMounted, ref, onUnmounted, computed } from 'vue'

const newsCards = ref(null)
const communitySection = ref(null)
const currentPhotoIndex = ref(0)
const isPhotoVisible = ref(true)

// 獲取基礎路徑（用於 GitHub Pages 部署）
const BASE_URL = import.meta.env.BASE_URL

// 社區照片列表（請將您的照片放在 public/images/community/ 資料夾中）
const communityPhotos = computed(() => [
  `${BASE_URL}images/community/photo1.jpg`,
  `${BASE_URL}images/community/photo2.jpg`,
  `${BASE_URL}images/community/photo3.jpg`,
  `${BASE_URL}images/community/photo4.jpg`
])

// 輔助函數：獲取背景圖片樣式
const getBackgroundStyle = (photoUrl) => {
  return { backgroundImage: `url("${photoUrl}")` }
}

let photoInterval = null

const cyclePhotos = () => {
  // 淡出當前照片
  isPhotoVisible.value = false
  
  // 等待淡出完成後切換照片
  setTimeout(() => {
    currentPhotoIndex.value = (currentPhotoIndex.value + 1) % communityPhotos.value.length
    // 淡入新照片
    isPhotoVisible.value = true
  }, 1000) // 1秒淡出時間
}

onMounted(() => {
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, {
    threshold: 0.1
  })

  // Observe elements
  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el)
  })

  // 啟動照片輪播（每 5 秒切換一次：3秒顯示 + 1秒淡出 + 1秒淡入）
  photoInterval = setInterval(cyclePhotos, 5000)
})

onUnmounted(() => {
  // 清除定時器
  if (photoInterval) {
    clearInterval(photoInterval)
  }
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <header class="hero-section d-flex align-items-center position-relative overflow-hidden">
      <!-- Photo Slideshow Background -->
      <div class="photo-slideshow">
        <img 
          v-for="(photo, index) in communityPhotos" 
          :key="index"
          :src="photo"
          class="photo-slide"
          :class="{ 'active': index === currentPhotoIndex && isPhotoVisible }"
          alt="社區照片"
        />
      </div>
      
      <!-- Overlay for better text readability -->
      <div class="hero-overlay"></div>
      
      <div class="container position-relative z-2 text-center">
        <h1 class="display-3 fw-bold mb-3 hero-title fade-in-up" style="animation-delay: 0.2s;">土城青草里</h1>
        <p class="lead mb-5 hero-subtitle fade-in-up" style="animation-delay: 0.4s;">溫馨 · 和諧 · 自然 · 慢活</p>
        <div class="d-flex justify-content-center gap-3 fade-in-up" style="animation-delay: 0.6s;">
          <router-link to="/about" class="btn btn-primary btn-lg px-5 rounded-pill shadow-sm">認識我們</router-link>
          <router-link to="/news" class="btn btn-outline-primary btn-lg px-5 rounded-pill">最新公告</router-link>
        </div>
      </div>
      <!-- Decorative Background Elements -->
      <div class="hero-bg-circle circle-1 floating"></div>
      <div class="hero-bg-circle circle-2 floating-delayed"></div>
    </header>

    <div class="container py-5">
      <!-- Latest News Preview -->
      <section class="mb-5 py-5">
        <div class="text-center mb-5 scroll-animate">
          <h2 class="section-title">最新公告</h2>
          <div class="title-underline mx-auto"></div>
        </div>
        <div class="row g-4">
          <div class="col-md-4 scroll-animate" v-for="i in 3" :key="i" :style="`animation-delay: ${i * 0.1}s`">
            <div class="card h-100 border-0 bg-transparent">
              <div class="card-body p-4 bg-white shadow-sm rounded-3 position-relative overflow-hidden news-card-hover">
                <div class="news-date mb-3 text-muted small font-monospace">2025.11.19</div>
                <h5 class="card-title fw-bold mb-3">社區公告標題範例 {{ i }}</h5>
                <p class="card-text text-secondary mb-4">這是一則公告的簡短摘要，讓里民可以快速了解內容...</p>
                <router-link to="/news" class="stretched-link text-decoration-none text-primary small fw-bold letter-spacing-1">READ MORE <i class="bi bi-arrow-right ms-1"></i></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-5 scroll-animate" style="animation-delay: 0.4s;">
          <router-link to="/news" class="btn btn-outline-secondary rounded-pill px-4">查看所有公告</router-link>
        </div>
      </section>

      <!-- Community Intro -->
      <section class="row align-items-center py-5 my-5 scroll-animate">
        <div class="col-md-6 order-md-2 mb-4 mb-md-0">
          <div class="ps-md-5">
            <div class="image-wrapper-home position-relative">
              <img :src="`${BASE_URL}images/community/about.jpg`" alt="社區簡介" class="img-fluid rounded-3 shadow-sm">
              <div class="decorative-bg"></div>
            </div>
          </div>
        </div>
        <div class="col-md-6 order-md-1">
          <h2 class="mb-4 section-title text-start">關於青草里</h2>
          <p class="lead text-muted mb-4">我們致力於打造一個充滿人情味與自然生態共存的優質居住環境。</p>
          <p class="text-secondary mb-4">土城青草里位於台南市安南區，擁有豐富的自然資源與純樸的民風。我們定期舉辦各類社區活動，凝聚里民情感，並提供完善的里民服務。</p>
          <router-link to="/about" class="btn btn-link text-primary text-decoration-none p-0 fw-bold border-bottom border-primary">深入了解 <i class="bi bi-arrow-right"></i></router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* Hero Section Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floating {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.floating {
  animation: floating 6s ease-in-out infinite;
}

.floating-delayed {
  animation: floating 6s ease-in-out infinite;
  animation-delay: 1s;
}

/* Scroll Animations */
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-animate.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Hero Section Styles */
.hero-section {
  height: 80vh;
  min-height: 500px;
  background-color: var(--background-color);
  position: relative;
}

/* Photo Slideshow */
.photo-slideshow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.photo-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.photo-slide.active {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(246, 244, 240, 0.85) 0%,
    rgba(246, 244, 240, 0.75) 50%,
    rgba(246, 244, 240, 0.85) 100%
  );
  z-index: 1;
}

.hero-title {
  font-family: 'Noto Serif TC', serif;
  color: var(--primary-color);
  letter-spacing: 0.2em;
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.5);
}
.hero-subtitle {
  font-family: 'Noto Sans TC', sans-serif;
  color: var(--secondary-color);
  letter-spacing: 0.5em;
  font-weight: 300;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
}
.hero-bg-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.08;
  z-index: 1;
}
.circle-1 {
  width: 500px;
  height: 500px;
  background-color: var(--primary-color);
  top: -100px;
  right: -100px;
}
.circle-2 {
  width: 300px;
  height: 300px;
  background-color: var(--accent-color);
  bottom: 50px;
  left: -50px;
}

/* Section Styles */
.section-title {
  font-family: 'Noto Serif TC', serif;
  letter-spacing: 0.1em;
}
.title-underline {
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
  margin-top: 1rem;
  animation: expandWidth 0.8s ease-out forwards;
  transform-origin: center;
}

@keyframes expandWidth {
  from {
    width: 0;
  }
  to {
    width: 50px;
  }
}

/* Card Animations */
.news-card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.news-card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(95, 113, 97, 0.15) !important;
}

.letter-spacing-1 {
  letter-spacing: 0.1em;
}

/* Image Wrapper Styles */
.image-wrapper-home {
  display: inline-block;
  width: 100%;
}
.image-wrapper-home img {
  position: relative;
  z-index: 2;
  transition: transform 0.5s ease;
}
.scroll-animate.animate-in .image-wrapper-home img {
  transform: scale(1.02);
}
.decorative-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  opacity: 0.1;
  border-radius: 0.375rem;
  transform: translate(-15px, 15px);
  z-index: 1;
  transition: transform 0.5s ease;
}
.scroll-animate.animate-in .decorative-bg {
  transform: translate(-20px, 20px);
}

/* Button Animations */
.btn {
  transition: all 0.3s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(95, 113, 97, 0.3);
}
.btn-outline-primary:hover {
  transform: translateY(-2px);
}
</style>
