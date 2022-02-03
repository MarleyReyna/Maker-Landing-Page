import React from 'react';
import './Main.scss';
import mouse from './Images/icon-scroll.svg';
import InfoList from './InfoList';
import check from './Images/icon-check.svg';
import free from './Images/icon-free.svg';
import paid from './Images/icon-paid.svg'

const Main = () => {

    const freePlan = ['Unlimited products', 
    'Basic Analytics', 
    'Limited marketplace exposure', 
    '10% fee pre transaction'
]

    const paidPlan = [
        'Custom domain',
        'Advanced analytics and reports',
        'High marketplace visibility',
        '5% fee per transaction'
    ]

    return (
        <main>
            <section className='hero'>
                <div className='left-ill' />
                <div className='text-div'>
                    <h1>
                        Get paid for the work
                        you <span>love</span> to do.
                    </h1>
                    <p>
                        The 9-5 grind is so last century. We 
                        believe in living life on your own 
                        terms. Whether you’re looking to escape 
                        the rat race or set up a side hustle, 
                        we’ve got you covered.
                    </p>
                    <img className='mouse' src={mouse} alt=''/>
                </div>
                <div className='right-ill'/>
            </section>
            <section className='information-list'>
                <ul>
                    {InfoList.map((item, index) =>{
                        return(
                            <li key={index} 
                            className={item.class}> 
                                <div className='img-box'>
                                    <img src={item.picture} alt=''/>
                                </div>
                                <div className='text'>
                                    <h2>{item.title}</h2>
                                    <p>{item.para}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className='pricing'>
                <h3>Our pricing plans</h3>
                <p className='make-money'>
                    We only make money 
                    when our creators make money. 
                    Our plans are always affordable, 
                    and it’s completely free to 
                    get started.
                </p>
                <div className='plans'>
                    <div className='free'>
                        <img src={free} alt='' 
                        className='free-image'/>
                        <h4>Dip your toe</h4>
                        <p>
                            Just getting started? No 
                            problem at all! Our free 
                            plan will take you a long way.
                        </p>
                        <h5>Free</h5>
                        <ul>
                            {freePlan.map((item, index) =>{
                                return(
                                    <li key={index} >
                                        <img src={check} alt=''/>
                                        <p>{item}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='paid'>
                        <img src={paid} alt=''
                        className='paid-image'/>
                        <h4>Dive right in</h4>
                        <p>
                            Ready for the big time? 
                            Our paid plan will help 
                            you take your business to 
                            the next level.
                        </p>
                        <h5>$25.00 <span>/month</span></h5>
                        <ul>
                            {paidPlan.map((item, index) =>{
                                return(
                                    <li key={index} >
                                        <img src={check} alt=''/>
                                        <p>{item}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default Main;