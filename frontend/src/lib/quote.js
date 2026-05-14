export const Quote = [
  "⌛ Đừng lãng phí thời gian mỗi ngày.",
  "🚀 Hành động nhỏ hôm nay, kết quả lớn ngày mai.",
  "🔥 Kỷ luật đánh bại động lực.",
  "💡 Làm trước khi bạn cảm thấy sẵn sàng.",
  "🎯 Tập trung vào việc quan trọng nhất.",
  "📈 Tiến bộ 1% mỗi ngày.",
  "🧠 Đầu tư vào bản thân là khoản lời nhất.",
  "⚡ Bắt đầu đi, đừng chờ cảm hứng.",
  "🏆 Việc khó mới tạo ra giá trị lớn.",
  "🌱 Kiên nhẫn với quá trình, quyết liệt với mục tiêu.",
];
export const getQuote = () => {
  const time = Date.now() % Quote.length;
  return Quote[time];
};
