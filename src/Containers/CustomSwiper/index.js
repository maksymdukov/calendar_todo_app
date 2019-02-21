import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from "./redux";
import './style.css';
import Swiper from 'react-id-swiper';
import './swiper.css';
import moment from '../../utils/moment';
import {getSlides} from "../../utils/calendar";
import Loading from "../../Components/Loading";

class CustomSwiper extends Component {
    constructor(props){
        super(props);
        this.DOMswiper = React.createRef();
        this.swiper = null;

        this.state = {
            loading: true,
            slides: [],
            index: 15
        }

    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const ind = this.DOMswiper.current.swiper.activeIndex;
        if (this.state.slides === nextState.slides) {
            return false;
        } else {
            console.log("shouldUPDATE!!!!");
            return true;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.DOMswiper.current.swiper.activeIndex = 15;
        this.DOMswiper.current.swiper.update();
    }

    componentDidMount() {
        const {activeDate, activeMode} = this.props;
        setTimeout(()=> {
            this.setState({
                slides: getSlides( moment(activeDate) , activeMode ),
                loading: false
            });
        },0);
        const swiper = this.DOMswiper.current.swiper;
        this.props.setHandlers( ()=>{
            swiper.slideNext();
        }, ()=>{
            swiper.slidePrev();
        } )
        swiper.activeIndex = 15;
    }

    render() {
        const {activeDate, activeMode, handlePlus, handleMinus} = this.props;
        const _self = this;
        const params = {
            effect: 'coverflow',
            grabCursor: true,
            // centeredSlides: true,
            slidesPerView: 1,
            coverflowEffect: {
                rotate: 150,
                stretch: 0,
                depth: -50,
                modifier: 1,
                slideShadows: true,
            },
            direction: 'vertical',
            height: 365,
            width: 300,
            speed: 800,
            spaceBetween: 30,
            initialSlide: 15,
            on: {
                slideChange: function () {
                    console.log(this.activeIndex);
                    if (this.activeIndex > _self.state.index) {
                        handlePlus(activeMode);
                    } else if (this.activeIndex < _self.state.index) {
                        handleMinus(activeMode);
                    }
                    _self.setState({index:this.activeIndex});
                },
                transitionEnd: function () {
                    const {activeDate, activeMode} = _self.props;
                    console.log("transition ended");
                    const ind = _self.state.index;
                    if (ind < 2 || ind > 28) {
                        _self.setState( {
                            slides: getSlides( moment(activeDate), activeMode),
                            index: 15
                        } );
                        this.activeIndex = 15;
                    }
                }

            },
        };

        let grd = this.state.slides.map( date =>
            <div key={+date} className='swiper-slide'>
                {this.props.render(date)}
            </div>
        );
        return  (
                <Swiper ref={this.DOMswiper}
                        {...params}
                >
                    {this.state.loading ? <div className='loading-wrapper'><Loading /></div> : grd }
                </Swiper>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomSwiper);