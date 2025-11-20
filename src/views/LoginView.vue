<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLogin = ref(true)
const form = ref({
  username: '',
  password: '',
  name: '',
  email: '',
  phone: '',
  address: ''
})

const toggleMode = () => {
  isLogin.value = !isLogin.value
  form.value = { username: '', password: '', name: '', email: '', phone: '', address: '' }
}

const handleSubmit = () => {
  if (isLogin.value) {
    // Login logic
    console.log('Logging in with', form.value.email)
    // Simulate successful login
    localStorage.setItem('token', 'mock-token')
    router.push('/')
  } else {
    // Register logic
    console.log('Registering', form.value)
    alert('註冊成功！請登入。')
    toggleMode()
  }
}
</script>

<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="card-header bg-white border-0 text-center pt-5 pb-0">
            <h3 class="fw-bold mb-1" style="font-family: 'Noto Serif TC', serif; color: var(--primary-color);">
              {{ isLogin ? '歡迎回來' : '加入我們' }}
            </h3>
            <p class="text-muted small">{{ isLogin ? '請登入您的帳號' : '建立您的社區帳號' }}</p>
          </div>
          <div class="card-body p-5">
            <form @submit.prevent="handleSubmit">
              <div class="mb-4">
                <label for="email" class="form-label text-secondary fw-bold small">電子郵件</label>
                <input type="email" class="form-control bg-light border-0" id="email" v-model="form.email" required placeholder="name@example.com">
              </div>
              <div class="mb-4">
                <label for="password" class="form-label text-secondary fw-bold small">密碼</label>
                <input type="password" class="form-control bg-light border-0" id="password" v-model="form.password" required placeholder="請輸入密碼">
              </div>
              
              <div v-if="!isLogin" class="mb-4">
                <label for="name" class="form-label text-secondary fw-bold small">姓名</label>
                <input type="text" class="form-control bg-light border-0" id="name" v-model="form.name" required placeholder="您的真實姓名">
              </div>

              <div class="d-grid gap-2 mt-5">
                <button type="submit" class="btn btn-primary btn-lg rounded-pill shadow-sm fw-bold">
                  {{ isLogin ? '登入' : '註冊' }}
                </button>
              </div>
            </form>

            <div class="text-center mt-4">
              <p class="text-muted small mb-0">
                {{ isLogin ? '還沒有帳號嗎？' : '已經有帳號了？' }}
                <a href="#" @click.prevent="toggleMode" class="text-primary fw-bold text-decoration-none ms-1">
                  {{ isLogin ? '立即註冊' : '前往登入' }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-control {
  padding: 0.75rem 1rem;
}
.form-control:focus {
  box-shadow: none;
  background-color: #fff;
  border: 1px solid var(--primary-color) !important;
}
</style>
