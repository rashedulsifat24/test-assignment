import React from 'react';

const latesnews = [ {} ];
const LatesNews = () => {
	return (
		<div className="mt-3 mb-3 p-5">
			<div className="mb-5">
				<h1 style={{ color: '#FAE20D' }}>LATEST NEWS</h1>
				<p>
				It is imperative that everyone maximises the time they spend exercising to help guarantee optimal results.
				</p>
			</div>

			<div class="row row-cols-1 row-cols-md-3 g-3">
				<div className="col">
					<div className="card" style={{ backgroundColor: '#EDEDED' }}>
						<img
							src="https://demo.goodlayers.com/zyth/gym/wp-content/uploads/sites/2/2021/09/image-from-rawpixel-id-2107324-jpeg-1280x580.jpg"
							alt=""
						/>
						<div className="card-body">
							<span>October 19, 2021</span>
							<div className="card-title">
								<h5>Reasons Why You Need a Personal Trainer</h5>
							</div>
							<p>
							Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
							</p>
						</div>
					</div>
				</div>

				<div className="col">
					<div className="card" style={{ backgroundColor: '#EDEDED' }}>
						<img
							src="https://demo.goodlayers.com/zyth/gym/wp-content/uploads/sites/2/2021/09/image-from-rawpixel-id-2111610-jpeg-1280x580.jpg"
							alt=""
						/>
						<div className="card-body">
							<span>October 19, 2021</span>
							<div className="card-title">
								<h5>Workout Classes To Help You Build Core Strength</h5>
							</div>
							<p>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
							</p>
						</div>
					</div>
				</div>

				<div className="col">
					<div className="card" style={{ backgroundColor: '#EDEDED' }}>
						<img src="https://demo.goodlayers.com/zyth/gym/wp-content/uploads/sites/2/2021/09/image-from-rawpixel-id-1222519-jpeg-1280x580.jpg" alt="" />
						<div className="card-body">
							<span>October 19, 2021</span>
							<div className="card-title">
								<h5>How To Get Back Into Exercise After Injury</h5>
							</div>
							<p>
							Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatesNews;
