<template>
  <footer class="py-5 mt-auto" style="background-color: var(--footer-bg); color: var(--text-color);">
    <div class="container">
      <div class="row gy-4">
        <div class="col-md-4">
          <h5 class="mb-3 fw-bold" style="font-family: 'Noto Serif TC', serif; color: var(--primary-color);">土城青草里</h5>
          <p class="text-muted small">溫馨、和諧、自然的幸福社區。<br>致力於打造充滿人文氣息的居住環境。</p>
        </div>
        <div class="col-md-4">
          <h6 class="mb-3 fw-bold text-uppercase ls-1">聯絡我們</h6>
          <ul class="list-unstyled text-muted small">
            <li class="mb-2"><i class="bi bi-geo-alt me-2"></i>台南市安南區...</li>
            <li class="mb-2"><i class="bi bi-telephone me-2"></i>06-123-4567</li>
            <li class="mb-2"><i class="bi bi-envelope me-2"></i>contact@qingcao.tainan</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h6 class="mb-3 fw-bold text-uppercase ls-1">連結</h6>
          <ul class="list-unstyled small">
            <li class="mb-2"><a href="#" class="text-decoration-none text-muted hover-primary">最新公告</a></li>
            <li class="mb-2"><a href="#" class="text-decoration-none text-muted hover-primary">活動花絮</a></li>
            <li class="mb-2"><a href="#" class="text-decoration-none text-muted hover-primary">志工招募</a></li>
          </ul>
        </div>
      </div>
      <div class="border-top border-secondary mt-4 pt-4 text-center">
        <small class="text-muted">&copy; 2025 土城青草里辦公處. All rights reserved.</small>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ls-1 {
  letter-spacing: 0.1em;
}
.hover-primary:hover {
  color: var(--primary-color) !important;
}
</style>
