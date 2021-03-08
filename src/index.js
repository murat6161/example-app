// 1 - KUllANACAGIMIZ LIBARARY LERI HER ZAMAN IMPORT EDERIZ
import React from 'react'
import ReactDOM from 'react-dom'


// 2 - COMPONENT IN KENDISINI OLUSTURUYORUZ
const App = () => {
  return(
    <div>
      <h1>Hi React</h1>
      <h2>Hi World</h2>
    </div>
  )
}


// 3 - EKRANDA GOSTERIYORUZ // GOSTERILECEK YERE EXPORT ILE GONDERIYORUZ

ReactDOM.render(<App/>, document.querySelector("#root"))

//Eger projenizde npm kullaniyorsaniz her zaman npm kullanin, yarn kullaniyorsaniz yarn kullanin

