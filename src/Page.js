import React from "react";
import { useState } from 'react';
import './App.css';

// images without database / firebase

const images = [
    "https://images.pexels.com/photos/60130/pexels-photo-60130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3074526/pexels-photo-3074526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2908852/pexels-photo-2908852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13884371/pexels-photo-13884371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10620753/pexels-photo-10620753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

export default function App() {
    const [current, setCurrent] = useState(0);

    function next() {
        setCurrent(current === images.length - 1 ? 0 : current +1);
    }

    function prev() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    return (
        <div className="wrapper">
        <h2>Image Slider</h2>
        <div className="slider">
        <div className="leftArr" onClick={prev}> ←  </div>
        <div className="rightArr" onClick={next}> →  </div>
        
        {images.map(
            (image, index) =>
            current === index && (
                <div key={image} className="slide">
                    <img src={image} alt="zdjęcia" />
                </div>
            )
        )}
        </div>




        </div>



    )
}





















