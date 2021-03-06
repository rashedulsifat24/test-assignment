import React from 'react';
import Service from './../Service/Service';
const services = [
	{
		id: 1,
		img: 'https://kamleshyadav.com/wp/theakhada/multi-page-dark/wp-content/uploads/sites/5/2017/12/fitness__1512986871_59.95.155.42-1-360x230.jpg',
		name: 'Tone Muscle',
		des: 'Muscle tone can be seen when muscles in state of slight tension and they are ready for action.',
	},

	{
		id: 2,
		img: 'https://kamleshyadav.com/wp/theakhada/multi-page-dark/wp-content/uploads/sites/5/2017/12/bigstock-Portrait-of-a-muscular-couple-96500915-840x560-1-360x230.jpg',
		name: 'Shoulder Press',
		des: 'The shoulder press is one of the best exercises for strengthening your shoulders and upper back',
	},

	{
		id: 3,
		img: 'https://kamleshyadav.com/wp/theakhada/multi-page-dark/wp-content/uploads/sites/5/2017/12/glr04-1-360x230.jpg',
		name: 'Running',
		des:
			'It is a form of both anaerobic exercise and aerobic exercise',
	},

	{
		id: 4,
		img: 'https://kamleshyadav.com/wp/theakhada/multi-page-dark/wp-content/uploads/sites/5/2017/12/v_bg-1-360x230.jpg',
		name: 'Balance & Flexibility',
		des: 'Activities that lengthen and stretch muscles can help you prevent injuries, back pain, and balance problems.',
	},

	{
		id: 5,
		img: 'https://kamleshyadav.com/wp/theakhada/multi-page-dark/wp-content/uploads/sites/5/2017/12/glr02-1-360x230.jpg',
		name: 'Cardio & Intervals',
		des: 'HIIT improves cardiorespiratory fitness nearly twice as much as longer stretches of moderate-intensity running ',
	},

	{
		id: 6,
		img: 'https://i.ibb.co/J2PyykP/spinaltest-s6.png',
		name: 'Strength Training',
		des:
			'https://kamleshyadav.com/wp/theakhada/multi-page-dark/wp-content/uploads/sites/5/2017/12/gym123-1-360x230.jpg',
	}
];
const Services = () => {
	return (
		<div className="mx-3 mb-4">
            <h1 className="mt-5 mb-5 bold" style={{color:"#153D8F"}}>Our Services</h1>
			<div class="row row-cols-1 row-cols-md-3 g-3">
				{services.map((service) => <Service
                 key={service.id}
                  service={service}
                   />)}
			</div>
		</div>
	);
};

export default Services;
