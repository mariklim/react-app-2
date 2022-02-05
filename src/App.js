
import './App.css';
import Test from './Test';
import Header from './Header/Header';
import Goods from './Goods'

const HeaderData = {
  site_name : "my React site",
  nav: [
    {"link" : "link1", "text" : "my link 1"},
    {"link" : "link2", "text" : "my link 2"},
    {"link" : "link3", "text" : "my link 3"},
    {"link" : "link4", "text" : "my link 4"},
  ]
}

const goodsArr = [
  {"title" : "apple",
    "price" : "1$",
    "img" : "https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-256.png"
  },
  {
    "title": "orange",
    "price" : "2$",
    "img": "https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Juicy-256.png"
  },
  {
    "title": "kiwi",
    "price":"3$",
    "img": "https://cdn4.iconfinder.com/data/icons/Freshy/PNG/256/Kiwi.png"
  }
];


function App() {
  return (
   <div>
     <Header data={HeaderData} />
     {/* <Header sitename="React Props" /> */}


    {/* props per il componente Goods*/}
   {goodsArr.map(item => <Goods title={item.title} price={item.price} img={item.img}/>)}
   </div>
  );
}

export default App;
