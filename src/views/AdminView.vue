<script setup>
import { ref } from 'vue'

const activeTab = ref('posts')

const posts = ref([
  { id: 1, title: '114年度重陽敬老禮金發放通知', date: '2025-10-01', category: '公告' },
  { id: 2, title: '社區環境清潔日活動', date: '2025-09-20', category: '活動' },
])

const events = ref([
  { id: 1, title: '中秋節聯歡晚會', date: '2025-09-17', location: '社區活動中心' },
  { id: 2, title: '社區健走活動', date: '2025-10-10', location: '社區公園' },
])

const requests = ref([
  { id: 1, applicant: '王小明', type: '設施報修', desc: '健身房跑步機故障', status: '待處理' },
  { id: 2, applicant: '陳阿姨', type: '活動建議', desc: '希望舉辦烹飪課程', status: '已完成' },
  { id: 3, applicant: '林先生', type: '意見反映', desc: '停車場照明不足', status: '待處理' },
])

const deleteItem = (type, id) => {
  if (confirm('確定要刪除嗎？')) {
    if (type === 'posts') {
      posts.value = posts.value.filter(p => p.id !== id)
    } else if (type === 'events') {
      events.value = events.value.filter(e => e.id !== id)
    }
  }
}
</script>

<template>
  <div class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-5">
      <div>
        <h2 class="fw-bold display-6 mb-1" style="font-family: 'Noto Serif TC', serif;">後台管理系統</h2>
        <p class="text-muted mb-0">歡迎回來，管理員</p>
      </div>
      <button class="btn btn-outline-danger btn-sm rounded-pill px-4">登出</button>
    </div>

    <div class="row">
      <div class="col-md-3 mb-4">
        <div class="list-group shadow-sm border-0 rounded-3 overflow-hidden">
          <button class="list-group-item list-group-item-action border-0 py-3" :class="{ active: activeTab === 'posts' }" @click="activeTab = 'posts'">
            <i class="bi bi-megaphone me-2"></i>公告管理
          </button>
          <button class="list-group-item list-group-item-action border-0 py-3" :class="{ active: activeTab === 'events' }" @click="activeTab = 'events'">
            <i class="bi bi-calendar-event me-2"></i>活動管理
          </button>
          <button class="list-group-item list-group-item-action border-0 py-3" :class="{ active: activeTab === 'services' }" @click="activeTab = 'services'">
            <i class="bi bi-inbox me-2"></i>服務申請
            <span class="badge bg-danger rounded-pill ms-auto">3</span>
          </button>
        </div>
      </div>

      <div class="col-md-9">
        <div class="card border-0 shadow-sm rounded-3">
          <div class="card-body p-4">
            <!-- Posts Management -->
            <div v-if="activeTab === 'posts'">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="fw-bold mb-0" style="font-family: 'Noto Serif TC', serif;">公告列表</h4>
                <button class="btn btn-primary btn-sm rounded-pill px-3"><i class="bi bi-plus-lg me-1"></i>新增公告</button>
              </div>
              <div class="table-responsive">
                <table class="table table-hover align-middle">
                  <thead class="bg-light text-secondary">
                    <tr>
                      <th class="border-0 rounded-start">標題</th>
                      <th class="border-0">日期</th>
                      <th class="border-0">類別</th>
                      <th class="border-0 rounded-end text-end">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="post in posts" :key="post.id">
                      <td class="fw-bold text-dark">{{ post.title }}</td>
                      <td class="text-muted font-monospace small">{{ post.date }}</td>
                      <td><span class="badge bg-light text-secondary border">{{ post.category }}</span></td>
                      <td class="text-end">
                        <button class="btn btn-sm btn-outline-secondary me-2 rounded-circle"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-sm btn-outline-danger rounded-circle" @click="deleteItem('posts', post.id)"><i class="bi bi-trash"></i></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Events Management -->
            <div v-if="activeTab === 'events'">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="fw-bold mb-0" style="font-family: 'Noto Serif TC', serif;">活動列表</h4>
                <button class="btn btn-primary btn-sm rounded-pill px-3"><i class="bi bi-plus-lg me-1"></i>新增活動</button>
              </div>
              <div class="table-responsive">
                <table class="table table-hover align-middle">
                  <thead class="bg-light text-secondary">
                    <tr>
                      <th class="border-0 rounded-start">活動名稱</th>
                      <th class="border-0">日期</th>
                      <th class="border-0">地點</th>
                      <th class="border-0 rounded-end text-end">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="event in events" :key="event.id">
                      <td class="fw-bold text-dark">{{ event.title }}</td>
                      <td class="text-muted font-monospace small">{{ event.date }}</td>
                      <td class="text-secondary">{{ event.location }}</td>
                      <td class="text-end">
                        <button class="btn btn-sm btn-outline-secondary me-2 rounded-circle"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-sm btn-outline-danger rounded-circle" @click="deleteItem('events', event.id)"><i class="bi bi-trash"></i></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Services Management -->
            <div v-if="activeTab === 'services'">
              <h4 class="fw-bold mb-4" style="font-family: 'Noto Serif TC', serif;">服務申請管理</h4>
              <div class="table-responsive">
                <table class="table table-hover align-middle">
                  <thead class="bg-light text-secondary">
                    <tr>
                      <th class="border-0 rounded-start">申請人</th>
                      <th class="border-0">類別</th>
                      <th class="border-0">說明</th>
                      <th class="border-0">狀態</th>
                      <th class="border-0 rounded-end text-end">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="req in requests" :key="req.id">
                      <td class="fw-bold text-dark">{{ req.applicant }}</td>
                      <td><span class="badge bg-light text-primary border border-primary">{{ req.type }}</span></td>
                      <td class="text-truncate text-secondary" style="max-width: 200px;">{{ req.desc }}</td>
                      <td><span class="badge" :class="req.status === '待處理' ? 'bg-warning text-dark' : 'bg-success'">{{ req.status }}</span></td>
                      <td class="text-end">
                        <button class="btn btn-sm btn-outline-success rounded-pill px-3" v-if="req.status === '待處理'" @click="req.status = '已完成'">完成</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-group-item.active {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
.list-group-item {
  color: var(--text-color);
  font-weight: 500;
}
.table th {
  font-weight: 600;
  font-size: 0.9rem;
  padding: 1rem;
}
.table td {
  padding: 1rem;
}
</style>
