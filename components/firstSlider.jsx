import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

import I from '../img/images'

import Slider from "react-slick";

import style from '../styles/main.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const firstSliderData = [
	{
		slideId: 1,
		slideTitle: 'Travel In Japan: The True Experience',
		slideText: 'When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.',
		sliderBgColor: '#FFBD9E',
	},
	{
		slideId: 2,
		slideTitle: 'Helping Wild Turtles To Travel In Japan',
		slideText: 'The scale of the challenges facing our planet can seem daunting, but we can all do something. Challenges facing our planet can seem daunting, but we can all do something.',
		sliderBgColor: '#FFADAD',
	},
	{
		slideId: 3,
		slideTitle: 'Threats of Modern Indusrial World ',
		slideText: 'The scale of the challenges facing our planet can seem daunting, but we can all do something. Easy to asso- ciate it with a geometric patterned wallpaper.',
		sliderBgColor: '#CBCBFF',
	},
];

export const FirstSlider = () => {
	const [sliderData, setState] = useState([])
	const [currentPosition, setCurrentPosition] = useState(1)

	const sliderRef = useRef(null)

	const settings = {
		dots: false,
		infinite: false,
		draggable: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 600,
		afterChange: current => setCurrentPosition(current + 1),
		responsive: [{
			breakpoint: 768,
			settings: {
				draggable: true,
				infinite: true,
			}
		}]

	};
	const isFirstSlide = currentPosition === 1
	const isLastSlide = sliderData && currentPosition === sliderData.length
	const isOnlyOneSlide = sliderData && sliderData.length > 1

	// const articleData = async () => {
	// }

	if (sliderData.length === 0) {
		setState(firstSliderData)
		// const blog = await api.blog.getBlog();
		// if (blog) {
		// 	setState(withoutCurrent)
		// }
	}

	// if (sliderData) {
	// 	if (sliderData.length === 0) {
	// 		return <></>
	// 	}
	// }

	return (
		<>
			<section className={style.firstSlider}>

				<div className={style.firstSlider_block}>
					{isOnlyOneSlide &&
						<>
							<button
								className={`${style.slider_controls_left} ${isFirstSlide && style.slider_controls_disable}`}
								onClick={() => { (sliderRef.current).slickPrev(); }}>
								<Image src={I.sliderArrow} width={24} height={44} priority />
							</button>
							<button
								className={`${style.slider_controls_right} ${isLastSlide && style.slider_controls_disable}`}
								onClick={() => { (sliderRef.current).slickNext(); }}>
								<Image src={I.sliderArrow} width={24} height={44} priority />
							</button>
						</>
					}
					<Slider
						ref={sliderRef}
						{...settings}>
						{sliderData &&
							sliderData.map((c, id) => {
								return (
									<div key={id} >
										<div className={style.firstSlider_item} style={{ backgroundColor: `${c.sliderBgColor}` }} >
											<div className={style.firstSlider_item_col}>
												<h2 className={style.firstSlider_item_col_title}>
													{c.slideTitle}
												</h2>
												<p className={style.firstSlider_item_col_text}>
													{c.slideText}
												</p>
											</div>
											<div className={style.firstSlider_item_img_block}>
												<Image src={I.firstSliderRectangle} className={style.firstSlider_item_img} priority />
											</div>
										</div>
									</div>
								)
							})}
					</Slider>

					<div className={style.firstSlider_dots}>
						<div className={style.firstSlider_dots_row}>
							{sliderData.map((c, id) => {
								const isActive = id === currentPosition - 1
								return (
									<button type='button'
										onClick={() => {
											(sliderRef.current).slickGoTo(id, false)
										}}
										className={isActive && style.firstSlider_dots_active} key={id} >
									</button>
								)
							})}
						</div>
					</div>
				</div>
			</section >
		</>
	)
}

