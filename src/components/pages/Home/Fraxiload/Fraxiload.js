import React, { useEffect, useState } from 'react'
import LoadNumber from './LoadNumber'

export default function Fraxload() {

  const CompanyNumber = [
    {
      name: 'gp',
      type: ["017", "013"],
      img: "https://i.ibb.co/SctxQx8/gp.png"
    },
    {
      name: 'tet',
      type: ["015"],
      img: "https://i.ibb.co/Phx1q5P/Teletalk.png"
    },
    {
      name: 'bd',
      type: ["014", "019"],
      img: "https://i.ibb.co/V94ctd5/bd.png"
    },
    {
      name: 'rb',
      type: ["018"],
      img: "https://i.ibb.co/JpFQ652/robi.png"
    },
    {
      name: 'art',
      type: ["016"],
      img: "https://i.ibb.co/tpP9xfr/artel.png"
    },
    {
      name: 'skt',
      type: ["015"],
      img: "https://i.ibb.co/R0ygCQ3/home-icon-strong-network.png"
    }
  ]
  const [number, setNumber] = useState(0)
  const [CompanyLogo, setCompanyLogo] = useState("")
  const FlexiLoad = () => {
    if (number.length == 11) {
      const NumberCheck = number.slice(0, 3)
      if (NumberCheck && "017" || "014" || "013" || "015" || "018" || "019" || "016") {
        const LogoInfo = CompanyNumber.filter(dt => dt.type.includes(NumberCheck))
        if (LogoInfo.length >= 1) {
          setCompanyLogo(LogoInfo[0].img)
        }
      } else {
        alert('Not Alw')
      }
    } else {
      alert('Not Alw')
    }
  }


  return (
    <div>
      {!CompanyLogo && <div>
        <p>FlexiLoad  Number :</p>
        <input type="Number" id="username" name="username" maxLength="11" onChange={(e) => setNumber(e.target.value)} />
        <button onClick={() => FlexiLoad(number)}>Submit </button>
      </div>
      }
      {
        CompanyLogo && <LoadNumber />
      }
    </div>
  )
}
