import React from 'react'
export default function Home() {
	return (
		<div id="home" class="header">
			<div class="container">
				<div class="banner-info">
					<div class="col-md-7 header-right">
						<h1>Hi !</h1>
						<h6>I am a</h6>
						<h6>Front-End Developer(React Js)</h6>
						{/* <p className='text-muted'>(MongoDB, Express Js, React Js, Node Js)</p> */}
						<ul class="address">

							<li>
								<ul class="address-text">
									<li><b>NAME</b></li>
									<li>MD. Azmir Hossen</li>
								</ul>
							</li>
							<li>
								<ul class="address-text">
									<li><b>PHONE </b></li>
									<li>+88 01627-297942</li>
								</ul>
							</li>
							<li>
								<ul class="address-text">
									<li><b>ADDRESS </b></li>
									<li>H-39,Road-17A,Sector-12,Uttara,Dhaka-1230</li>
								</ul>
							</li>
							<li>
								<ul class="address-text">
									<li><b>E-MAIL </b></li>
									<li><a href="mailto:m.azmir.cse@gmail.com"> m.azmir.cse@gmail.com</a></li>
								</ul>
							</li>
							<li>
								<ul class="address-text">
									<li><b>LINKEDIN</b></li>
									<li><a
										href="https://www.linkedin.com/in/ah-naeem/">https://www.linkedin.com/in/ah-naeem/</a>
									</li>
								</ul>
							</li>
							<li>
								<ul class="address-text">
									<li><b>GITHUB</b></li>
									<li><a href="https://github.com/azmir849">https://github.com/azmir849</a></li>
								</ul>
							</li>

						</ul>
					</div>
					<div class="flex-column col-md-5 header-left d-flex justify-content-center">
						<a href='https://drive.google.com/file/d/1r5Zx5EE-p8As-TkocLEC9HtEEtqBa2ML/view?usp=sharing'><button type="button" class="btn btn-warning btn-lg">Download
							Resume</button></a>
					</div>
					<div class="clearfix"> </div>

				</div>
			</div>
		</div>
	)
}