<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top shadow-sm" style="background-color: var(--navbar-bg);">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold d-flex align-items-center" to="/">
        <span class="brand-icon me-2"><i class="bi bi-flower1"></i></span>
        <span class="brand-text">土城青草里</span>
      </RouterLink>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">關於我們</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/news">最新公告</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/events">社區活動</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/services">里民服務</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/forum">留言板</RouterLink>
          </li>
          <li class="nav-item ms-lg-3">
            <RouterLink class="btn btn-outline-primary btn-sm rounded-pill px-4" to="/login">登入</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
    padding: 1rem 0;
    transition: all 0.3s ease;
}
.brand-text {
    font-family: 'Noto Serif TC', serif;
    font-size: 1.5rem;
    color: var(--primary-color);
    letter-spacing: 0.1em;
}
.brand-icon {
    color: var(--primary-color);
    font-size: 1.5rem;
}
.nav-link {
    font-weight: 500;
    color: var(--text-color) !important;
    margin: 0 0.5rem;
    position: relative;
    font-family: 'Noto Sans TC', sans-serif;
    letter-spacing: 0.05em;
}
.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: var(--primary-color);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}
.nav-link:hover::after, .nav-link.router-link-active::after {
    width: 80%;
}
.nav-link:hover, .nav-link.router-link-active {
    color: var(--primary-color) !important;
}
</style>
