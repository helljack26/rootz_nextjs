import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

import I from '../img/images'
import style from '../styles/main.module.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const firstSliderData = [
	{
		slideImage: I.oceanSlide,
		slideTitle: 'Save water',
		slideText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, repellat!',
	},
	{
		slideImage: I.treesSlide,
		slideTitle: 'Plant trees',
		slideText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cupiditate cumque.',
	},
	{
		slideImage: I.windmillSlide,
		slideTitle: 'Save energy',
		slideText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eum debitis! Maxime.',
	},
	{
		slideImage: I.oceanSlide,
		slideTitle: 'Save water',
		slideText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, inventore.',
	},
	{
		slideImage: I.waterSlide,
		slideTitle: 'Avoid plastic',
		slideText: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
	},
	{
		slideImage: I.plantSlide,
		slideTitle: 'Choose organic',
		slideText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio distinctio ratione explicabo!',
	},
];

export const SecondSlider = () => {
	const [sliderData, setState] = useState([])
	const [currentPosition, setCurrentPosition] = useState(1)

	useEffect(() => {
		if (currentPosition > sliderData.length) {
			setCurrentPosition(1)
		}
		if (currentPosition === 0) {
			setCurrentPosition(sliderData.length)
		}
	}, [currentPosition]);

	const sliderRef = useRef(null)

	const maskClasses = [style.secondSlider_imageBg_1, style.secondSlider_imageBg_2, style.secondSlider_imageBg_3, style.secondSlider_imageBg_4, style.secondSlider_imageBg_5, style.secondSlider_imageBg_3, style.secondSlider_imageBg_2, style.secondSlider_imageBg_1, style.secondSlider_imageBg_5, style.secondSlider_imageBg_4]

	const settings = {
		dots: false,
		infinite: true,
		draggable: false,
		arrows: false,
		centerMode: true,
		centerPadding: "120px",
		className: "center",
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 600,
		afterChange: current => setCurrentPosition(current + 1)
	};

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
			<section className={style.secondSlider}>
				<div className={style.secondSlider_block}>

					<Slider
						ref={sliderRef}
						{...settings}>
						{sliderData &&
							sliderData.map((c, id) => {
								const isCenter = currentPosition === id + 1

								return (
									<div key={id}>
										<div className={style.secondSlider_item} style={{ backgroundColor: `${c.sliderBgColor}` }} >
											<div className={style.secondSlider_centeredBg}
												style={{ transform: isCenter ? 'scale(1.15) scaleX(0.95)' : 'scale(0.1)' }}>
												<Image src={I.centeredBgSlide} />
											</div>

											<div className={`${maskClasses[id]} ${style.shiftCentered}`}
												style={{
													transform: !isCenter ? 'scale(1.1) translate(0px, 0px)' : 'scale(0.7) translate(-140px, -140px)',
													filter: isCenter ? 'brightness(1)' : 'brightness(0.7)',

												}}>
												<Image src={c.slideImage} layout='fill' />
											</div>

											<div className={style.secondSlider_item_col}>
												<h2 className={style.secondSlider_item_col_title}
													style={{ color: !isCenter ? 'white' : '#1E1A20' }}>
													{c.slideTitle}
												</h2>
												<p className={style.secondSlider_item_col_text}
													style={{ opacity: isCenter ? 1 : 0, }}	>
													{c.slideText}
												</p>
											</div>
										</div>
									</div>
								)
							})}
					</Slider>

				</div>

				{isOnlyOneSlide &&
					<div className={style.secondSlider_controls}>
						<button
							className={style.slider_controls_left}
							onClick={() => { (sliderRef.current).slickPrev(); }}>
							<Image src={I.sliderArrow} width={9} height={16} />
						</button>

						<div className={style.secondSlider_position}>
							<span>{currentPosition}</span><span>/ {sliderData.length}</span>
						</div>

						<button
							className={style.slider_controls_right}
							onClick={() => { (sliderRef.current).slickNext(); }}>
							<Image src={I.sliderArrow} width={9} height={16} />
						</button>
					</div>
				}
			</section >
		</>
	)
}

