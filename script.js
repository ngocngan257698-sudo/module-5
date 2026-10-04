// Tính năng Extra: Điều khiển logic bật/tắt Modal (tương tự chức năng Lightbox)

function openModal() {
    document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Lắng nghe sự kiện click: nếu click ra ngoài vùng nội dung modal thì tự động đóng
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}