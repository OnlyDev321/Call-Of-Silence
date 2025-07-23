document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("toggle-music");

  // Bắt buộc có 1 hành động người dùng mới cho phép phát nhạc
  const tryPlay = () => {
    music.play().catch(() => {
      console.log("Chặn autoplay. Cần tương tác.");
    });
  };

  // Chỉ phát nhạc 1 lần đầu khi người dùng click
  document.body.addEventListener("click", tryPlay, { once: true });

  // Bật/Tắt nhạc khi nhấn nút
  toggleBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      toggleBtn.innerText = "🔊 Tắt Nhạc";
    } else {
      music.pause();
      toggleBtn.innerText = "🔈 Bật Nhạc";
    }
  });
});
