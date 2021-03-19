import React, { useMemo } from 'react'
import PropTypes from "prop-types";
const RatingStars = () => {
        
    return (
        <div>
            
        </div>
    )
}
export default RatingStars

RatingStars.propTypes={
    count: PropTypes.number,
    rating: PropTypes.number,
    onChange: PropTypes.func,
    color: {
        filled: PropTypes.string,
        unfilled: PropTypes.string
    }
}

RatingStars.propTypes={
    count:5,
    rating:0,
    color:{
        filled: "yellowgreen",
        unfilled: "#63718E"
    }
}


