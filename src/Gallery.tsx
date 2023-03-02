import { GalleryProp } from "./types"

const Gallery = ({ images , setImages} : GalleryProp) => {
    return  <> <div className='images-area' >
    {images.map(item => 
    <div className='flip-card'>
    <div className='flip-card-inner'>
      <div className='flip-card-front'> 
        <img src={item} className='foundimages'/>
      </div>
      <div className='flip-card-back'>
        <p className='text-alt-info'>"info"</p>
      </div>
    </div></div>)}</div></>
}

export {Gallery}