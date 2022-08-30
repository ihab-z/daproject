import React from 'react'
import './Thumbnail.css'
import ImgAsset from '../public'
export default function Thumbnail () {
	return (
		<div className='Thumbnail_Thumbnail'>
			<img className='coverimage1' src = {ImgAsset.Thumbnail_coverimage1} />
		</div>
	)
}