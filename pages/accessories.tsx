import Link from "next/link";

export default function accessories() {
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
        <h3>Accessories</h3>
    </div>
    
    </>
  )
}
