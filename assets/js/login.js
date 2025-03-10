$(document).ready(function() {
    const USERS_API_URL = "https://your-users-api-url.mockapi.io/users"; // Thay bằng URL mock API của bạn
  
    // Kiểm tra quyền truy cập trang admin
    if (window.location.pathname.includes("admin.html")) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser !== "eldenlord") {
        alert("Bạn không có quyền truy cập trang này!");
        window.location.href = "login.html";
      }
    }
  
    // Xử lý form đăng nhập
    $("#login-form").submit(function(event) {
      event.preventDefault();
      const username = $("#username").val();
      const password = $("#password").val();
  
      if (username === "eldenlord" && password === "eldenring123") {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "admin.html";
      } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    });
  
    // Xử lý form đăng ký
    $("#register-form").submit(function(event) {
      event.preventDefault();
      const username = $("#reg-username").val();
      const password = $("#reg-password").val();
  
      // Gửi yêu cầu POST đến mock API (giả lập)
      $.ajax({
        url: USERS_API_URL,
        method: "POST",
        data: JSON.stringify({ username, password }),
        contentType: "application/json",
        success: function() {
          alert("Đăng ký thành công! Vui lòng đăng nhập.");
          window.location.href = "login.html";
        },
        error: function(err) {
          console.error("Lỗi đăng ký:", err);
          alert("Đăng ký thất bại, vui lòng thử lại!");
        }
      });
    });
  });