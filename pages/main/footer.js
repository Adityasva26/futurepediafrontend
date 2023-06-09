import Link from "next/link";

function Footer() {
    return ( 
        <footer>
		<div class="top-footer">
			<div class="container">
				<div class="row">
					<div class="col-md-5">
						<div class="footer-logo">
							<Link href="/">
								<img src="../img/Logo.png"/>
							</Link>
						</div>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<div class="social-icon">
							<a href="https://www.facebook.com/findupai">
								<i class="fab fa-facebook-f"></i>
							</a>
							<a href="https://twitter.com/Findupai">
								<i class="fab fa-twitter"></i>
							</a>
							<a href="https://www.instagram.com/findupai/">
								<i class="fab fa-instagram"></i>
							</a>
							<a href="https://www.linkedin.com/company/findup-ai/">
								<i class="fab fa-linkedin-in"></i>
							</a>
						</div>
					</div>
					<div class="col-md-3">
						<div class="links">
							<h3>Quick Links</h3>
							<ul>
								<li>
									<a href="/main/sponsor" >Sponsor Us</a>
								</li>
								<li>
									<a href="/main/privacyPolicy" >Privacy Policy</a>
								</li>
								<li>
									<a href="/main/termandservice" >Terms of Services</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-md-4">
						<div class="information">
							<h3>Contact Us</h3>
							<div class="address">
								2/63 Dixon St, Haymarket NSW 2000 Australia
							</div>
							<ul>
								<li>
									<a href="#"><i class="far fa-envelope"></i> info@demo.com</a>
								</li>
								<li>
									<a href="#"><i class="fas fa-phone-alt"></i> +91 92129 92129</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="copywrite text-center pt20 pb20">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h3 class="font17 clr-white">Copyright © 2023 - Demo</h3>
					</div>
				</div>
			</div>
		</div>
	</footer>
     );
}

export default Footer;