<script setup>
// 獲取基礎路徑（用於 GitHub Pages 部署）
const BASE_URL = import.meta.env.BASE_URL
</script>

<template>
  <div class="container py-5">
    <div class="row mb-5 align-items-center">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <div class="ps-lg-4">
          <div class="image-wrapper position-relative">
            <img :src="`${BASE_URL}images/community/chief.png`" alt="里長照片" class="img-fluid rounded-3 shadow-sm">
            <div class="decorative-border"></div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <h2 class="display-5 fw-bold mb-4" style="font-family: 'Noto Serif TC', serif;">里長的話</h2>
        <p class="lead text-muted mb-4">親愛的里民大家好，我是土城青草里里長 [里長姓名]。</p>
        <p class="text-secondary mb-4">青草里是一個充滿人情味的好地方，我們擁有豐富的自然生態與悠久的歷史文化。擔任里長以來，我始終秉持著「服務為本、造福鄉里」的理念，致力於提升里民的生活品質。</p>
        <p class="text-secondary mb-5">未來，我們將持續推動社區營造、加強環境綠化、關懷弱勢族群，並舉辦更多元的社區活動，讓青草里成為一個更溫馨、更宜居的幸福社區。</p>
        <div class="p-4 bg-white rounded-3 shadow-sm border-start border-4 border-primary">
          <p class="mb-2"><strong><i class="bi bi-telephone me-2 text-primary"></i>聯絡電話：</strong>06-123-4567</p>
          <p class="mb-0"><strong><i class="bi bi-geo-alt me-2 text-primary"></i>服務處地址：</strong>台南市安南區...</p>
        </div>
      </div>
    </div>

    <div class="py-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold" style="font-family: 'Noto Serif TC', serif;">社區特色</h2>
        <div class="mx-auto mt-3" style="width: 40px; height: 2px; background-color: var(--primary-color);"></div>
      </div>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="text-center p-4 h-100 bg-white rounded-3 shadow-sm hover-lift transition-all">
            <div class="feature-icon bg-light text-primary rounded-circle mb-4 mx-auto d-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
              <i class="bi bi-tree fs-2"></i>
            </div>
            <h4 class="mb-3 fw-bold" style="font-family: 'Noto Serif TC', serif;">自然生態</h4>
            <p class="text-secondary">擁有豐富的濕地生態與綠地公園，是散步休閒的好去處。</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="text-center p-4 h-100 bg-white rounded-3 shadow-sm hover-lift transition-all">
            <div class="feature-icon bg-light text-primary rounded-circle mb-4 mx-auto d-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
              <i class="bi bi-people fs-2"></i>
            </div>
            <h4 class="mb-3 fw-bold" style="font-family: 'Noto Serif TC', serif;">人文薈萃</h4>
            <p class="text-secondary">定期舉辦廟會活動與藝文展演，傳承在地傳統文化。</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="text-center p-4 h-100 bg-white rounded-3 shadow-sm hover-lift transition-all">
            <div class="feature-icon bg-light text-primary rounded-circle mb-4 mx-auto d-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
              <i class="bi bi-heart fs-2"></i>
            </div>
            <h4 class="mb-3 fw-bold" style="font-family: 'Noto Serif TC', serif;">溫馨互助</h4>
            <p class="text-secondary">設有社區關懷據點與志工隊，守望相助，關懷長者。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-wrapper {
  display: inline-block;
  width: 100%;
}
.image-wrapper img {
  position: relative;
  z-index: 2;
}
.decorative-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid var(--primary-color);
  border-radius: 0.375rem;
  transform: translate(-10px, -10px);
  z-index: 1;
}
.hover-lift:hover {
  transform: translateY(-5px);
}
.transition-all {
  transition: all 0.3s ease;
}
</style>
