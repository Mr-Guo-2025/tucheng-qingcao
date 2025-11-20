<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  type: '',
  description: ''
})

const services = ref([
  { id: 1, icon: 'bi bi-file-earmark-text', title: '里民證明申請', desc: '提供各類里民相關證明文件申請服務。' },
  { id: 2, icon: 'bi bi-life-preserver', title: '急難救助申請', desc: '協助遭遇緊急困難的里民申請救助金。' },
  { id: 3, icon: 'bi bi-truck', title: '大型家具清運', desc: '協調大型廢棄家具的清運事宜。' },
  { id: 4, icon: 'bi bi-tools', title: '設施報修', desc: '路燈、水溝等公共設施損壞報修。' },
  { id: 5, icon: 'bi bi-heart', title: '獨居老人關懷', desc: '定期探訪與關懷獨居長者，提供必要協助。' },
  { id: 6, icon: 'bi bi-lightbulb', title: '意見反應', desc: '收集里民對社區事務的意見與建議。' }
])

const submitForm = () => {
  alert('申請已送出！(此為示範功能)')
  // In real app, call API here
  form.value = { name: '', type: '', description: '' }
}
</script>

<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold display-5 mb-3" style="font-family: 'Noto Serif TC', serif;">里民服務</h2>
      <p class="text-muted">便捷、貼心、即時的服務</p>
    </div>

    <!-- Service Items -->
    <div class="row g-4 mb-5">
      <div class="col-md-4" v-for="service in services" :key="service.id">
        <div class="p-4 bg-white rounded-3 shadow-sm h-100 text-center service-card transition-all">
          <div class="icon-box mb-4 mx-auto bg-light rounded-circle d-flex align-items-center justify-content-center text-primary">
            <i :class="service.icon" class="fs-2"></i>
          </div>
          <h4 class="fw-bold mb-3" style="font-family: 'Noto Serif TC', serif;">{{ service.title }}</h4>
          <p class="text-secondary">{{ service.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Online Application Form -->
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div class="card-header bg-primary text-white p-4 text-center border-0">
            <h4 class="mb-0 fw-bold" style="font-family: 'Noto Serif TC', serif;">線上服務申請</h4>
          </div>
          <div class="card-body p-5 bg-white">
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label for="name" class="form-label fw-bold text-secondary">申請人姓名</label>
                <input type="text" class="form-control form-control-lg bg-light border-0" id="name" v-model="form.name" required placeholder="請輸入您的姓名">
              </div>
              <div class="mb-4">
                <label for="type" class="form-label fw-bold text-secondary">服務類別</label>
                <select class="form-select form-select-lg bg-light border-0" id="type" v-model="form.type" required>
                  <option value="" disabled>請選擇服務項目</option>
                  <option v-for="service in services" :key="service.id" :value="service.title">{{ service.title }}</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              <div class="mb-4">
                <label for="description" class="form-label fw-bold text-secondary">需求說明</label>
                <textarea class="form-control form-control-lg bg-light border-0" id="description" rows="5" v-model="form.description" required placeholder="請詳細描述您的需求..."></textarea>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary btn-lg rounded-pill shadow-sm">送出申請</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-box {
  width: 80px;
  height: 80px;
  transition: all 0.3s ease;
}
.service-card:hover {
  transform: translateY(-5px);
}
.service-card:hover .icon-box {
  background-color: var(--primary-color) !important;
  color: white !important;
}
.transition-all {
  transition: all 0.3s ease;
}
.form-control:focus, .form-select:focus {
  box-shadow: none;
  background-color: #fff;
  border: 1px solid var(--primary-color) !important;
}
</style>
