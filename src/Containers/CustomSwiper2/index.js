import React, {Component} from 'react';
import './swiper.css';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from "./redux";
import Swiper from 'swiper';
import {getInitialSlides, subtractTime, addTime} from "../../utils/calendar";

class Custom extends Component {
    constructor(props) {
        super(props);
        const {activeDate, activeMode, render} = this.props;
        const initialSlides = getInitialSlides( activeDate, activeMode);
        this.state = {
            slides: [
                render(initialSlides[0]),
                render(initialSlides[1]),
                render(initialSlides[2]),
                render(initialSlides[3]),
                render(initialSlides[4])
            ],
            virtualData: {
                slides: [],
            },
            index: 2
        };

        this.swiper = null;
    }

    componentDidMount() {
        const self = this;
        const {render, activeMode, handlePlus, handleMinus} = this.props;
        this.swiper = new Swiper('.swiper-container', {
            initialSlide: 2,
            direction: 'vertical',
            height: 365,
            width: 300,
            speed: 800,
            spaceBetween: 10,
            simulateTouch: false,
            allowTouchMove: false,
            virtual: {
                slides: self.state.slides,
                renderExternal(data) {
                    self.setState({
                        virtualData: data,
                    });
                }
            },
            on: {
                slideChange() {
                    self.setState({index:this.activeIndex});
                },
            }});
        this.props.setHandlers( ()=>{
            if (this.state.index === this.state.slides.length - 3) {
                const nextDay = addTime(self.props.activeDate, 3, activeMode);
                const nextDay2 = addTime(self.props.activeDate, 4, activeMode);
                this.swiper.virtual.appendSlide( render(nextDay) );
                this.swiper.virtual.appendSlide( render(nextDay2) );
            }
            this.swiper.slideNext();
            handlePlus(activeMode);
        }, ()=>{
            if (this.state.index === 2) {
                const prevDay = subtractTime(self.props.activeDate, 3, activeMode);
                this.swiper.virtual.prependSlide( render(prevDay) );
            }
            this.swiper.slidePrev();
            handleMinus(activeMode);
        } );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.swiper.update();
    }

    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.state.virtualData.slides.map((slide, index) => (
                        <div className="swiper-slide"
                             key={index}
                             style={{top: `${this.state.virtualData.offset}px`}}
                        >{slide}</div>
                    ))}
                </div>
            </div>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Custom);