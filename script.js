const targetUrl = "https://1wsvyz.com/?open=register&p=vklc";
const landing = document.querySelector("#landing");

landing.addEventListener("click", (event) => {
  // Не перехватываем кнопки управления видео и готовые ссылки.
  if (event.target.closest("video, .video-tile, a")) return;
  window.location.href = targetUrl;
});
