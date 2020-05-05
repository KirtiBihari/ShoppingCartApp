import React from 'react';
// import InputRange from 'react-input-range';
import { RangeSlider } from 'reactrangeslider';
// import Slider from 'range-sliders';
import './Filters.scss';

const filters = (props) => {
    const styles = {
        code: {
          margin: '10px 0',
          textAlign: 'left',
        },
        info: {
          fontStyle: 'italic',
          color: '#3131d4',
          fontSize: 15,
          margin: '5px 0',
        },
        sliderWrapper: {
          width: '100%',
        },
        slider: {
          height: 40,
        },
        trackStyle: {
          height: 5,
          border: '2px solid #b6b4b4',
          backgroundColor: '#b6b4b4',
          top: 11,
        },
        highlightedTrackStyle: {
          height: 2,
          border: '2px solid #2874f0',
          backgroundColor: '#2874f0',
          top: 11,
        },
        handleStyle: {
          height: 24,
          width: 24,
          border: '2px solid #978f8f',
          backgroundColor: '#fff',
        },
        hoveredHandleStyle: {
          backgroundColor: '#fff',
          border: '2px solid #978f8f'
        },
        activeHandleStyle: {
            backgroundColor: '#fff',
            border: '2px solid #978f8f'
        },
        focusedHandleStyle: {
            backgroundColor: '#fff',
            border: '2px solid #978f8f'
        },
      };

    return (
        <div className='filtersContainer'>
            <label className='heading'>Filters</label>
            <div className='valueContainer'>
                <span className='valueText text-left'>&#8377;{props.priceRange.start}</span>
                <span className='valueText text-right'>&#8377;{props.priceRange.end}</span>
            </div>
            <div style={styles.sliderWrapper}>
                <RangeSlider
                    step={2000}
                    value={props.priceRange}
                    min={0}
                    max={100000}
                    onChange={(value) => props.updatePriceRange(value)}
                    wrapperStyle={styles.slider}
                    trackStyle={styles.trackStyle}
                    highlightedTrackStyle={styles.highlightedTrackStyle}
                    handleStyle={styles.handleStyle}
                    hoveredHandleStyle={styles.hoveredHandleStyle}
                    focusedHandleStyle={styles.focusedHandleStyle}
                    activeHandleStyle={styles.activeHandleStyle}
                />
            </div>
            <div className='buttonContainer'>
                <button onClick={() => props.applyFilter()}>Apply</button>
            </div>
        </div>
    );
}

export default filters;