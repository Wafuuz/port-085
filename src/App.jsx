import moment from 'moment';
import { useState } from 'react';
import './App.css';
import { ImageProfile } from './components/ImageProfile';
import { Title } from './components/Title';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="https://cdn.discordapp.com/attachments/823620925403562056/1220064974747992064/toto.png?ex=660d950d&is=65fb200d&hm=38f5f13cc15678b998d133cf65e68c71073193e37eeb80ef446c8181951c3178&" />

        <Title title="พสธร ตรีสุริยา">
          
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/08/05").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : 0837883858
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : Phosathorn@gmail.com</p>
          
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>ชื่อพสธร ตรีสุริยา ชื่อเล่นโตโต้ อายุ 21 ปี พร้อมเรียนรู้งานใหม่ๆเสมอ พร้อมรับฟังคำแนะนำ</p>
        </Title>

        <Title title="Work Experience">
          <p><p>สร้างเว็บโดยใช้ Wordpress</p> 
          <p>สร้างเว็บโดยใช้ HTML,CSS</p>
          <p>สร้างเว็บเกี่ยวกับE-Commerce</p></p>
        </Title>

        <Title title="Skills">
          <p>Adobe Photoshop</p>
          <p>Adobe Premierpro</p>
          <p>Wordpress</p>
          
        </Title>
      </div>
    </main>
  )
}

export default App
