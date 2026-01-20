export type MenuItem = {
    id: string;
    name: string;
    price: number;
    img: string;
    category: "ข้าวญี่ปุ่น" | "มาม่า" | "ซัมยัง" | "เครื่องดื่ม" | "พิเศษ";
  };
  
  export const MENU: MenuItem[] = [
    // ใส่ตัวอย่างก่อน เดี๋ยวคุณค่อยแก้ชื่อ/ราคาให้ตรงจริงทีหลัง
    
    { id: "1",  name: "ข้าวหน้าแซลมอนซาซิมิเบริร์นไฟลาวา", price: 179, img: "/images/1.png", category: "ข้าวญี่ปุ่น" },
    { id: "2", name: "มาม่าฮอตโคเรียนแซลมอนซาซิมิลาวา", price: 89, img: "/images/2.png", category: "มาม่า" },
    { id: "3", name: "ข้าวหน้าแซลมอนซาซิมิ", price: 169, img: "/images/3.png", category: "ข้าวญี่ปุ่น" },
    { id: "4", name: "ข้าวหน้าแซลมอนซาซิมิเบริร์นไฟ", price: 169, img: "/images/4.png", category: "ข้าวญี่ปุ่น" },
    { id: "5", name: "ข้าวหน้าสลัดแซลมอนไข่กุ้ง", price: 149, img: "/images/5.png", category: "ข้าวญี่ปุ่น" },
    { id: "6", name: "ข้าวหน้าสเต็กแซลมอนเทอริยากิ", price: 179, img: "/images/6.png", category: "ข้าวญี่ปุ่น" },
    { id: "7", name: "ข้าวหน้าสเต็กแซลมอนเทอริยากิไข่กุ้ง", price: 198, img: "/images/7.png", category: "ข้าวญี่ปุ่น" },
    { id: "8", name: "มาม่าฮอตโคเรียนแซลมอนปูอัดไข่กุ้งลาวา", price: 99, img: "/images/8.png", category: "มาม่า" },
    { id: "9", name: "มาม่าฮอตโคเรียนแซลมอนไข่กุ้งลาวา", price: 89, img: "/images/9.png", category: "มาม่า" },
    { id: "10", name: "มาม่าฮอตโคเรียนแซลมอนเบิร์นไฟลาวา", price: 89, img: "/images/10.png", category: "มาม่า" },
    { id: "11", name: "มาม่าไข่เค็มไก่เทอริยากิ", price: 69, img: "/images/11.png", category: "มาม่า" },
    { id: "12", name: "มาม่าคาโบนาร่าแซลมอนไข่กุ้งลาวา", price: 89, img: "/images/12.png", category: "มาม่า" },
    { id: "13", name: "มาม่าคาโบนาร่าแซลมอนเบิร์นไฟลาวา", price: 89, img: "/images/13.png", category: "มาม่า" },
    { id: "14", name: "มาม่าฮอตโคเรียนไข่กุ้งลาวา", price: 79, img: "/images/14.png", category: "มาม่า" },
    { id: "15", name: "มาม่าฮอตโคเรียนปูอัดลาวา", price: 69, img: "/images/15.png", category: "มาม่า" },
    { id: "16", name: "มาม่าฮอตโคเรียนปูอัดไข่กุ้งลาวา", price: 79, img: "/images/16.png", category: "มาม่า" },
    { id: "17", name: "ข้าวหน้าแซลมอนซาซิมิ & เบิร์นไฟลาวา", price: 169, img: "/images/17.png", category: "ข้าวญี่ปุ่น" },
    { id: "18", name: "ข้าวหน้าหมูผัดซอสเทอริยากิ + ไข่ออนเซ็น", price: 99, img: "/images/18.png", category: "ข้าวญี่ปุ่น" },
    { id: "19", name: "ข้าวหน้าไก่เทอริยากิ", price: 79, img: "/images/19.png", category: "ข้าวญี่ปุ่น" },
    { id: "20", name: "ข้าวหน้าไก่เทอริยากิ + ไข่ออนเซ็น", price: 89, img: "/images/20.png", category: "ข้าวญี่ปุ่น" },
    { id: "21", name: "ข้าวหน้าหมู 2 สไตล์ + ไข่ออนเซ็น", price: 99, img: "/images/21.png", category: "ข้าวญี่ปุ่น" },
    { id: "22", name: "มาม่าคาโบนาร่าแซลมอนซาซิมิลาวา", price: 89, img: "/images/22.png", category: "มาม่า" },
    { id: "23", name: "มาม่าฮอตโคเรียนไก่เทอริยากิลาวา", price: 69, img: "/images/23.png", category: "มาม่า" },
    { id: "24", name: "ไข่ออนเซ็น", price: 10, img: "/images/24.png", category: "พิเศษ" },
    { id: "25", name: "ไข่กุ้ง", price: 20, img: "/images/25.png", category: "พิเศษ" },
    { id: "26", name: "ปูอัด 3 แท่ง", price: 15, img: "/images/26.png", category: "พิเศษ" },
    { id: "27", name: "ข้าวญี่ปุ่น", price: 20, img: "/images/27.png", category: "พิเศษ" },
    { id: "28", name: "มาม่าฮอตโคเรียน", price: 20, img: "/images/28.png", category: "พิเศษ" },
    { id: "29", name: "มาม่าคาโบนาร่า", price: 20, img: "/images/29.png", category: "พิเศษ" },
    { id: "30", name: "มาม่าไข่เค็ม", price: 20, img: "/images/30.png", category: "พิเศษ" },
    { id: "31", name: "ซัมยังไก่เผ็ด", price: 60, img: "/images/31.png", category: "พิเศษ" },
    { id: "32", name: "ซัมยังคาโบนาร่า", price: 60, img: "/images/32.png", category: "พิเศษ" },
    { id: "33", name: "ข้าวหน้าหมูโชกุน", price: 99, img: "/images/33.png", category: "ข้าวญี่ปุ่น" },
    { id: "34", name: "มาม่าไข่เค็มแซลมอนซาซิมิลาวา", price: 89, img: "/images/34.png", category: "มาม่า" },
    { id: "35", name: "ข้าวหน้าสลัดแซลมอนปูอัดไข่กุ้ง", price: 159, img: "/images/35.png", category: "ข้าวญี่ปุ่น" },
    { id: "36", name: "ซัมยังไก่เผ็ดแซลมอนซาซิมิ", price: 139, img: "/images/36.png", category: "ซัมยัง" },
    { id: "37", name: "ซัมยังไก่เผ็ดเทอริยากิลาวา ", price: 119, img: "/images/37.png", category: "ซัมยัง" },
    { id: "38", name: "ซัมยังคาโบนาร่าแซลมอนซาซิมิลาวา", price: 139, img: "/images/38.png", category: "ซัมยัง" },
    { id: "39", name: "ข้าวหน้าสลัดแซลมอนปูอัด", price: 149, img: "/images/39.png", category: "ข้าวญี่ปุ่น" },
  ];
  