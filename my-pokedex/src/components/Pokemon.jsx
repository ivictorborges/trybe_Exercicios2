import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { pokemon } = this.props;
        const { name, type, averageWeigth, image } = pokemon;
        return (
            <div className='pokemon'>
                <div>
                    <p> {name} </p>
                    <p> {type} </p>
                    <p>
                        {`Average weight : ${averageWeigth.value} ${averageWeigth.measurementUnit}`}
                    </p>
                </div>
                <img src={image} alt={`${name} sprite`} />
            </div>
        );
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            measurementUnit: PropTypes.string,
            value: PropTypes.number,
        }),
        image: PropTypes.string,
    }).isRequired,
};

export default Pokemon;
