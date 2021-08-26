import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0" style={{display: 'flex', alignItems:"center"}}>
        <Link to="/" >
          <Image
            src={require('./../../../assets/images/uajy.png')}
            alt="Open"
            width={45}
            height={45} /> 
        </Link>
        <p style={{margin:'0 10px', fontSize:'26px'}}>UAJY</p>
      </h1>
    </div>
  );
}

export default Logo;