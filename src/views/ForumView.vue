<script setup>
import { ref } from 'vue'

const comments = ref([
  { id: 1, author: '陳大明', content: '請問這週六的清潔日需要自備工具嗎？', date: '2025-11-18 10:30' },
  { id: 2, author: '林小美', content: '感謝里長舉辦的中秋晚會，非常熱鬧！', date: '2025-09-18 09:15' },
])

const newComment = ref('')

const addComment = () => {
  if (!newComment.value.trim()) return
  comments.value.unshift({
    id: Date.now(),
    author: '訪客', // Should be current user
    content: newComment.value,
    date: new Date().toLocaleString()
  })
  newComment.value = ''
}
</script>

<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold display-5 mb-3" style="font-family: 'Noto Serif TC', serif;">里民留言板</h2>
      <p class="text-muted">分享生活點滴，交流社區大小事</p>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-8">
        <!-- Comment Form -->
        <div class="card border-0 shadow-sm rounded-3 mb-5">
          <div class="card-body p-4">
            <h5 class="card-title fw-bold mb-4" style="font-family: 'Noto Serif TC', serif;">發表留言</h5>
            <form @submit.prevent="addComment">
              <div class="mb-3">
                <textarea class="form-control bg-light border-0" rows="3" v-model="newComment" placeholder="寫下您的想法..." required></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary rounded-pill px-4 shadow-sm">發佈留言</button>
              </div>
            </form>
          </div>
        </div>

        <!-- Comment List -->
        <div class="d-flex align-items-center mb-4">
          <h5 class="fw-bold mb-0 text-secondary">最新留言 ({{ comments.length }})</h5>
          <div class="ms-3 flex-grow-1 border-bottom"></div>
        </div>
        
        <div class="comment-list">
          <div v-for="comment in comments" :key="comment.id" class="card border-0 shadow-sm rounded-3 mb-3 comment-card">
            <div class="card-body p-4">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex align-items-center">
                  <div class="avatar rounded-circle bg-light text-primary d-flex align-items-center justify-content-center me-3 fw-bold" style="width: 40px; height: 40px;">
                    {{ comment.author[0] }}
                  </div>
                  <h6 class="fw-bold mb-0 text-dark">{{ comment.author }}</h6>
                </div>
                <small class="text-muted font-monospace">{{ comment.date }}</small>
              </div>
              <p class="card-text text-secondary ps-5">{{ comment.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-control:focus {
  box-shadow: none;
  background-color: #fff;
  border: 1px solid var(--primary-color) !important;
}
.comment-card {
  transition: transform 0.2s ease;
}
.comment-card:hover {
  transform: translateX(5px);
}
</style>
