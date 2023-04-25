function logout() {
    sessionStorage.removeItem('user');
    
    // Redirect to login page
    window.location.href = 'login.html';
  }
  