const yosh = prompt('Yoshingiz nechida?', '');
alert(`Sizning yoshingiz ${yosh}, shundaymi?`);

if (yosh < 3) {
    alert(`Agar sizning yoshingiz ${yosh} bo'lsa saytga kirish man etiladi!`)
} else if (yosh < 6) {
    alert(`Agar sizning yoshingiz ${yosh} bo'lsa bog'chaga boring!`)
} else if (yosh <= 18) {
    alert(`Agar sizning yoshingiz ${yosh} bo'lsa o'qishingiz kerak!`)
} else if (yosh >= 100) {
    alert(`Agar sizning yoshingiz ${yosh} bo'lsa doringizni ichib oling!`)
} else if (yosh > 50) {
    alert(`Agar sizning yoshingiz ${yosh} bo'lsa pensiyaga chiqing!`)
} else if (yosh > 18) {
    alert(`Agar sizning yoshingiz ${yosh} bo'lsa ishlashingiz kerak!`)
} 