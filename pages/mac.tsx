import Link from "next/link"
export default function mac() {
  return (
    <>
    <div className='navbar'>
      <Link href='#' className="logo">dp.uz</Link>
      <div className="navs">
        <Link href="/" className="nav-link">Store</Link>
        <Link href="/iphone" className="nav-link">Iphone</Link>
        <Link href="/mac" className="nav-link">Mac</Link>
        <Link href="/ipad" className="nav-link">Ipad</Link>
        <Link href="/accessories" className="nav-link">Accessories</Link>
      </div>
    </div>
    <div className="title_container">
        <h3>Macbook</h3>
    </div>
    <div className="container">
      <div className="card">
      <img width="90%" height="240px" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=680&amp;hei=528&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1664576115052" className="images"/>
      <div className="title">
        <h4>Macbook Air M1</h4>
        <h4>Narxi: 1000$ dan</h4>
      </div>
      </div> 
      <div className="card">
      <img width="90%" height="240px" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202206?wid=680&amp;hei=528&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1653499620093" className="images"/>
      <div className="title">
        <h4>Macbook Air M2</h4>
        <h4>Narxi: 1300$ dan</h4>
      </div>
      </div> 
      <div className="card">
      <img width="90%" height="240px" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202206?wid=680&amp;hei=528&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1665082744007" className="images"/>
      <div className="title">
        <h4>Macbook Pro M2</h4>
        <h4>Narxi: 1350$ dan</h4>
      </div>
      </div> 
      <div className="card">
      <img width="90%" height="240px" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-14-16-202206?wid=680&amp;hei=528&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1653498040386" className="images"/>
      <div className="title">
        <h4>Macbook Pro M1 Pro</h4>
        <h4>Narxi: 2000$ dan</h4>
      </div>
      </div> 
      <div className="card">
      <img width="90%" height="240px" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=680&amp;hei=528&amp;fmt=jpeg&amp;qlt=90&amp;.v=1625868688000" className="images"/>
      <div className="title">
        <h4>Imac 24 inch</h4>
        <h4>Narxi: 1700$ dan</h4>
      </div>
      </div> 
    </div>
    </>
  )
}
