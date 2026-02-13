// ============================================
// Dashboard JavaScript
// ============================================

// Sample Dashboard Data
const dashboardData = {
  stats: {
    totalBookings: 247,
    activePackages: 12,
    totalRevenue: 98750,
    totalUsers: 589
  },
  recentBookings: [
    { id: 'BK-001', customer: 'John Smith', date: '2024-12-15', time: '10:00 AM', duration: '30 min', status: 'confirmed' },
    { id: 'BK-002', customer: 'Sarah Johnson', date: '2024-12-15', time: '11:30 AM', duration: '60 min', status: 'pending' },
    { id: 'BK-003', customer: 'Mike Davis', date: '2024-12-16', time: '2:00 PM', duration: '30 min', status: 'completed' },
    { id: 'BK-004', customer: 'Emily Brown', date: '2024-12-16', time: '3:30 PM', duration: '45 min', status: 'confirmed' },
    { id: 'BK-005', customer: 'David Wilson', date: '2024-12-17', time: '9:00 AM', duration: '60 min', status: 'pending' }
  ],
  videos: [
    { id: 'VID-001', title: 'Safety Briefing - Beginner', category: 'Safety', duration: '5:30', views: 1240, status: 'active' },
    { id: 'VID-002', title: 'Body Position Basics', category: 'Training', duration: '8:15', views: 980, status: 'active' },
    { id: 'VID-003', title: 'Advanced Maneuvers', category: 'Advanced', duration: '12:40', views: 654, status: 'active' },
    { id: 'VID-004', title: 'Group Flight Tips', category: 'Training', duration: '6:20', views: 432, status: 'inactive' }
  ],
  packages: [
    { id: 'PKG-001', name: 'First Flight Experience', price: 79, bookings: 45, status: 'active', featured: true },
    { id: 'PKG-002', name: 'Training Package (5 flights)', price: 299, bookings: 28, status: 'active', featured: true },
    { id: 'PKG-003', name: 'Pro Package (10 flights)', price: 499, bookings: 15, status: 'active', featured: false },
    { id: 'PKG-004', name: 'Group Experience (5 people)', price: 350, bookings: 12, status: 'active', featured: false },
    { id: 'PKG-005', name: 'Corporate Package', price: 1200, bookings: 8, status: 'inactive', featured: false }
  ],
  users: [
    { id: 'USR-001', name: 'John Smith', email: 'john@example.com', joined: '2024-01-15', bookings: 5, status: 'active' },
    { id: 'USR-002', name: 'Sarah Johnson', email: 'sarah@example.com', joined: '2024-02-20', bookings: 3, status: 'active' },
    { id: 'USR-003', name: 'Mike Davis', email: 'mike@example.com', joined: '2024-03-10', bookings: 8, status: 'active' },
    { id: 'USR-004', name: 'Emily Brown', email: 'emily@example.com', joined: '2024-04-05', bookings: 2, status: 'inactive' }
  ],
  messages: [
    { id: 'MSG-001', name: 'Alex Turner', email: 'alex@example.com', subject: 'Group booking inquiry', date: '2024-12-10', status: 'unread' },
    { id: 'MSG-002', name: 'Lisa Chen', email: 'lisa@example.com', subject: 'Age requirements', date: '2024-12-09', status: 'read' },
    { id: 'MSG-003', name: 'Tom Wilson', email: 'tom@example.com', subject: 'Corporate package details', date: '2024-12-08', status: 'read' }
  ]
};

// Sidebar Toggle
function initSidebarToggle() {
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.dashboard-sidebar');
  const mainContent = document.querySelector('.dashboard-main');
  
  // Create overlay if it doesn't exist
  let overlay = document.querySelector('.dashboard-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'dashboard-overlay';
    document.body.appendChild(overlay);
    
    // Add styles for overlay dynamically
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '1000';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    overlay.style.transition = 'all 0.3s ease';
  }

  if (sidebarToggle && sidebar) {
    function toggleSidebar() {
      sidebar.classList.toggle('active');
      if (mainContent) {
        mainContent.classList.toggle('active');
      }
      
      // Toggle Overlay
      if (sidebar.classList.contains('active')) {
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
      } else {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
      }
    }

    sidebarToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSidebar();
    });

    // Close when clicking overlay
    overlay.addEventListener('click', () => {
      if (sidebar.classList.contains('active')) {
        toggleSidebar();
      }
    });

    // Close when clicking a link in sidebar (mobile only)
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && sidebar.classList.contains('active')) {
          toggleSidebar();
        }
      });
    });
  }
}

// Render Dashboard Stats
function renderDashboardStats() {
  const statsContainer = document.getElementById('dashboard-stats');
  if (!statsContainer) return;
  
  const stats = [
    { label: 'Total Bookings', value: dashboardData.stats.totalBookings, icon: '📅', color: '#0066FF' },
    { label: 'Active Packages', value: dashboardData.stats.activePackages, icon: '📦', color: '#FF6B35' },
    { label: 'Total Revenue', value: `$${dashboardData.stats.totalRevenue.toLocaleString()}`, icon: '💰', color: '#10B981' },
    { label: 'Total Users', value: dashboardData.stats.totalUsers, icon: '👥', color: '#F59E0B' }
  ];
  
  statsContainer.innerHTML = stats.map(stat => `
    <div class="stat-card" style="border-left: 4px solid ${stat.color}">
      <div class="stat-icon" style="background: ${stat.color}20; color: ${stat.color}">${stat.icon}</div>
      <div class="stat-content">
        <p class="stat-label">${stat.label}</p>
        <h2 class="stat-value">${stat.value}</h2>
      </div>
    </div>
  `).join('');
}

// Render Bookings Table
function renderBookingsTable() {
  const tableBody = document.getElementById('bookings-table-body');
  if (!tableBody) return;
  
  tableBody.innerHTML = dashboardData.recentBookings.map(booking => `
    <tr>
      <td><strong>${booking.id}</strong></td>
      <td>${booking.customer}</td>
      <td>${booking.date}</td>
      <td>${booking.time}</td>
      <td>${booking.duration}</td>
      <td><span class="badge badge-${booking.status}">${booking.status}</span></td>
      <td>
        <button class="btn-icon" title="View"><i class="fas fa-eye"></i></button>
        <button class="btn-icon" title="Edit"><i class="fas fa-edit"></i></button>
      </td>
    </tr>
  `).join('');
}

// Render Videos Table
function renderVideosTable() {
  const tableBody = document.getElementById('videos-table-body');
  if (!tableBody) return;
  
  tableBody.innerHTML = dashboardData.videos.map(video => `
    <tr>
      <td><strong>${video.id}</strong></td>
      <td>${video.title}</td>
      <td><span class="badge badge-primary">${video.category}</span></td>
      <td>${video.duration}</td>
      <td>${video.views}</td>
      <td><span class="badge badge-${video.status === 'active' ? 'success' : 'warning'}">${video.status}</span></td>
      <td>
        <button class="btn-icon" title="Edit"><i class="fas fa-edit"></i></button>
        <button class="btn-icon" title="Delete"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join('');
}

// Render Packages Table
function renderPackagesTable() {
  const tableBody = document.getElementById('packages-table-body');
  if (!tableBody) return;
  
  tableBody.innerHTML = dashboardData.packages.map(pkg => `
    <tr>
      <td><strong>${pkg.id}</strong></td>
      <td>${pkg.name}</td>
      <td>$${pkg.price}</td>
      <td>${pkg.bookings}</td>
      <td>${pkg.featured ? '<span class="badge badge-warning">Featured</span>' : ''}</td>
      <td><span class="badge badge-${pkg.status === 'active' ? 'success' : 'error'}">${pkg.status}</span></td>
      <td>
        <button class="btn-icon" title="Edit"><i class="fas fa-edit"></i></button>
        <button class="btn-icon" title="Toggle"><i class="fas fa-toggle-on"></i></button>
      </td>
    </tr>
  `).join('');
}

// Render Users Table
function renderUsersTable() {
  const tableBody = document.getElementById('users-table-body');
  if (!tableBody) return;
  
  tableBody.innerHTML = dashboardData.users.map(user => `
    <tr>
      <td><strong>${user.id}</strong></td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.joined}</td>
      <td>${user.bookings}</td>
      <td><span class="badge badge-${user.status === 'active' ? 'success' : 'error'}">${user.status}</span></td>
      <td>
        <button class="btn-icon" title="View Profile"><i class="fas fa-user"></i></button>
        <button class="btn-icon" title="View Bookings"><i class="fas fa-list"></i></button>
      </td>
    </tr>
  `).join('');
}

// Render Messages Table
function renderMessagesTable() {
  const tableBody = document.getElementById('messages-table-body');
  if (!tableBody) return;
  
  tableBody.innerHTML = dashboardData.messages.map(msg => `
    <tr class="${msg.status === 'unread' ? 'unread-message' : ''}">
      <td><strong>${msg.id}</strong></td>
      <td>${msg.name}</td>
      <td>${msg.email}</td>
      <td>${msg.subject}</td>
      <td>${msg.date}</td>
      <td><span class="badge badge-${msg.status === 'unread' ? 'warning' : 'success'}">${msg.status}</span></td>
      <td>
        <button class="btn-icon" title="View"><i class="fas fa-envelope-open"></i></button>
        <button class="btn-icon" title="Reply"><i class="fas fa-reply"></i></button>
      </td>
    </tr>
  `).join('');
}

// Table Search/Filter
function initTableFilter() {
  const searchInputs = document.querySelectorAll('[data-table-search]');
  
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const tableId = input.getAttribute('data-table-search');
      const table = document.getElementById(tableId);
      
      if (table) {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
          const text = row.textContent.toLowerCase();
          row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
      }
    });
  });
}

// Status Toggle
function initStatusToggle() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-icon[title="Toggle"]')) {
      const row = e.target.closest('tr');
      const badge = row.querySelector('.badge');
      
      if (badge.classList.contains('badge-success')) {
        badge.classList.remove('badge-success');
        badge.classList.add('badge-error');
        badge.textContent = 'inactive';
        showNotification('Status updated to inactive', 'info');
      } else {
        badge.classList.remove('badge-error');
        badge.classList.add('badge-success');
        badge.textContent = 'active';
        showNotification('Status updated to active', 'success');
      }
    }
  });
}

// File Upload Preview
function initFileUpload() {
  const fileInputs = document.querySelectorAll('input[type="file"]');
  
  fileInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        showNotification(`File selected: ${file.name}`, 'success');
      }
    });
  });
}

// Add Dashboard Specific Styles
const dashboardStyles = document.createElement('style');
dashboardStyles.textContent = `
  .stat-card {
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    transition: var(--transition-base);
  }
  
  .stat-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
  
  .stat-icon {
    width: 48px;
    height: 48px;
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
  
  .stat-content {
    flex: 1;
  }
  
  .stat-label {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    margin: 0;
  }
  
  .stat-value {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-text);
  }
  
  .btn-icon {
    background: none;
    border: none;
    color: var(--color-text-muted);
    cursor: pointer;
    padding: 0.5rem;
    transition: var(--transition-fast);
  }
  
  .btn-icon:hover {
    color: var(--color-primary);
  }
  
  .badge-confirmed { background: rgba(16, 185, 129, 0.1); color: #10B981; }
  .badge-pending { background: rgba(245, 158, 11, 0.1); color: #F59E0B; }
  .badge-completed { background: rgba(59, 130, 246, 0.1); color: #3B82F6; }
  
  .unread-message {
    background: rgba(0, 102, 255, 0.03);
    font-weight: 500;
  }
`;
document.head.appendChild(dashboardStyles);

// Logout Functionality
function initLogout() {
  // Inject Modal HTML
  const modalHtml = `
    <div class="modal fade" id="logoutModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="border: 1px solid var(--color-border); background: var(--color-background);">
          <div class="modal-header" style="border-bottom: 1px solid var(--color-border);">
            <h5 class="modal-title" style="color: var(--color-text);">Confirm Logout</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="filter: var(--color-text) == '#F1F5F9' ? 'invert(1)' : 'none'"></button>
          </div>
          <div class="modal-body">
            <p style="color: var(--color-text);">Are you sure you want to logout?</p>
          </div>
          <div class="modal-footer" style="border-top: 1px solid var(--color-border);">
            <button type="button" class="btn btn-outline" data-bs-dismiss="modal">Cancel</button>
            <a href="../login.html" class="btn btn-danger" style="background: var(--color-error); border: none; color: white;">Yes, Logout</a>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Attach Event Listener
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Check if bootstrap is available
      if (typeof bootstrap !== 'undefined') {
        const logoutModal = new bootstrap.Modal(document.getElementById('logoutModal'));
        logoutModal.show();
      } else {
        // Fallback if bootstrap JS isn't loaded (though it should be)
        if (confirm('Are you sure you want to logout?')) {
          window.location.href = '../login.html';
        }
      }
    });
  }
}

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
  initSidebarToggle();
  renderDashboardStats();
  renderBookingsTable();
  renderVideosTable();
  renderPackagesTable();
  renderUsersTable();
  renderMessagesTable();
  initTableFilter();
  initStatusToggle();
  initFileUpload();
  initLogout();
});
