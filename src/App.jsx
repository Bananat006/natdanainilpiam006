import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="https://cts.ssru.ac.th/Image/EN/EnrollmentImage/qjsu4yzz.jpg" />

        <Title title="Natdanai Nilpiam (Nat)">
          <h3>ตำแหน่ง : Graphic Design</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/02/19").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66630723293
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202006@ssru.ac.th</p>
          
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>เป็นคนชอบศิลปะ รักสัตว์ รักธรรมชาติและชอบการทำงานในด้านสายงาน IT Graphic , Logo Model3D และการตัดต่อวิดีโอ</p>
        </Title>

        <Title title="Work Experience">
          <p>•ออกแบบและพัฒนาโปรเจกต์เกม VR นาเกลือร่วมกับชุมชนนาเกลือ จังหวัดสมุทรสงคราม • เข้าร่วมการประกวดออกแบบโลโก้ของกรมป่าไม้ • ออกแบบโลโก้และปั้นโมเดลโปรเจกต์เกม VR นาเกลือ</p>
        </Title>

        <Title title="Skills">
          <p>Adobe illustrator</p>
          <p>Adobe Photoshop</p>
          <p>Autodesk Maya</p>
          <p>Canva</p>
          <p>Unity 3D</p>
        </Title>
      </div>
    </main>
  )
}

export default App
