import "./Card.scss";
import { CardProps } from "../../models/types";

import ilsLogo from "../../assets/images/ilsLogo.svg";

const Card: React.FC<CardProps> = ({ title, image, subtitle, description, foodIcons, price, className, rating }) => {
  return (
    <div className={`card ${className || ""}`}>
      <div className='image-container'>
        <img src={image} alt={title} className='card-image' />
      </div>
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        <div className='description-icon-price'>
          <div className='description-icon'>
            {subtitle && <h4 className='card-subtitle'>{subtitle}</h4>}
            {description && <p className='card-description'>{description}</p>}
            <div className='food-icons'>
              {foodIcons && foodIcons.map((icon, index) => <img key={index} src={icon} alt='Food Icon' className='food-icon' />)}
            </div>
          </div>
          {rating && <img src={rating} alt='Rating Stars' className='rating-image' />}
          {price && (
            <div className='card-price'>
              <div className='line'></div>
              <div className='value-logo-container'>
                <img src={ilsLogo} alt='ILS' className='ils-icon' />
                <span className='price-value'>{price} </span>
              </div>
              <div className='line'></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
