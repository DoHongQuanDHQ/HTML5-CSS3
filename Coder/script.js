// Tự động thêm lớp 'active' cho menu đang được chọn
let navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});
