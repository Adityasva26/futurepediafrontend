import Header from "../main/header";
import Footer from "../main/footer";
import { useRouter } from 'next/router';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import moment from "moment/moment";
import { toast } from 'react-toastify';
import { URL } from '../../utility/api';
import ReactHtmlParser from 'react-html-parser';
function Discover() {

    const router = useRouter()
	const id = router.query.id
	const [data,setdata]=useState({})
	const [userData, setuserData] = useState({});
	const [share, setShare] = useState("share-btn");
     useEffect(()=>{getByid(JSON.parse(window.localStorage.getItem('data'))?.id)
	 setuserData(JSON.parse(window.localStorage.getItem('data')))
	},[])
	 async function getByid (e) {
		axios.post(`${URL}discover`,{user_id:e})
		.then(response => {
			setdata(response.data.data)
		})
		.catch(error => {
			console.log(error);
		});
	 }

	 const favourite = (e,h,g) => {
     
       
        if (g == undefined) {
            toast.error('Login before adding product to Favourite!');
        }else{
           
            axios.post(`${URL}Favourites`, { user_id:g,
                product_id:e,
                heart_status:h,
                type:"product"})
            .then(response => {
                getByid(g)
                toast.success(response.data.message)
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
	const ShareButton=()=>{
		if(share=="share-btn"){
		 setShare("share-btn socialopen")
		}
		else{
		 setShare("share-btn")
		}
	 }
    return ( <>
    <Header/>
    <div class="breadcums pt120 pb30">
		<div class="container">
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><Link href="/">Home</Link></li>
					<li class="breadcrumb-item"><a href="#">Discover</a></li>
					<li class="breadcrumb-item active" aria-current="page">{data.title}</li>
				</ol>
			</nav>
		</div>
	</div>

	<div class="details-informations  mb40">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<div class="detail-img">
						<a href="#">
							<img src={data.image} />
							{/* <div class="visit-site">
								<h5>Visit Website</h5>
							</div> */}
						</a>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="top-details">
						<div class="left">
							<h3>{data.title}</h3>
							<a href={data.url} class="theme-btn">Visit <i class="fas fa-link"></i></a>
						</div>
						<div class="right">
							{data.heart_status==1?<a href="#" onClick={() => favourite(data?.id,0,userData?.id,"product")} class="like-btn"><i class="fas fa-thumbs-up"></i>37</a>:<a href="#" onClick={() => favourite(data?.id,1,userData?.id,"product")} class="like-btn"><i class="far fa-thumbs-up"></i> 37</a>}
							<div class={share}>
								<div class="shr-icon" onClick={()=>ShareButton()}>
									<i class="fas fa-share-alt"></i>
								</div>
								<div class="social">
									<a href="#">
										<i class="fab fa-facebook-f"></i>
									</a>
									<a href="#">
										<i class="fab fa-twitter"></i>
									</a>
									<a href="#">
										<i class="fab fa-instagram"></i>
									</a>
									<a href="#">
										<i class="fab fa-linkedin-in"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="detail-content">
						<p>{data.short_discription}</p>
						<ul>
							<li>
								<i class="fas fa-check-circle"></i> This tool is verified because it is either an established company, has good social media presence or a distinctive use case
							</li>
							<li>
								<i class="fas fa-calendar"></i> Added on {moment(data.created_at).format('MMMM d, YYYY')}
							</li>
						</ul>
						<div class="paid-text">
							<div class="txt">
								<i class="fas fa-dollar-sign"></i> {data.pricing_category}
							</div>
							<p>starts from ${data.price}/mo</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="review-text mb40">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<div class="dets">
						<div class="tool-name">
						{ReactHtmlParser(data?.data?.discription)}
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="related-tages">
						<h4 class="clr-white font20">Browse AI Tools Similar to AI Studios</h4>
						<ul>
							<li>
								<a href="#">Browse 47 AI video generator tools.</a>
							</li>
							<li>
								<a href="#">Browse 43 AI video editing tools.</a>
							</li>
							<li>
								<a href="#">Browse 11 AI personalized videos tools.</a>
							</li>
						</ul>
					</div>
				</div>
			</div> 
		</div>
	</div>

	<div class="activity-sec related mt50">
		<div class="container">
			<h4 class="font30 medium clr-white mb20">Alternative AI Tools for AI Studios</h4>
			<div class="row">
				<div class="col-lg-4">
					<div class="main-box">
						<div class="img">
							<a href="#">
								<img src="../img/img-1.jpg" />
							</a>
						</div>
						<div class="content">
							<div class="top-text">
								<h3><a href="#">Aidaptive <span><i class="fas fa-check-circle"></i></span></a></h3>
								<div class="likes">
									<i class="fas fa-thumbs-up"></i> 37
								</div>
							</div>
							<div class="detail">
								<p>Predictive personalization engines fore Commerce and Hospitality</p>
							</div>
							<div class="trial-btn">
								<a href="#"><i class="fas fa-lock"></i> Free Trial</a>
							</div>
							<div class="tags">
								<a href="#">#Copywriting</a>
								<a href="#">#e-commerce</a>
							</div>
							<div class="save-btns">
								<a href="#"><img src="../img/web.png" /></a>
								<a href="#"><img src="../img/heart.png" /></a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="main-box">
						<div class="img">
							<a href="#">
								<img src="../img/img-2.jpg" />
							</a>
						</div>
						<div class="content">
							<div class="top-text">
								<h3><a href="#">Cohesive <span><i class="fas fa-check-circle"></i></span></a></h3>
								<div class="likes">
									<i class="fas fa-thumbs-up"></i> 37
								</div>
							</div>
							<div class="detail">
								<p>Predictive personalization engines fore Commerce and Hospitality</p>
							</div>
							<div class="trial-btn">
								<a href="#"><i class="fas fa-lock"></i> Free Trial</a>
							</div>
							<div class="tags">
								<a href="#">#Copywriting</a>
								<a href="#">#e-commerce</a>
							</div>
							<div class="save-btns">
								<a href="#"><img src="../img/web.png" /></a>
								<a href="#"><img src="../img/heart.png" /></a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="main-box">
						<div class="img">
							<a href="#">
								<img src="../img/img-3.jpg" />
							</a>
						</div>
						<div class="content">
							<div class="top-text">
								<h3><a href="#">IngestAI <span><i class="fas fa-check-circle"></i></span></a></h3>
								<div class="likes">
									<i class="fas fa-thumbs-up"></i> 37
								</div>
							</div>
							<div class="detail">
								<p>Predictive personalization engines fore Commerce and Hospitality</p>
							</div>
							<div class="trial-btn">
								<a href="#"><i class="fas fa-lock"></i> Free Trial</a>
							</div>
							<div class="tags">
								<a href="#">#Copywriting</a>
								<a href="#">#e-commerce</a>
							</div>
							<div class="save-btns">
								<a href="#"><img src="../img/web.png" /></a>
								<a href="#"><img src="../img/heart.png" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <Footer/>
    </> );
}

export default Discover;